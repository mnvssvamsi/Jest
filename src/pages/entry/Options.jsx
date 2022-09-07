import axios from "axios"
import { useState, useEffect } from "react";
import ScoopOption from './ScoopOption';

 const Options = ({optionType})=>{

    const [items,setItems]= useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:3030/${optionType}`)
        .then(res => setItems(res.data))
        .catch(err =>console.log(err))
    },[optionType])

    const ItemComponent= optionType === "Scoop" ? ScoopOption: null;

    return <Row>
        {items.map(element=> <ItemComponent key={element.name} name={element.name} imagePath= {element.imagePath} />)}
    </Row>
}

export default Options

