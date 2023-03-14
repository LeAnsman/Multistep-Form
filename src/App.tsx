import { FormEvent, useState } from "react";
import AccountForm from "./AccountForm";
import AddressForm from "./AddressForm";
import useMultistepFrom from "./hooks/useMultistepForm";
import UserForm from "./UserForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: number;
  street: string;
  city: string;
  province: string;
  postalCode: string;
  email: string;
  password: string;
};

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: 0,
  street: "",
  city: "",
  province: "",
  postalCode: "",
  email: "",
  password: "",
};

export default function App() {
  const [data, setData] = useState(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };

  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepFrom([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful Account Creation");
  };
  return (
    <>
      <h1 className="title">Make custom Hooks with TypeScript</h1>
      <div className="app">
        <form onSubmit={handleSubmit}>
          <div className="multipage__number">
            {currentStepIndex + 1} / {steps.length}
          </div>
          {step}
          <div className="btn__container">
            {!isFirstStep && (
              <button onClick={back} type="button" className="btn">
                Back
              </button>
            )}
            <button type="submit" className="btn">
              Next
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
