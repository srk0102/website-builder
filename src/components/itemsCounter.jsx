//icons
import { FaSquarePlus, FaSquareMinus } from 'react-icons/fa6'

export const ItemsCounter = (props) => {

  const { value = 0, addItem, subItem } = props

  return (
    <>
      <div className="rounded-lg flex justify-items-between items-center gap-5 px-5 py-1.5 border-2">
        <FaSquareMinus className='text-2xl cursor-pointer' onClick={subItem} />
        <input className='flex-shrink-0 text-gray-900 dark:text-white border-0 bg-transparent text-sm font-normal focus:outline-none focus:ring-0 max-w-[2.5rem] text-center' value={value} readOnly />
        <FaSquarePlus className='text-2xl cursor-pointer' onClick={addItem} />
      </div>
    </>
  )
}
