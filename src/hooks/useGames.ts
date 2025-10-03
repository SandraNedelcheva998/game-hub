import useData from "./useData";
import type { Genre } from "./useGenres";


export interface Platforms{
  id:number,
  name:string
  slug:string
}

export interface Game {
  id: number;
  name: string;
  background_image:string;
  parent_platforms:{platform:Platforms}[]
  metacritic: number
}


const useGames =(selectedGenre: Genre|null)=>useData<Game>('/games',{params:{genres:selectedGenre?.id}},[selectedGenre?.id])//IMINJATA VO PARAMS MORA DA SE ISTI KAKO VO API

export default useGames;