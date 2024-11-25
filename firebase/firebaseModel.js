import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";


import { firebaseConfig } from "./firebaseConfig";
// import { getExerciseDetails } from "./dishSource";

const app = initializeApp(firebaseConfig)
console.log("Firebase App initialized:", app);
const db = getDatabase(app)
console.log("Firebase Database initialized:", db);

const mockModel = {
    streakLength: 5,
    exercises: [
        { id: 1, name: "Push-up" },
        { id: 2, name: "Squat" }
    ],
    currentExerciseId: 1,
    ready: true,
};



const PATH = "physioAi";

function getExercisesId(exercise) {
    return exercise.id;
}

function sortIdCB(a, b) {
    return a - b;
}

function modelToPersistence(model) {
    const exercises = model.exercises.map(getExercisesId).sort(sortIdCB);
    return {
        streakLength: model.streakLength,
        exercises: exercises,
        currentExerciseId: model.currentExerciseId,
    };
}



function fetchAndSetExercisesACB(exerciseIds, model) {
    return getExerciseDetails(exerciseIds).then((exercises) => {
        model.exercises = exercises;
    });
}

function persistenceToModel(data, model) {
    if (!data) {
        model.setStreak(0);
        model.setCurrentExerciseId(null);
        model.exercises = [];
        return Promise.resolve();
    } else {
        model.setStreak(data.streak || 0);
        model.setCurrentExerciseId(data.currentExerciseId || null);
        const exerciseIds = data.exercises || [];
        return fetchAndSetExercisesACB(exerciseIds, model);
    }
}


function saveToFirebase(model) {
    if (!model.ready) {
        return;
    }
    const data = modelToPersistence(model);
    set(ref(db, PATH), data);

}



function readFromFirebase(model) {
    model.ready = false;
    console.log("Reading from firebase")
    return get(ref(db, PATH))
        .then(function (snapshot) {
            return persistenceToModel(snapshot.val(), model);
        })
        .then(function () {
            model.ready = true;

            onValue(ref(db, PATH), function (snapshot) {
                if (model.ready) {
                    const cloudData = snapshot.val();
                    persistenceToModel(cloudData, model);
                }
            });
        });
}



function watchedProps(model) {
    return [model.streakLength, model.exercises, model.currentExerciseId, model.rehabilitationSummary];
}

function connectToFirebase(model, watchFunction) {
    readFromFirebase(model);

    watchFunction(
        () => watchedProps(model), 
        () => saveToFirebase(model)
    );
}

export { connectToFirebase, modelToPersistence, persistenceToModel, saveToFirebase, readFromFirebase }