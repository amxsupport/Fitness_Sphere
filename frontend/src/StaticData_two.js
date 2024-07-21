const getSteps24 = { //24 hours of steps
  message: 'success',
  data: [
    0, 0, 0, 0, 7, 0, 19, 0,
    0, 0, 89, 0, 8, 66, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0
  ],
  sum: 207,
  success: true
}

const getSteps7d = { //7 day of steps
  message: 'success',
  data: [
    0, 0, 0, 0,
    0, 0, 189
  ],
  sum: 189,
  success: true
}

const getCalories24 = {
  message: 'success',
  data: [
    77.79166666666667, 77.79166666666667,
    77.79166666666667, 77.96860415494751,
    81.54166641831397, 81.54166641831397,
    81.54166641831397, 81.54166641831397,
    81.54166641831397, 81.54166641831397,
    81.54166641831397, 81.54166641831397,
    81.54166641831397, 42.51201162202218,
    0, 0,
    0, 0,
    0, 0,
    0, 0,
    0, 0
  ],
  sum: 1200,
  success: true
}

const getCalories7d = {
  message: 'success',
  data: [0, 0, 0, 0, 1555.9437542824073, 1867, 1091.2906627316102],
  sum: 4513,
  success: true
}
const getGoals = { //goals set by user
  message: 'success',
  data: {
    weight: 90,
    height: 172,
    stepGoal: 7000,
    calGoal: 1500,
    weightGoal: 80
  },
  success: true
}

const getmealdetails = { //total cal, prot, fats consumed in a day
  calories: 1500,
  proteins: 80,
  fats: 90
}

export { getSteps24, getSteps7d, getCalories24, getCalories7d, getGoals, getmealdetails }
