import { Button, Layout, Textarea } from "components";
import { FormikProps, withFormik } from "formik";
import React, { FormEvent, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostProps } from "shared/types";
import { RootState } from "store";
import * as Yup from "yup";
import { Card, Inputs, Title } from "./styles";
import { SendMsgIcon } from "shared/icons";
import { addPost } from "store/feed/middlewares";
import { setRedirectToList } from "store/feed/slice";
import { useHistory } from "react-router";
import { RouteNames } from "shared/constants";

interface FormValues extends PostProps {}

const Add: React.FC<FormikProps<FormValues>> = ({
  handleChange,
  values,
  errors,
  touched,
  isValid,
  dirty,
  handleBlur,
}) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { loading, redirectToList } = useSelector(
    (state: RootState) => state.feed
  );

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (isValid && dirty) {
      dispatch(addPost(values));
    }
  };

  const handleError = (field: "message") => {
    const hasError = touched[field] && errors[field];
    return hasError ? errors[field] : "";
  };

  useLayoutEffect(() => {
    if (redirectToList) history.push(RouteNames.listFeed);
    return () => {
      dispatch(setRedirectToList(false));
    };
  }, [redirectToList]);

  return (
    <Layout>
      <Card className="p-3 d-flex flex-column">
        <Title className="align-self-center">Message</Title>
        <form>
          <Inputs className="my-4">
            <Textarea
              value={values.message}
              name="message"
              onChange={handleChange("message")}
              onBlur={handleBlur("message")}
              placeholder="Enter your message."
              errorMsg={handleError("message")}
            />
          </Inputs>
          <div className="d-flex align-items-center justify-content-center">
            <Button
              isOutline={false}
              type="button"
              mode="submit"
              customLabel="Send"
              customIcon={SendMsgIcon}
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
    message: "",
  }),

  handleSubmit: () => {},

  validationSchema: Yup.object().shape({
    message: Yup.string().required("This field is required"),
  }),
})(Add);
