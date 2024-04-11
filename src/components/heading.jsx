
import { fontSize, textAlign, color, backgroundColor, padding, margin} from './utils'

export const Heading = {
  fields: {
    heading: {
      type: "text",
      label: "Heading",
    },
    textAlign,
    fontSize,
    color,
    backgroundColor,
    padding,
    margin
  },

  render: ({ heading, textAlign, color, backgroundColor, padding, margin, fontSize }) => (
    <h1 style={{ fontSize, textAlign, color, backgroundColor, padding, margin }}>{heading}</h1>
  ),
};