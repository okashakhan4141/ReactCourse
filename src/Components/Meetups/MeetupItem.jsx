import Card from "../UI/Card";
import styles from "./MeetupItem.module.css";
import { useContext } from "react";
import FavouritesContext from "../../Store/favourites-context";

function MeetupItem(props) {
  const FavContext = useContext(FavouritesContext);

  const isFav = FavContext.isFavourite(props.meetup.id);
  function toggleFavourite() {
    if (isFav) {
      FavContext.removeFavourite(props.meetup.id);
    } else {
      FavContext.addFavourite(props.meetup);
    }
  }

  return (
    <li className={styles.item}>
      <Card>
        <div className={styles.image}>
          <img src={props.meetup.image} alt={props.meetup.title} />
        </div>
        <div className={styles.content}>
          <h3>{props.meetup.title}</h3>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavourite}>
            {isFav ? `Remove Fav` : `To Fav`}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupItem;
