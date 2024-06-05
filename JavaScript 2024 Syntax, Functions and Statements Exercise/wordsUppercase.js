function wordUpperCase(input) {

    // Use regex to match words (sequences of word characters)
    const words = input.match(/\w+/g);

    // Convert each word to uppercase
    const upperCaseWords = words.map(word => word.toUpperCase());

    // Join the uppercase words with ", " and print the result
    console.log(upperCaseWords.join(", "));
}
wordUpperCase('Hi, how are you?');
wordUpperCase('hello');
