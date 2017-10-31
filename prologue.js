$("#glosses").html("<p>The glosses will go here.</p>");
$.getJSON("prologue.json", function(data){
  let prologueText;
  prologueText = "<blockquote><p>";
  data.lines.forEach(function(line){
    let lineText;
    lineText = "";
    line.forEach(function(word){
      let wordString;
      wordString = word.text;
      if (word.modern){
        wordString = "<a href='#' data-modern='" + word.modern + "'>" + wordString + "</a>";
      }
      lineText = lineText + wordString + " ";
    });
    prologueText = prologueText + lineText + "<br/>";
  });
  prologueText = prologueText + "</p></blockquote>";
  $("#prologue").html(prologueText);
});
$("#prologue a").click(function(){
  let glossText, clickedWord, modernWord;
  clickedWord = $( this ).text();
  modernWord = $( this ).data("modern");
  glossText = "<h2>You clicked on " + clickedWord + ", which means " + modernWord +"</h2>";
  $("#glosses").html(glossText);
});
let setTheDefaultGlossesValue, setTheDefaultPrologueValue, selectThePrologueLinksAndWaitForClicks;
setTheDefaultGlossesValue();
setTheDefaultPrologueValue(function(){
  selectThePrologueLinksAndWaitForClicks();
});
//I'm not sure what I'm doing wrong here, but it isn't working at all.
