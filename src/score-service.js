
const calculateScoreForFirstMade = (distance) => {
  switch (distance) {
    case 10:
      return 2;

    case 15:
      return 2;

    case 20:
      return 3;

    case 25:
      return 5;

    case 30:
      return 8;

    default:
      return 0;
  }
};

const calculateScoreForLastMade = (distance) => {
  switch (distance) {
    case 10:
      return 2;

    case 15:
      return 3;

    case 20:
      return 4;

    case 25:
      return 6;

    case 30:
      return 10;

    default:
      return 0;
  }
};

const calculateScoreForAllMade = (distance) => {
  switch (distance) {
    case 10:
      return 5;

    case 15:
      return 10;

    case 20:
      return 15;

    case 25:
      return 20;

    case 30:
      return 25;

    default:
      return 0;
  }
};

const calculateScore = (puttsMade, firstTwoMade, lastTwoMade, allMade, distance) => {
  var score = puttsMade;

  if (puttsMade === 0) {
    return 0;
  }

  if (allMade) {
    score *= 2;
  }

  if (firstTwoMade) {
      score += calculateScoreForFirstMade(distance);
  }

  if (lastTwoMade) {
    score += calculateScoreForLastMade(distance);
  }

  if (allMade) {
    score += calculateScoreForAllMade(distance);
  }

  return score;
};

export default {
  calculateScoreForFirstMade,
  calculateScoreForLastMade,
  calculateScoreForAllMade,
  calculateScore,
};
