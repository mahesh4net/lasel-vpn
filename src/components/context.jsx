import React, { createContext, useState, useRef, useEffect } from "react";

export const mycontext = createContext();

export default function Mycontextprovider({ children }) {
  const showmenu = useRef();
  const hidemenu = useRef();
  const mobilemenubox = useRef();
  const mobilemenu = useRef();
  let timeoutid;

  function toggleMenuOn() {
    clearTimeout(timeoutid);
    showmenu.current.classList.add("hidden");
    hidemenu.current.classList.add("active");
    mobilemenubox.current.style.visibility = "visible";

    mobilemenu.current.style.transform = "translateY(0)";
  }

  function toggleMenuOff() {
    hidemenu.current.classList.remove("active");
    showmenu.current.classList.remove("hidden");
    
    mobilemenu.current.style.transform = "translateY(-100%)";

    timeoutid = setTimeout(() => {
      mobilemenubox.current.style.visibility = "hidden";
    }, 200);
  }

  useEffect(() => {
    let Resizetimeout;

    function handleResize() {
      clearTimeout(Resizetimeout);
      if (window.innerWidth > 768) {
        Resizetimeout = setTimeout(() => {
          console.log("handle resixe called");
          hidemenu.current.classList.remove("active");
          showmenu.current.classList.remove("hidden");
          mobilemenu.current.style.transform = "translateY(-100%)";
          mobilemenubox.current.style.visibility = "hidden";
        }, 100);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(Resizetimeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <mycontext.Provider
        value={{
          showmenu,
          hidemenu,
          mobilemenu,
          mobilemenubox,
          toggleMenuOn,
          toggleMenuOff,
        }}
      >
        {children}
      </mycontext.Provider>
    </>
  );
}
