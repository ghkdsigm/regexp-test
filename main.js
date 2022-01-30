let str = `
010-1234-1234
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=avengers
The quick brown fox jumps over the lazy dog.
abbcccdddd
hxxp`

//const regexp = new RegExp('the', 'gi')
const regexp = /[0-9]/g


console.log(str.match(regexp))
