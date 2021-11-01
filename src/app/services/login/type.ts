export type LoginServiceType = (
  username: FormDataEntryValue | null,
  token: FormDataEntryValue | null
) => Promise<string>
