/*Pozitív számok vizsgálatának kódja*/

(function () {
    function logUntilSmall(array) {
        const condition = " pozitiv";
        const error = " megállította a logolást";
        let i, message;
        for (i = 0; i < array.length && array[i] > 0; i++) {
            console.log(array[i] + condition);
        }
        if (i === array.length) {
            message = "minden elem" + condition;
        } else {
            message = array[i] + error;
        }
        console.log(message);
    }
    const testArray = [1, 3, 4, 7, 10, 11, 2];
    logUntilSmall(testArray);
    testArray.push(-1);
    logUntilSmall(testArray);
})();

/*pozitív-negatív logikai vizsgálat kódja*/
(function () {
    function isPositive(number) {
        var condition = "positive";
        var fail = "Elbasztad";
        var message;
        if (number > 0) {
            message = "Yes, it's " + condition;
        }
        if (number < 0) {
            message = fail;
        }
        console.log(message);
    }
    var test = 10;
    isPositive(test);
    test = -10;
    isPositive(test);
})();

/*Fügvény refaktorálás kódja*/
(function () {
    var test;
    function isPositive(number) {
        var condition = "positive";
        var message;
        var fail = "No!";
        if (number > 0) {
            message = "Yes, it's " + condition;
        }
        if (number < 0) {
            message = fail;
        }
        console.log(message);
    }
    test = 10;
    isPositive(test);
    test = -10;
    isPositive(test);
})();

/*Closure-be csomagolt fügvény kódja*/

var greet = (function () {
    var greeting = "Hello ";
    function greetWithExcitement(name) {
        var excitement = "!!!";
        console.log(greeting + name + excitement);
    }
    return greetWithExcitement;
})();
greet("Berry");

/*Abszolúlt URL visszaadó fügvény Closure-be csomagolt kódja*/

let absoluteUrl = (function () {
    function logAbsoluteUrl(url) {
        let a;
        if (!a) {
            a = document.createElement('a');
        }
        a.href = url;
        console.log(a.href);
    };
    return logAbsoluteUrl;
})();
absoluteUrl("index.html");