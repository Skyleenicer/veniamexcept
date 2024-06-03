interface ExampleInterface {
  // Define properties and methods expected in the interface
  property1: string;
  property2: number;
  method1(): void;
  method2(param: string): number;
}

// Implementing the interface in a class
class ExampleClass implements ExampleInterface {
  property1: string;
  property2: number;

  constructor(property1: string, property2: number) {
    this.property1 = property1;
    this.property2 = property2;
  }

  method1(): void {
    console.log('Method1 implementation');
  }

  method2(param: string): number {
    console.log('Method2 implementation with', param);
    // Return a number as an example
    return param.length;
  }
}
