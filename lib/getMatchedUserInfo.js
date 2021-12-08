const getMatchedUserInfo = (users, userLoggedIn) => {
  const newUsers = { ...users };
  delete newUsers[userLoggedIn]; //follow immutability, make new object and do CRUD on it

  //newUsers: array that is like {{...}, {...}, {...}, {...}}

  const [id, user] = Object.entries(newUsers).flat(); //destructure and return it as an object

  return { id, ...user };
};

export default getMatchedUserInfo;
