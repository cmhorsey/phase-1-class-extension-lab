class Polygon {
  constructor(array) {
    this.array = array
  }

  get countSides() {
    return this.array.length
  }

  get perimeter() {
    return this.array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
  }
}

class Triangle extends Polygon {
  get isValid() {
    const [side1, side2, side3] = this.array
    return (side1 + side2 > side3) && (side1 + side3 > side2) && (side2 + side3 > side1)
  }
}

class Square extends Polygon {
  get isValid() {
    const [side1, side2, side3, side4] = this.array
    if(side1 === side2 && side1 === side3 &&  side1 === side4) {
      return true
    } else return false
  }

  get area() {
    return this.array[0] ** 2
  }
}
