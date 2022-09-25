//TUPLES

let a = [3, "hello", { p: 3 }];

a[0] = 6;
a[0] = "World";
a[0] = false; //we can not declare different kind of types here.

let b: [number, string, object] = ["nobel", "hello", { p: 4 }]; //this is tuples. we have to maintain the type order.
