import styles from "./MeetupForm.module.css";
import Card from "../UI/Card";
import { useRef } from "react";
import { useHistory } from "react-router-dom";

function MeetupForm() {
  const titleRef = useRef();
  const imageRef = useRef();
  const addressRef = useRef();
  const descriptionRef = useRef();

  const history = useHistory();

  const sendDatatoFirebase = (data) => {
    fetch("https://meetup-app-e919a-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const meetupData = {
      title: titleRef.current.value,
      image: imageRef.current.value,
      address: addressRef.current.value,
      description: descriptionRef.current.value,
    };

    sendDatatoFirebase(meetupData);
  };

  return (
    <Card>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" id="title" required ref={titleRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="image">Image URL</label>
          <input type="url" id="image" required ref={imageRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" required ref={addressRef} />
        </div>
        <div className={styles.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" ref={descriptionRef} />
        </div>
        <div className={styles.actions}>
          <button>Submit</button>
        </div>
      </form>
    </Card>
  );
}

export default MeetupForm;
