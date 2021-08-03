import workDesign from "../assets/images/work-design..jpeg";
import Workdesign1 from "../assets/images/Work-design.jpeg";
import Workdesign2 from "../assets/images/work-design2.jpeg";
import workdesign3 from "../assets/images/work-design13.jpeg";
import work from "../assets/images/Work.jpeg";
import work2 from "../assets/images/work2.jpeg";
import work3 from "../assets/images/Work3.jpeg";
import work4 from "../assets/images/work4.jpeg";
import work5 from "../assets/images/work5.jpeg";
import work6 from "../assets/images/work6.jpeg";
import work7 from "../assets/images/work7.jpeg";
import work8 from "../assets/images/work8.jpeg";
import work9 from "../assets/images/work9-proud.jpeg";
import work10 from "../assets/images/work9.jpeg";
import work11 from "../assets/images/work10.jpeg";
import work12 from "../assets/images/work11.jpeg";
import work13 from "../assets/images/work12.jpeg";
import work14 from "../assets/images/workmain.jpeg";

import { Container } from "react-bootstrap";

const WorkPage = () => {
  const Works = [
    {
      image: work14,
      title: "Main work",
      text: "main work description is below",
    },
    {
      image: workDesign,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: Workdesign1,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: Workdesign2,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: workdesign3,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work2,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work3,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work4,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work5,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work6,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work7,
      title: "Images Title",
      text: "Product details goes here",
    },

    {
      image: work8,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work9,
      title: "Images Title",
      text: "Product details goes here",
    },

    {
      image: work10,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work11,
      title: "Images Title",
      text: "Product details goes here",
    },

    {
      image: work12,
      title: "Images Title",
      text: "Product details goes here",
    },
    {
      image: work13,
      title: "Images Title",
      text: "Product details goes here",
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
            <button className="btn btn-primary">Select</button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Container>
      <div class="row row-cols-1 row-cols-md-3 lg-5 size">
        {Works.map(renderCard)}
      </div>
    </Container>
  );
};

export default WorkPage;
