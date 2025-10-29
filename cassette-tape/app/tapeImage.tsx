"use client"
import React, { ReactNode } from "react"

export default function TapeImage() : ReactNode | Promise<ReactNode> {
    let [translate, setTranslate] = React.useState(false);
    return <img onClick={() => {setTranslate(true)}} className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png"/>
}