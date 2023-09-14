const studentHogwarts = () => {
  let privateScore = 0;
  let name = null;

  const changeScoreBy = (points) => {
    privateScore += points;
  };

  const setName = (newName) => {
    name = newName;
  };

  const rewardStudent = (privateScore) => {
    changeScoreBy(privateScore * 1);
  };

  const penalizeStudent = (privateScore) => {
    changeScoreBy(privateScore * -1);
  };

  const getScore = () => {
    return(name + ': ' + privateScore);
  };

  return {
    setName,
    rewardStudent,
    penalizeStudent,
    getScore
  };
};

const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent(4);
console.log(harry.getScore());

const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent(1);
draco.penalizeStudent(3);
console.log(draco.getScore());
