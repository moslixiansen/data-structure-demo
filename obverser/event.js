const Observer = require('./index')

class Person extends Observer {
  constructor (name, age) {
    super()
    this.name = name
    this.age = age
  }

  addHandler (handler) {
    this.subscribe({ type: 'print', message: 'yes' }, handler)
  }

  say (message) {
    this.fire({ type: 'print', message })
    console.log(`my name is ${this.name}, my age is ${this.age}`)
  }
}

const printPerson = function (observe) {
  console.log(observe.message)
}

const p = new Person('leo', 18)
p.addHandler(printPerson)
p.say('hello everyone!')