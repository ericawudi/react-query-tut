import axios from "axios";
import { useEffect, useState } from "react";
import { Constants as K } from "../assets/Constants";

export default function SuperHeroes() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(K.BASE_URL + "superheroes")
      .then((res) => {
        setData(res.data);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return <h2>{error}</h2>;
  }
  if (isLoading) {
    return <h2>Data is Loading...3sec</h2>;
  }
  return (
    <>
      <h2>Tranditional way of fetching data {isLoading}</h2>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </>
  );
}
