import _ from 'lodash'

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

const cpuThreePatterns = {
  patternA: [0, 1, 9],
  patternB: [0, 3, 7],
}

const cpuFivePatterns = [
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

function randomSet(set) {
  const rndm = Math.floor(Math.random() * set.length)
  return set[rndm]
}

function checkRisk(turn, cpuSign, playerSign) {
  let result = [false, 0]
  winPat.forEach((pattern) => {
    let free = 0
    let check = 0
    pattern.forEach((square) => {
      if (turn[square] === playerSign) {
        check++
      } else if (turn[square] !== cpuSign) {
        free = square
      }
    })
    if (check === 2 && free !== 0) {
      result = [true, free]
    }
  })
  return result
}

function turnFourThreat(turn, cpuSign, playerSign) {
  const situation = []
  checkPlayer(situation, playerSign)
  const [first, second] = situation.sort()
  switch (first) {
    case 1:
      if (second === 6) return [true, randomSet([2, 3])]
      if (second === 8) return [true, randomSet([4, 7])]
      if (second === 9) return [true, randomSet([2, 4, 6, 8])]
      break
    case 2:
      if (second === 4) return [true, randomSet([1, 3, 7])]
      if (second === 6) return [true, randomSet([1, 3, 9])]
      if (second === 7) return [true, randomSet([1, 4])]
      if (second === 9) return [true, randomSet([3, 6])]
      break
    case 3:
      if (second === 4) return [true, randomSet([1, 2])]
      if (second === 7) return [true, randomSet([2, 4, 6, 8])]
      if (second === 8) return [true, randomSet([6, 9])]
      break
    case 4:
      if (second === 8) return [true, randomSet([1, 7, 9])]
      if (second === 9) return [true, randomSet([7, 8])]
      break
    case 5:
      if (second === 1 && turn[9] === cpuSign) return [true, randomSet([7, 3])]
      if (second === 3 && turn[7] === cpuSign) return [true, randomSet([1, 9])]
      if (second === 7 && turn[3] === cpuSign) return [true, randomSet([1, 9])]
      if (second === 9 && turn[1] === cpuSign) return [true, randomSet([3, 7])]
      break
    case 6:
      if (second === 7) return [true, randomSet([8, 9])]
      if (second === 8) return [true, randomSet([3, 7, 9])]
      break
    default:
      return [false, 0]
  }
}

function turnFiveAttack(turn, cpuSign, playerSign) {
  let result = [false, 0]
  cpuFivePatterns.forEach((p) => {
    if (!result[0]) {
      if (turn[p.cpuSigns[0]] === cpuSign &&
        turn[p.cpuSigns[0]] === cpuSign &&
        turn[p.playerSign] === playerSign) {
        if (turn[p.playerOptionA] === playerSign) {
          result = [true, p.playerOptionB]
        } else if (turn[p.playerOptionB] === playerSign) {
          result = [true, p.playerOptionA]
        }
      }
    }
  })
  return result
}

function checkChance(turn, turnNumber, cpuSign) {
  let result = [false, 0]
  winPat.forEach((pattern) => {
    if (!result[0]) {
      let free = 0
      const freeCheck = []
      let check = 0
      for (let i = 0; i < 3; i++) {
        const square = pattern[i]
        if (turn[square] === cpuSign) {
          check++
        } else if (turn[square] === '') {
          freeCheck.push(square)
          free = square
        }
        if (check === 2 && free !== 0) {
          result = [true, free]
          break
        }
        if (turn === 3 && check === 1 && free === 2) {
          return randomSet[freeCheck]
        }
        if (turnNumber === 3 || turnNumber === 4) {
          if (check === 1 && freeCheck.length === 2) {
            result = [true, randomSet(freeCheck)]
            break
          }
        }
      }
    }
  })
  return result
}

function checkPlayer(turn, situation, playerSign) {
  turn.forEach((square) => {
    if (square === playerSign) {
      situation.push(square)
    }
  })
}

function checkSit(turn, situation) {
  turn.forEach((square, i) => {
    if (square === '') {
      situation.push(i)
    }
  })
}

function checkFull(turn, situation) {
  turn.forEach((square, i) => {
    if (square !== '') {
      situation.push(i)
    }
  })
}

export function choosingStarter() {
  return randomSet(['player', 'CPU'])
}

export function cpuTurn(turnNumber, tempTurn, cpuSign, playerSign) {
  const turn = [null, ...tempTurn]
  switch (turnNumber) {
    case 2: {
      if (turn[5] === '') return 5
      return randomSet([1, 3, 7, 9])
    }
    case 4: {
      const risk = checkRisk(turn, cpuSign, playerSign)
      if (risk[0]) return risk[1]
      const chance = checkChance(turn, turnNumber, cpuSign)
      if (chance[0]) return chance[1]
      const solution = turnFourThreat(turn, cpuSign, playerSign)
      if (solution[0]) return solution[1]
      const situation = []
      checkSit(situation)
      return randomSet(situation)
    }
    case 1:
      return randomSet([1, 3, 5, 7, 9])
    case 3:
      if (turn[5] === '') {
        const situation = []
        checkFull(turn, situation)
        if (_.isEqual(situation, cpuThreePatterns.patternA)) {
          return randomSet([3, 7])
        } else if (_.isEqual(situation, cpuThreePatterns.patternB)) {
          return randomSet([1, 9])
        }
      }
      return checkChance(turn, turnNumber, cpuSign)[1]
    case 5: {
      const solution = turnFiveAttack(turn, cpuSign, playerSign)
      if (solution[0]) return solution[1]
    }
    // falls through
    case 6:
    case 7:
    case 8:
    case 9: {
      const chance = checkChance(turn, turnNumber, cpuSign)
      if (chance[0]) return chance[1]
      const risk = checkRisk(turn, cpuSign, playerSign)
      if (risk[0]) return risk[1]
      const noChance = checkChance(turn, 4, cpuSign)
      if (noChance[0]) return noChance[1]
      const situation = []
      checkSit(turn, situation)
      if (situation.length === 1) {
        return situation[0]
      }
      return randomSet(situation)
    }
    default:
      break
  }
}
