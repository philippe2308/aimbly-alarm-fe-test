import React, { useState } from "react";
import { ButtonDeleteCard } from "../Buttons";
import { ConteinerRadius26, ConteinerRadius17 } from "../Conteiners";
import { LabelDescription, LabelTime } from "../Label";
import { CancelButtonConainer, CardRowConainer } from "./styles";
const CardEvent = ({
  eventData,
  removeEvent,
}: {
  eventData: EventAlert & { id: number };
  removeEvent: (id: number) => void;
}) => {
  const { hour, minutes, description, id } = eventData;

  const [showDelete, setShowDelete] = useState(false);

  return (
    <ConteinerRadius26
      color={showDelete ? "#7B2828" : "#1D1D1D"}
      margin="10px 0 0"
      onClick={() => !showDelete && setShowDelete(true)}
    >
      <CardRowConainer>
        <ConteinerRadius17 color={showDelete ? "transparent" : "#0E0E0E"}>
          <LabelTime>{`${hour} : ${minutes}`}</LabelTime>
        </ConteinerRadius17>
        {!showDelete ? (
          <LabelDescription>{description}</LabelDescription>
        ) : (
          <CancelButtonConainer>
            <ButtonDeleteCard
              color="rgba(255, 255, 255, 0.1)"
              onClick={() => {
                removeEvent(id);
              }}
            >
              Delete
            </ButtonDeleteCard>
            <ButtonDeleteCard
              color="transparent"
              onClick={() => {
                setShowDelete(false);
              }}
            >
              Cancel
            </ButtonDeleteCard>
          </CancelButtonConainer>
        )}
      </CardRowConainer>
    </ConteinerRadius26>
  );
};

export default CardEvent;
