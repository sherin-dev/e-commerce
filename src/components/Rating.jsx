import React, { useState } from "react";

const Rating = ({ initialValue = 0, onChange }) => {
  const [rating, setRating] = useState(initialValue);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) onChange(value); // notify parent
  };

  return (
    <span>
      {[...Array(5)].map((_, index) => {
        const value = index + 1;
        return (
          <i
            key={value}
            className={
              value <= rating
                ? "icofont-ui-rating text-warning"
                : "icofont-ui-rate-blank text-muted"
            }
            style={{ cursor: "pointer", fontSize: "1.2rem", marginRight: "4px" }}
            onClick={() => handleClick(value)}
          ></i>
        );
      })}
    </span>
  );
};

export default Rating;
