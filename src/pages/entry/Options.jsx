import axios from "axios"
import { useState, useEffect } from "react";
import ScoopOption from './ScoopOption';
import {Row} from 'react-bootstrap'

 const Options = ({optionType})=>{
    console.log(optionType,"type")

    const [items,setItems]= useState([]);

    useEffect(() => {
        axios
          .get(`http://localhost:3030/${optionType}`)
          .then((response) => setItems(response.data))
        //   .catch((error) => setError(true));
      }, [optionType]);


    const ItemComponent= optionType === "Scoop" ? ScoopOption: null;
    const optionItems = items.map((item) => (
        <ItemComponent
          key={item.name}
          name={item.name}
          imagePath={item.imagePath}
        // //   updateItemCount={(itemName, newItemCount) =>
        // //     updateItemCount(itemName, newItemCount, optionType)
        //   }
        />
      ));



    return <Row>
        {optionItems}
        {/* {items.map(element=> <ItemComponent key={element.name} name={element.name} imagePath= {element.imagePath} />)} */}
    </Row>
}

export default Options

