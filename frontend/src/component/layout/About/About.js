import React from "react";
import "./aboutSection.css";
import { Typography, Avatar } from "@material-ui/core";

const About = () => {
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/dec9mkjyv/image/upload/v1648820636/products/FaceApp_1566569225895_qkhln4.jpg"
              alt="Founder"
            />
            <Typography>Ajeet Singh Rana</Typography>
            <span>This is a Ecommerce wesbite made by Ajeet Singh.</span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Contact No:-</Typography>
            <span>7087090321</span>
            <a
              href="https://www.youtube.com/channel/UCO7afj9AUo0zV69pqEYhcjw"
              target="blank"
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
