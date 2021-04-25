import React, { InputHTMLAttributes } from "react";
import { IptWrapper, Ipt, Label, ErrorText } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
  hasError?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  className: classes,
  errorMsg = "",
  ...iptProps
}) => (
  <IptWrapper className={classes}>
    {label && <Label className="mb-0">{label}</Label>}
    <Ipt
      valid={errorMsg === ""}
      className="ipt w-100 d-flex align-items-center"
    >
      <input className="w-100" type="text" {...iptProps} />
    </Ipt>
    {errorMsg && (
      <ErrorText className="d-block text-center">{errorMsg}</ErrorText>
    )}
  </IptWrapper>
);

export default Input;
