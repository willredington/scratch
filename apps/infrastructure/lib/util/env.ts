import { z } from "zod";

export enum AppEnvironmentVariable {
  OPENAI_API_KEY = "OPENAI_API_KEY",
  TASK_TABLE_NAME = "TASK_TABLE_NAME",
}

export function getEnvironmentVariable(envVar: AppEnvironmentVariable) {
  try {
    return z.string().parse(process.env[envVar]);
  } catch {
    throw new Error(`Missing environment variable: ${envVar}`);
  }
}
