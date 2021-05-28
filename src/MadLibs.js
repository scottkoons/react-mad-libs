import React, { useState } from 'react';
import MadLibsForm from './MadLibsForm';
import MadLibsStory from './MadLibsStory';
import { v4 as uuid } from 'uuid/dist';

const MadLibs = () => {
  const INITIAL_STATE = [];
  const [story, setStory] = useState(INITIAL_STATE);
  const [showStory, setShowStory] = useState(false);
  const createStory = (newStory) => {
    setStory((entries) => [...entries, { ...newStory, id: uuid() }]);
  };
  return (
    <div className='Madlib'>
      <h1>Madlibs!</h1>
      {showStory ? (
        <MadLibsStory
          setShowStory={setShowStory}
          setStory={setStory}
          story={story[0]}
        />
      ) : (
        <MadLibsForm setShowStory={setShowStory} createStory={createStory} />
      )}
    </div>
  );
};

export default MadLibs;
