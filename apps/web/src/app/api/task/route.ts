import { TaskSchema } from "@repo/common";
import { NextResponse } from "next/server";

const ExpectedJsonBody = TaskSchema.omit({
  id: true,
  userId: true,
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parseResult = ExpectedJsonBody.safeParse(body);

    if (!parseResult.success) {
      console.error(parseResult.error.errors);
      return NextResponse.json(
        { success: false, errors: parseResult.error.errors },
        { status: 400 }
      );
    }

    const task = parseResult.data;

    return NextResponse.json({ success: true, data: task });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
