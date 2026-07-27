import { Outlet } from 'react-router-dom'
import {  Main } from 'strivui'
import Header from '../Header'
import CFooter from '../Footer'
import Loader from '../Loader'
import { useEffect, useState } from 'react'

const Layout = () => {
      const [isTelegraphOpen, setIsTelegraphOpen] = useState(false);
  const [saloonLights, setSaloonLights] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const hideLoader = () => {
      // Small delay for smoother transition
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader);
    }

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <Main
    className={`min-h-screen overflow-x-hidden p-0 m-0 ${
        saloonLights
          ? "bg-gradient-to-r from-amber-900 via-stone-800 to-stone-700 text-white"
          : "bg-amber-900 text-amber-50"
      }`}
    >
         <Header
        saloonLights={saloonLights}
        setSaloonLights={setSaloonLights}
        setIsTelegraphOpen={setIsTelegraphOpen}
      />
        <Outlet/>
        <CFooter/>
    </Main>
  )
}

export default Layout
