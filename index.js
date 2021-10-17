const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const inputFunction = function (string){
  let array = []
    let words = string.split(" ")
    for (let i = 0; i < words.length; i++){
      let word = words[i]
      let firstLetter = word.charAt(0)
      let cap = firstLetter.toUpperCase()
      let otherLetters = word.substring(1)
      let fullWord = cap + otherLetters
      array.push(fullWord)
    }
  return array.join(" ")
}





const titleCased = () => {
   let tutorialList = tutorials.map(inputFunction)
   return tutorialList
}


console.log(titleCased())