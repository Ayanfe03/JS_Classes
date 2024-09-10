const { soldier, person1 } = require('./newClass.js')


test('testing for correct operation of Person class', () => {
  expect(person1.personDetails()).toBe('Jane is a 28 year old Female from Nigerian');
})

test('testing for correct operation of Soldier class', () => {
  expect(soldier.soldierDetails()).toBe('Captain Brad cooper is a 36 year old american soldier');
})