import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import { getExercises, getMockExercises, getMockExercisesDetails } from "../../api/exerciseDb";
import SearchResults from "./searchResults"
import SearchView from "./searchView";

const Search = observer(
    function Search(props) {
        const [exercises, setExercises] = useState(getMockExercises);
        // const [exercises, setExercises] = useState([]); //uncomment to use actual results 
        const [error, setError] = useState(null);
        const { searchParams, searchResultsPromiseState, } = props.model;


        // Uncomment after starting the backend to call actual results
        //   useEffect(() => {
        //     getExercises(1)
        //       .then((data) => {
        //         setExercises(data);
        //       })
        //       .catch((err) => {
        //         setError(err.message);
        //       });
        //   }, []);


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
                        searchResults={exercises}
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
                    searchResults={exercises}
                    resultChosenACB={resultChosenACB}
                />
            </div>
        );


    })
export { Search }