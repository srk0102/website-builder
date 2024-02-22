import { useEffect, useState } from 'react'

//utils
import { DynamicComponent } from './utils'

//api
import { getNav } from '../api'

export const NavBar = () => {

  const [nav, setNav] = useState({})


  useEffect(() => {
    const fetchNav = async () => {
      try {
        const fetchedNav = await getNav(1);
        setNav(fetchedNav.attributes);
      } catch (error) {
        console.error("Error fetching nav:", error);
      }
    }
    fetchNav()
  }, [])

  if (Object.keys(nav).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DynamicComponent componentName="NavBar" type={nav.navbarType} {...nav} />
    </>
  )
}
