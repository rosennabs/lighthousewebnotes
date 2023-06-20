const commandLine = process.argv.slice(2);

//Translates commandLine arguments to pig latin
const pigLatin = function (commandLine) {
  let translated = "";
  for (let i = 0; i < commandLine.length; i++) {
    translated += commandLine[i].slice(1) + commandLine[i][0] + "ay";
    if (i !== commandLine.length - 1) {
      translated += " ";
    }
  } console.log(translated);
};

pigLatin(commandLine);