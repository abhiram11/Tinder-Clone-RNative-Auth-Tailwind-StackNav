//helper functions
const generatedID = (id1, id2) => {
  if (id1 > id2) {
    return id1 + id2;
  } else {
    return id2 + id1;
  }
};

// write one liner as well

export default generatedID;
