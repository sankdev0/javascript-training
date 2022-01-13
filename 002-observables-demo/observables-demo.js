// Note: Observables are used to emit values in an async fashion.
// Value emitting is only initialized when subscribe method is called.

// Observable takes a function but only runs it when subscribe method is called.
class Observable {
    constructor(functionThatTakesObserver) {
        this._functionThatTakesObserver = functionThatTakesObserver;
    }

    subscribe(observer) {
        return this._functionThatTakesObserver(observer);
    }
}

let theSubscriber = {
    next(value) {
        console.log("next method working: " + value);
    },
    error(e) {
        console.log(e);
    },
    complete() {
        console.log("complete method working")
    }
}

let anotherSubscriber = {
    next(value) {
        console.log("next from another subscriber: " + value);
    },
    error(e) {
        console.log(e);
    },
    complete() {
        console.log("complete from another subscriber")
    }
}

let theObservable = new Observable(subscriber => {
    setTimeout(() => {
        console.log("Wait time is up");
        subscriber.next("haha");
        subscriber.next("JaJa");
        subscriber.complete();
    }, 2000)
}
);


theObservable.subscribe(theSubscriber);

setTimeout(() => { 
    theObservable.subscribe(anotherSubscriber) 
}, 3000);