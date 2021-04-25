import { Button, Input, Layout } from "components";
import { FormikProps, withFormik } from "formik";
import React, { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LogInProps } from "shared/types";
import { RootState } from "store";
import { logIn as logInMiddleware } from "store/auth/middlewares";
import * as Yup from "yup";
import { Card, Inputs, Title, PageTitle } from "./styles";
import { LogInIcon } from "shared/icons";

interface FormValues extends LogInProps {}

const LogIn: React.FC<FormikProps<FormValues>> = ({
  handleChange,
  values,
  errors,
  touched,
  isValid,
  dirty,
  handleBlur,
}) => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isValid && dirty) {
      const { username, password } = values;
      dispatch(logInMiddleware(username, password));
    }
  };

  const handleError = (field: "username" | "password") => {
    const hasError = touched[field] && errors[field];
    return hasError ? errors[field] : "";
  };

  return (
    <Layout hasHeader={false}>
      <PageTitle>
        <span>
          Welcome to <strong>MSN Feed</strong>
        </span>
      </PageTitle>
      <Card className="p-3 d-flex flex-column">
        <Title className="align-self-center">Enter your credentials</Title>
        <form>
          <Inputs className="my-4">
            <Input
              type="text"
              value={values.username}
              name="username"
              onChange={handleChange("username")}
              onBlur={handleBlur("username")}
              label="Username"
              placeholder="Enter your username."
              errorMsg={handleError("username")}
              withoutIcon
            />
            <Input
              type="password"
              value={values.password}
              name="password"
              onChange={handleChange("password")}
              onBlur={handleBlur("password")}
              label="Password"
              placeholder="Enter your password."
              errorMsg={handleError("password")}
              withoutIcon
            />
          </Inputs>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              isOutline={false}
              type="button"
              mode="submit"
              customLabel="Log In"
              customIcon={LogInIcon}
              disabled={!isValid || !dirty}
              isLoading={loading}
              onClick={handleSubmit}
            />
          </div>
        </form>
      </Card>
    </Layout>
  );
};

export default withFormik<any, FormValues>({
  mapPropsToValues: () => ({
    username: "",
    password: "",
  }),

  handleSubmit: () => {},

  validationSchema: Yup.object().shape({
    username: Yup.string().required("This field is required"),
    password: Yup.string()
      .min(8, "Enter exactly 8 digits")
      .max(8, "Enter exactly 8 digits")
      .required("This field is required"),
  }),
})(LogIn);
