import api from "@/api/api";
import { useEffect, useState } from "react";

function FetchApi(endpoint: string) {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<any>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(endpoint);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
}

export default FetchApi;
