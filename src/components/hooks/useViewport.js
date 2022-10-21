import { useEffect, useState } from "react"

export const useViewport =()=>{
    const [windowWidth, SetWindowWidth] = useState(window.innerWidth || document.documentElement.clientWidth);

    useEffect(()=>{
        const handleWindowWidth = () =>{
        const width = window.innerWidth || document.documentElement.clientWidth;
        SetWindowWidth(width)    
        }
        handleWindowWidth();
        window.addEventListener('resize', handleWindowWidth);
        return ()=>{
            window.removeEventListener('resize', handleWindowWidth);
        }
    },[])

    return[windowWidth]
}