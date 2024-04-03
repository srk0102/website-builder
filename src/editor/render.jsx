import { useEffect, useState } from "react";
import { Render } from "@measured/puck";
import { getConfig } from '../api';
import { config } from "./puckConfig";

export const RenderPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getConfig(2);
        setData(response.attributes.config);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Render config={config} data={data} />
    </>
  );
};
