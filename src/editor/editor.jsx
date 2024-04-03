import { useEffect, useState } from "react";
import { Puck } from "@measured/puck";
import headingAnalyzer from "@measured/puck-plugin-heading-analyzer";
import "@measured/puck/puck.css";
import "@measured/puck-plugin-heading-analyzer/dist/index.css";

import { config, initialData } from './puckConfig'
import { postConfig, getConfig } from '../api'

// Render Puck editor
export function Editor(props) {

  const { headerPath = '/' } = props

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

  // Save the data to your database
  const save = async (config) => {
    const data = {
      config: config,
      configId: 'xp-324'
    }
    const result = await postConfig(data)
    console.log(result)
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <Puck
        config={config}
        data={data.content ? data : initialData}
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