import React, { useState, useEffect } from "react";
import { CardAddEvent, Clock } from "../../components";
import CardEvent from "../../components/CardEvent/intex";
import { PageConteiner, ScrollConteiner } from "../../components/Conteiners";

type EventAlertProps = EventAlert & { id: number };
const Home = () => {
  const [eventList, setEventList] = useState<EventAlertProps[]>([]);

  // TODO:  the following section could be improved by implementing a hash table so we could decrease the time of search and delete events
  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      if (currentDate.getSeconds() === 0) {
        const newList = eventList.filter((item: EventAlertProps) => {
          const min = currentDate.getMinutes();
          const hour = currentDate.getHours();
          if (
            parseInt(item.hour, 10) === hour &&
            parseInt(item.minutes, 10) === min
          ) {
            alert(item.description);
            return false;
          }
          return true;
        });
        setEventList(newList);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [eventList]);

  const [newId, setNewId] = useState(0);
  return (
    <PageConteiner>
      <Clock currentDate={new Date()}></Clock>
      <CardAddEvent
        addEvent={(newEvent: EventAlert) => {
          setEventList([...eventList, { ...newEvent, id: newId }]);
          setNewId(newId + 1);
        }}
      />
      <ScrollConteiner>
        {eventList.map((data: EventAlertProps) => (
          <div key={data.id}>
            <CardEvent
              eventData={data}
              removeEvent={(id: number) =>
                setEventList(
                  eventList.filter((item: EventAlertProps) => item.id !== id)
                )
              }
            />
          </div>
        ))}
      </ScrollConteiner>
    </PageConteiner>
  );
};
export default Home;
