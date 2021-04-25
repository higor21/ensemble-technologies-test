import { useWindowDimensions } from "hooks";
import React, { HTMLAttributes } from "react";
import { Colors } from "shared/colors";
import { PlusCircleIcon } from "shared/icons";
import { PostResProps } from "shared/types";
import { Button, Card, Number, PriceDetail } from "./styles";

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

  const cardStyle = isMobileDevice ? "flex-column" : "";
  const cardPriceDetailStyle = isMobileDevice ? "my-4" : "";
  const cardBtnsStyle = isMobileDevice ? "align-self-end" : "";

  return (
    <Card
      {...divProps}
      className={`py-2 px-3 w-100 d-flex ${cardStyle} align-items-center justify-content-between`}
    >
      <Number>{7012734070394923}</Number>
      <PriceDetail className={cardPriceDetailStyle}>
        <h3 className="title text-center">
          Cost in <strong>{23}</strong>
        </h3>
        <div className="values d-flex align-items-center justify-content-between">
          <span>
            Setup: <strong>{23}</strong>
          </span>
          <span>
            Monthy: <strong>{23}</strong>
          </span>
        </div>
      </PriceDetail>
      <div
        className={`${cardBtnsStyle} d-flex align-items-center justify-content-end`}
      >
        <Button type="button" onClick={() => {}}>
          <PlusCircleIcon color={Colors.orange} size={24} />
        </Button>
      </div>
    </Card>
  );
};

export default React.memo(MessageCard);
