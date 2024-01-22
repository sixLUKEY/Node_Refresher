let buffer = new ArrayBuffer(8);
let view = new Int32Array(buffer);
view[0] = 5;
view[1] = 15;

console.log(view);