import React, { useState } from "react";

const Loading = () => {
  const [isLoading, setIsLoading] = useState(true);

  function enableLoading() {
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className="p-6 text-center">
        <p className="text-yellow-500 text-lg">Loading...</p>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => setIsLoading(false)}
        >
          Finish Loading
        </button>
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <p className="text-green-600 text-lg">Content Loaded 🎉</p>
    </div>
  );

  {
    /* {isLoading ? <p>Loading.....</p> : <p> Content Ready</p>} */
  }

  {
    /* {isLoading ? (
        <p className="text-yellow-500">Loading...</p>
      ) : (
        <p className="text-green-600">Content Loaded ✅</p>
      )} */
  }

  {
    /* <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={enableLoading}
      >
        Load Content
      </button> */
  }
};

export default Loading;
