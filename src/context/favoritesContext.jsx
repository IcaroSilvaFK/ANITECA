import { createContext, useContext, useState, useEffect } from "react";
import { useMutation, gql, useQuery } from "@apollo/client";
import { useSession } from "next-auth/react";

const FavoritesContext = createContext({});

const ADD_GET_NEW_FAVORITE = gql`
  mutation addNewFavorite($email: String) {
    addNewFavorite(user: $email) {
      newFavorite {
        title
        animeId
        imageUrl
      }
    }
  }
`;

export function FavoritesContextProvider({ children }) {
  const [newavorite, setNewFavorites] = useState({});
  const [favorites, setFavorites] = useState([]);
  const [mutation, { data }] = useMutation(ADD_GET_NEW_FAVORITE, {
    update(cache, { data }) {
      const newFavorite = data?.mutation;

      const previousValue = cache.readQuery({
        query: getFavorites,
      });
      cache.writeQuery({
        query: getFavorites,
        data: {
          favorites: [...previousValue.favorite, newFavorite],
        },
      });
    },
  });

  const { data: session } = useSession();

  useEffect(() => {
    (async () => {
      // mutatino({variables:{email: }});
    })();
  }, [newavorite]);

  function handleAddNewFavorite({ favorite }) {
    const postNewFavorite = {
      ...favorite,
      user: session.user.email,
    };
    setNewFavorites(postNewFavorite);
    const newFavorite = favorites.map((element) =>
      element.id !== favorite.id ? { ...element, favorite } : element
    );
    setFavorites(newFavorite);
  }

  return (
    <FavoritesContext.Provider value={{ handleAddNewFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorite() {
  return useContext(FavoritesContext);
}
