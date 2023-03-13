import axios from "axios";
import { useQueries } from "react-query";
import { Constants as K } from "../assets/Constants";

const fetchSuperHeroes = (heroId) => {
  return axios.get(`${K.BASE_URL}/superheroes/${heroId}`);
};

function DynamicParallel({ heroIds }) {
  const queryResult = useQueries(
    heroIds.map((id) => {
      return {
        queryKey: ["super-hero", id],
        queryFn: () => fetchSuperHeroes(id),
      };
    })
  );

  console.log({ queryResult });

  return (
    <>
      <div>DynamicParallel: Check console and react query dev tool</div>
    </>
  );
}

export default DynamicParallel;
