import { DropZone } from "@measured/puck";

import { backgroundColor, padding, margin, height, width } from './utils'

import mainLogo from '../assets/Logo.png';

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
    <nav className="px-8" style={{ height, width, margin, padding, backgroundColor, display: 'flex', flexDirection: navType, justifyContent: "space-between", alignItems: "center", }}>
      <img src={mainLogo} className="w-60 p-4"/>
      <DropZone zone="nav-content" />
    </nav>
  ),
};
