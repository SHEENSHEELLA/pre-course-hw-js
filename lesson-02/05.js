let passport = {
  name: 'Petr',
  surname: 'Petrov',
}

let copyPassport = { ...passport, name: 'Ivan' }

console.log(passport.name)
console.log(copyPassport.name)
