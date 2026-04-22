import { NextResponse } from "next/server";
import { formSchema } from "@/lib/forms/schema";
import { handleFormSubmission } from "@/lib/forms/actions";

export async function POST(request: Request) {
  const body = await request.json();
  const parsed = formSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Validation failed" }, { status: 400 });
  }
  const result = await handleFormSubmission(parsed.data);
  return NextResponse.json(result);
}
