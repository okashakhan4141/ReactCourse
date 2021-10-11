/*
    - createContext is a function provided by react to store context
    - upon calling it creates a context
    - in the end it is a JS object and we can store it in some varibale
    - and this object will actually contain a react component (so we start naming it by capital letter)
    - createContext takes an argument as an inittal value for the context
    - value could be anything e.g: object or anything
    - the object has property .provider which is a component for providing context

*/

import { createContext, useState } from "react";

const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (item) => {},
  removeFavourite: (itemID) => {},
  isFavourite: (itemID) => {},
});

export function FavouritesContextProvider(props) {
  const [userFavourites, setUserFavourites] = useState([]);

  const updatedContext = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavourites,
    removeFavourite: removeFavourites,
    isFavourite: itemIsFavourite,
  };

  function addFavourites(item) {
    // you can directly pass the updated value in the setSate function
    // but if it is dependent on prev state like in this case,
    // you should pass it as a function
    // since react doesn't update state imediatly
    setUserFavourites((prevState) => prevState.concat(item));
  }

  function removeFavourites(itemID) {
    setUserFavourites((prevState) =>
      prevState.filter((meetup) => meetup.id !== itemID)
    );
  }

  function itemIsFavourite(itemID) {
    return userFavourites.some((meetup) => meetup.id === itemID);
  }

  return (
    <FavouritesContext.Provider value={updatedContext}>
      {props.children}
    </FavouritesContext.Provider>
  );
}

export default FavouritesContext;
