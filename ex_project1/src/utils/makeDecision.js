module.exports = () => {
  const value = Math.random();
  if (value <= 0.333) {
    return "scissors";
  } else if (value <= 0.667) {
    return "rock";
  } else {
    return "paper";
  }
};
