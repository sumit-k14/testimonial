import React, { useState } from 'react';
import "./Person.css"


function Person({ name, location, designation, message, lorem }) {
  const [loremString, setLoremString] = useState(lorem + lorem.substring(0, 50) + "...");
  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className="person">
      <h3>{message.substring(0, 30)}</h3>
      <p className="description">{loremString}</p>
      <div className="seeMore" >
        <p><b>{name}</b>, {designation}, {location}</p>
        <p
          className={`read_more ${isHidden === true ? "" : "hidden"}`}
          onClick={() => {
            setLoremString(lorem + lorem)
            setIsHidden(false)
          }}
        >
          READ FULL STORY
        </p>
        <p
          className={`read_more ${isHidden === true ? "hidden" : ""}`}
          onClick={() => {
            setIsHidden(true)
            setLoremString(lorem + lorem.substring(0, 50) + "...")
          }}
        >
          SHOW LESS
        </p>
      </div>
    </div>
  )
}

export default Person