import axios from "axios";

import { useEffect, useState } from "react";
import { instance } from "../utils/axios.config";
type Props = {
  endpoint: string;
  initialMethod?: string;
  initialBody?: any;
  autoFetch?: boolean;
  query?: any;
  requiresAuth?: boolean;
};
const useFetch = ({
  endpoint,
  initialMethod = "GET",
  initialBody = null,
  autoFetch = true,
  query,
  requiresAuth = false,
}: Props) => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [method, setMethod] = useState(initialMethod);
  const [body, setBody] = useState(initialBody);
  const [isSuccess, setIsSuccess] = useState(false);
  const options = {
    method: method,
    url: `http://192.168.30.4:8000/api/v1/${endpoint}`,
    params: {
      ...query,
    },
    data: body,
    headers: {},
    requiresAuth: requiresAuth,
  };

  const fetchData = async (method?: string, data?: any) => {
    setData(null);
    setError(null);
    setIsLoading(true);
    setIsSuccess(false);
    try {
      // Add a delay
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 2000 milliseconds = 2 seconds

      const response = await instance.request({
        ...options,
        headers: {},
        method: method ? method : "GET",
        data: data ? data : null,
      });
      setData(response.data.data);
      setIsSuccess(true);
    } catch (err: any) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError(err.message);
      }
      setError(err.response.data.message);
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
    await fetchData(newMethod, newBody);
  };

  return { data, isLoading, error, executeFetch, isSuccess };
};

export default useFetch;
