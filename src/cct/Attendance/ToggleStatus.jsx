import React, { useEffect, useState } from "react";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { GoClockFill } from "react-icons/go";

function ToggleStatus({ status }) {
  const [isApproved, setIsApproved] = useState(false);
  useEffect(() => {
    if (status === "approved") {
      setIsApproved(true);
    }
  }, [status]);
  return (
    <div>
      {isApproved ? (
        <button className="flex items-center gap-2">
          <IoCheckmarkDoneCircleSharp className="text-xl text-green-500" />
          APPROVED
        </button>
      ) : (
        <button
          onClick={() => setIsApproved(true)}
          className="flex items-center gap-2"
        >
          <GoClockFill className="text-md text-yellow-500" />
          PENDING
        </button>
      )}
    </div>
  );
}

export default ToggleStatus;
