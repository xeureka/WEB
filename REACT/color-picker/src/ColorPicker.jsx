import { useState } from "react"



function ColorPicker(){

    const [color,setColor] = useState('white')

    function changeColor(event){
        setColor(event.target.value)
    }


    return(
        <div className="cont">

            <p className="scren" style={{backgroundColor:color}}></p>

            <input type="color" onChange={changeColor}value={color}/>

            

        </div>
    )


    
}

export default ColorPicker