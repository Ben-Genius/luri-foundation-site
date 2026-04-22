import { FormPayload } from "./schema";

export async function handleFormSubmission(data: FormPayload) {
  return {
    ok: true,
    message: `Stored ${data.formType} request for ${data.payload.email}`,
  };
}
