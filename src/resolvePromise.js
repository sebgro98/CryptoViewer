function resolvePromise(promise, promiseState){
    if (promise == null) return;
    promiseState.promise=promise;
    promiseState.data= null;
    promiseState.error= null;

    function saveDataACB(result){
        if (promiseState.promise !== promise) return;
        promiseState.data= result;
        console.log(result)
        console.log(promiseState.data.name)
    }
    function saveErrorACB(err)  {
        if (promiseState.promise !== promise) return;
        promiseState.error= err;
    }
    promise.then(saveDataACB).catch(saveErrorACB);
}

export default resolvePromise