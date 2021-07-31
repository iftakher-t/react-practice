import React ,{useState, useEffect} from 'react';

    function HookMousePosition(){
        const [x,setX]=useState(0)
        const [y,setY]=useState(0)
    }
    const mousePosition = (e)=>{
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        window.addEventListener('mousemove',mousePosition)


        return ()=>{ // this is for unmount 
            window.removeEventListener('mousemove',mousePosition)
        }
    },[])

    return {
        <div>
            <h3> </h3>
        </div>
    }
