// Your code here

function actionApplyer(int, arr) {
  let a = int

  for (let i = 0; i < arr.length; i++ ){
    a = arr[i](a)
  }
  return a
}


const Calculator = {
  add: function(a,b) {
    return a+b
  },
  subtract: function(a,b) {
    return a-b
  },
  multiply: function(a,b) {
    return a*b
  },
  divide: function(a,b) {
    return a/b
  }
}


function wrapAdjective(paramo="*") {
  return function(paramt = "special") {
    return `You are ${paramo}${paramt}${paramo}!`
  }
}


let mondayWork = function(activity="go to the office") {
  return `This Monday, I will ${activity}.`;
}


function saturdayFun(activity="roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}
