// Your code here
function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity="go to the office") {
  return `This Monday, I will ${activity}.`
}


function wrapAdjective(whatever="*") {
  return function(first="special") {
    return `You are ${whatever}${first}${whatever}!`
  }
}

const Calculator = {
  add: function(first, second) {
    return first + second
  },
  subtract: function(first, second) {
    return first - second
  },
  multiply: function(first, second) {
    return first * second
  },
  divide: function(first, second) {
    return first / second
  }
}

let actionApplyer = function(startingInt, funArray) {
  let start = startingInt
  for (let i = 0; i < funArray.length; i++) {
    start = funArray[i](start)
  }
  return start
}
