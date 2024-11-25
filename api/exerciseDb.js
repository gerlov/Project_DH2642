

const mockExercises = [
    {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/9XTFCBnBEoEv5X",
        id: "0001",
        name: "3/4 sit-up",
        target: "abs",
        instructions: [
            "Lie flat on your back with your knees bent and feet flat on the ground.",
            "Place your hands behind your head with your elbows pointing outwards.",
            "Engaging your abs, slowly lift your upper body off the ground and move forward until your torso is at a 45-degree angle.",
            "Pause for a moment at the top, then slowly lower your upper body back down to the starting position.",
            "Repeat for the desired number of repetitions.",
        ],
    },
    {
        bodyPart: "waist",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/5nYGeCMUdJq-OK",
        id: "0002",
        name: "45° side bend",
        target: "abs",
        instructions: [
            "Stand with your feet shoulder-width apart and your arms extended straight down by your sides.",
            "Keeping your back straight and your core engaged, bend to one side, lowering your hand towards your knee.",
            "Pause for a moment at the bottom, then slowly return to the starting position.",
            "Repeat on the other side.",
            "Continue alternating sides for the desired number of repetitions.",
        ],
    },
    {
        bodyPart: "upper legs",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/jSuGgP5g18QtTv",
        id: "1512",
        name: "all fours squad stretch",
        target: "quads",
        instructions: [
            "Start on all fours with your hands directly under your shoulders and your knees directly under your hips.",
            "Extend one leg straight back, keeping your knee bent and your foot flexed.",
            "Slowly lower your hips towards the ground, feeling a stretch in your quads.",
            "Hold this position for 20-30 seconds.",
            "Switch legs and repeat the stretch on the other side.",
        ],
    },
    {
        bodyPart: "chest",
        equipment: "body weight",
        gifUrl: "https://v2.exercisedb.io/image/NBbmN4rhhEe1yl",
        id: "3294",
        name: "archer push up",
        target: "pectorals",
        instructions: [
            "Start in a push-up position with your hands slightly wider than shoulder-width apart.",
            "Extend one arm straight out to the side, parallel to the ground.",
            "Lower your body by bending your elbows, keeping your back straight and core engaged.",
            "Push back up to the starting position.",
            "Repeat on the other side, extending the opposite arm out to the side.",
            "Continue alternating sides for the desired number of repetitions.",
        ],
    },
];

function getMockExercises(){
    return mockExercises;
}
function getExercises(id){
    const http = `http://localhost:5001/api/exercises`;
    return fetch(http)
        .then(resp => {
        if(!resp.ok){
            throw new Error("Response from exercise DB was not 200");;
        }
        return resp.json();
    }).then(data => {
        console.log(data);
        return data;
    }).catch(error => {
        console.error(error);
        throw error;
    })
}

function getMockExercisesDetails(id) {
    const exercise = mockExercises.find((exercise) => exercise.id === id);
    if (!exercise) {
        throw new Error(`Exercise with ID ${id} not found.`);
    }

    return exercise;
}

export {getExercises, getMockExercisesDetails, getMockExercises }