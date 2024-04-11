import { CartComp } from '../widgets';
import { fontSize, textAlign, color, backgroundColor, padding, margin } from './utils'

export const Cart = {
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

  render: ({ heading, textAlign, color, backgroundColor, padding, margin, fontSize }) => {
    return (
      <>
        <CartComp/>
      </>
    )
    },
};