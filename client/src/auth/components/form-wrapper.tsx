import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const FormWrapper = ({ children }: Props) => {
  return (
    <section className="w-full h-full bg-slate-900 text-white flex flex-col justify-center items-center">
      <section className="bg-slate-800 rounded-md shadow-xl w-5/6 max-w-xl mx-auto p-8 text-sm">
        {children}
      </section>
    </section>
  );
};

export default FormWrapper;
