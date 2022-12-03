import { useState } from "react";
import { Formik, Form } from "formik";
import { CreateAccountSchema } from "./yup-schema";
import Layout from "../common/layout/layout";
import FormWrapper from "./components/form-wrapper";
import MainTitle from "../common/titles/main-title";
import FormControl from "../common/form/form-control";
import ShowPassword from "./components/show-password";
import PageNavigationLink from "./components/page-navigation-link";
import ButtonSubmit from "./components/button-submit";

const CreateAccountPage = () => {
  // local state
  const [showPassword, setShowPassword] = useState(false);
  const initialValues = { email: "", password: "", firstName: "" };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={CreateAccountSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          console.log(values);
          resetForm({ values: { email: "", password: "", firstName: "" } });
        }}
      >
        <FormWrapper>
          <MainTitle>Create your account</MainTitle>
          <Form className="flex flex-col gap-6">
            {/* NAME FIELD */}
            <FormControl
              label="Your name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter name"
            />
            {/* EMAIL FIELD */}
            <FormControl
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {/* PASSWORD FIELD */}
            <div className="relative">
              <FormControl
                label="Password"
                id="password"
                name="password"
                type={!showPassword ? "password" : "text"}
                placeholder="Enter password"
              />
              <ShowPassword
                showPassword={showPassword}
                onClickHandler={() => {
                  setShowPassword(!showPassword);
                }}
              />
            </div>
            <PageNavigationLink
              title="Already have an account?"
              linkTo="/auth/login"
              linkTitle="Login now."
            />
            <ButtonSubmit />
          </Form>
        </FormWrapper>
      </Formik>
    </Layout>
  );
};

export default CreateAccountPage;
