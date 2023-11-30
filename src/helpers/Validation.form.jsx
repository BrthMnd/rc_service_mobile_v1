import * as yup from "yup";

export const SchemeLogin = yup.object().shape({
  email: yup
    .string()
    .email("Para ser valida tiene que tener ejemplo@ejemplo.com")
    .required("E-mail es requerido"),
  password: yup
    .string()
    .min(2, "Contraseña muy corta")
    .max(30, "Contraseña demasiado larga")
    .required("La contraseña es requerida."),
});
