import { useWindowDimensions } from "hooks";
import React, { HTMLAttributes } from "react";
import { Colors } from "shared/colors";
import { formatDate } from "shared/helpers";
import { ArrowIcon } from "shared/icons";
import { PostResProps } from "shared/types";
import { Button, Card, Message, CardHeader, CardFooter } from "./styles";

interface Props extends PostResProps, HTMLAttributes<HTMLDivElement> {
  isFromLoggedUser?: boolean;
}

const MessageCard: React.FC<Props> = ({
  message,
  seq,
  user,
  date,
  isFromLoggedUser,
  style,
  ...divProps
}) => {
  const msgFromOthersStyle = {
    transform: "translate(-1.5em, 0)",
    backgroundColor: "rgb(255 252 246)",
    borderTopLeftRadius: 0,
  };
  const myMsgStyle = {
    transform: "translate(1.5em, 0)",
    backgroundColor: Colors.white,
    borderTopRightRadius: 0,
  };

  return (
    <Card
      {...divProps}
      style={{
        ...style,
        ...(isFromLoggedUser ? myMsgStyle : msgFromOthersStyle),
      }}
      className={`py-2 px-3 w-100 d-flex flex-column justify-content-between`}
    >
      <CardHeader className="d-flex align-items-center justify-content-between">
        <div className="user d-flex align-items-center">
          <span>Author:</span>
          <span className="ml-1">{user}</span>
        </div>
        <div className="seq d-flex align-items-center justify-content-end">
          <span>Seq:</span>
          <strong className="ml-1">{seq}</strong>
        </div>
      </CardHeader>

      <Message className="my-2 d-flex align-items-center">
        <div className="w-100" lang="en">
          {message}
        </div>
        {/* <Button type="button" onClick={() => {}}>
          <ArrowIcon color={Colors.black} size={24} />
        </Button> */}
      </Message>

      <CardFooter className="d-flex align-items-center justify-content-end">
        <span>Created at:</span>
        <span className="ml-1">{formatDate(date)}</span>
      </CardFooter>
    </Card>
  );
};

export default React.memo(MessageCard);
