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

function specificThreat(turn, cpuSign, playerSign) {
  const situation = []
  checkPlayer(situation, playerSign)
  let first
  let second
  if (situation[0] > situation[1]) {
    [second, first] = situation
  } else {
    [first, second] = situation
  }
  switch (first) {
    case 1:
      if (second === 6) {
        return [true, randomSet([2, 3])]
      } else if (second === 8) {
        return [true, randomSet([4, 7])]
      } else if (second === 9) {
        return [true, randomSet([2, 4, 6, 8])]
      }
      break
    case 2:
      if (second === 7) {
        return [true, randomSet([1, 4])]
      } else if (second === 9) {
        return [true, randomSet([3, 6])]
      }
      break
    case 3:
      if (second === 4) {
        return [true, randomSet([1, 2])]
      } else if (second === 7) {
        return [true, randomSet([2, 4, 6, 8])]
      }
      if (second === 8) {
        return [true, randomSet([6, 9])]
      }
      break
    case 4:
      if (second === 9) {
        return [true, randomSet([7, 8])]
      }
      break
    case 5:
      if (second === 1 && turn[9] === cpuSign) {
        return [true, randomSet([7, 3])]
      } else if (second === 3 && turn[7] === cpuSign) {
        return [true, randomSet([1, 9])]
      } else if (second === 7 && turn[3] === cpuSign) {
        return [true, randomSet([1, 9])]
      } else if (second === 9 && turn[1] === cpuSign) {
        return [true, randomSet([3, 7])]
      }
      break
    case 6:
      if (second === 7) {
        return [true, randomSet([8, 9])]
      }
      break
    default:
      return [false, 0]
  }
}

function checkChance(turn, turnNumber, cpuSign) {
  let result = [false, 0]
  winPat.forEach((pattern) => {
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

// function checkWin(currentPlayer) {
//   for (var i = 0; i < 8; i++) {
//     var check = true;
//     for (var j = 0; j < 3; j++) {
//       var square = winPat[i][j];
//       if (squares[square] != currentPlayer) {
//         check = false;
//         break;
//       }
//     }
//     if (!check) {
//       continue;
//     } else {
//       for (var j = 0; j < 3; j++) {
//         var n = winPat[i][j];
//         var square = "#square" + n;
//         $(square).css("background-color", "blue");
//       }
//       return true;
//     }
//   }
//   return false;
// }
//
export function choosingStarter() {
  return randomSet(['player', 'CPU'])
}

export function cpuTurn(turnNumber, tempTurn, cpuSign, playerSign) {
  const turn = [null, ...tempTurn]
  switch (turnNumber) {
    case 2: {
      if (turn[5] === '') {
        return 5
      }
      return randomSet([1, 3, 7, 9])
    }
    case 4: {
      const chance = checkChance(turn, turnNumber, cpuSign)
      const risk = checkRisk(turn, cpuSign, playerSign)
      const solution = specificThreat(turn, cpuSign, playerSign)
      if (solution[0]) {
        return solution[1]
      } else if (risk[0]) {
        return risk[1]
      } else if (chance[0]) {
        return chance[1]
      }
      const situation = []
      checkSit(situation)
      return randomSet(situation)
    }
    case 1:
      return randomSet([1, 3, 5, 7, 9])
    case 3:
      if (turn[5] === '') return 5
      return checkChance(turn, turnNumber, cpuSign)[1]
    case 5:
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
//
// function startAgain() {
//   isPlayerTurn = false
//   isCPUTurn = false
//   turn = 0
//   squares = new squarePrototype()
//   for (let i = 1; i < 10; i++) {
//     const square = '#square' + i
//     $(square).html('')
//     $(square).css('background-color', '')
//   }
//   writing.text('Deciding who starts...')
//   setTimeout(whoStarts, 1000)
// }
//
//

//
// $('.square').click(function () {
//   if (isPlayerTurn) {
//     const number = $(this).data('number')
//     if (squares[number] === '' && isCircle) {
//       circle('player', $(this), number)
//       turn++
//       if (turn > 4) {
//         if (checkWin('player')) {
//           winner('player')
//           setTimeout(startAgain, 3000)
//         } else if (turn == 9) {
//           writing.text('DRAW!')
//           setTimeout(startAgain, 3000)
//         } else {
//           writing.text('CPU turn!')
//           setTimeout(CPUTurn, 1000)
//         }
//       } else {
//         writing.text('CPU turn!')
//         setTimeout(CPUTurn, 1000)
//       }
//     } else if (squares[number] === '' && isCross) {
//       cross('player', $(this), number)
//
//       turn++
//       if (turn > 4) {
//         if (checkWin('player')) {
//           winner('player')
//           setTimeout(startAgain, 3000)
//         } else if (turn == 9) {
//           writing.text('DRAW!')
//           setTimeout(startAgain, 3000)
//         } else {
//           writing.text('CPU turn!')
//           setTimeout(CPUTurn, 1000)
//         }
//       } else {
//         writing.text('CPU turn!')
//         setTimeout(CPUTurn, 1000)
//       }
//     }
//   }
// })
