import { ReactNode, createContext, useContext, useState } from "react";

interface FavouritesContextProps {
  favouriteMovies: string[];
  addFavourite: (movieId: string) => void;
}

export const FavouritesContext = createContext<
  FavouritesContextProps | undefined
>(undefined);

export const FavouritesProvider = ({ children }: { children: ReactNode }) => {
  const [favouriteMovies, setFavouriteMovies] = useState<string[]>([]);

  const addFavourite = (movieId: string) => {
    setFavouriteMovies([...favouriteMovies, movieId]);
  };

  return (
    <FavouritesContext.Provider value={{ favouriteMovies, addFavourite }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export const useFavourites = () => {
  const context = useContext(FavouritesContext);
  if (!context) {
    throw new Error("useFavourites must be used within an FavouritesProvider");
  }
  return context;
};
