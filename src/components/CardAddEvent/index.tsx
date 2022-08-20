import React, { useState } from "react";
import { ButtonAddEvent } from "../Buttons";
import { ConteinerRadius26, ConteinerRadius17 } from "../Conteiners";
import { EventDescriptionInput, TimeInput } from "../Inputs";
import { CardConainer } from "./styles";

const CardAddEvent = ({
  addEvent,
}: {
  addEvent: (eventDate: EventAlert) => void;
}) => {
  const [hour, setHour] = useState(new Date().getHours().toString());
  const [minutes, setMinutes] = useState(
    (new Date().getMinutes() + 1).toString()
  );
  const [description, setDescription] = useState("");
  return (
    <>
      <ConteinerRadius26 margin="60px 0 0">
        <CardConainer>
          <ConteinerRadius17 width="calc(50% - 5px)">
            <TimeInput
              value={hour}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setHour(e.target.value)
              }
            />
          </ConteinerRadius17>
          <ConteinerRadius17 width="calc(50% - 5px)">
            <TimeInput
              value={minutes}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMinutes(e.target.value)
              }
            />
          </ConteinerRadius17>
        </CardConainer>
        <ConteinerRadius17 width="100%">
          <EventDescriptionInput
            value={description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setDescription(e.target.value)
            }
          />
        </ConteinerRadius17>
      </ConteinerRadius26>

      <ButtonAddEvent
        onClick={() =>
          addEvent({
            hour,
            minutes,
            description: description === "" ? "Empty description" : description,
          })
        }
      >
        Add event
      </ButtonAddEvent>
    </>
  );
};

export default CardAddEvent;
