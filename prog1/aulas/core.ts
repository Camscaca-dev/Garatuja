class Item {
  title: string = "";
}

class List {
  private items: Item[] = [];

  constructor(path: string) {
    this.loadFromFile(path);
  }

  private loadFromFile(filePath: string): void {
    console.log(`Loading items from file: ${filePath}`);
  }
} 


const comprasMercado = new List("compras-mercado.json");




  // add(item: Item): void {}
  // remove(item: Item): void {}
  // findOneByTitle(title: string): Item | null {}
  // findManyByTitle(title: string): Item[] {}
  // saveToFile(filePath: string): void {}