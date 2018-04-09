export default class Person {
  static say(message) {
    console.log('person say ', message)
  }
  static eat(food) {
    return `person eat ${food}`
  }
  static save(name) {
    console.log(`person saved -> ${name}`)
  }
}
