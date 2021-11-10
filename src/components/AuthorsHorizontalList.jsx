import React, { useState } from "react";

/* Components */
import ShowMoreButton from "./ShowMoreButton";

/* Utilities */
import { Link } from "react-router-dom";

/* UI Library Components */
import { Button, Divider, Tooltip } from "antd";

const AuthorsHorizontalList = (authorsList) => {
  const [authorsQuantity, setAuthorsQuantity] = useState(10);
  const [showingAll, setShowingAll] = useState(false);

  const showContent = (author) => {
    return (
      <>
        <Link
          style={{ fontSize: 15, textDecoration: "underline" }}
          to={`/app/authors?id=${author.id}`}
        >
          {author.full_name}
        </Link>
        {author.affiliations.map((item, index) => (
          <div key={index}>
            <Link
              style={{ fontSize: 12, textDecoration: "underline" }}
              to={`/app/${
                item.type === "group" ? "groups" : "institutions"
              }?id=${item.id}`}
              key={item.id}
            >
              {item.name}
            </Link>
          </div>
        ))}
      </>
    );
  };

  return (
    <div>
      {authorsList.slice(0, authorsQuantity).map((author) => (
        <Tooltip
          title={() => showContent(author)}
          color="white"
          trigger="click"
          key={author.id}
        >
          <Button type="link">{author.full_name}</Button>
        </Tooltip>
      ))}
      <Divider type="vertical" />
      {authorsList.length > 10 && (
        <ShowMoreButton
          showingAll={showingAll}
          setAuthorsQuantity={setAuthorsQuantity}
          setShowingAll={setShowingAll}
          length={authorsList.length}
        />
      )}
    </div>
  );
};

export default AuthorsHorizontalList;
