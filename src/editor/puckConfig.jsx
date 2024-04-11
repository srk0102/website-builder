import { NavBar, Heading, ShopBody, Footer, Cart } from '../components'

// Create Puck component config
export const config = {
  components: {
    NavBar,
    Heading,
    ShopBody,
    Footer,
    Cart
  },
  categories: {
    Nav: {
      components: ["NavBar"],
    },
    Body: {
      components: ["ShopBody", "Cart"]
    },
    Typography: {
      components: ["Heading"],
    },
    Footer: {
      components: ["Footer"]
    }
  },
};

// Describe the initial data
export const initialData = {
  content: [],
  root: {},
};