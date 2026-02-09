import { useState, useEffect } from "react";

// Simplified the hook by removing useCallback and keeping logic internal
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Defining the function inside useEffect is a classic "manual" pattern
    const getProducts = async () => {
      try {
        const res = await fetch(url);

        // Manual check for response status
        if (!res.ok) {
          throw new Error("Could not get the data");
        }

        const json = await res.json();
        setData(json);
        setError(null); // Reset error on success
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [url]); // Only re-run if the URL changes

  return { data, loading, error };
};

export default useFetch;
