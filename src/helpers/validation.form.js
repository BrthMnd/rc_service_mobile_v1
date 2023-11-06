import * as yup from "yup";

export const ValidationScheme = yup.object().shape({
  email: yup
    .string()
    .email("tiene que tener: <>@<>.com ")
    .required("Tiene que tener un E-mail"),
  password: yup
    .string()
    .min(3, "muy corto")
    .max(30, "muy Largo")
    .required("Tiene que tener una contraseña"),
});
