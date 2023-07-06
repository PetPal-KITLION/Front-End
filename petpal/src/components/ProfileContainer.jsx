import React, { useState } from "react";
import "../style/ProfileContainer.css";

const ProfileContainer = () => {
  const [modify, setModify] = useState("no");
  const [values, setValues] = useState({
    personName: "",
    personAddress: "",
    personAge: "",
    personReview: "",
    animalName: "",
    animalSpecies: "",
    animalAge: "",
    animalFeature: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((preValue) => ({
      ...preValue,
      [name]: value,
    }));
    console.log(values);
  };

  const handleModify = (e) => {
    if (modify === "no") {
      setModify("yes");
    } else {
      setModify("no");
    }
  };

  return (
    <div id="ProfileParentDiv">
      <div id="ProfileDiv">
        <div id="left">
          <div id="profile">
            <div id="image">
              <p>사진</p>
            </div>
            <div id="content">
              <p>
                이름:{" "}
                <input
                  value={values.personName}
                  name="personName"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                거주지:{" "}
                <input
                  value={values.personAddress}
                  name="personAddress"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                나이:{" "}
                <input
                  value={values.personAge}
                  name="personAge"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                리뷰후기:{" "}
                <input
                  value={values.personReview}
                  name="personReview"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
          <div id="profile">
            <div id="image">
              <p>사진</p>
            </div>
            <div id="content">
              <p>
                이름:{" "}
                <input
                  value={values.animalName}
                  name="animalName"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                종:{" "}
                <input
                  value={values.animalSpecies}
                  name="animalSpecies"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                나이:{" "}
                <input
                  value={values.animalAge}
                  name="animalAge"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
              <p>
                특이사항:{" "}
                <input
                  value={values.animalFeature}
                  name="animalFeature"
                  disabled={modify === "yes" ? false : true}
                  onChange={handleChange}
                />
              </p>
            </div>
          </div>
          <div id="modify">
            <button onClick={handleModify}>
              {modify === "no" ? "수정하기" : "수정완료"}
            </button>
          </div>
        </div>
        <div id="service">
          <img
            src={`${process.env.PUBLIC_URL}/image/service.png`}
            alt="service"
            style={{ width: "65%", textAlign: "right" }}
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileContainer;
