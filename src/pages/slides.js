import slide from "../assets/images/design2.jpeg";
import slides12 from "../assets/images/design12.jpeg";
import slides15 from "../assets/images/design15.jpeg";
import slides18 from "../assets/images/design18.jpeg";
import slides20 from "../assets/images/design20.jpeg";
import slides1 from "../assets/images/slides1.jpeg";

import { Container } from "react-bootstrap";

const SlidePage = () => {
  const slides = [
    {
      image: slide,
      title: "Main work",
      text: "main work description is below",
    },
    {
      image: slides12,
      title: "Image Title",
      text: "main work description is below",
    },
    {
      image: slides15,
      title: "Image Title",
      text: "main work description is below",
    },
    {
      image: slides18,
      title: "Image Title",
      text: "main work description is below",
    },
    {
      image: slides20,
      title: "Image Title",
      text: "main work description is below",
    },
    {
      image: slides1,
      title: "Image Title",
      text: "main work description is below",
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
        {slides.map(renderCard)}
      </div>
    </Container>
  );
};

export default SlidePage;
