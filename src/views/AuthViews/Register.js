import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { createUser } from "../../redux/actions/AuthActions";
import { registerSchema } from "../validation/AuthValidation";

const Register = () => {
  const dispatch = useDispatch();
  const OnSubmit = (values) => {
    dispatch(createUser(values));
  };
  return (
    <>
      <h2> Register </h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={registerSchema}
        onSubmit={OnSubmit}
      >
        <Form>
          <Field id="name" name="name" placeholder="Name" />
          <label htmlFor="name"> Name </label>
          <br></br>

          <Field
            id="email"
            name="email"
            placeholder="example@gmail.com"
            type="email"
          />
          <label htmlFor="email">Email</label>
          <br></br>

          <Field
            id="password"
            name="password"
            placeholder="Password"
            type="password"
          />
          <label htmlFor="password"> Password </label>
          <br></br>

          <button type="submit"> Register </button>
        </Form>
      </Formik>
    </>
  );
};

export default Register;
