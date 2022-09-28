import { Link } from "react-router-dom";

export const Nota = ({ nota }) => {
  return (
    <article>
      <p>{nota.text}</p>
      {nota.image ? (
        <img
          src={`${process.env.REACT_APP_BACK}/uploads/${nota.image}`}
          alt={nota.text}
        />
      ) : null}
      <p>
        By {nota.email}
        on{" "}
        <Link to={`/nota/${nota.id}`}>
          {" "}
          {new Date(nota.created_at).toLocaleString()}
        </Link>
      </p>
    </article>
  );
};
