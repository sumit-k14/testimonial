import React, { useState, useEffect } from 'react'
import Avatar from '@material-ui/core/Avatar'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Person from './Person'
import './Testimonials.css'

function Testimonials() {
  const [personList, setPersonList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const personResult = await fetch("https://testimonialapi.toolcarton.com/api");
      const person = await personResult.json();
      setPersonList(person);
    };
    getData();
  }, []);

  const [index, setIndex] = useState(0);
  const [name, setName] = useState("Lance Jarvis");
  const [location, setLocation] = useState("London, UK");
  const [designation, setDesignation] = useState("General Manager");
  const [message, setMessage] = useState("We have been using product for last one year, and I have to say that it has transformed the way we do business. Thank you for awesome service.");
  const [lorem, setLorem] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non fringilla leo. Phasellus dui erat, ultrices sollicitudin ante quis, convallis varius odio. Quisque sed tristique ante.");

  return (
    <div className="testimonial" >
      <h5>TESTIMONIALS</h5>
      <Person
        name={name}
        location={location}
        designation={designation}
        message={message}
        lorem={lorem}
      />


      <div className="avatar_div">
        <div id="avatarId" className="avatar">
          {personList.map((person) => {
            return (<Avatar
              onClick={() => {
                setName(person.name)
                setLocation(person.location)
                setDesignation(person.designation)
                setLorem(person.lorem)
                setMessage(person.message)
                setIndex(person.id - 1)
              }}
              className={`avatar_img ${person.id - 1 === index ? "blue_ring" : ""}`}
              src={person.avatar}
            />)
          })}
        </div>
        <div className="arrow">
          <ArrowBackIcon
            className="arrow_btn"
            onClick={() => {
              setIndex((index - 1 + personList.length) % personList.length)
              setName(personList[index].name)
              setLocation(personList[index].location)
              setDesignation(personList[index].designation)
              setLorem(personList[index].lorem)
              setMessage(personList[index].message)

              const conent = document.querySelector('#avatarId');
              conent.scrollLeft -= 80;
              if (index === 0) conent.scrollLeft += 80 * (personList.length);
            }}
          />
          <ArrowForwardIcon
            className="arrow_btn btn_right"
            onClick={() => {
              setIndex((index + 1 + personList.length) % personList.length)
              setName(personList[index].name)
              setLocation(personList[index].location)
              setDesignation(personList[index].designation)
              setLorem(personList[index].lorem)
              setMessage(personList[index].message)

              const conent = document.querySelector('#avatarId');
              conent.scrollLeft += 80;

              if (index === personList.length - 1) conent.scrollLeft -= 80 * (personList.length);
            }}
          />
        </div>
      </div>

    </div>
  )
}

export default Testimonials


