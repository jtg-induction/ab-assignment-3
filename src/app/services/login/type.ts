export type LoginServiceType = (
  username: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => Promise<string>
