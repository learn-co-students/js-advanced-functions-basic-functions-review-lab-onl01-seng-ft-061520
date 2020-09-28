// Your code here
function saturdayFun(activity = "roller-skate") {
    return "This Saturday, I want to " + activity + "!"
}
function mondayWork(string = "go to the office") {
    return "This Monday, I will " + string + "."
}
function wrapAdjective(string="*") {
    return function(thing = "special") {
        return "You are " + string + thing + string + "!"
    }
}
const Calculator = {
    add: function(a,b) {
      return a + b;
    },
    subtract: function(a,b) {
      return a - b
    },
    multiply: function(a,b) {
      return a * b
    },
    divide: function(a,b) {
      return a / b;
    }
}

let actionApplyer = function(start, ray) {
    let a = start
  
    for (let i = 0; i < ray.length; i++ ){
      a = ray[i](a)
    }
  
    return a
}

// For calling example
// Calculator["add"](2,5)
