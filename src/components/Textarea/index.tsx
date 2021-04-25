import React, { TextareaHTMLAttributes } from "react";
import { TAWrapper, TA, Label, ErrorText } from "./styles";

interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  errorMsg?: string;
  hasError?: boolean;
}

const Textarea: React.FC<Props> = ({
  label,
  className: classes,
  errorMsg = "",
  ...textareaProps
}) => (
  <TAWrapper className={classes}>
    {label && <Label className="mb-0">{label}</Label>}
    <TA
      valid={errorMsg === ""}
      className="w-100 d-flex align-items-center"
      {...textareaProps}
    />
    {errorMsg && (
      <ErrorText className="d-block text-center">{errorMsg}</ErrorText>
    )}
  </TAWrapper>
);

export default Textarea;
