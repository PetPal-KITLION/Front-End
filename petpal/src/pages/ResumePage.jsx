import React, { useState } from "react";
import SitterInfo from "../components/SitterInfo";
import "../style/SitterApply.css";
import SitterExp from "../components/SitterExp";
import SitterComment from "../components/SitterComment";
import SitterApplyHeader from "../components/SitterApplyHeader";
import SitterButton from "../components/SitterButton";
const ResumePage = () => {
  const [values, setValues] = useState({
    rnn: "",
    address: "",
    family: "",
    number: "",
    lisence_hold: "",
    pet_experience: "",
    pet_species: "",
    exprience_essay: "",
    allergy_essay: "",
  });
  return (
    <div id="sitterApplyDivP">
      <div id="sitterApplyDiv">
        <SitterApplyHeader />
        <SitterInfo values={values} setValues={setValues} />
        <SitterExp values={values} setValues={setValues} />
        <SitterComment values={values} setValues={setValues} />
        <SitterButton values={values} />
      </div>
    </div>
  );
};

export default ResumePage;
