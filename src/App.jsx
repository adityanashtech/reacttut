import React, { useState } from "react";
import Form from "./Forms";
import {defineCustomElements} from "luciferwebcomponent/loader";
import DigitalClock from "./Digital";




function App(){
    return(
        <>
       <Form/>

        </>
    )
}

export default App;
defineCustomElements(window);
