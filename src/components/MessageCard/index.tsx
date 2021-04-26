import React, { HTMLAttributes } from "react";
import { Colors } from "shared/colors";
import { formatDate } from "shared/helpers";
import { PostResProps } from "shared/types";
import { Card, Message, CardHeader, DateTime } from "./styles";
import { useWindowDimensions } from "hooks";

const BRACK_WIDTH = 500;

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
  const { width } = useWindowDimensions();

  if (!width) return null;
  const isMobileDevice = width < BRACK_WIDTH;

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
        <DateTime className="d-flex align-items-center justify-content-end">
          {!isMobileDevice && <span>Created at:</span>}
          <span className="ml-1">{formatDate(date)}</span>
        </DateTime>
      </CardHeader>

      <Message className="my-2 d-flex align-items-center">
        <div className="w-100" lang="en">
          {message}
        </div>
      </Message>
    </Card>
  );
};

export default React.memo(MessageCard);
