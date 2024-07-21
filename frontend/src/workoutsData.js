//https://www.muscleandfitness.com/workouts/workout-routines/hiit-6-week-full-body-workout/

/** 
There are workouts routines
chestBackAbs
legsTricepsCalves
shouldersTrapsBicepsForearms
cardio

There is also stretching which should be shown at the start of any workout routine.
the link is an external link to gifs for that workout, they all have the same artstyle

there are 2 more comments at line 233 & 275 that explain some more stuff
*/
const workouts = {
  chestBackAbs: [
  {
    name:"Dumbbell Bench Press",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif",
    steps:["Lay flat on the bench with your feet on the ground.", "Raise the dumbbells until you have straight arms.", "Lower the dumbbells to your mid chest", "Raise the dumbbells until you've locked your elbows."],
    reps:10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Incline Bench Press",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2022/09/dumbbell-incline-chest-press.gif",
    steps:["Raise the bench to a 30 - 45 degree angle", "Lay on the bench and set your feet on the ground.", "Raise the dumbbells with straight arms then slowly lower them to about shoulder width.", "Raise them again until your arms are locked and at the starting position again."],
    reps:10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Cable Chest Press",
    link:"https://fitnessprogramer.com/wp-content/uploads/2022/02/Seated-Cable-Chest-Press.gif",
    steps:["Use a handle attachment. The cables should be set to shoulder height.", "Bring both of the handles to your chest and make sure you are in the center of the cable crossover.", "Walk a few steps forward. Then press the weight forward.", "From there, you should flex and extend at both the shoulders and elbows simultaneously."],
    reps: 8,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Wide-Grip Pulldown",
    link:"https://sporium.net/wp-content/uploads/2020/01/pulldown-min.gif",
    steps:["Stand in front of the pulldown machine", "Grab the bar with a wide grip, palms facing away from the body", "Sit down and adjust the knee pad", "Pull the bar down towards your chest while keeping your back straight", "Exhale as you pull, hold for a moment, and then inhale as you release"],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Barbell Bentover Row",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Bent-Over-Row.gif",
    steps:["Stand with your feet hip-width apart, hold the barbell with a overhand grip just wider than your shoulders", "Bend at the waist and lower your torso until it's almost parallel to the floor, keep your back straight", "Lift the barbell towards your chest, keeping your elbows close to your body", "Lower the barbell back to the starting position with control."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Straight-Arm Pulldown",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/05/Cable-Straight-Arm-Pulldown.gif",
    steps:["Stand in front of the pulldown machine with a wide grip on the bar.", "Keep your arms straight as you pull the bar down towards your hips.", "Exhale as you pull the bar down.", "Hold the bar at your hips for a count of two.", "Slowly release the bar back to the starting position, inhaling as you do so."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Reverse Crunch",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2022/01/reverse-crunch.gif",
    steps:["Lie flat on the ground with your feet on the bench or ball, hands flat on the floor or behind your head.", "Lift your hips and legs off the ground and bring your knees towards your chest.", "Pause for a moment at the top, then lower your hips and legs back to the starting position."],
    reps: 8,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Crunch",
    link:"https://i.pinimg.com/originals/f3/56/f9/f356f9c7af3c3f0c5d75fa1ec92c2ad2.gif",
    steps:["Lie flat on the ground with your knees bent and feet flat on the floor.", "Place your hands behind your head.", "Lift your shoulders and upper back off the ground while keeping your lower back pressed firmly into the floor.", "Hold the crunch position for a few seconds and then slowly lower back down."],
    reps: 8,
    sets: 3,
    rest:"60s"
    },
  ],
  legsTricepsCalves: [
  {
    name:"Squats",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/06/bodyweight-squat-2.gif",
    steps: ["Stand with your feet shoulder-width apart, feet pointing forward.", "Lower your hips down and back as if you were sitting in a chair.", "Keep your weight on your heels and keep your knees behind your toes.", "Push back up to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Leg Press",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif",
    steps: ["Sit in the leg press machine with your back against the backrest.", "Place your feet shoulder-width apart on the platform", "Lower the platform until your knees are bent at a 90-degree angle.", "Push the platform back to the starting position, straightening your legs."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Leg Extension",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/06/leg-extension-machine.gif",
    steps:["Sit on a leg extension machine with your legs under the pad.", "Adjust the weight to your desired resistance.", "Extend your legs until they are straight.", "Slowly lower the weight back to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Leg Curl",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/08/Seated-Leg-Curl.gif",
    steps:["Lie flat on your back on the leg curl machine with your heels under the roller pads.", "Keep your legs straight and slowly raise the roller pads towards your glutes.", "Hold the contracted position for a brief moment, then slowly lower the roller pads back to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Triceps Pressdown",
    link:"https://liftingfaq.com/wp-content/uploads/2022/03/cable-tricep-pushdown.gif",
    steps:["Stand facing the cable machine with your feet shoulder-width apart.",
"Grasp the cable bar with your palms facing down.",
"Keep your elbows close to your sides and extend your arms downwards.",
"Pause at the bottom of the movement and then slowly return to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Lying Triceps Extension",
    link:"https://fitnessprogramer.com/wp-content/uploads/2022/02/EZ-Bar-Lying-Close-Grip-Triceps-Extension-Behind-Head.gif",
    steps:["Lie flat on the bench with your feet on the ground.",
"Hold a dumbbell in each hand with your arms extended straight up towards the ceiling.",
"Keep your upper arms stationary and bend your elbows to lower the weights towards your forehead.",
"Exhale and extend your arms back to the starting position, locking your elbows at the top.",],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Standing Calf Raise",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Calf-Raise.gif",
    steps: ["Stand with your feet shoulder-width apart and your toes pointing forward.", "Raise up onto your toes, keeping your legs straight.", "Lower your heels back down to the ground."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Seated Calf Raise",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2022/10/weighted-calf-raise.gif",
    steps:["Sit with your feet flat on the platform.",
"Place your knees under the pad and adjust the weight plate according to your desired weight.",
"Raise your heels by pushing through the balls of your feet.",
"Hold the top position for a moment, then slowly lower your heels back down to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Kettleball Swing",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/09/Kettlebell-Swings.gif",
    steps:["Stand with your feet shoulder-width apart and hold the kettlebell in front of you with both hands.","Hinge forward at the hips, keeping your back flat and arms extended.","Swing the kettlebell back between your legs.","Explode through your hips and legs to swing the kettlebell up to shoulder height."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
  ],
  shouldersTrapsBicepsForearms: [
  {
    name:"Dumbbell Shoulder Press",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
    steps:["Stand with your feet shoulder-width apart and your knees slightly bent.", "Grasp the dumbbells with an overhand grip, keeping your palms facing forward.", "Lift the dumbbells to shoulder height, keeping your arms bent at a 90-degree angle.", "Press the dumbbells straight up overhead, fully extending your arms.", "Lower the dumbbells back to shoulder height."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Lateral Raise",
    link:"http://newlife.com.cy/wp-content/uploads/2019/11/22341301-Dumbbell-Standing-Lateral-Raise-female_Shoulders_360.gif",
    steps:["Stand with your feet shoulder-width apart and hold a dumbbell in each hand.",
"Lift the weights out to your sides until your arms are parallel with the ground.",
"Lower the weights back to the starting position."],
    reps:10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Rear-Delt Raise",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-rear-delt-fly.gif",
    steps:["Stand holding a pair of dumbbells at arm's length by your sides", "Bend forward slightly at the hips and raise your arms up and back, keeping your elbows slightly bent.", "Pause, then lower the dumbbells back to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Shrug",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-shrug.gif",
    steps:["Stand with your feet shoulder width apart and grasp the dumbbells with an overhand grip.", "Lift your shoulders up towards your ears, keeping your arms straight and holding the dumbbells at arm's length.", "Hold for a brief pause, then lower your shoulders back down to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Curl",
    link:"https://i.pinimg.com/originals/7d/3c/de/7d3cdeed84c1c19ad372d5b25beffd08.gif",
    steps:["Stand with your feet shoulder-width apart, holding a dumbbell in each hand with your palms facing forward.", "Keeping your elbows close to your sides, curl the weights up towards your shoulders.", "Slowly lower the weights back down to the starting position."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Incline Dumbbell Curl",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/Seated-Incline-Dumbbell-Curl.gif",
    steps:["Start by sitting on an incline bench with your back supported and feet flat on the ground.", "Grab a pair of dumbbells and hold them at arm's length by your sides with your palms facing forward.", "Keeping your upper arms stationary, bend your elbows and curl the dumbbells as close to your shoulders as possible.", "Hold the position for a brief pause and then slowly lower the weights back to the starting position." ],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Barbell Wrist Curl",
    link:"http://newlife.com.cy/wp-content/uploads/2019/11/01251301-Barbell-Wrist-Curl-II_Forearms_360.gif",
    steps:["Grasp the barbell with a palms-up grip and sit on the edge of a bench or chair.", "Allow the barbell to roll down your fingers and towards your wrist.", "Using only your wrist, curl the barbell upwards towards your forearm.", "Lower the barbell back down towards your wrist."],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
    {
    name:"Dumbbell Clean",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-power-clean-animated.gif",
    steps:[""],
    reps: 10,
    sets: 3,
    rest:"60s"
    },
  ],
  cardio: [ //no reps, sets, rest for cardio.  ONLY name, image and steps
  {
    name:"Elliptical Machine",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/10/Elliptical-Machine.gif",
    steps:["Begin your training with a 5 minute warm up (to gradually increase heart rate). It should be performed at a light intensity to warm up your body. Light perspiration is an indicator that your body has warmed up and is ready for an increase in intensity.", "The duration of your exercise depends on your fitness level; generally it is recommended that you maintain your heart rate in the training zone for at least 15-20 minutes to realize an aerobic benefit. Beginners should always start slowly and bring their workout sessions up to 20 minutes or more. As your fitness level increases, you will be able to maintain your heart rate in the training zone for longer periods: usually between 20 and 30 minutes."],
    reps: 0,
    sets: 0,
    rest:"0s"
    },
    {
    name:"Treadmil",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/06/Treadmill-.gif",
    steps:["Begin your training with a 5 minute warm up (to gradually increase heart rate). It should be performed at a light intensity to warm up your body. Light perspiration is an indicator that your body has warmed up and is ready for an increase in intensity.", "The duration of your exercise depends on your fitness level; generally it is recommended that you maintain your heart rate in the training zone for at least 15-20 minutes to realize an aerobic benefit. Beginners should always start slowly and bring their workout sessions up to 20 minutes or more. As your fitness level increases, you will be able to maintain your heart rate in the training zone for longer periods: usually between 20 and 30 minutes."],
    reps: 0,
    sets: 0,
    rest:"0s"
    },
    {
    name:"Stationary Bike",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/06/Bike.gif",
    steps:["Begin your training with a 5 minute warm up (to gradually increase heart rate). It should be performed at a light intensity to warm up your body. Light perspiration is an indicator that your body has warmed up and is ready for an increase in intensity.", "The duration of your exercise depends on your fitness level; generally it is recommended that you maintain your heart rate in the training zone for at least 15-20 minutes to realize an aerobic benefit. Beginners should always start slowly and bring their workout sessions up to 20 minutes or more. As your fitness level increases, you will be able to maintain your heart rate in the training zone for longer periods: usually between 20 and 30 minutes."],
    reps: 0,
    sets: 0,
    rest:"0s"
    },
    {
    name:"Rowing Machine",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/06/Rowing-Machine.gif",
    steps:["Begin your training with a 5 minute warm up (to gradually increase heart rate). It should be performed at a light intensity to warm up your body. Light perspiration is an indicator that your body has warmed up and is ready for an increase in intensity.", "The duration of your exercise depends on your fitness level; generally it is recommended that you maintain your heart rate in the training zone for at least 15-20 minutes to realize an aerobic benefit. Beginners should always start slowly and bring their workout sessions up to 20 minutes or more. As your fitness level increases, you will be able to maintain your heart rate in the training zone for longer periods: usually between 20 and 30 minutes."],
    reps: 0,
    sets: 0,
    rest:"0s"
    },
    {
    name:"Walking on Stepmill",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/10/Walking-on-Stepmill.gif",
    steps:["Begin your training with a 5 minute warm up (to gradually increase heart rate). It should be performed at a light intensity to warm up your body. Light perspiration is an indicator that your body has warmed up and is ready for an increase in intensity.", "The duration of your exercise depends on your fitness level; generally it is recommended that you maintain your heart rate in the training zone for at least 15-20 minutes to realize an aerobic benefit. Beginners should always start slowly and bring their workout sessions up to 20 minutes or more. As your fitness level increases, you will be able to maintain your heart rate in the training zone for longer periods: usually between 20 and 30 minutes."],
    reps: 0,
    sets: 0,
    rest:"0s"
    },
  ],
  stretching: [ //These is stretching which has to be done everyday, no need to show steps, just name, image, reps, sets and rest.
  {
    name:"High Knee",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/02/High-Knee-Skips_Cardio.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Lunges",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/06/Bodyweight-Walking-Lunge.gif",
    reps:10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Planks",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2022/11/body-saw-plank.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Arm Circles",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/07/Arm-Circles_Shoulders.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Standing Toe Touches",
    link:"https://fitnessprogramer.com/wp-content/uploads/2022/04/Standing-Toe-Touches.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Jumping Jacks",
    link:"https://www.inspireusafoundation.org/wp-content/uploads/2021/08/jumping-jacks.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Butt Kicks",
    link:"https://fitnessprogramer.com/wp-content/uploads/2021/10/Butt-Kicks.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
    {
    name:"Hip Circles",
    link:"https://fitnessprogramer.com/wp-content/uploads/2022/06/Hip-Circles-Stretch.gif",
    reps: 10,
    sets: 2,
    rest:"10s"
    },
  ]
}

const injuryPrevention = [
  {
    "Warm up": "Before starting any workout, it's important to warm up properly to prepare your muscles and joints for the physical activity ahead. This can include light cardio exercises, stretching, or foam rolling."
  },
  {
    "Proper form": "Maintaining proper form during exercises is crucial in preventing injuries. This includes using the right technique, keeping your back straight, and avoiding over-extending or using too much weight."
  },
  {
    "Gradual progression": "Avoid jumping into high-intensity workouts or using too much weight too quickly. Gradually build up the intensity and weight over time to give your body time to adjust and prevent injury."
  },
  {
    "Use proper equipment": "Make sure you have the right equipment for your workout, such as the correct type of shoes, appropriate weight for your strength level, and a stable surface for exercises like push-ups or lunges."
  },
  {
    "Listen to your body": "Pay attention to how your body feels during and after your workout. If you experience pain or discomfort, take a break and modify the exercise. If pain persists, consult with a doctor."
  },
  {
    "Hydration": "Stay hydrated before, during, and after your workout. Dehydration can lead to fatigue and muscle cramps, increasing the risk of injury."
  },
  {
    "Rest and recovery": "Give your body time to rest and recover between workouts. This will allow your muscles to repair and prevent overuse injuries."
  },
  {
   "Get professional advice": "If you have a medical condition or are new to working out, consider seeking advice from a doctor or a qualified personal trainer to ensure that you are doing exercises that are safe and appropriate for you." 
  }
]
export {workouts, injuryPrevention};
