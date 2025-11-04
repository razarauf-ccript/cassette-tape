"use client"
import React from "react"
import { GetTape, UpdateTape } from "./action";

interface FormData {
  id: number;
  name: string;
  note: string;
  backgroundColor: string;
  spotifyplaylist: string;
}

export default function TapeCreator({ id }: { id: number }) {

  let [translate, setTranslate] = React.useState(false);
  let [editting, setEditting] = React.useState(false);

  const [formData, setFormData] = React.useState<FormData>({ id: id, name: "My Mixtape", note: "New Note", spotifyplaylist: "https://spotify.com", backgroundColor: "" })

  function editableOnClickHandler() {
    setEditting((prevValue) => !prevValue);
  }

  const onClickBGChange = (e: React.ChangeEvent<any>) => {
    document.body.style.backgroundColor = e.target.style.backgroundColor;
    setFormData(prevData => ({
      ...prevData,
      backgroundColor: e.target.style.backgroundColor
    }))

    console.log(formData)
  }

  function changeHandler(e: React.ChangeEvent<any>) {
    const { name, value } = e.target;

    // console.log(name + " "  + value)

    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  function onSubmitHandler(e: React.ChangeEvent<any>) {
    console.log("form submit")
    e.preventDefault();
    console.log(formData);
    UpdateTape(formData.id, formData.name, formData.backgroundColor, formData.note, formData.spotifyplaylist);
  }

  React.useEffect(() => {
    // console.log("useeffect called")
    setTranslate(true);
    GetTape(id)
      .then((data) => {
        console.log(data);
        setFormData(
          {
            id: data.id,
            name: data.cassette_name,
            backgroundColor: data.background_color,
            note: data.note,
            spotifyplaylist: data.spotify_link
          });
          document.body.style.backgroundColor = data.background_color;
      });
  }, []);

  return (
    <div className="parent">
      <div className="icons-parent-holder" style={{ alignSelf: "end" }}>
        <div className="icons-parent">
          <img className="icons" onClick={editableOnClickHandler} title={editting ? `edit?` : 'preview'} src={editting ? `/pen.png` : `/visible.png`} />
          <img className="icons" src="/send.png" />
        </div>
      </div>
      <img className={`cassetteTape ${translate ? "translateImg" : ""}`} src="/cassette-tape.png" />
      <h4>Click on the image to start creating your mixtape</h4>
      {formData.name && <h2 className="mixtape-title">{formData.name}</h2>}
      {formData.note && <h3 className="mixtape-title">{formData.note}</h3>}
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
          <input className="" type="submit" value="Submit" />
        </form>
      }
    </div>
  );
}
