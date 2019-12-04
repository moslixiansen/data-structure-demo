class Observer {
  constructor () {
    this.store = {}
  }

  subscribe (obverse, handler) {
    if (!this.store[obverse.type]) {
      this.store[obverse.type] = []
    }
    this.store[obverse.type].push(handler)
  }

  fire (obverse) {
    const type = obverse.type
    if (!this.store[type]) {
      throw new Error(`not register ${type} event`)
    }
    this.store[type].forEach(handler => handler(obverse) )
  }

  unSubscribe (obverse, handler) {
    const index = this.store[obverse.type].findIndex(item => item === handler)
    index !== -1 && this.store[obverse.type].splice(index, 1)
  }
}

// const printHandler = function (obverse) {
//   console.log(`hello, i want to say ${obverse.message}`)
// }

// const observer = new Observer()
// observer.subscribe({ type: 'print', message: 'test print' }, printHandler)
// observer.fire({ type: 'print', message: 'test print' })
// observer.unSubscribe({ type: 'print', message: 'test print' }, printHandler)
// observer.fire({ type: 'print', message: 'test print' })

module.exports = Observer