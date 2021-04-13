for (let i = 1; i <= 100; i++) {
  let s = ""
  if (i % 3 === 0) {
    s += "fizz"
  }
  if (i % 5 === 0) {
    s += "buzz"
  }
  if (s !== "") {
    console.log(s)
  } else {
    console.log(i)
  }
}