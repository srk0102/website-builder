import { useEffect, useState } from 'react'

//utils
import { DynamicComponent } from './utils'

//api
import {  getFooter } from '../api'

export const Footer = () => {

  const [foot, setFoot] = useState({})


  useEffect(() => {
    const fetchFoot = async () => {
      try {
        const fetchedFoot = await getFooter(1);
        setFoot(fetchedFoot.attributes);
        console.log(fetchedFoot)
      } catch (error) {
        console.error("Error fetching foot:", error);
      }
    }
    fetchFoot()
  }, [])

  if (Object.keys(foot).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicComponent componentName="Footer" type={foot.footerType} {...foot} />
    </>
  )
}
