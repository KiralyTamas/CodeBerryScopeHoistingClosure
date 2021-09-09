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
        var fail = "No!";
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

/*Modul Pattern-be csomagolt köszönő fügvények kódja*/

var greeting = (function () {
    var hello = "Hello ";
    var smile = " :)";
    var excitement = " !!!";
    return {
        greetWithExcitement: function (name) {
            console.log(hello + name + excitement);
        },
        greetWithASmile: function (name) {
            console.log(hello + name + smile);
        },
    };
})();
greeting.greetWithExcitement("Earl");
greeting.greetWithASmile("Peet");

/*THIS funkció gyakorlása*/

const person = {
    name: "Berry",
    hobbies: ["Discgolf", "Mantrailing"],
    introduce: function () {
        console.log("Hello, a nevem " + person.name);
    },
    isIntersetedIn: function (hobbi) {
        if (this.hobbies.includes(hobbi)) { // Így tudjuk megnézni, hogy egy tömbben szerepel-e az a paraméter amit megadtunk a fügvénynek
            console.log("Why yes, I love " + hobbi + ".")
        } else {
            console.log("Well, I have " + this.hobbies.length + " hobbies, but " + hobbi + " is not one of theme.")
        }
    }
};
person.introduce();
person.isIntersetedIn("Longform Improv");
person.isIntersetedIn("Discgolf");


const personFactory = function (name) {
    return {
        name: name,
        introduce: function () {
            console.log("Hello, a nevem " + this.name);
        },
    };
};
personFactory("Berry").introduce();
personFactory("Henry").introduce();
personFactory("Lenina").introduce();

var hero = {
    _name: 'John Doe',
    getSecretIdentity: function () {
        return this._name;
    }
};
var stoleSecretIdentity = hero.getSecretIdentity;
console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

/*This funkció eseménykezelőben*/

const btn = {
    button: document.querySelector(".testButton"),
    toggleColor: function () {
        this.classList.toggle("buttonShadow");
    },
    active:function(){
        this.button.addEventListener("click", this.toggleColor);
    }
}
btn.active();