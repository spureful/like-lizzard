import { defineStore } from 'pinia'

const baseLevelScore = 5;
const levels = new Array(15).fill(0)
    .map((_, i) => baseLevelScore * Math.pow(2, i))

const levelScores = []
levels.reduce((acc, val) => {
  acc += val;
  levelScores.push(acc);
   return acc;
}, 0);

console.log({ levels, levelScores });
function computeLevelByScore(score) {
  const res = {
    level: 0,
    value: levels[0],
  };
  levelScores.forEach((val, i) => {
    if (score > val) {
      console.log({ score, val });
      res.level = i + 1;
      res.value = levels[i + 1];
      return;
    }
  })
  return res
}



export const useScoreStore = defineStore('score', {
  state: () => ({
    score: 0,
  }),
  getters: {
    level: state => computeLevelByScore(state.score),
    currentScore(state) {
      if (this.level.level === 0) {
        return state.score;
      }
      return state.score - levelScores[this.level.level - 1];
    }
  },
  actions: {
      add(score = 1) {
        this.score += score;
      },
    setScore(score) {
        this.score = score;
    }
  },
})
