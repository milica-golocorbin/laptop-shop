import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase/setup";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { LoginSchema } from "./validation/yup-schema";
// COMPONENTS
import Main from "../layout/main/main";
import FormSection from "./components/form-section";
import MainTitle from "../common/titles/main-title";
import FormControl from "./components/form-control";
import PageNavigationLink from "./components/page-navigation-link";
import ButtonSubmit from "./components/button-submit";
// END OF IMPORTS

const LoginPage = () => {
  // formik
  const initialValues = { email: "", password: "" };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={LoginSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            await signInWithEmailAndPassword(
              auth,
              values.email,
              values.password
            );
          } catch (error: any) {
            console.log(error);
            toast.error(error.message);
          }
          resetForm({ values: { email: "", password: "" } });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <MainTitle>Log In</MainTitle>
          <Form className="flex flex-col gap-6">
            {/* Email field start */}
            <FormControl
              label="Email Address"
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {/* Email field end */}

            {/* Password field start */}
            <FormControl
              label="Password"
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
            />
            {/* Password field end */}
            <div className="flex flex-col gap-y-3">
              <PageNavigationLink
                title="Forgot password?"
                linkTo="/auth/forgot-password"
                linkTitle="Click here."
              />
              <PageNavigationLink
                title="Don't have an account yet?"
                linkTo="/auth/create-account"
                linkTitle="Create one now."
              />
            </div>
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default LoginPage;
