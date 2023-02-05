import React from "react";
import { Skeleton } from "@mui/material";

const LoadingSkeleton = ({ number }) => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-10 mx-auto border max-w-screen-2xl md:grid-cols-2 xl:grid-cols-4">
        {Array(9)
          .fill(10)
          .map((item, idx) => (
            <Skeleton
              key={`${idx}uid`}
              variant="rectangular"
              width={354}
              height={508}
            />
          ))}
        {/* <Skeleton
          // key={`${idx}uid`}
          variant="circular"
          width={354}
          height={508}
        /> */}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
