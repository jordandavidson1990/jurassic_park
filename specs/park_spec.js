// Add a dinosaur to its collection of dinosaurs
//
// Find the dinosaur that attracts the most visitors
// Find all dinosaurs of a particular species
// Calculate the total number of visitors per day
// Calculate the total number of visitors per year
// Calculate the total revenue from ticket sales for one year

const assert = require('assert')
const Park = require('../park.js')
const Dinosaur = require('../dinosaur.js')

describe('Park', function() {

  let park;

  beforeEach(function() {
    park = new Park('Dino Land', 50)
    dinosaur1 = new Dinosaur('Raptor', 'Carnivore', 100)
    dinosaur2 = new Dinosaur('Sauropods', 'Herbivore', 50)
  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Land')
  })

  it("should check how many dinosaurs", function(){
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 0)
  })

  it('should add a dinosaur', function(){
    park.addDinosaur(dinosaur1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)
  })

  it("should remove a dinosaur from its collection of dinosaurs", function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.removeDinosaur(dinosaur1)
    const actual = park.numberOfDinosaurs()
    assert.strictEqual(actual, 1)
  })

  it("should find the dinosaur that attracts the most visitors", function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.mostPopularDino()
    assert.strictEqual(actual, dinosaur1)
  })

  it("should find all dinosaurs of a particular species", function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.findTypeDino('Raptor')
    assert.strictEqual(actual, dinosaur1)
  })

  it('should calculate the total number of visitors per day', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.totalCustomers()
    assert.strictEqual(actual, 150)
  })

  it('should calculate the total number of visitors per year', function (){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.totalCustomersPerYear()
    assert.strictEqual(actual, 54000)
  })

  it('should calculate the total revenue from ticket sales for one year', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const actual = park.totalRevenuePerYear()
    assert.strictEqual(actual, 2700000)
  })
})
