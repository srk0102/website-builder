import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Render } from "@measured/puck";
import { getConfig } from '../api';
import { config } from "./puckConfig";

export const RenderPage = (props) => {

  const { headerPath = '/' } = props
  const { storeId } = useParams();

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getConfig(storeId, headerPath);
        setData(response[0].attributes.config);
      } catch (error) {
        setError(error)
        console.log(error);
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
