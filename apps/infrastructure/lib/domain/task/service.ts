import * as dynamodb from "@aws-sdk/client-dynamodb";
import { marshall } from "@aws-sdk/util-dynamodb";
import { Task, TaskSchema } from "@repo/common";

const client = new dynamodb.DynamoDBClient();

export async function getTasksInRange(props: {
  userId: string;
  tableName: string;
  startDateTime: string;
  endDateTime: string;
}): Promise<Task[]> {
  const command = new dynamodb.QueryCommand({
    TableName: props.tableName,
    KeyConditionExpression:
      "userId = :userId AND startDateTime BETWEEN :startDateTime AND :endDateTime",
    ExpressionAttributeValues: marshall({
      ":userId": props.userId,
      ":startDateTime": props.startDateTime,
      ":endDateTime": props.endDateTime,
    }),
  });

  const response = await client.send(command);

  return TaskSchema.array().parse(response.Items);
}

export async function createTask(props: {
  task: Task;
  tableName: string;
}): Promise<dynamodb.PutItemCommandOutput> {
  const command = new dynamodb.PutItemCommand({
    TableName: props.tableName,
    Item: marshall(props.task),
  });

  return await client.send(command);
}

export async function deleteTask(props: {
  userId: string;
  startDateTime: string;
  tableName: string;
}): Promise<dynamodb.DeleteItemCommandOutput> {
  const command = new dynamodb.DeleteItemCommand({
    TableName: props.tableName,
    Key: marshall({
      userId: props.userId,
      startDateTime: props.startDateTime,
    }),
  });

  return await client.send(command);
}
