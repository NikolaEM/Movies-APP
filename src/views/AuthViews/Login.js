import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/actions/AuthActions";
import { loginSchema } from "../validation/AuthValidation";

const Login = () => {
  const dispatch = useDispatch();
  const onSubmit = (value) => {
    dispatch(loginUser(value));
  };
  return (
    <>
      <h2> Login </h2>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={loginSchema}
        onSubmit={onSubmit}
      >
        <Form>
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
          <button type="submit"> Login </button>
        </Form>
      </Formik>
    </>
  );
};

export default Login;
