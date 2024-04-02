import axios from "axios";
import { useEffect, useState } from "react";

type Props = {
  endpoint: string;
  initialMethod?: string;
  initialBody?: any;
  autoFetch?: boolean;
  query?: any;
};
const useFetch = ({
  endpoint,
  initialMethod = "GET",
  initialBody = null,
  autoFetch = true,
  query,
}: Props) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [method, setMethod] = useState(initialMethod);
  const [body, setBody] = useState(initialBody);

  const options = {
    method: method,
    url: `http://192.168.30.5:8000/api/v1/${endpoint}`,
    params: {
      ...query,
    },
    data: body,
    headers: {},
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);
      setData(response.data);
      setIsLoading(false);
    } catch (err: any) {
      setError(err);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (autoFetch) {
      fetchData();
    }
  }, [endpoint, query, method, body, autoFetch]);

  const executeFetch = async (newMethod: string, newBody: any) => {
    setMethod(newMethod);
    setBody(newBody);
    await fetchData();
  };

  return { data, isLoading, error, executeFetch };
};

export default useFetch;
