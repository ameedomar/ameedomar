import React, { useState } from "react";
import "./ResumeBox.css";
import coding from "../../assets/icons/coding.png";
import giv_love from "../../assets/icons/give-love.png";
import magistrate from "../../assets/icons/magistrate.png";
import worker from "../../assets/icons/worker.png";
import experience from "../../assets/icons/experience.png";
function ResumeBox() {
  const [education, setEducation] = useState(true);
  const [experiance, setExperiance] = useState(false);
  const [progrSkills, setProgSkills] = useState(false);
  const [projects, setProjects] = useState(false);
  const [interests, setInterests] = useState(false);
  const programmingSkills = ["HTML", "CSS", "JavaScript", "C++", "Python"];
  const power = [82, 78, 75, 86, 80];

  const programmingSkills2 = [
    "React JS",
    "React Native",
    "Node Js",
    "Git Hup",
    "Arduino",
  ];
  function displayFeild(event) {
    if (event.currentTarget.id == "education-btn") {
      setEducation(true);
      setExperiance(false);
      setProgSkills(false);
      setProjects(false);
      setInterests(false);
    } else if (event.currentTarget.id == "experiance-btn") {
      setEducation(false);
      setExperiance(true);
      setProgSkills(false);
      setProjects(false);
      setInterests(false);
    } else if (event.currentTarget.id == "prog-btn") {
      setEducation(false);
      setExperiance(false);
      setProgSkills(true);
      setProjects(false);
      setInterests(false);
    } else if (event.currentTarget.id == "projects-btn") {
      setEducation(false);
      setExperiance(false);
      setProgSkills(false);
      setProjects(true);
      setInterests(false);
    } else if (event.currentTarget.id == "interests-btn") {
      setEducation(false);
      setExperiance(false);
      setProgSkills(false);
      setProjects(false);
      setInterests(true);
    }
  }
  return (
    <div className="resume-component">
      <div className="outer-layer">
        <div className="left-layer">
          <div className="icons">
            <img className="icon" src={magistrate} alt="no-img" />
            <img className="icon" src={experience} alt="no-img" />
            <img className="icon3" src={coding} alt="no-img" />
            <img className="icon" src={worker} alt="no-img" />
            <img className="icon" src={giv_love} alt="no-img" />
          </div>
          <div className="btns">
            <button
              id="education-btn"
              className="cat-btns"
              onClick={displayFeild}
            >
              Education
            </button>
            <button
              id="experiance-btn"
              className="cat-btns"
              onClick={displayFeild}
            >
              Experience
            </button>
            <button id="prog-btn" className="cat-btns" onClick={displayFeild}>
              Programming Skills
            </button>
            <button
              id="projects-btn"
              className="cat-btns"
              onClick={displayFeild}
            >
              projects
            </button>
            <button
              id="interests-btn"
              className="cat-btns"
              onClick={displayFeild}
            >
              Interests
            </button>
          </div>
        </div>
        <div className="right-layer">
          {education && (
            <div id="education">
              <div className="education">
                <ul>
                  <div className="first-entry">
                    <div className="university">
                      <li className="title-text">
                        An Njah National University
                      </li>
                      <p className="duration"> 2017-2022</p>
                    </div>
                    <p> Bachelor's degree in Computer Engineering</p>
                  </div>
                  <div className="second-entry">
                    <div className="school">
                      <li className="title-text">
                        Holy Qur`an Academic School{" "}
                      </li>
                      <p className="duration"> 2006-2017</p>
                    </div>
                    <p> Elementary, middle and high school</p>
                  </div>
                </ul>
              </div>
            </div>
          )}
          {experiance && (
            <div className="tranning-history">
              <ul>
                <div className="tranning-first-entry">
                  <div className="title-line">
                    <li className="title-text">Gasa Sky Geeks</li>
                    <p className="tranning-duration"> Sep-Jan, 2023</p>
                  </div>
                  <p className="tranning-subject"> React Training </p>
                  <p className="tranning-details">
                    Completed an intensive training course with a trainer
                    specialized in the field of react, which lasted for 4 months
                  </p>
                </div>
                <div className="tranning-second-entry">
                  <div className="title-line">
                    <li className="title-text"> Foothill Company</li>
                    <p className="tranning-duration"> May-Sep, 2021</p>
                  </div>
                  <p className="tranning-subject"> Front End Training</p>
                  <p className="tranning-details">
                    {" "}
                    I had a training opportunity with a strong company and was
                    firmly established in the basics of front end and react
                  </p>
                </div>
                <div className="tranning-third-entry">
                  <div className="title-line">
                    <li className="title-text"> Infinite tiers group, ITG</li>
                    <p className="tranning-duration"> Feb-May, 2020</p>
                  </div>
                  <p className="tranning-subject">
                    {" "}
                    Basic HTML CSS JS Concepts
                  </p>
                  <p className="tranning-details">
                    {" "}
                    I completed a distinguished training course, through which I
                    established the basics of programming, OOP and an
                    introduction to front-end programming
                  </p>
                </div>
                <div className="tranning-fourth-entry">
                  <div className="title-line">
                    <li className="title-text"> Paltel Telecom Company</li>
                    <p className="tranning-duration"> Jun-Aug, 2019</p>
                  </div>
                  <p className="tranning-subject"> Network and security </p>
                  <p className="tranning-details">
                    {" "}
                    I passed training in the basics of networks and security
                  </p>
                </div>
              </ul>
            </div>
          )}
          {progrSkills && (
            <div className="programming-skills">
              <div className="first-level">
                {programmingSkills.map((index) => {
                  return (
                    <ul>
                      <div className="entry-skill">
                        <li className="title-text"> {index}</li>
                        <div className="power-orange">
                          <div
                            className={"power-black-" + index.charAt(0)}
                          ></div>
                        </div>
                      </div>
                    </ul>
                  );
                })}
              </div>
              <div className="sec-level">
                {programmingSkills2.map((index) => {
                  return (
                    <ul>
                      <div className="entry-skill">
                        <li className="title-text"> {index}</li>
                        <div className="power-orange">
                          <div className="power-black"></div>
                        </div>
                      </div>
                    </ul>
                  );
                })}
              </div>
            </div>
          )}
          {projects && (
            <div className="projects">
              <div className="projects-details">
                <ul className="projects-ul">
                  <div className="project1">
                    <div className="title-line">
                      <li className="title-text">E-Commerce Website Store</li>
                    </div>
                    <p className="project-description">
                      It is a website through which you can view and purchase
                      needs
                    </p>
                    <a
                      className="tranning-subject"
                      href="https://github.com/ameedomar/StoreProduct"
                    >
                      GitHup Link
                    </a>
                  </div>
                  <div className="project2">
                    <div className="title-line">
                      <li className="title-text"> Go Coins Website</li>
                    </div>
                    <p className="project-description">
                      I had a unique training opportunity with a strong company
                      and was firmly established in the basics of front end and
                      reaction
                    </p>

                    <a
                      className="tranning-subject"
                      href="https://github.com/ameedomar/GoCoin"
                    >
                      GitHup Link
                    </a>
                  </div>
                  <div className="project3">
                    <div className="title-line">
                      <li className="title-text"> Snack vending machine</li>
                    </div>
                    <p className="project-description">
                      It is a complete logic used in performing the snack food,
                      as it shows you the price of the product and can calculate
                      the amount of money entered and return the rest of the
                      money to the customer. Built with java
                    </p>
                    <a
                      className="tranning-subject"
                      href="https://github.com/ameedomar/SnackVendingMachine"
                    >
                      GitHup Link
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          )}
          {interests && (
            <div className="interest">
              <h6> Coming Soon ...</h6>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumeBox;
