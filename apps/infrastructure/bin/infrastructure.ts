#!/usr/bin/env node
import * as cdk from "aws-cdk-lib";
import "source-map-support/register";
import { InfrastructureStack } from "../lib/infrastructure-stack";

const app = new cdk.App();

new InfrastructureStack(app, "DevAutoTaskInfrastructureStack", {});
