import { Link } from "react-router-dom";
import styles from "./MainNavBar.module.css";
// this styles is an obj that will conatin all the classes writtem in css file
// you can name it as you want!

import FavouritesContext from "../../Store/favourites-context";
import { useContext } from "react";

function MainNavBar() {
  const FavContext = useContext(FavouritesContext);

  return (
    <header className={styles.header}>
      <div className={styles.logo}>Meetup - App</div>
      <nav>
        <ul>
          <li>
            <Link to="/">Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New</Link>
          </li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={styles.badge}>{FavContext.totalFavourites}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavBar;
