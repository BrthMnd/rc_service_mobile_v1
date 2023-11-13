import React, { useEffect, useState } from "react";
import axios from "axios";

export function ApiGet(url) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Api = async () => {
      try {
        const res = await axios.get(url);
        setData(res.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    Api();
  }, [url]);

  return [data, loading, error];
}

export async function ApiPost(url, data) {
  try {
    const res = await axios.post(url, data);
    console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
    return error;
  }
}
