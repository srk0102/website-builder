import { Puck } from "@measured/puck";
import "@measured/puck/puck.css";

import {config, initialData} from './puckConfig'

// Render Puck editor
export function Editor() {

  // Save the data to your database
  const save = (data) => {
    console.log(data)
  };

  return <Puck config={config} data={initialData} onPublish={save} />;
}