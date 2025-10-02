import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Text, Image, Spinner } from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

const GenreList = () => {
  const { data, error, isLoading } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {/* {error && <Text>{error}</Text>} */}
      {data.map((genre) => (
        <ListItem>
          <HStack paddingY="5px">
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            ></Image>
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
