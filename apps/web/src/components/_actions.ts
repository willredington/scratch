"use server";

export async function addTaskServerAction(formData: FormData) {
  for (const [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
  return { success: true };
}
