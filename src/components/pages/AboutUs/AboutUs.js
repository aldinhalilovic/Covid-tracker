import React, { useContext } from "react";
import { PersonContext } from "../../../context/PersonContext";
import PersonCard from "../../Card/PersonCard";

const AboutUs = () => {
  const { persons } = useContext(PersonContext);

  return (
    <div className="flex flex-wrap justify-center pt-5">
      <h3 className="w-full my-10 text-xl flex justify-center text-center">
        This application is made on the basis of accurate data regarding
        information about covid-19.
        <br /> You can see more about me below.
      </h3>
      {persons.map((person) => (
        <PersonCard
          key={person.name}
          imageURL={person.imageURL}
          name={person.name}
          description={person.description}
          occupation={person.occupation}
          coverURL={person.coverURL}
          instagramLink={person.instagramLink}
          gitHubLink={person.gitHubLink}
        />
      ))}
    </div>
  );
};

export default AboutUs;
