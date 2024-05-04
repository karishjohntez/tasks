function splitWords(inputText) {
    // Convert input text to lowercase and capture the result
    let lowerCaseText = inputText.toLowerCase();

    // Split the text into an array of words  capture the result
    let wordsArray = lowerCaseText.split(" ");

    // Filter out any empty strings from the array and capture the result
    let filteredWordsArray = wordsArray.filter(word => word.trim() !== "");

    // Return the filtered array of words
    return filteredWordsArray;
}

function countWords(words) {
    let wordCount = {};
    words.forEach(function(word) {
        if (wordCount[word]) {
            wordCount[word]++;
        } else {
            wordCount[word] = 1;
        }
    });
    return wordCount;
}

function findMatches(wordCount) {
    let matches = [];
    for (var word in wordCount) {
        if (wordCount[word] > 1) {
            matches.push(word);
        }
    }
    return matches;
}

function handleButtonClick() {
    const output = document.getElementById("output");
    let inputText = document.getElementById("inputTextArea").value;
    let words = splitWords(inputText);
    let wordCount = countWords(words);
    let matches = findMatches(wordCount);
    
    if (matches.length > 0) {
        output.innerHTML = `<strong>Matching words:<strong> ${matches.join(", ")}`;
    } else {
        output.innerHTML = "Matching words: None";
    }
}

let button = document.getElementById("button");
button.addEventListener("click", handleButtonClick);
