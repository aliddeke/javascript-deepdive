Object.is = function ObjectIs(value1, value2) {
    var type = typeof(value1);

    if (type !== typeof(value2))
        return false;

    if (type === "undefined" || type === "null")
        return true;
    else if (type === "boolean" && (value1 === value2))
        return true;
    else if (type === "string" && (value1 === value2))
        return true;
    else if (type === "object" && (value1 === value2))
        return true;
    else if (type === "number") {
        if (Number.isNaN(value1) && Number.isNaN(value2))
            return true;
        else if (isItNegZero(value1) || isItNegZero(value2))
            return isItNegZero(value1) && isItNegZero(value2);
        else if (value1 === value2)
            return true;
    }

    function isItNegZero(x) {
        return x === 0 && (1 / x) === -Infinity;
    }

	return false;
};

function run_test(value1, value2) {
    console.log("..........................................................");
    console.log("value1 is a " + typeof(value1) + " with value '" + value1 + "'");
    console.log("value2 is a " + typeof(value2) + " with value '" + value2 + "'");
    console.log("Object.is(value1, value2): " + Object.is(value1, value2));
}

run_test(undefined, undefined);
run_test(null, null);
run_test(null, undefined);
run_test(false, false);
run_test(true, true);
run_test(true, false);
run_test("abc", "abc");
run_test("foo", "bar");
run_test(7, 8);
run_test(8, 8);
run_test(0, 0);
run_test(-0, -0);
run_test(-0, 0);

// tests:
console.log(Object.is(42,42) === true);
console.log(Object.is("foo","foo") === true);
console.log(Object.is(false,false) === true);
console.log(Object.is(null,null) === true);
console.log(Object.is(undefined,undefined) === true);
console.log(Object.is(NaN,NaN) === true);
console.log(Object.is(-0,-0) === true);
console.log(Object.is(0,0) === true);

console.log(Object.is(-0,0) === false);
console.log(Object.is(0,-0) === false);
console.log(Object.is(0,NaN) === false);
console.log(Object.is(NaN,0) === false);
console.log(Object.is(42,"42") === false);
console.log(Object.is("42",42) === false);
console.log(Object.is("foo","bar") === false);
console.log(Object.is(false,true) === false);
console.log(Object.is(null,undefined) === false);
console.log(Object.is(undefined,null) === false);
