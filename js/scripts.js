$(document).ready(function() {
  $("form#formsOne").submit(function(event){
    event.preventDefault();

    var initialEntry = [];
    initialEntry.push($("#entry").val().split(' '));

    // var newWords = $("#entry").val();
    // words.push(newWords);
      // $("input#entry").text();

    console.log(initialEntry);


    // return "#entry".val() = "";
  });
});
