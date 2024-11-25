import { resolvePromise } from "../api/resolvePromise";


const model = {
    rehabilitationSummary: "",
    streakLength: 0,
    exercises: [],
    currentExerciseId: null,
    searchParams: {},
    searchResultsPromiseState: {},
    currentExercisePromiseState: {},

    setRehabilitationSummary(summary){
        if(summary == null){
            return;
        }
        this.rehabilitationSummary = summary;
    },

    setSearchQuery(query) {
        if (query) {
            this.searchParams.query = query;
        }
    },

    setSearchType(type) {
        if (type) {
            this.searchParams.type = type;
        }
    },

    doSearch(params) {
        if (!this.searchResultsPromiseState) {
            this.searchResultsPromiseState = {};
        }

        const searchPromise = searchExercises(params || this.searchParams);

        resolvePromise(searchPromise, this.searchResultsPromiseState);
    },

    setCurrentExerciseId(exerciseId) {
        if (!exerciseId || exerciseId === this.currentExerciseId) {
            return;
        }
        this.currentExerciseId = exerciseId;
        const searchPromise = getDishDetails(exerciseId);

        resolvePromise(searchPromise, this.currentDishPromiseState);
    },

    setStreak(number) {
        if (Number.isInteger(number) && number >= 0) {
            this.streakLength = number;
        } else {
            throw new Error("Streak must be a positive integer");
        }
    },

    addToRehab(exerciseToAdd) {
        this.exercises = [...this.exercises, exerciseToAdd];
    },

    // filter callback exercise
    removeFromRehab(exercise) {

        function shouldWeKeepExercise(exercise) {
            return exercise.id !== exercise.id;
        }
        this.exercises = this.exercises?.filter(shouldWeKeepExercise);
    },

}

export { model };