import React from "react";
import designwork from "../assets/images/design-work12.jpeg";
import butterfly from "../assets/images/butterfly-design.jpeg";
import designwork1 from "../assets/images/design-work14.jpeg";
import design from "../assets/images/design.jpeg";
import design3 from "../assets/images/design3.jpeg";
import design4 from "../assets/images/design4.jpeg";
import design5 from "../assets/images/design5.jpeg";
import design6 from "../assets/images/design6.jpeg";
import design7 from "../assets/images/design7.jpeg";
import design8 from "../assets/images/design8.jpeg";
import design9 from "../assets/images/design9.jpeg";
import design10 from "../assets/images/design10.jpeg";
import design11 from "../assets/images/design11.jpeg";
import design13 from "../assets/images/design13.jpeg";
import design14 from "../assets/images/design14.jpeg";
import design16 from "../assets/images/design16.jpeg";
import design17 from "../assets/images/design17.jpeg";
import design19 from "../assets/images/design19.jpeg";
import designmain from "../assets/images/designmain.jpeg";
import designlast from "../assets/images/designlast.jpeg";

import { Container } from "react-bootstrap";

const Design = () => {
  const [select, setSelect] = React.useState("Select");
  const [select1, setSelect1] = React.useState("Select");
  const [select2, setSelect2] = React.useState("Select");
  const [select3, setSelect3] = React.useState("Select");
  const [select4, setSelect4] = React.useState("Select");
  const [select5, setSelect5] = React.useState("Select");
  const [select6, setSelect6] = React.useState("Select");
  const [select7, setSelect7] = React.useState("Select");
  const [select8, setSelect8] = React.useState("Select");
  const [select9, setSelect9] = React.useState("Select");
  const [select10, setSelect10] = React.useState("Select");
  const [select11, setSelect11] = React.useState("Select");
  const [select12, setSelect12] = React.useState("Select");
  const selectHandler = () => {};

  const designs = [
    {
      image: designmain,
      title: "Main work",
      text: "main work description is below",
      btn: select,
    },
    {
      image: design,
      title: "Images Title",
      text: "Product details goes here",
      btn: select1,
    },
    {
      image: designwork,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: designwork1,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },

    {
      image: design3,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design4,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design5,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design6,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design7,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design8,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design9,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design10,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design11,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },

    {
      image: design13,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design14,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },

    {
      image: design16,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: design17,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },

    {
      image: design19,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
    {
      image: designlast,
      title: "Images Title",
      text: "Product details goes here",
      btn: "select",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <div class="col cardmain">
        <div class="card">
          <img
            src={card.image}
            class="card-img-top"
            alt="..."
            style={{ height: "330px" }}
          />
          <div class="card-body">
            <h5 class="card-title">{card.title}</h5>
            <p class="card-text">{card.text}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container class="others">
      <div class="row row-cols-1 row-cols-md-3 lg-5 size">
        {designs.map(renderCard)}
      </div>
    </Container>
  );
};

export default Design;
