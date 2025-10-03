import useData from "./useData";
import type { Genre } from "./useGenres";
import type { Platform } from "./usePlatforms";


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


const useGames =(selectedGenre: Genre|null,selectedPlatform: Platform | null)=>
  useData<Game>('/games',{
    params:{
      genres:selectedGenre?.id, 
      parent_platforms:selectedPlatform?.id
      }
    },
    [selectedGenre?.id,selectedPlatform?.id])//IMINJATA VO PARAMS MORA DA SE ISTI KAKO VO API

export default useGames;