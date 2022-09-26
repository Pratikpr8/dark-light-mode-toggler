import React from "react";

export default function SortedData(props) {
  const {name, ucl } = props;

  return (
    <div className="post">
      <h2>{name}</h2>
      <div className="post-info">
        <span>{ucl} Champions League titles.</span>
      </div>
    </div>
  );
}
