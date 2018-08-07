var age = 30              // age
var gender = 'm'          // gender 'm' for male or 'f' for female
var height = 185          // height in cm
var weight = 90           // weight in kg
var exerciseLevel = 1     // level between 1-5

var heightInCM = height / 100
var heightInCMSquared = math.pow(heightInCM, 2)
var bmi = weight / heightInCMSquared

console.log('CurrentBMI = ${bmi}'')

var idealBMI = 22.5
var idealWeight = idealBMI * heightInCMSquared

console.log('Ideal Weight is ${math.round(idealWeight)} kg')

let bmr = 10.0 * weight + 6.25 * height - 5.0 * age
if (gender === 'm') {
  bmr += 5
}
if (gender === 'f') {
  bmr -= 161
}
