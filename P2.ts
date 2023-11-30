// Exercise 2: Write a program that takes input and calculates the volume of a cube.

function cubeVolumeFinder(num1: number): number {
  return num1 ** 3;
}

let cubeSide: number = 4;
let volumeResult: number = cubeVolumeFinder(cubeSide);
console.log(volumeResult);
