import { useContext } from "react";
import FavouritesContext from "../Store/favourites-context";
import MeetupList from "../Components/Meetups/MeetupList";

function FavouritesPage() {
  const FavContext = useContext(FavouritesContext);

  let content;
  if (FavContext.totalFavourites === 0) {
    content = <p>No Favourites yet! :(</p>;
  } else {
    content = <MeetupList data={FavContext.favourites} />;
  }
  return (
    <div>
      <h1>Favourite Meetups</h1>
      {content}
    </div>
  );
}

export default FavouritesPage;
