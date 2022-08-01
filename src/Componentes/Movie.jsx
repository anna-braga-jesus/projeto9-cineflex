import { Link } from "react-router-dom";


export default function Movie({ id, title, posterURL,overview }) {
  return (
    <>
      <Link to={`/sessoes/${id}`}>
        <div key={id} className="Movie">
          <div
            title={`${overview}`}
          >
            <img src={posterURL} alt={title} />
          </div>
        </div>
      </Link>
    </>
  );
}
