var num = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]

function checkNumber(number){
	return number > 10
}

console.log("Sebelumnya : ", num.toString())
console.log("Ascending : ", num.sort().toString())
console.log("Descending : ", num.reverse().toString())
console.log("Filter > 10 : ", num.filter(checkNumber).toString())