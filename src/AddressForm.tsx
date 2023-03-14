import FormWrapper from "./FormWrapper";

type AddressData = {
  street: string;
  city: string;
  province: string;
  postalCode: string;
};

type UserFormProps = AddressData & {
  updateFields: (fields: Partial<AddressData>) => void;
};

export default function AddressForm({
  street,
  city,
  province,
  postalCode,
  updateFields,
}: UserFormProps) {
  return (
    <FormWrapper title="Address Details">
      <label htmlFor="street">Street</label>
      <input
        type="text"
        id="street"
        autoFocus
        required
        value={street}
        onChange={(e) => updateFields({ street: e.target.value })}
      />
      <label htmlFor="city">City</label>
      <input
        type="text"
        id="city"
        required
        value={city}
        onChange={(e) => updateFields({ city: e.target.value })}
      />
      <label htmlFor="province">Province</label>
      <input
        type="text"
        id="province"
        required
        value={province}
        onChange={(e) => updateFields({ province: e.target.value })}
      />
      <label htmlFor="postal_code">Postal Code</label>
      <input
        type="text"
        id="postal_code"
        required
        value={postalCode}
        onChange={(e) => updateFields({ postalCode: e.target.value })}
      />
    </FormWrapper>
  );
}
