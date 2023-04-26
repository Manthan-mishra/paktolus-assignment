const fileSystem = {};

function mkdir(path) {
  const directories = path.split("/");
  let currentDirectory = fileSystem;

  for (let directory of directories) {
    if (directory !== "") {
      if (!currentDirectory[directory]) {
        currentDirectory[directory] = {};
      }
      currentDirectory = currentDirectory[directory];
    }
  }
}

function writeFile(path, data) {
  const directories = path.split("/");
  const fileName = directories.pop();
  let currentDirectory = fileSystem;

  for (let directory of directories) {
    if (directory !== "") {
      if (!currentDirectory[directory]) {
        throw new Error(`Parent directory "${directory}" does not exist`);
      }
      currentDirectory = currentDirectory[directory];
    }
  }

  currentDirectory[fileName] = data;
}

function readFile(path) {
  const directories = path.split("/");
  const fileName = directories.pop();
  let currentDirectory = fileSystem;

  for (let directory of directories) {
    if (directory !== "") {
      if (!currentDirectory[directory]) {
        throw new Error(`Directory "${directory}" does not exist`);
      }
      currentDirectory = currentDirectory[directory];
    }
  }

  if (!currentDirectory[fileName]) {
    throw new Error(`File "${fileName}" does not exist`);
  }

  return currentDirectory[fileName];
}

mkdir("/foo/bar");
writeFile("/foo/bar/baz.txt", "i love india");
const contents = readFile("/foo/bar/baz.txt");
console.log(contents);
