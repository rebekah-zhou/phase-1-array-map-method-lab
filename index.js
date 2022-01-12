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


const titleCased = () => {
  const tutorials1 = tutorials.map(title => {
    const arrTitle = title.split(' '); 
    const arrTitle1 = arrTitle.map(word => word[0].toUpperCase() + word.slice(1))
    const newTitle = arrTitle1.join(' ');
    return newTitle;
    }
  )
  return tutorials1;
}


