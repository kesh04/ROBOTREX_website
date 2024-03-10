import React from "react";
import "./Challe.css";
import Inter from "../images/ineter.jpg";
import SCH from "../images/schhol.jpg";
import LEGO from "../images/lego.jpg";

const Challe = () => {
  return (
    <div className="Challenge" id="challnes">
      <div className="container">
        <div className="col-1">
          <p className="pmain">
            CHALLENGES <span className="des"></span>{" "}
          </p>
          <p className="ptag">Inter NIBM</p>
          <p className="ptitle">
            The Line Following competition features two rounds, rewarding
            successful completion of the initial round with entry into the
            second. In Round 1, autonomous robots must adeptly pick up two
            boxes, traverse a specified path, and deposit the boxes in the "End"
            area. Stringent conditions dictate a maximum team size of 4 members,
            strictly prohibiting physical contact with the robot during the
            task, and disallowing the use of remote-controlled robots. These
            guidelines highlight the importance of both autonomy and teamwork,
            adding complexity to the competitive and engaging nature of the
            event.
          </p>
          <a
            href="https://drive.google.com/drive/folders/11yah6z_jnHmUx1kknQ8Yy6C3C8WrXfAS?usp=sharing"
            className="chal-reg"
          >
            TASK
          </a>
        </div>
        <div className="col-2">
          <img className="imge" src={Inter} alt="" />
        </div>
        <div className="col-2">
          <img className="imge" src={SCH} alt="" />
        </div>
        <div className="col-1">
          <p className="ptag">School Category</p>
          <p className="ptitle">
            In the realm of Line Following, this activity unfolds in two rounds,
            with successful completion of the initial stage propelling teams
            into the second. Following the qualifying round, the competitive
            phase commences, considering both task completion and time. Round 1
            in the School category task entails robots detecting the path and
            reaching the "End" area. Under strict conditions, team members are
            prohibited from touching the robot during the task, with a maximum
            team size of 4 members, and remote control robots are expressly
            disallowed.
          </p>
          <a
            href="https://drive.google.com/drive/folders/1VudJIKVolhiMluz3nbU-yntSNJj5d-iG?usp=sharing"
            className="chal-reg"
          >
            TASK
          </a>
        </div>
        <div className="col-1">
          <p className="ptag">LEGO Competition</p>
          <p className="ptitle">
            The Competition is an engaging and creative event where students in
            grades 5 to 9 showcase their innovation and teamwork using the
            resources provided. Participants will design and build intricate
            structures, machines, or even entire scenes. The competition
            encourages problem-solving skills, creativity, and collaborative
            teamwork as students work together to bring their imaginative
            creations to life.
          </p>
        </div>
        <div className="col-2">
          <img className="imge" src={LEGO} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Challe;
