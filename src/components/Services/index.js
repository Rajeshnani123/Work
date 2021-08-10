import React from "react";
import Icon1 from "../../images/svg-6.svg";
import Icon2 from "../../images/svg-7.svg";
import Icon3 from "../../images/svg-8.svg";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesWrapper,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";
const Services = () => {
  return (
    <ServicesContainer>
      <ServicesH1> Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduces expenses</ServicesH2>
          <ServicesP> we help to repair your glass</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Virtual Offices</ServicesH2>
          <ServicesP> we help to repair your glass</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Affortable</ServicesH2>
          <ServicesP> we help to repair your glass</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
