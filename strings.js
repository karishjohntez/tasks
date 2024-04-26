

button.addEventListener("click", () => {
    let button = document.getElementById("button");
const output = document.getElementById("output");
var inputText = document.getElementById("inputText").value.toLowerCase(); // converts to lower case

inputText = inputText.replace(/[A-Z]/g, function(match) {
return match.toLowerCase(); // replace capital letters with small letters
});
var words = inputText.match(/\b\w+\b/g); // extract words
var wordCount = {};
var matches = [];
// count occurrence of a word
words.forEach(function(word) {
if (wordCount[word]){
wordCount[word]++;
}
else{
wordCount[word]=1;
}       
});
// find matching
for( var word in wordCount){
if(wordCount[word] > 1){
matches.push(word);
output.innerHTML= `Matching words: ${matches}`
}
else{
output.innerHTML= "Matching words: None"
}
console.log(matches);
}
});
    