import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export default function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2 className="form__title">{title}</h2>
      <div className="form__container">{children}</div>
    </>
  );
}
