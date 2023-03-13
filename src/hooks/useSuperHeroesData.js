import axios from "axios";
import { useQuery } from "react-query";
import { Constants as K } from "../assets/Constants";

const fetchSuperHeroes = () => axios.get(K.BASE_URL + "/superheroes");

export const useSupeHeroesData = (onSuccessFulCall, onErrorCall) => {
  return useQuery("super-heroes", fetchSuperHeroes, {
    // cacheTime: 5000, //This is cached for only 1 sec
    staleTime: 30000, // This reduces network fetch during stale time. That is, no extra request is forwarded to in the background during this time
    refetchOnWindowFocus: false, // this disable the refetch when you focus on the window
    refetchInterval: false, //pollInterval, //false, //2000, //this refechtes ur data every 2 sec. By default, it is set to false. This is polling the data for it to be in sync with databases. This doesn't care about other options set. It takes precedence over them. Note that this ius paused when the background looses focus. To still fetch when the background looses focus, set refetchIntervalInBackground:true
    // enabled: false, // This, set to false prevents a fetch on mount. It is by default set to true
    // select: (data) => {
    //   const superheroes = data.data.map((hero) => hero.name);
    //   return superheroes;
    // }, //This is a function that can be used to modify your response in the way you want. e.g. filter, map to grab only needed info
    onSuccess: onSuccessFulCall,
    onError: onErrorCall,
  });
};

// const result = useQuery("super-heroes", fetchSuperHeroes, {
//     // cacheTime: 5000, //This is cached for only 1 sec
//     // staleTime: 30000, // This reduces network fetch during stale time. That is, no extra request is forwarded to in the background during this time
//     refetchOnWindowFocus: false, // this disable the refetch when you focus on the window
//     refetchInterval: pollInterval, //false, //2000, //this refechtes ur data every 2 sec. By default, it is set to false. This is polling the data for it to be in sync with databases. This doesn't care about other options set. It takes precedence over them. Note that this ius paused when the background looses focus. To still fetch when the background looses focus, set refetchIntervalInBackground:true
//     // enabled: enable,
//     select: (data) => {
//       const superheroes = data.data.map((hero) => hero.name);
//       return superheroes;
//     }, //This is a function that can be used to modify your response in the way you want. e.g. filter, map to grab only needed info
//     onSuccess: onSuccessFulCall,
//     onError: onErrorCall,
//   });
// const [pollInterval, setPollInterval] = useState(2000);
// const [enable, setEnable] = useState(false);
// const onSuccessFulCall = (data) => {
//     setEnable(true);
//     if (data.length === 4) {
//       //NB this is data.length and not data.data.length 'cos of the select functionality added to the options of our useQuery
//       setPollInterval(false);
//       console.log(`Got the below from backend`);
//       console.log(data);
//       return;
//     }
//     console.log("Polling still in session");
//   };

//   const onErrorCall = (error) => {
//     setPollInterval(false);
//     console.log(`Polling stop. Error received: ${error}`);
//   };
