// @flow

export const winPat = [
  [1, 2, 3],
  [1, 4, 7],
  [1, 5, 9],
  [2, 5, 8],
  [3, 5, 7],
  [3, 6, 9],
  [4, 5, 6],
  [7, 8, 9],
]

export const cpuThreePatterns = {
  patternA: [0, 1, 9],
  patternB: [0, 3, 7],
}

export const cpuFivePatterns = [
  {
    cpuSigns: [1, 3],
    playerSign: 2,
    playerOptionA: 7,
    playerOptionB: 9,
  },
  {
    cpuSigns: [1, 7],
    playerSign: 4,
    playerOptionA: 3,
    playerOptionB: 9,
  },
  {
    cpuSigns: [3, 9],
    playerSign: 6,
    playerOptionA: 1,
    playerOptionB: 7,
  },
  {
    cpuSigns: [7, 9],
    playerSign: 8,
    playerOptionA: 1,
    playerOptionB: 3,
  },
]

export const cpuCenterPatterns = [
  {
    cpuSign: 1,
    playerSignsA: [2, 9],
    optionA: 7,
    playerSignsB: [4, 9],
    optionB: 3,
  },
  {
    cpuSign: 3,
    playerSignsA: [2, 7],
    optionA: 9,
    playerSignsB: [6, 7],
    optionB: 1,
  },
  {
    cpuSign: 7,
    playerSignsA: [3, 8],
    optionA: 1,
    playerSignsB: [3, 4],
    optionB: 9,
  },
  {
    cpuSign: 9,
    playerSignsA: [1, 8],
    optionA: 3,
    playerSignsB: [1, 6],
    optionB: 7,
  },
]

export const fiveDefendPatterns = [
  {
    cpuSign: 2,
    playerSignsA: [8, 1],
    optionA: [4, 7, 9],
    playerSignsB: [8, 3],
    optionB: [6, 7, 9],
  },
  {
    cpuSign: 4,
    playerSignsA: [6, 1],
    optionA: [2, 3, 9],
    playerSignsB: [6, 7],
    optionB: [3, 8, 9],
  },
  {
    cpuSign: 6,
    playerSignsA: [4, 3],
    optionA: [1, 2, 7],
    playerSignsB: [4, 9],
    optionB: [1, 7, 8],
  },
  {
    cpuSign: 8,
    playerSignsA: [2, 7],
    optionA: [1, 3, 4],
    playerSignsB: [2, 9],
    optionB: [1, 3, 6],
  },
]
