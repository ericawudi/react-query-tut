import { useParams } from "react-router-dom";
import { useSuperHeroData } from "../hooks/useSuperHeroData";

export default function RQSuperHero() {
  const { heroId } = useParams();
  const result = useSuperHeroData(heroId);

  if (result.isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (result.isError) {
    return <h2>{result.error.message}</h2>;
  }

  return (
    <>
      <h2>RQSuperHero Details Page</h2>
      <div>
        {result.data?.data.name} - {result.data?.data.alterEgo}
      </div>
    </>
  );
}
