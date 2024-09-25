let passportMarried = {
  name: 'Petr',
  surname: 'Petrov',
  address: {
    country: 'USA',
    city: 'Bobryisk',
  },
}

let copyPassportMarried = {
  ...passportMarried,
  address: { ...passportMarried.address },
}

copyPassportMarried.married = true

console.log(passportMarried)
console.log(copyPassportMarried)
