$(document).ready(function() {
  $("form#formsOne").submit(function(event){

    var words = [];
    words.push($("#entry").val());
    // var newWords = $("#entry").val();
    // words.push(newWords);
      // $("input#entry").text();

console.log(words);

    // return "#entry".val() = "";
    event.preventDefault();
  });
});
