import React, { useState } from "react";
import Button from '@mui/material/Button';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import _ from "lodash";
import Ideas from "./Ideas";

import IdeaCard from "./IdeaCard";






function Generate(props) {
  const [idea, setIdea] = useState(Ideas[0]); // Initialize with the first item in the Ideas array
  const [ideaIndex,setIdeaIndex]=useState(0)

  const handleClick = () => {
    const shuffledIdeas = _.shuffle([...Ideas]);

    // Get the next idea index
    const nextIndex = (ideaIndex + 1) % shuffledIdeas.length;
  
    // Update the idea index state and set the idea accordingly
    setIdeaIndex(nextIndex);
    setIdea(shuffledIdeas[nextIndex]);
  };

  // Destructure the properties from the idea object
  const { title, description, link,img } = idea;

  return (
    <div className="container">

      <IdeaCard
      title={title}
      description={description}
      link={link}
      img={img}
      />
     

      <Button
        className="button"
        color="secondary"
        onClick={handleClick}
        variant="contained"
        size="large"
        endIcon={<TipsAndUpdatesIcon />}
      >
        Generate
      </Button>
    </div>
  );
}

export default Generate;
