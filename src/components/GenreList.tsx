import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres, error } = useGenres();
  return (
    <ul>
      {error && <Text>{error}</Text>}
      {genres.map((genre) => (
        <li>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
