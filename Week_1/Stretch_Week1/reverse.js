const commandLine = process.argv.slice(2);

//Reverses the arguments passed in the CL

const reverse = function (commandLine) {
  for (let i = 0; i < commandLine.length; i++) {
    let reversedString = "";
    for (let j = commandLine[i].length - 1; j >= 0; j--) {
      reversedString += commandLine[i][j];
    }
    console.log(reversedString);
  } 
}

reverse(commandLine);