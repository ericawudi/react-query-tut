import axios from "axios";
import { useQuery } from "react-query";
import { NavLink } from "react-router-dom";
import { Constants as K } from "../assets/Constants";

const fetchSuperHeroes = () => {
  return axios.get(`${K.BASE_URL}/superheroes`);
};

const fetchFriends = () => {
  return axios.get(`${K.BASE_URL}/friends`);
};
// Parallel queries works as simple as invoking useQuery twice.
// if you are going for the destructing approach, you can simply give the parameters aliases. e.g. data:superheroes
function ParallelQueriesPage() {
  const { data: superheroes } = useQuery("super-heroes", fetchSuperHeroes);
  const { data: friends } = useQuery("friends", fetchFriends);

  return (
    <>
      <h2>ParallelQueriesPage</h2>
      <p>SuperHeroes: </p>
      {superheroes?.data?.map((hero) => {
        return (
          <div key={hero.id}>
            <NavLink to={`${hero.id}`}>{hero.name}</NavLink>
          </div>
        );
      })}

      <p>friends: </p>
      {friends?.data?.map((friend) => {
        return (
          <div key={friend.id}>
            <NavLink to={`${friend.id}`}>{friend.name}</NavLink>
          </div>
        );
      })}
    </>
  );
}

export default ParallelQueriesPage;
