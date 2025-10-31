"use client"
import React from "react"
import Image from "next/image";
import { redirect, RedirectType } from 'next/navigation'
import { CreateTape } from "./action";

export default function TapeCreator({ id }: { id: string }) {

  React.useEffect(() => {
    setTranslate(true);
  }, []);

  let [translate, setTranslate] = React.useState(false);

  return (
    <div className="parent">
      <div className="icons-parent-holder" style={{alignSelf: "end"}}>
        <div className="icons-parent">
          <img className="icons" src="/pen.png" />
          <img className="icons" src="/send.png" />
        </div>
      </div>
      <img className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png" />
      <h4>Click on the image to start creating your mixtape</h4>
      <h4 className="note">My Mixtape</h4>
      <div className="button-group">
        <input className="button" type="button" value="bg" style={{backgroundColor: "#FCF9EA"}} />
        <input className="button" type="button" value="bg" style={{backgroundColor: "#FAB12F"}} />
        <input className="button" type="button" value="bg" style={{backgroundColor: "#FA812F"}} />
        <input className="button" type="button" value="bg" style={{backgroundColor: "#FFBDBD"}} />
        <input className="button" type="button" value="bg" style={{backgroundColor: "#E5D0AC"}} />
      </div>
      <input className="input-box" type="text"/>
    </div>
  );
}
