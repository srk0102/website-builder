import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { sendItemsToStore, sendCartToStore } from '../store/actions'
import { color, tailwindTextColors, padding, margin, height, tailwindBgColors,  } from './utils'
import { categorizeItems } from './helpers'
import { templeServices } from './test'

const ShopCard = ({ CardBackgroundColor, cardTypes, HeadColor, bodyColor, PriceColor, CategoryPadding, CategoryMargin, CategoryHeight, CategoryColor, CategoryBackgroundColor }) => {

  const dispatch = useDispatch()
  const [selectedCat, setSelectedCat] = useState('Donation')

  useEffect(() => {
    const categorizedItems = categorizeItems(templeServices);
    // Dispatch the categorized items to Redux when the component mounts
    dispatch(sendItemsToStore(categorizedItems));
  }, [dispatch]);

  const listedItems = useSelector(state => state.store.items);
  const cart = useSelector(state => state.store.cart);

  const addItem = (item) => {
    let selectedItem = {...item}
    if (item.price === "Variable"){
      const variablePrice = prompt('Please Enter your donation amount')
      selectedItem.price = variablePrice
    }
    if (!cart) {
      const updatedCart = [{ ...selectedItem, quantity: 1 }];
      dispatch(sendCartToStore(updatedCart));
      return;
    }
    const existingItem = cart.find((cartItem) => cartItem.id === selectedItem.id);
    if (existingItem) {
      const updatedCart = cart.map((cartItem) =>
        cartItem.id === selectedItem.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      );
      dispatch(sendCartToStore(updatedCart));
    } else {
      const updatedCart = [...cart, { ...selectedItem, quantity: 1 }];
      dispatch(sendCartToStore(updatedCart));
    }
    console.log(selectedItem)
  };


  return (
    <>
      <div className="flex flex-row justify-center rounded-lg shadow-sm" role="group" style={{margin:CategoryMargin}}>
        {Object.keys(listedItems).map(category => (
        <button
          key={category}
          onClick={() => setSelectedCat(category)}
            className={`${CategoryColor} ${CategoryBackgroundColor} ${selectedCat === category ? 'selected' : ''}border border-neutral-950 px-20 mx-5 py-5 text-sm font-medium hover:text-white hover:bg-red-500 focus:z-10 focus:ring-2 focus:ring-red-500 focus:bg-red-900 focus:text-white dark:border-white dark:text-white`}
          style={{ padding: CategoryPadding, height: CategoryHeight}}
        >
          {category}
        </button>
      ))}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2 h-screen'>
        {listedItems[selectedCat]?.map((item) => {
          return (
            <>
              {(cardTypes === 'default' || !cardTypes) && (
                <div className={`max-w-sm max-h-52 ${CardBackgroundColor} border border-gray-200 rounded-lg shadow`}>
                  <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                  <div className="p-5">
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${HeadColor}`}>{item.name}</h5>
                    <p className={`mb-3 font-normal ${bodyColor}`}>{item.description}</p>
                    <button onClick={() => addItem(item)} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                      ${item.category === "Donation" ? "" : item.price}
                      <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
              {cardTypes === 'eCommerce' && (
                <div className={`w-full max-w-sm ${CardBackgroundColor} border border-gray-200 rounded-lg shadow`}>
                  <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
                  <div className="px-5 pb-5">
                    <h5 className={`text-xl font-semibold tracking-tight" ${HeadColor}`}>{item.name}</h5>
                    <p className={`mb-3 font-normal ${bodyColor}`}>{item.description}</p>
                    <div className="flex items-center justify-between pt-3">
                      <span className="text-3xl font-bold" style={{ color: PriceColor }}>${item.category === "Donation" ? "" : item.price}</span>
                      <a href={`/item/${item.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                  </div>
                </div>
              )}
              {cardTypes === 'horizontal' && (
                <div className={`flex flex-row items-center ${CardBackgroundColor} border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100`}>
                  <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                  <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className={`mb-2 text-2xl font-bold tracking-tight ${HeadColor}`}>{item.name}</h5>
                    <p className={`mb-3 font-normal ${bodyColor}`}>{item.description}</p>
                    <span className="text-3xl font-bold" style={{ color: PriceColor }}>${item.category === "Donation" ? "" : item.price}</span>
                    <a href={`/item/${item.id}`} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                  </div>
                </div>
              )}
            </>
          )
        })}
      </div>
    </>
  )
}

export const ShopBody = {
  fields: {
    cardTypes: {
      type: "select",
      label: "Card Types",
      options: [
        { label: "Default-Card", value: "default" },
        { label: "E-Commerce-Card", value: "eCommerce" },
        { label: "Horizontal-Card", value: "horizontal" },
      ],
    },
    HeadColor: tailwindTextColors,
    DescriptionColor: tailwindTextColors,
    PriceColor: color,
    CardBackgroundColor: tailwindBgColors,
    CategoryPadding: padding,
    CategoryMargin: margin,
    CategoryHeight: height,
    CategoryColor: tailwindTextColors,
    CategoryBackgroundColor: tailwindBgColors
  },
  render: ({ CardBackgroundColor, cardTypes, HeadColor, bodyColor, PriceColor, CategoryPadding, CategoryMargin, CategoryHeight, CategoryColor, CategoryBackgroundColor }) => {
    return (
      <ShopCard
        CategoryPadding={CategoryPadding}
        CategoryMargin={CategoryMargin}
        CategoryHeight={CategoryHeight}
        CategoryColor={CategoryColor}
        CategoryBackgroundColor={CategoryBackgroundColor}
        CardBackgroundColor={CardBackgroundColor}
        cardTypes={cardTypes}
        HeadColor={HeadColor}
        bodyColor={bodyColor}
        PriceColor={PriceColor}
      />
    )
  }
}
