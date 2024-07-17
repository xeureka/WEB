import React,{useState,useEffect} from "react"


function Mycomponent(){
    const [width,setWidth] = useState(window.innerWidth);
    const [height,setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener('resize',handleResize)
        console.log('Event listener added')

        return () =>{
            window.removeEventListener('resize',handleResize)
            console.log('Event listered removed')
        }
        
    },[])
    
    useEffect(() => {
        document.title = `Size : ${width} X ${height}`
    })
    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }
    
    return(
        <>
          <p>Window Width : {width}px</p>
          <p>Window Height: {height}px</p>  
            
        </>
    )
}

export default Mycomponent