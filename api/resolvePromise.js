//This whole file is taken from the Lab.
function resolvePromise(prms, promiseState) {
    if (!prms) return;


    promiseState.promise = prms;
    promiseState.data = null;
    promiseState.error = null;

    function successACB(result) {
        if (promiseState.promise === prms) {
            promiseState.data = result;
        }
    }

    function failureACB(error) {
        if (promiseState.promise === prms) {
            promiseState.error = error;
        }
    }

    prms.then(successACB).catch(failureACB);


}

export { resolvePromise }