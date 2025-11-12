"use client"
import React from "react"
import { GetTape, UpdateTape } from "./action";
import SpotifyPlayer from "./spotifyPlayer";

interface FormData {
  id: number;
  name: string;
  note: string;
  backgroundColor: string;
  fontColor: string;
  spotifyplaylist: string;
}

export default function TapeCreator({ id }: { id: number }) {

  let [translate, setTranslate] = React.useState(false);
  let [editting, setEditting] = React.useState(false);
  let [submitted, setSubmitted] = React.useState(false);
  let [animateShareBTN, setAnimateShareBTN] = React.useState(false);

  const [formData, setFormData] = React.useState<FormData>({ id: id, name: "My Mixtape", note: "New Note", spotifyplaylist: "https://spotify.com", backgroundColor: "", fontColor: "" })

  function editableOnClickHandler() {
    setEditting((prevValue) => !prevValue);
  }

  const onClickBGChange = (e: React.ChangeEvent<any>) => {

    // console.log(e.target.style.backgroundColor)

    if (e.target.style.backgroundColor == "rgb(252, 249, 234)") {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
      document.body.style.color = "#a8a699ff";
    } else if (e.target.style.backgroundColor == "rgb(168, 187, 163)") {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
      document.body.style.color = "#687465ff";
    } else if (e.target.style.backgroundColor == "rgb(250, 129, 47)") {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
      document.body.style.color = "#a95720ff";
    } else if (e.target.style.backgroundColor == "rgb(255, 189, 189)") {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
      document.body.style.color = "#a47777ff";
    } else if (e.target.style.backgroundColor == "rgb(229, 208, 172)") {
      document.body.style.backgroundColor = e.target.style.backgroundColor;
      document.body.style.color = "#a6977eff";
    }

    setFormData(prevData => ({
      ...prevData,
      backgroundColor: e.target.style.backgroundColor,
      fontColor: document.body.style.color
    }))

    // console.log(formData)
  }

  function changeHandler(e: React.ChangeEvent<any>) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function onSubmitHandler(e: React.ChangeEvent<any>) {
    console.log("form submit")
    e.preventDefault();
    UpdateTape(formData.id, formData.name, formData.backgroundColor, formData.note, formData.spotifyplaylist, formData.fontColor);
    setSubmitted(true);
  }

  function shareOnClickHandler(){
    navigator.clipboard.writeText(window.location.href)
    setAnimateShareBTN(true);
  }

  React.useEffect(() => {
    setTranslate(true);
    GetTape(id)
      .then((data) => {
        setFormData(
          {
            id: data.id,
            name: data.cassette_name,
            backgroundColor: data.background_color,
            fontColor: data.fontColor,
            note: data.note,
            spotifyplaylist: data.spotify_link
          });
        document.body.style.backgroundColor = data.background_color;
        document.body.style.color = data.font_color;
      });

  }, []);

  React.useEffect(() => {
    if (animateShareBTN) {
      const timer = setTimeout(() => {
        setAnimateShareBTN(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [animateShareBTN])

  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        setSubmitted(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [submitted])

  return (
    <>
    <div className="parent">

      <div className="icons-parent-holder" style={{ alignSelf: "end" }}>
        <div className="icons-parent">
          <img className="icons" onClick={editableOnClickHandler} title={editting ? `edit?` : 'preview'} src={editting ? `/pen.png` : `/visible.png`} />
          <img className={`icons ${animateShareBTN && "translateShareIcon"}`} title="Click to copy" onClick={shareOnClickHandler} src="/send.png" />
        </div>
      </div>
      {formData.name && <h2 className="mixtape-title">{formData.name}</h2>}
      <img className={`cassetteTape ${translate && "translateImg"}`} style={{ zIndex: -99 }} src="/cassette-tape-2.png" />
      <div className="spotify-player">
        <SpotifyPlayer spotifyPlaylist={formData.spotifyplaylist} />

      </div>

      {formData.note && <h3 className="mixtape-note">{formData.note}</h3>}
      {!editting &&
        <form className="input-parent" onSubmit={onSubmitHandler} >
          <div className="button-group">
            <input className="button" type="button" name="backgroundColor" onClick={onClickBGChange} style={{ backgroundColor: "#FCF9EA" }} />
            <input className="button" type="button" name="backgroundColor" onClick={onClickBGChange} style={{ backgroundColor: "#A8BBA3" }} />
            <input className="button" type="button" name="backgroundColor" onClick={onClickBGChange} style={{ backgroundColor: "#FA812F" }} />
            <input className="button" type="button" name="backgroundColor" onClick={onClickBGChange} style={{ backgroundColor: "#FFBDBD" }} />
            <input className="button" type="button" name="backgroundColor" onClick={onClickBGChange} style={{ backgroundColor: "#E5D0AC" }} />
          </div>
          <input className="input-box" type="text" name="name" value={formData.name || ""} onChange={changeHandler} placeholder="Title of your Mixtape" />
          <input className="input-box2" type="text" name="note" value={formData.note || ""} onChange={changeHandler} placeholder="Note" />
          <input className="input-box2" type="text" name="spotifyplaylist" value={formData.spotifyplaylist || ""} onChange={changeHandler} placeholder="Spotify Playlist Link" />
          <input className="button-submit" type="submit" value="Submit" />
        </form>        
      }

      <div className="toast" style={submitted ? {display: "block"} : {display: "none"}}>
        Form Submitted!
      </div>
      <div className="space"></div>
    </div>
    
    </>
  );
}