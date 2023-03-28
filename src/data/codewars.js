console.log("first");

const mispelled = function (word1, word2) {
	let sorted1 = [...word1].sort().join("");
	let sorted2 = [...word2].sort().join("");

	let greater = sorted1.length > sorted2.length ? sorted1 : sorted2;
	let lesser = sorted1 == greater ? sorted2 : sorted1;

	const lessDic = [...lesser].reduce((acc, curr) => {
		!acc[curr] ? (acc[curr] = 1) : acc[curr]++;
		return acc;
	}, {});
	const greatDic = [...greater].reduce((acc, curr) => {
		!acc[curr] ? (acc[curr] = 1) : acc[curr]++;
		return acc;
	}, {});
	let all = [];
	return [lessDic, greatDic];
};

console.log(mispelled("versed", "VetZed"));
console.log(mispelled("versed", "versed"));
console.log(mispelled("versed", "1ersed"));
console.log(mispelled("versed", "veesed"));
console.log(mispelled("versed", "veeersed"));
console.log(mispelled("v5rs7d", "versed"));
console.log(mispelled("versed", "1versed"));
console.log(mispelled("versed", "12versed"));
console.log(mispelled("12versed", "versed"));

var kookaCounter = function (laughing) {
	// Your code here!
	return (laughing.match(/(ha+)+|(Ha+)+/g) || []).length;
};

console.log(kookaCounter("hahahahahaHaHaHa"));
console.log(kookaCounter("HaHaHahahaHaHa"));
console.log(kookaCounter("hahahahahaHaHaHahaHaHaHaha"));
console.log(kookaCounter(""));

function bandNameGenerator(str) {
	// Happy coding
	return str[0] !== str[str.length - 1]
		? `The ${str[0].toUpperCase()}${str.slice(1)}`
		: `${str[0].toUpperCase()}${str.slice(1).repeat(2)}`;

	// starts with what it ends with
	return /^(.).*\1$/.test(s)
		? s[0].toUpperCase() + s.slice(1) + s.slice(1)
		: "The " + s[0].toUpperCase() + s.slice(1);

	// another egeex
	/^(\w).*\1$/.test(s);

	// IIFE where n is a parameter and the argument returns true or false which translates to 1 or 0
	return ((n) =>
		"The ".repeat(1 - n) + str[0].toUpperCase() + str.slice(1).repeat(1 + n))(
		str.endsWith(str[0])
	);
	// last solution
	function bandNameGenerator([f, ...str]) {
		if (f == str[str.length - 1]) return f.toUpperCase`` + str.join``.repeat(2);
		return "The " + f.toUpperCase`` + str.join``;
	}
}

console.log(bandNameGenerator("knife"));
console.log(bandNameGenerator("sales"));

function divCon(x) {
	return x.reduce(
		(acc, curr) => (typeof curr !== "string" ? acc + curr : acc - curr),
		0
	);
}
console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

function longestRepetition(s) {
	// to eliminate the if statement i used tenery for arr to provide for an empty array
	// so that match doesnt return a null where there is no match and we can map over it and get
	// a length which would be zero since it is empty
	// then on the return line, i used or short circuiting to make it return an empty string if the first part is falsy
	// that way it doesnt return undefined
	// if (!s.trim()) return ["", 0];
	let arr = s.trim() ? s.match(/(\w)\1*/gi) : [s];
	let length = Math.max(...arr.map((each) => each.length));
	return [arr.find((each) => each.length === length)[0] || "", length];

	let count = 0;
	let prevLetter = "";

	return s
		.toLowerCase()
		.split("")
		.reduce(
			(acc, curr) => {
				if (curr === prevLetter) {
					count++;
				} else {
					count = 1;
				}

				if (count > acc[1]) {
					acc[1] = count;
					acc[0] = curr;
				}

				prevLetter = curr;
				return acc;
			},
			["", 0]
		);

	s
		? s
				.match(/(.)\1*/g)
				.map((s, i) => [s[0], s.length, i])
				.sort((a, b) => b[1] - a[1] || a[2] - b[2])[0]
				.splice(0, 2)
		: ["", 0];

	(s.match(/(.)(\1*)/g) || []).reduce(
		(a, e) => (e.length > a[1] ? [e[0], e.length] : a),
		["", 0]
	);
}
console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition(""));

function allNonConsecutive(arr) {
	// declared a variable outside to store value of curr and then in reduce, assigned the variable
	// a value of every number in the array
	// then i check if the current number is not equal to the prev plus 1 and if it is not the first
	// the first number will have an index of zero which means 1 will be zero and therefore falsy
	// if the numbers pass this conditions then they will be pushed into the acc array in the object format
	// let prev
	return arr.reduce((acc, curr, i) => {
		return curr !== arr[i - 1] + 1 && i ? [...acc, { i: i, n: curr }] : acc;

		// or
		//if (curr - 1 !== arr[i - 1] && i) acc.push({ i: i, n: curr });
		return acc;
	}, []);
	let prev;
	return arr.reduce((acc, curr, i) => {
		if (curr !== prev + 1 && i) acc.push({ i: i, n: curr });

		prev = curr;
		return acc;
	}, []);
}

console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10]));
console.log(allNonConsecutive([1, 2, 3, 4, 6, 7, 8, 10, 15]));
console.log(allNonConsecutive([1, 3, 4, 5, 6, 7, 8, 10, 15]));

function arrayDiff(a, b) {
	return a.filter((each) => !b.includes(each));
}
console.log(arrayDiff([1, 2, 3], [1, 2]));
console.log(arrayDiff([], [1, 2]));
console.log(arrayDiff([1, 2, 3], []));
