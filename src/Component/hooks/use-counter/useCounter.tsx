import { useState } from "react";
import { UseCounterProps } from "./useCounter.types";

export const userCounter =({initialCount=0}:UseCounterProps= {})=>{
    const [count,setcount]=useState(initialCount);
    const increment = () => setcount(count + 1);   
    const decrement = () => setcount(count - 1);   
    return {count,increment,decrement}
}