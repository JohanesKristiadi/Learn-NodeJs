import path from "path";

const file = "desktop/folderAsal/contoh.txt";

console.info(path.basename(file));
console.info(path.format(file));
console.info(path.delimiter(file));
console.info(path.isAbsolute(file));