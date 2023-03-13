import { NavLink } from "react-router-dom";
import { useSupeHeroesData } from "../hooks/useSuperHeroesData";

export default function RQSuperHeroes() {
  const onSuccessFulCall = (data) => {
    console.log(
      `Performing side effect...like navigating to a new page or showing a modal. Data is`,
      data
    );
  };

  const onErrorCall = (error) => {
    console.log("An error occurred in the data fetching: ", error);
  };

  const result = useSupeHeroesData(onSuccessFulCall, onErrorCall);

  if (result.isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (result.isError) {
    return <h2>{result.error.message}</h2>;
  }
  return (
    <>
      <h2>Using React Query fetching data</h2>
      <button onClick={result.refetch}>Fetch heroes</button>
      {result.data?.data.map((hero) => {
        return (
          <div key={hero.id}>
            <NavLink to={`${hero.id}`}>{hero.name}</NavLink>
          </div>
        );
      })}
      {/* {result.data?.map((heroName) => {
        return <div key={heroName}>{heroName}</div>;
      })} */}
    </>
  );
}
