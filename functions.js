class Printer {
  constructor(printableItem, ...otherItems) {
    this.printableItem = printableItem;
    this.otherItems = otherItems;
  }
  print() {
    console.log(`${this.printableItem} ${this.otherItems.join(" ")}`);
  }
}
function printMyName3(name, ...restOfTheName) {
  let printer = new Printer(name, ...restOfTheName);
  printer.print();
}

printMyName3("Ahmed", "Abdelnasser", "Abouzaid");
printMyName3("Ahmed");
function printMyName() {
  console.log("My Name is Abdelrahman Salah");
}

function printMyName2() {
  console.log("My Name is Abdelrahman Sherif");
}

function printMyNameOmar() {
  console.log("My Name is Omar Muhammad");
}
