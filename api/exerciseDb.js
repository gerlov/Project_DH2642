


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

export {getExercises}