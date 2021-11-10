import React, { useState } from "react";

/* Components */
import ShowMoreButton from "./ShowMoreButton";

/* UI Library Components */
import { Divider, Tooltip } from "antd";

const AuthorsListOnModal = ({ authors }) => {
  const [authorsQuantity, setAuthorsQuantity] = useState(10);
  const [showingAll, setShowingAll] = useState(false);

  return (
    <>
      {" "}
      {authors.slice(0, authorsQuantity).map((author) =>
        author.corresponding ? (
          <Tooltip
            key={author.id}
            title={`Autor de correspondencia.
      Afiliación: ${
        author.affiliations.length !== 0
          ? author.affiliations[0].name
          : "No disponible"
      }.`}
          >
            {" "}
            <span style={{ textDecoration: "underline" }}>{author.name}</span>
            {author !== authors[authors.length - 1] ? ", " : "."}
          </Tooltip>
        ) : (
          <Tooltip
            key={author.id}
            title={`Afiliación: ${
              author.affiliations.length !== 0
                ? author.affiliations[0].name
                : "No disponible"
            }`}
          >
            <span>{author.name}</span>
            {author !== authors[authors.length - 1] ? ", " : "."}
          </Tooltip>
        )
      )}
      <Divider type="vertical" />
      {authors.length > 10 ? (
        <ShowMoreButton
          showingAll={showingAll}
          setAuthorsQuantity={setAuthorsQuantity}
          setShowingAll={setShowingAll}
          length={authors.length}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default AuthorsListOnModal;
