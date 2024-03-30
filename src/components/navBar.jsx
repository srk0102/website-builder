import { DropZone } from "@measured/puck";

import { fontSize, textAlign, color, backgroundColor, padding, margin, height, width } from './utils'

export const NavBar = {
  fields: {
    title: {
      type: "text",
      label: "Navbar Title",
    },
    navType: {
      type: "radio",
      label: "Nav Type",
      options: [
        { label: "Left", value: "row" },
        { label: "Center", value: "column" },
        { label: "Right", value: "row-reverse" },
      ],
    },
    links: {
      type: "array",
      arrayFields: {
        title: { type: "text" },
      },
    },
    textAlign,
    fontSize,
    color,
    backgroundColor,
    padding,
    margin,
    height,
    width,
  },

  render: ({ title, fontSize, textAlign, color, backgroundColor, padding, margin, navType, height, width, links }) => (
    <nav style={{
      display: 'flex', flexDirection: navType, justifyContent: "space-around", alignItems:"center", height, width }}>
      <h1 style={{ fontSize, textAlign, color, backgroundColor, padding, margin }}>{title}</h1>
      <div className="links">
        <ul>
          {links?.map((item, i) => (
            <li key={i}>{item.title}</li>
          ))}
        </ul>
      </div>
    </nav>
  ),
};
