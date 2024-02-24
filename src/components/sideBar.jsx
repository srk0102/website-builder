import { useEffect, useState } from 'react'

//utils
import { DynamicComponent } from './utils'

//api
import { getSideBar } from '../api'

export const SideBar = () => {

  const [side, setSide] = useState({})


  useEffect(() => {
    const fetchSide = async () => {
      try {
        const fetchedSide = await getSideBar(10);
        setSide(fetchedSide.attributes);
      } catch (error) {
        console.error("Error fetching side:", error);
      }
    }
    fetchSide()
  }, [])

  if (Object.keys(side).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicComponent componentName="SideBar" type={side.sidebarType} {...side} />
    </>
  )
}
