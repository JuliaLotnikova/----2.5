let a, b, result;

switch (true) {
  case (a > 10):
    console.log("a больше 10");
    break;
  case (a > 5):
    console.log("a больше 5, но не больше 10");
    break;
  case (a > 2):
    console.log("a больше 2, но не больше 5");
    break;
  default:
    console.log("a меньше или равно 2");
    break;
}
