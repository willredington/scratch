import * as cdk from "aws-cdk-lib";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";
import * as nodejs from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { join } from "path";
import { AppEnvironmentVariable } from "../../util/env";

const getLambdaRelativeDirPath = (lambdaName: string) => {
  return join(__dirname, "lambda", lambdaName);
};

export type TaskStackProps = cdk.NestedStackProps;

export class TaskStack extends cdk.NestedStack {
  public readonly taskTable: dynamodb.Table;
  public readonly getTasksLambda: nodejs.NodejsFunction;

  constructor(scope: Construct, id: string, props?: TaskStackProps) {
    super(scope, id, props);

    this.taskTable = new dynamodb.Table(this, "TaskTable", {
      partitionKey: {
        name: "userId",
        type: dynamodb.AttributeType.STRING,
      },
      sortKey: { name: "startDateTime", type: dynamodb.AttributeType.STRING },
    });

    this.getTasksLambda = new nodejs.NodejsFunction(this, "GetTasksLambda", {
      entry: getLambdaRelativeDirPath("get-tasks.ts"),
      timeout: cdk.Duration.seconds(10),
      environment: {
        [AppEnvironmentVariable.TASK_TABLE_NAME]: this.taskTable.tableName,
      },
    });

    this.taskTable.grantReadData(this.getTasksLambda);
  }
}
