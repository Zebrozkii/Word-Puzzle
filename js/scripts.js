$(document).ready(function() {
  $("form#sentence").submit(function(event) {
    (event).preventDefault();
    var inputSentence = $("input#inputOne").val();
    if (!inputSentence) {
      alert('Please enter a sentence');
    }
    var letters = inputSentence.split("");
    var vowels = ["a", "e", "i", "o", "u"];
    for (var index = 0; index < letters.length; index += 1) {
      if (vowels.includes(letters[index])){
        letters[index]="-";
      }
    }
    var outputSentence = letters.join("");
    $("#result").append(outputSentence);
    $("#sentence").hide();

  });
});
