import { Header } from "./components/Header"
import React, { useState, useEffect } from "react";
import { PageInicializacao } from "./PageInicializacao";


function App() {
  const [showWelcomePage, setShowWelcomePage] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setShowWelcomePage(false);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
       {showWelcomePage ? (
        <PageInicializacao />
      ) : (
        <>
          <Header />
        </>
      )}
      
    </>
  )
}

export default App
