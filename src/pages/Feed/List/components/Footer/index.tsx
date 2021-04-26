import { Input } from "components";
import React, { FormEvent, KeyboardEventHandler, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store";
import { SendMsgIcon } from "shared/icons";
import { addPost } from "store/feed/middlewares";
import { FormWrapper, Button } from "./styles";
import { Colors } from "shared/colors";
import { Spinner } from "react-bootstrap";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState<string>("");
  const { sendBtnLoading } = useSelector((state: RootState) => state.feed);

  const clearInput = () => setMessage("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message) {
      dispatch(addPost({ message }));
      clearInput();
    }
  };

  const handleKeyPress: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key == "Enter") handleSubmit(e);
  };

  const iconSettup = {
    size: 25,
    color: message ? Colors.white : Colors.gray,
  };

  return (
    <FormWrapper className="p-2">
      <Input
        className="w-100"
        type="text"
        roundedBorder
        hasClearBtn
        handleClear={clearInput}
        value={message}
        onChange={({ target: { value } }) => setMessage(value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter your message"
      />
      <div className="ml-2">
        <Button
          className={`p-${sendBtnLoading ? 0 : 2}`}
          type="button"
          disabled={!message && !sendBtnLoading}
          onClick={handleSubmit}
        >
          {sendBtnLoading ? (
            <Spinner
              style={{
                color: Colors.white,
                width: iconSettup.size,
                height: iconSettup.size,
              }}
              animation="border"
            />
          ) : (
            <SendMsgIcon {...iconSettup} />
          )}
        </Button>
      </div>
    </FormWrapper>
  );
};

export default Footer;
