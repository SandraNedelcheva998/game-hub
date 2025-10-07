import type { GameQuery } from "../App";
import useData from "./useData";


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
  rating_top:number
}



const useGames =(gameQuery:GameQuery)=>
  useData<Game>('/games',{
    //ova se request parametri od url sto e poslem ? -> https://api.rawg.io/api/games?key=217c64988ed44896a154e3d7763c6507&genres=5&parent_platforms=3
    //vo params se prakaat query Parameters koi se kako promenlivi sto backend gi koristi za filtriranje i manipulacija so podatocite pred da ni gi vrati(definirani se vo API dokumentacija)
    //IMINJATA VO PARAMS MORA DA SE ISTI KAKO VO API
    params:{
      genres:gameQuery.genre?.id, 
      parent_platforms:gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText
      }
    },
    [gameQuery])

export default useGames;