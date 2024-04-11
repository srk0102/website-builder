
export const mapItemsToStore = (data) => {
  return {
    type: "items",
    payload: data
  }
}

export const mapViewToStore = (data) => {
  return {
    type: "view",
    payload: data
  }
}

export const mapCartToStore = (data) => {
  return {
    type: "cart",
    payload: data
  }
}

export const mapUpdateCartToStore = (data) => {
  return {
    type: "updateCart",
    payload: data
  }
}