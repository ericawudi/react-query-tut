import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { Constants as K } from "../assets/Constants";
const fetchColors = (pageNumber) => {
  return axios.get(`${K.BASE_URL}/colors?_limit=2&_page=${pageNumber}`);
};

function PaginatedQueries() {
  const [pageNumber, setPageNumber] = useState(1);
  const result = useQuery(["colors", pageNumber], () =>
    fetchColors(pageNumber)
  );
  if (result.isLoading) {
    return <h2>Loading ...</h2>;
  }
  if (result.isError) {
    return <h2>{result.error.message}</h2>;
  }

  return (
    <>
      <h1>PaginatedQueries</h1>
      <button
        onClick={() => setPageNumber((page) => page - 1)}
        disabled={pageNumber === 1}
      >
        Prev Page
      </button>
      <button
        onClick={() => setPageNumber((page) => page + 1)}
        disabled={pageNumber === 4}
      >
        Next Page
      </button>
      <div>
        {result.data?.data.map((color) => {
          return (
            <div key={color.id}>
              <h2>
                {color.id} - {color.label}
              </h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PaginatedQueries;
