import React, { useEffect, useState } from "react";
import axios from "../libs/axios";

export function ApiGet(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const Api = async () => {
      try {
        const res = await axios.get(url);
        console.log("todo bien");
        console.log(res);
        setData(res);
      } catch (err) {
        console.log("todo mal");
        console.log(err);
        setError(err);
      } finally {
        console.log("Termino de cargar...");
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
    return res;
  } catch (error) {
    return error;
  }
}
export async function ApiPut(url, data) {
  try {
    const res = await axios.put(url, data);
    return res;
  } catch (error) {
    console.log(error);
    return error;
  }
}
