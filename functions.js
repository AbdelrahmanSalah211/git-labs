class Printer {
  constructor(printableItem, ...otherItems) {
    this.printableItem = printableItem;
    this.otherItems = otherItems;
  }
  print() {
    console.log(`${this.printableItem} ${this.otherItems.join(" ")}`);
  }
}
function printMyName(name, ...restOfTheName) {
  let printer = new Printer(name, ...restOfTheName);
  printer.print();
}

printMyName("Ahmed", "Abdelnasser", "Abouzaid");
printMyName("Ahmed");
