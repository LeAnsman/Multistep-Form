import FormWrapper from "./FormWrapper";

type AccountData = {
  email: string;
  password: string;
};

type AccountDataProps = AccountData & {
  updateFields: (fields: Partial<AccountData>) => void;
};

export default function AccountForm({
  email,
  password,
  updateFields,
}: AccountDataProps) {
  return (
    <FormWrapper title="Account Details">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => updateFields({ email: e.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        required
        value={password}
        onChange={(e) => updateFields({ password: e.target.value })}
      />
    </FormWrapper>
  );
}
