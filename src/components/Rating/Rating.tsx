import React from "react";
import { Product } from "../../types";

interface RatingProps {
  rating?: number | string;
}

function Rating({ rating }: RatingProps) {
  return (
    <>
      {Array(rating as number)
        .fill(null)
        .map((_, i) => (
          <span> ⭐</span>
        ))}
    </>
  );
}

export default Rating;
