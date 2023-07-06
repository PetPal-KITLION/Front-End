import React from "react";
// import { Link } from "react-router-dom";
import Header from "../components/Header";
import Main1 from "../components/Main1";
import Main2 from "../components/Main2";
import Main3 from "../components/Main3";
import Main4 from "../components/Main4";
import Main5 from "../components/Main5";
import { SectionsContainer, Section } from "react-fullpage";

const MainPage = () => {
  const options = {
    anchors: ["sectionOne", "sectionTwo", "sectionThree", "sectionFour"],
  };

  return (
    <SectionsContainer {...options}>
      <Section>
        <Header />
        <Main1 />
      </Section>
      <Section>
        <Main2 />
      </Section>
      <Section>
        <Main3 />
      </Section>
      <Section>
        <Main4 />
        <Main5 />
      </Section>
    </SectionsContainer>
  );
};
export default MainPage;