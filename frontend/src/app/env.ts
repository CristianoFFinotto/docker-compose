import * as z from "zod";

const envVarsSchema = z.object({
  URL: z.string(),
});

export const env = envVarsSchema.parse(process.env);
