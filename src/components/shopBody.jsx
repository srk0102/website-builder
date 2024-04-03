import { tailwindBgColors, headColor, bodyColor, color } from './utils'
import { indianMenu } from './test'

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
    headColor,
    bodyColor,
    PriceColor: color,
    tailwindBgColors,
  },
  render: ({ tailwindBgColors, cardTypes, headColor, bodyColor, priceColor }) => {
    return (
      <>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 p-2'>
          {
            indianMenu.map((item) => {
              return (
                <>
                  {(cardTypes === 'default' || !cardTypes) && <div className={`max-w-sm ${tailwindBgColors} border border-gray-200 rounded-lg shadow`}>
                    <img className="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
                    <div className="p-5">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: headColor }}>{item.name}</h5>
                      <p className="mb-3 font-normal" style={{ color: bodyColor }}>{item.description}</p>
                      <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                        ${item.price}
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>
                  </div>}
                  {cardTypes === 'eCommerce' && <div className={`w-full max-w-sm ${tailwindBgColors} border border-gray-200 rounded-lg shadow`}>
                    <img className="p-8 rounded-t-lg" src="/docs/images/products/apple-watch.png" alt="product image" />
                    <div className="px-5 pb-5">
                      <h5 className="text-xl font-semibold tracking-tight" style={{ color: headColor }}>{item.name}</h5>
                      <p className="mb-3 font-normal" style={{ color: bodyColor }}>{item.description}</p>
                      <div className="flex items-center justify-between pt-3">
                        <span className="text-3xl font-bold" style={{ color: priceColor }}>${item.price}</span>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                      </div>
                    </div>
                  </div>
                  }
                  {cardTypes === 'horizontal' && <div className={`flex flex-row items-center ${tailwindBgColors} border border-gray-200 rounded-lg shadow md:max-w-xl hover:bg-gray-100`}>
                    <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight" style={{ color: headColor }}>{item.name}</h5>
                      <p className="mb-3 font-normal" style={{ color: bodyColor }}>{item.description}</p>
                      <span className="text-3xl font-bold" style={{ color: priceColor }}>${item.price}</span>
                      <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Add to cart</a>
                    </div>
                  </div>
                  }
                </>
              )
            })
          }
        </div>
      </>
    )
  }
};