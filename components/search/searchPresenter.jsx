import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { getExercises } from "../../api/exerciseDb";
import SearchResults from "./searchResults"
import SearchView from "./searchView";

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




const Search = observer(
    function Search(props) {
        const [exercises, setExercises] = useState(mockExercises);
        const [error, setError] = useState(null);
        //Commented out atm not to overextend api requests whilst free. Do it once, copy the objects, create a mockup, use mockup. woop woop
        //   useEffect(() => {
        //     getExercises(1)
        //       .then((data) => {
        //         setExercises(data);
        //       })
        //       .catch((err) => {
        //         setError(err.message);
        //       });
        //   }, []);

        const { searchParams, searchResultsPromiseState, } = props.model;
        const dishTypeOptions = ["starter", "main course", "dessert"];

        // function textChangeACB(text) {
        //     props.model.setSearchQuery(text);
        // }

        // function typeChangeACB(type) {
        //     props.model.setSearchType(type);
        // }

        // function searchClickACB() {
        //     props.model.doSearch(searchParams);
        // }

        function resultChosenACB(exercise) {
            props.model.setCurrentExerciseId(exercise.id);
        }

        function renderSearchResults() {
            if (!searchResultsPromiseState.promise) {
                return <div>No data</div>;
            } else if (searchResultsPromiseState.promise && !searchResultsPromiseState.data && !searchResultsPromiseState.error) {
                return <div>
                    <img src="https://brfenergi.se/iprog/loading.gif" />
                </div>
            } else if (searchResultsPromiseState.error) {
                return <div>Error: {searchResultsPromiseState.error.toString()}</div>;
            } else {
                return (
                    <SearchResults
                        // searchResults={searchResultsPromiseState.data || []}
                        searchResults={mockExercises}
                        resultChosenACB={resultChosenACB}
                    />
                );
            }
        }

        function clickMe(){
            console.log("SEARCHED");
        }
        return (
            <div>
                <SearchView
                clickMe ={clickMe}
                />
                {/* {renderSearchResults()} */}
                <SearchResults 
                    searchResults={mockExercises}
                    resultChosenACB={resultChosenACB}
                />
            </div>
        );


    })
export { Search }