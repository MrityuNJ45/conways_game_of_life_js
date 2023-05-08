class MyClass {
    constructor(a, b = 0, c = 0) {
      // Use a default value of 0 for b and c if they are not provided
      this.a = a;
      this.b = b;
      this.c = c;
    }
  }
  
  // Create instances with different argument configurations
  const obj1 = new MyClass(1);
  const obj2 = new MyClass(2, 3);
  const obj3 = new MyClass(4, 5, 6)
  console.log(obj1)
  console.log(obj2)
  console.log(obj3)