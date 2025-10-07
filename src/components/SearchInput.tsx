import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (ref.current) console.log(ref.current.value);
  // };
  //onSubmit={handleSubmit} --poradi nekoja prichina onSubmit seuste pravi refresh na stranata iako ima event.preventDefault
  //za sega reshenie
  // https://www.geeksforgeeks.org/reactjs/how-to-get-the-enter-key-in-reactjs/
  // https://www.geeksforgeeks.org/reactjs/react-onkeydown-event/

  return (
    <form
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          if (ref.current) onSearch(ref.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
