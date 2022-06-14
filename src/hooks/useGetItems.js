import axios from "axios";
import { useState, useEffect } from "react";

const useGetItems = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      const temp = await axios.get(url);
      setData(temp.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return {
    loading,
    error,
    data,
  };
};

export default useGetItems;
