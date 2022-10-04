import { PASSWORD_REGEX } from "../../redux/constants/movieConstants";
import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(PASSWORD_REGEX),
});

export const registerSchema = Yup.object().shape({
  name: Yup.string().max(150).required(),
  email: Yup.string().email().required(),
  password: Yup.string().required().matches(PASSWORD_REGEX),
});
