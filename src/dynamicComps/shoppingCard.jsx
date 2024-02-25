import { useState } from "react";

//importing compos
import { ItemsCounter } from "../components";

export const ShoppingCardType1 = (props) => {

  const { footer, image } = props;

  const [value, setValue] = useState(0)

  const addItem = () => {
    setValue(value + 1)
  }

  const subItem = () => {
    setValue(value > 0 ? value - 1 : 0)
  }

  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {image && <a href="#">
          <img className="rounded-t-lg" src="" alt="" />
        </a>}
        <div className="p-5 flex flex-col text-start">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        </div>
        {footer && <div className="flex items-center justify-around p-3">
          <ItemsCounter addItem={addItem} subItem={subItem} value={value} />
          <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">$599</a>
        </div>}
      </div>

    </>
  );
};