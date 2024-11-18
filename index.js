function drawTriangle(triangleSize) {
   for (let i = 1; i <= triangleSize; i++) {
      console.log("*".repeat(i));
   }
}

console.log("Testing drawTriangle()...");

// Test drawTriangle() with different arguments
drawTriangle(4);



// Do NOT remove the following line
export default drawTriangle;