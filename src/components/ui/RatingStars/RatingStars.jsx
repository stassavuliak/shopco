import React from "react";
import styles from "./RatingStars.module.scss";

const RatingStars = ({ rating, size = 16, showValue = true }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className={styles.rating}>
      {Array.from({ length: 5 }).map((_, i) => {
        let fillColor = "none";

        if (i < fullStars) fillColor = "#fbbf24"; // полная звезда
        else if (i === fullStars && hasHalfStar) fillColor = "url(#half-fill)"; // половина

        return (
          <svg
            key={i}
            width={size}
            height={size}
            viewBox="0 0 24 24"
            stroke="#fbbf24"
            fill={fillColor}
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* градиент для половины звезды */}
            <defs>
              <linearGradient id="half-fill">
                <stop offset="50%" stopColor="#fbbf24" />
                <stop offset="50%" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.785 
                 1.4 8.168L12 18.896l-7.334 3.868 
                 1.4-8.168L.132 9.211l8.2-1.193L12 .587z"
            />
          </svg>
        );
      })}
      {showValue && <span>{rating}/5</span>}
    </div>
  );
};

export default RatingStars;
