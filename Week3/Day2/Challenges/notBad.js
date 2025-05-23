let sentence = "The movie is not that bad, I like it";
let wordNot = sentence.indexOf("not");
console.log("not index:", wordNot); 

let wordBad = sentence.indexOf("bad");
console.log("bad index :", wordBad);

replaceword = sentence.replace("not that bad", "good");
console.log(" The words are replaced :", replaceword );


if (wordBad > wordNot) {
  console.log(sentence);
}
