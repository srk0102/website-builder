import { NavBar, Heading, ShopBody, Footer } from '../components'

// Create Puck component config
export const config = {
  components: {
    NavBar,
    Heading,
    ShopBody,
    Footer
  },
  categories: {
    Nav: {
      components: ["NavBar"],
    },
    Body: {
      components: ["ShopBody"]
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