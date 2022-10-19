import * as React from "react";
import "./PersonCard.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";

function PersonCard({
  imageURL,
  name,
  occupation,
  instagramLink,
  gitHubLink,
  description,
}) {
  return (
    <div className="container">
      <div className="card">
        <div className="image">
          <img src={imageURL} alt="person"></img>
          <h3 className="font-bold text-center py-2">{name}</h3>
        </div>
        <div className="content">
          <h3 className="italic mt-5 mb-2">{occupation}</h3>
          <p>{description}</p>
          <div className="flex justify-evenly mt-5">
            <a href={instagramLink} target="_blank" rel="noreferrer">
              <InstagramIcon className="icons-about" />
            </a>
            <a href={gitHubLink} target="_blank" rel="noreferrer">
              <GitHubIcon className="icons-about" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PersonCard;
