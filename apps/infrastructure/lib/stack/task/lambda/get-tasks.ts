import { APIGatewayProxyWithCognitoAuthorizerHandler } from "aws-lambda";
import { z } from "zod";
import { getTasksInRange } from "../../../domain/task";
import {
  AppEnvironmentVariable,
  getEnvironmentVariable,
} from "../../../util/env";

const ExpectedQueryParams = z.object({
  startDateTime: z.string(),
  endDateTime: z.string(),
});

export const handler: APIGatewayProxyWithCognitoAuthorizerHandler = async (
  event
) => {
  console.log("event", JSON.stringify(event, null, 2));

  if (!event.queryStringParameters) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Missing query parameters",
      }),
    };
  }

  const queryParamsResult = ExpectedQueryParams.safeParse(
    event.queryStringParameters
  );

  if (!queryParamsResult.success) {
    console.error("Invalid query parameters", queryParamsResult.error);
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Invalid query parameters",
      }),
    };
  }

  const { startDateTime, endDateTime } = queryParamsResult.data;

  try {
    const tasksInRange = await getTasksInRange({
      userId: "user1",
      startDateTime,
      endDateTime,
      tableName: getEnvironmentVariable(AppEnvironmentVariable.TASK_TABLE_NAME),
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        tasksInRange,
      }),
    };
  } catch (error) {
    console.error("Error getting tasks", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: "Error getting tasks",
      }),
    };
  }
};
