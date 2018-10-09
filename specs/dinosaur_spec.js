const assert = require('assert')
const Dinosaur = require('../dinosaur.js')

describe('Dinosaur', function(){
  let dinosaur1;

  beforeEach(function(){
    dinosaur1 = new Dinosaur('Raptor', 'Carnivore', 100)
  });
  it("should have a species", function(){
    const actual = dinosaur1.species;
    assert.strictEqual(actual, 'Raptor')
  })

  it("should have a number of visitors", function(){
    const actual = dinosaur1.visitors;
    assert.strictEqual(actual, 100)
  })
})
