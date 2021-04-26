import React, { InputHTMLAttributes } from "react";
import { Colors } from "shared/colors";
import { XIcon } from "shared/icons";
import { IptWrapper, Ipt, Label, ErrorText } from "./styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  errorMsg?: string;
  hasError?: boolean;
  roundedBorder?: boolean;
  handleClear?: () => void;
  hasClearBtn?: boolean;
}

const Input: React.FC<Props> = ({
  label,
  className: classes,
  errorMsg = "",
  roundedBorder,
  handleClear,
  hasClearBtn,
  ...iptProps
}) => (
  <IptWrapper className={classes}>
    {label && <Label className="mb-0">{label}</Label>}
    <Ipt
      valid={errorMsg === ""}
      className={`ipt w-100 d-flex align-items-center ${
        roundedBorder && "rounded-pill"
      }`}
    >
      <input className="w-100" type="text" {...iptProps} />
      {hasClearBtn && iptProps.value && (
        <XIcon
          className="mx-2"
          onClick={handleClear}
          size={20}
          color={Colors.red}
        />
      )}
    </Ipt>
    {errorMsg && (
      <ErrorText className="d-block text-center">{errorMsg}</ErrorText>
    )}
  </IptWrapper>
);

export default Input;
