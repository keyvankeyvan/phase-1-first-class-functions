const myVar = function callback(){
    return 123;
}

function receivesAFunction(myVar) {
    myVar();
}


function returnsANamedFunction() {
    return myVar;
}

function returnsAnAnonymousFunction() {
    return (function (){return 'asdasd'})
}