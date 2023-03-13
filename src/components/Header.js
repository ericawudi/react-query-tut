import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/rq-super-heroes">RQSuperHeroes</Link>
        </li>
        <li>
          <Link to="/rq-parallel">RQParallel</Link>
        </li>
        <li>
          <Link to="/rq-dynamic-parallel">RQDynamicParallel</Link>
        </li>
        <li>
          <Link to="/rq-dependent">RQDependentQueries</Link>
        </li>
        <li>
          <Link to="/rq-pagination">RQPagination</Link>
        </li>
        <li>
          <Link to="/super-heroes">SuperHeroes</Link>
        </li>
      </ul>
    </nav>
  );
}
