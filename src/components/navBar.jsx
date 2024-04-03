import { DropZone } from "@measured/puck";

import { backgroundColor, padding, margin, height, width } from './utils'

export const NavBar = {
  fields: {
    navType: {
      type: "radio",
      label: "Nav Type",
      options: [
        { label: "Left", value: "row" },
        { label: "Center", value: "column" },
        { label: "Right", value: "row-reverse" },
      ],
    },
    backgroundColor,
    padding,
    margin,
    height,
    width,
  },

  render: ({ navType, height, width, margin, padding, backgroundColor }) => (
    <nav style={{ height, width, margin, padding, backgroundColor }}>
      <DropZone zone="nav-content" style={{ display: 'flex', flexDirection: navType, justifyContent: "space-around", alignItems: "center", }} />
    </nav>
  ),
};
