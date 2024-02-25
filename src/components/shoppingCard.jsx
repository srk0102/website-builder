import { useEffect, useState } from 'react'

//utils
import { DynamicComponent } from './utils'

//api
import { getShoppingCard } from '../api'

export const ShoppingCard = () => {

  const [card, setCard] = useState({})

  useEffect(() => {
    const fetchShoppingCard = async () => {
      try {
        const fetchedNav = await getShoppingCard(1);
        setCard(fetchedNav.attributes);
      } catch (error) {
        console.error("Error fetching nav:", error);
      }
    }
    fetchShoppingCard()
  }, [])

  return (
    <DynamicComponent componentName="ShoppingCard" type={card.cardType} {...card} />
  )
}
