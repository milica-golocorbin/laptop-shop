import { sendSignInLinkToEmail } from "firebase/auth";
import { auth } from "./firebase/setup";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { EmailVerifySchema } from "./validation/yup-schema";
// COMPONENTS
import Main from "../layout/main/main";
import FormSection from "./components/form-section";
import MainTitle from "../common/titles/main-title";
import FormControl from "./components/form-control";
import PageNavigationLink from "./components/page-navigation-link";
import ButtonSubmit from "./components/button-submit";
// END OF IMPORTS

const CreateAccountPage = () => {
  // formik
  const initialValues = { email: "" };
  // instructions to Firebase on how to construct the email link
  const actionCodeSettings = {
    url: `${import.meta.env.VITE_CREATE_ACCOUNT_REDIRECT_URL}`,
    handleCodeInApp: true,
  };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={EmailVerifySchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            await sendSignInLinkToEmail(auth, values.email, actionCodeSettings);
            toast.success(`Email sent to: ${values.email}`);
            window.localStorage.setItem("emailForSignIn", values.email);
          } catch (error: any) {
            console.log(error);
            toast.error(error.message);
          }
          resetForm({ values: { email: "" } });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <MainTitle>Create Account</MainTitle>
          <p className="text-center mb-10">
            Please enter your email address. And we'll send you a verification
            email to finish your account creation process.
          </p>
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
            <PageNavigationLink
              title="Already have an account?"
              linkTo="/auth/login"
              linkTitle="Login now."
            />
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default CreateAccountPage;
