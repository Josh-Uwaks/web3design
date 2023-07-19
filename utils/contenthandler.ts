"use client"
import { SetStateAction, useState } from "react";


export default function ContentHandler(initialState: any){
    const [clicked, setClicked] = useState(initialState)

    const toggle = (index: any) => {
        if(clicked === index){
           return setClicked(null)
        }

        return setClicked(index)
    }

    return {clicked, toggle}
}