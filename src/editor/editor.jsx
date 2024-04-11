import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import { Puck } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";
import "@measured/puck/puck.css";
import "@measured/puck-plugin-heading-analyzer/dist/index.css";

import { config, initialData } from './puckConfig'
import { postConfig, getConfig, putConfig } from '../api'

// Render Puck editor
export function Editor(props) {

  const { headerPath = '/' } = props
  const { storeId } = useParams();


  const [apiData, setData] = useState(null);
  const [strapiId, setStrapiId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await getConfig(storeId, headerPath);
        setStrapiId(response[0].id)
        setData(response[0].attributes.config);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Save the data to your database
  const save = async (config) => {
    const data = {
      config: config,
      configId: "2345637",
      path: headerPath
    }
    const result = apiData ? await putConfig(data, strapiId) : await postConfig(data)
    console.log(result)
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Puck
        config={config}
        data={strapiId ? apiData : initialData}
        plugins={[
          headingAnalyzer
        ]}
        headerPath={headerPath}
        iframe={{ enabled: true }}
        viewports={[
          {
            "width": 360,
            height: "auto",
            label: "Mobile",
            icon: "Smartphone",
          },
          {
            "width": 770,
            height: "auto",
            label: "Tabs",
            icon: "Tablet",
          },
          {
            "width": 1280,
            height: "auto",
            label: "Desktop/TV",
            icon: "Monitor"
          },
        ]}
        onPublish={save}>
      </Puck>
    </>
  )
}