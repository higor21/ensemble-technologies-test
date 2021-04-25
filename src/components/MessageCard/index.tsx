import { useWindowDimensions } from "hooks";
import React, { HTMLAttributes } from "react";
import { Colors } from "shared/colors";
import { formatDate } from "shared/helpers";
import { ArrowIcon } from "shared/icons";
import { PostResProps } from "shared/types";
import { Button, Card, Message, CardHeader, CardFooter } from "./styles";

const BRACK_WIDTH = 540;

interface Props extends PostResProps, HTMLAttributes<HTMLDivElement> {}

const MessageCard: React.FC<Props> = ({
  message,
  seq,
  user,
  date,
  ...divProps
}) => {
  const { width } = useWindowDimensions();

  if (!width) return null;

  const isMobileDevice = width < BRACK_WIDTH;

  return (
    <Card
      {...divProps}
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
