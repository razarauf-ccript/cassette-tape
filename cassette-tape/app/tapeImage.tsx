import React, { ReactNode } from "react"

interface TapeImageComponentProps {
    onButtonClick: (message: string) => void; // Function taking a string and returning nothing
}

const TapeImage : React.FC<TapeImageComponentProps> = ({onButtonClick}) => {
    let [translate, setTranslate] = React.useState(false);
    // return <img onClick={() => {setTranslate(true)}} className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png"/>
    return (<img onClick={() => onButtonClick("Hello from Child!")} src="/cassette-tape.png"/>)
}

export default TapeImage;