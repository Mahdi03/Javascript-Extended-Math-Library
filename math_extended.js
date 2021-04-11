/*
DOCUMENTATION:
           
This file adds on to the Math Object that is built-in in JavaScript,
that way you can solve more complex math, simply link this Script into
your HTML File, and follow the docs below:
           
ARITHMETIC MEAN:
Use an array of numbers to find the Arithmetic Mean
(Adds up all the numbers and divides by how many there are)
           
Simply type:
    Math.aMean([2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 60, 30, 45, 90]); //Should return 20.285714285714284...

GEOMETRIC MEAN:
Use an array of numbers to find the Geometric Mean
(Multiplies all of the numbers and takes the nth root)
           
Simply type:
    Math.gMean([2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 60, 30, 45, 90]); //Should return 10.296268469976324...

NTH ROOT:
Use n and the base of the radical to find the nth root
           
Simply type:
    Math.nthRoot(16, 123454321); //Should return the 16th Root of 123454321 (3.2041965129271887...)

FACTORIALS:
To get the factorial of a number, make sure the number is small, or else the browser will freeze up
(When 16! = 16 * 15 * 14 * 13 * 12 * 11 * 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1)
Simply type:
    Math.factorial(16); //Should return 20922789888000
           
COMBINATIONS:
To use combinations in the form nCr, make sure that n is greater than or equal to r
Simply type:
    Math.choose(5, 2); //Should Return 10

PERMUTATIONS:
To use permutations in the form nPr, make sure again that n is greater than or equal to r
Simply type:
    Math.pick(5, 2); //Should return 20

PERCENTS:
To convert a number to a percent, use Math.percent(number);
Simply Type:
    Math.percent(30); //Should return 0.3
           
ANY BASE LOGARITHMS:
To get a Logarithm in any base, use the base, and the input value
Simply type:
    Math.nthBaseLog(13, Math.pow(13, 15)); //Should return 15
           
AREAS:
To find the Area of a
    RECTANGLE/SQUARE:
    Simply type:
        var length = 17;
        var width = 59;
        Math.area("rect", length, width); //Should return 1003
        OR
        Math.area("square", length, width); //Should return 1003
    TRIANGLE:
        Simply type:
        var baseLength = 1003;
        var height = 15;
        Math.area("triangle", baseLength, 0, height); //Should return 15045
    CIRCLE:
    Simply type:
        var radius = 15;
        Math.area("circle", 0, radius); //Should return 706.8583470577034...

VOLUMES:
To find the Volume of a
    RECTANGULAR PRISM/CUBE:
    Simply type:
        var length = 15;
        var width = 13;
        var threeDHeight = 17;
        Math.volume("rectPrism", width, length, 0, threeDHeight); //Should return 3315
        OR
        Math.volume("cube", width, length, 0, threeDHeight); //Should return 3315
    RECTANGULAR OR SQUARE BASE PYRAMID:
    Simply type:
        var width = 10;
        var length = 10;
        var threeDHeight = 4;
        Math.volume("rectPyramid", width, length, 0, threeDHeight); //Should return 400
    TRIANGULAR PRISM:
    Simply type:
        var base = 19; //Base of base Triangle
        var twoDHeight = 17; //Height of base of Triangular Prism
        var threeDHeight = 3; //3 Dimensional Height of Triangular Prism
        Math.volume("triangularPrism", base, 0, twoDHeight, threeDHeight); //Should return 484.5
    TRIANGULAR BASE PYRAMID:
    Simply type:
        var base = 5;
        var twoDHeight = 5;
        var threeDHeight = 7;
        Math.volume("triangularPyramid", base, 0, twoDHeight, threeDHeight); //Should return 29.166666666666664...
    SPHERE:
    Simply type:
        var radius = 5;
        Math.volume("sphere", 0, radius); //Should return 523.5987755982989...
    CONE:
    Simply type:
        var radius = 5;
        var threeDHeight = 10;
        Math.volume("cone", 0, radius, 0, threeDHeight); //Should return 261.79938779914943...
SURFACE AREAS:
       
*/
//Median
Math.__proto__.median = function(numbers) {
    if (Array.isArray(numbers) === true) {
        numbers.sort(function(a, b) { return a - b; });
        if (numbers.length % 2 === 0) {
            return Math.aMean([numbers[numbers.length / 2 - 1], numbers[(numbers.length / 2)]]);
        } else if (numbers.length % 2 === 1) {
            return numbers[Number(String(numbers.length / 2).split(".")[0])];
        }
    } else {
        return numbers;
    }
};
//Range
Math.__proto__.range = function(numbers) {
    if (Array.isArray(numbers) === true) {
        return Math.max(...numbers) - Math.min(...numbers);
    } else {
        return numbers;
    }
};
//Arithmetic Mean
Math.__proto__.aMean = function(numbers) {
    if (Array.isArray(numbers) === true) {
        var l = 0;
        for (var i = 0; i < numbers.length; i++) {
            l += numbers[i];
        }
        return l / numbers.length;
    } else {
        return numbers;
    }
};
//Geometric Mean
Math.__proto__.gMean = function(numbers) {
    var l = 1;
    for (var i = 0; i < numbers.length; i++) {
        l *= numbers[i];
    }
    return Math.pow(l, 1 / numbers.length);
};
//Harmonic Mean
Math.__proto__.hMean = function(numbers) {
    if (Array.isArray(numbers) === true) {
        var l = 0;
        for (var i = 0; i < numbers.length; i++) {
            l += 1 / numbers[i];
        }
        return numbers.length / l;
    } else {
        return numbers;
    }
};
//Standard Deviation
Math.__proto__.stddev = function(numbers) {
    if (Array.isArray(numbers) === true) {
        var avgMean = Math.aMean(numbers);
        var arrayDeviations = [];
        for (var i = 0; i < numbers.length; i++) {
            arrayDeviations.push(Math.pow(numbers[i] - avgMean, 2));
        }
        var variance = Math.aMean(arrayDeviations);
        var stddev = Math.sqrt(variance);
        return stddev;
    } else {
        return 0;
    }
};
//Nth Root Of Number
Math.__proto__.nthRoot = function(radical, base) {
    return Math.pow(base, 1 / radical);
};
//Complex Math
//I (Imaginary)

//Factorials
Math.__proto__.factorial = function(input) {
    var l = input;
    if (l === 0) {
        return 1;
    } else {
        while (l !== 1) {
            l--;
            input *= l;
        }
        return input;
    }
};
//Permutations
Math.__proto__.pick = function(n, r) {
    return Math.factorial(n) / (Math.factorial(n - r));
};
//Combinations
Math.__proto__.choose = function(n, r) {
    return Math.factorial(n) / (Math.factorial(r) * Math.factorial(n - r));
};
//Percents
Math.__proto__.percent = function(input) {
    return input / 100;
};
//Rounding
Math.__proto__.rnd = function(value, places) {
    if (places === undefined) {
        return Number(value.toFixed(3));
    } else {
        return Number(value.toFixed(places));
    }
};
//Significant Figures
Math.__proto__.sigFigs = function(value, sigFigs) {
    if (sigFigs === undefined) {
        return Number(value.toPrecision(5));
    } else {
        return Number(value.toPrecision(sigFigs));
    }
};

//Trigonometry
//Degrees
Math.__proto__.deg = function(func, input) {
    if (func === "sin") {
        return Math.rnd(Math.sin(input * Math.PI / 180));
    } else if (func === "cos") {
        return Math.rnd(Math.cos(input * Math.PI / 180));
    } else if (func === "tan") {
        return Math.rnd(Math.tan(input * Math.PI / 180));
    } else if (func === "csc") {
        return Math.rnd(1 / Math.deg("sin", input));
    } else if (func === "sec") {
        return Math.rnd(1 / Math.deg("cos", input));
    } else if (func === "cot") {
        return Math.rnd(1 / Math.deg("tan", input));
    } else if (func === "sinInv") {
        return Math.rnd(Math.asin(input) * 180 / Math.PI);
    } else if (func === "cosInv") {
        return Math.rnd(Math.acos(input) * 180 / Math.PI);
    } else if (func === "tanInv") {
        return Math.rnd(Math.atan(input) * 180 / Math.PI);
    } else if (func === "cscInv") {
        return Math.rnd(Math.deg("sinInv", 1 / input));
    } else if (func === "secInv") {
        return Math.rnd(Math.deg("cosInv", 1 / input));
    } else if (func === "cotInv") {
        return Math.rnd((90) - Math.deg("tanInv", input));
    } else {
        console.error("The Math.deg() function must include 2 parameters, the function and the input. Make sure you spelled the function name correctly,and try again!");
    }
};
//Radians
Math.__proto__.rad = function(func, input) {
    if (func === "sin") {
        return Math.rnd(Math.sin(input));
    } else if (func === "cos") {
        return Math.rnd(Math.cos(input));
    } else if (func === "tan") {
        return Math.rnd(Math.tan(input));
    } else if (func === "csc") {
        return Math.rnd(1 / Math.rad("sin", input));
    } else if (func === "sec") {
        return Math.rnd(1 / Math.rad("cos", input));
    } else if (func === "cot") {
        return Math.rnd(1 / Math.rad("tan", input));
    } else if (func === "sinInv") {
        return Math.rnd(Math.asin(input));
    } else if (func === "cosInv") {
        return Math.rnd(Math.acos(input));
    } else if (func === "tanInv") {
        return Math.rnd(Math.atan(input));
    } else if (func === "cscInv") {
        return Math.rnd(Math.rad("sinInv", 1 / input));
    } else if (func === "secInv") {
        return Math.rnd(Math.rad("cosInv", 1 / input));
    } else if (func === "cotInv") {
        Math.rnd((Math.PI / 2) - Math.rad("tanInv", input))
    } else {
        console.error("The Math.rad() function must include 2 parameters, the function and the input. Make sure you spelled the function name correctly,and try again!");
    }
};

//Any Base Logarithms
Math.__proto__.nthBaseLog = function(base, input) {
    if (base === 10) {
        return Math.log10(input);
    } else if (base === 2) {
        return Math.log2(input);
    } else if (base === Math.E) {
        return Math.log(input);
    } else {
        var answer = Math.log(input) / Math.log(base);
        return answer;
    }
};

//Vectors
class Vector {
    constructor(vectorArray) {
        //dimensions, x, y, z, magnitude, theta
        if (!Array.isArray(vectorArray)) {
            //throw new Error(this + "Vector constructor requires an array input in the form of [x], [x, y], or [x, y, z]");
        }
        this.dimensions = vectorArray.length;
        /*
        if (![1, 2, 3].includes(constructorObject.dimensions)) {
            throw new Error(this + "Vector has illegal dimensions, use either 1, 2, or 3");
        }*/
        this.x = vectorArray[0];
        if (this.dimensions == 1) {
            this.y = 0;
            this.z = 0;
        } else if (this.dimensions == 2) {
            this.y = vectorArray[1];
            this.z = 0;
        } else if (this.dimensions == 3) {
            this.y = vectorArray[1];
            this.z = vectorArray[2];
        }

        this.magnitude = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2) + Math.pow(this.z, 2));
    }
    static add(v1, v2) {
        var x1 = v1.x;
        var y1 = v1.y;
        var z1 = v1.z;

        var x2 = v2.x;
        var y2 = v2.y;
        var z2 = v2.z;

        var x3 = x1 + x2;
        var y3 = y1 + y2;
        var z3 = z1 + z2;
        return new Vector([x3, y3, z3]);
    }
    static angle(v, degOrRad) {
        if (degOrRad === "deg") {
            if (v.dimensions == 2) {
                return { theta: Math.deg("tanInv", v.y / v.x) };
            } else if (v.dimensions == 3) {
                return {
                    alpha: Math.deg("cosInv", v.x / v.magnitude),
                    beta: Math.deg("cosInv", v.y / v.magnitude),
                    gamma: Math.deg("cosInv", v.z / v.magnitude)
                };
            }
        } else if (degOrRad === "rad") {
            if (v.dimensions == 2) {
                return { theta: Math.rad("tanInv", v.y / v.x) };
            } else if (v.dimensions == 3) {
                return {
                    alpha: Math.rad("cosInv", v.x / v.magnitude),
                    beta: Math.rad("cosInv", v.y / v.magnitude),
                    gamma: Math.rad("cosInv", v.z / v.magnitude)
                };
            }
        }
    }
    static cross(v1, v2) {
        var x1 = v1.x;
        var y1 = v1.y;
        var z1 = v1.z;

        var x2 = v2.x;
        var y2 = v2.y;
        var z2 = v2.z;

        var x3 = (y1 * z2) - (z1 * y2);
        var y3 = ((x1 * z2) - (z1 * x2)) / -1;
        var z3 = (x1 * y2) - (y1 * x2);
        return new Vector([x3, y3, z3]);
    }
    static dot(v1, v2) {
        return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
    }
    static magnitude(v) {
        return v.magnitude;
    }
    static scale(vector, factor) {
        var x1 = vector.x;
        var y1 = vector.y;
        var z1 = vector.z;

        var x2 = x1 * factor;
        var y2 = y1 * factor;
        var z2 = z1 * factor;

        return new Vector([x2, y2, z2]);
    }
    static subtract(v1, v2) {
        var x1 = v1.x;
        var y1 = v1.y;
        var z1 = v1.z;

        var x2 = v2.x;
        var y2 = v2.y;
        var z2 = v2.z;

        var x3 = x1 - x2;
        var y3 = y1 - y2;
        var z3 = z1 - z2;
        return new Vector([x3, y3, z3]);
    }
    toString() {
        return `[${this.x}, ${this.y}, ${this.z}]`;
    }
    get[Symbol.toStringTag]() {
        return "Vector";
    }
}
Math.__proto__.vector = function(vector) {
    return new Vector(vector);
};
Math.vector.__proto__.angle = function(v1, degOrRad) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    return Vector.angle(v1, degOrRad);
};
Math.vector.__proto__.add = function(v1, v2) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    if (!(v2.constructor.name === Vector.name) && Array.isArray(v2)) {
        v2 = new Vector(v2);
    }
    return Vector.add(v1, v2);
};
Math.vector.__proto__.cross = function(v1, v2) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    if (!(v2.constructor.name === Vector.name) && Array.isArray(v2)) {
        v2 = new Vector(v2);
    }
    return Vector.cross(v1, v2);

};
Math.vector.__proto__.dot = function(v1, v2) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    if (!(v2.constructor.name === Vector.name) && Array.isArray(v2)) {
        v2 = new Vector(v2);
    }
    return Vector.dot(v1, v2);
};
Math.vector.__proto__.magnitude = function(v1) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    return Vector.magnitude(v1);
};
Math.vector.__proto__.scale = function(v1, scale) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    return Vector.scale(v1, scale);
};
Math.vector.__proto__.subtract = function(v1, v2) {
    if (!(v1.constructor.name === Vector.name) && Array.isArray(v1)) {
        v1 = new Vector(v1);
    }
    if (!(v2.constructor.name === Vector.name) && Array.isArray(v2)) {
        v2 = new Vector(v2);
    }
    return Vector.subtract(v1, v2);
};
//Areas of 2-D Figures
Math.__proto__.area = function(shape, length, width, height) {
    if (shape === "rect" || shape === "square") {
        return length * width;
    } else if (shape === "triangle") {
        return length * height;
    } else if (shape === "circle") {
        return Math.PI * Math.pow(width, 2);
    }
};
//Volumes of 3-D Figures
Math.__proto__.volume = function(figure, width, length, twoDHeight, threeDHeight) {
    if (figure === "rectPrism" || figure === "cube") {
        return width * length * threeDHeight;
    } else if (figure === "rectPyramid") {
        var areaOfBase = width * length;
        return 1 / 3 * areaOfBase * threeDHeight;
    } else if (figure === "triangularPrism") {
        var areaOfBase = 1 / 2 * width * twoDHeight;
        return areaOfBase * threeDHeight;
    } else if (figure === "triangularPyramid") {
        var areaOfBase = 1 / 2 * width * twoDHeight;
        return 1 / 3 * areaOfBase * threeDHeight;
    } else if (figure === "sphere") {
        return 4 / 3 * Math.PI * Math.pow(length, 3);
    } else if (figure === "cone") {
        return 1 / 3 * Math.PI * Math.pow(length, 2) * threeDHeight;
    }
};
//Surface Area of 3-D Figures
Math.__proto__.surfaceArea = function(figure, width, length, height) {
    if (figure === "sphere") {
        return 4 * Math.PI * Math.pow(width, 2);
    } else if (figure === "cube" || figure === "rectPrism") {
        return (2 * width * length) + (2 * length * height) + (2 * width * height);
    }
};

//Testing Purposes Only: