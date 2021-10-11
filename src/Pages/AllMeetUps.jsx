import MeetupList from "../Components/Meetups/MeetupList";
import { useState, useEffect } from "react";

function AllMeetUpsPage() {
  const [isDataAvailable, setIsDataAvailable] = useState(false);
  const [data, setData] = useState(null);

  // using fetch/then
  // useEffect(() => {
  //   fetch("https://meetup-app-e919a-default-rtdb.firebaseio.com/meetups.json")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       const meetups = [];
  //       for (const key in data) {
  //         const meetup = {
  //           id: key,
  //           ...data[key],
  //         };
  //         meetups.push(meetup);
  //       }

  //       setData(meetups);
  //       setIsDataAvailable(true);
  //     });
  // }, []);

  // using async/await
  useEffect(async () => {
    const response = await fetch(
      "https://meetup-app-e919a-default-rtdb.firebaseio.com/meetups.json"
    );
    const data = await response.json();

    const meetups = [];
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };
      meetups.push(meetup);
    }

    setData(meetups);
    setIsDataAvailable(true);
  }, []);

  if (!isDataAvailable) return <h1>Loading Data...</h1>;

  return (
    <div>
      <h1>All Meetups</h1>
      <MeetupList data={data} />
    </div>
  );
}

export default AllMeetUpsPage;
