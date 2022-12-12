import {
  signInWithEmailLink,
  User,
  updateProfile,
  updatePassword,
} from "firebase/auth";
import { auth } from "./firebase/setup";
import { toast } from "react-toastify";
import { Formik, Form } from "formik";
import { CreateAccountSchema } from "./validation/yup-schema";
// COMPONENTS
import Main from "../layout/main/main";
import FormSection from "./components/form-section";
import MainTitle from "../common/titles/main-title";
import FormControl from "./components/form-control";
import ButtonSubmit from "./components/button-submit";
// END OF IMPORTS

const CreateAccountCompletePage = () => {
  // formik
  const initialValues = {
    email: window.localStorage.getItem("emailForSignIn")! || "",
    password: "",
    firstName: "",
  };

  return (
    <Main>
      {/* Logic for form submission start */}
      <Formik
        initialValues={initialValues}
        validationSchema={CreateAccountSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          setSubmitting(false);
          try {
            const result = await signInWithEmailLink(
              auth,
              values.email,
              window.location.href
            );
            if (result.user.emailVerified) {
              window.localStorage.removeItem("emailForSignIn");
              let user: User = auth.currentUser!;
              updateProfile(user, { displayName: values.firstName });
              updatePassword(user, values.password);
            }
          } catch (error: any) {
            console.log(error);
            toast.error(error.message);
          }
          resetForm({ values: { email: "", password: "", firstName: "" } });
        }}
      >
        {/* Logic for form submission end */}

        <FormSection>
          <MainTitle>Create Account</MainTitle>
          <Form className="flex flex-col gap-6">
            {/* Name field start */}
            <FormControl
              label="Your name"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="Enter name"
            />
            {/* Name field end */}

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
            <ButtonSubmit />
          </Form>
        </FormSection>
      </Formik>
    </Main>
  );
};

export default CreateAccountCompletePage;
