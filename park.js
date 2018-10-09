const Park = function(name, ticketPrice){
  this.name = name
  this.ticketPrice = ticketPrice
  this.dinosaurs = []
}

Park.prototype.numberOfDinosaurs = function() {
  return this.dinosaurs.length;
}

Park.prototype.addDinosaur = function(dinosaur){
  this.dinosaurs.push(dinosaur)
}

Park.prototype.removeDinosaur = function(dinosaur){
  let position = this.dinosaurs.indexOf(dinosaur)
  this.dinosaurs.splice(position, 1)
}

Park.prototype.mostPopularDino = function(){
  let mostPopularDino = this.dinosaurs[0]
  for (let dinosaur of this.dinosaurs){
    if (dinosaur.vistors > mostPopularDino.vistors){
      dinosaur = mostPopularDino
    }

  }
  return mostPopularDino
}

Park.prototype.findTypeDino = function(species){
  for(let dinosaur of this.dinosaurs){
    if (dinosaur.species == species)
    return dinosaur
  }
}

Park.prototype.totalCustomers = function(){
  total = 0
  for(let dinosaur of this.dinosaurs){
    total += dinosaur.visitors
  }
  return total
}

Park.prototype.totalCustomersPerYear = function(){
  total = 0
  for(let dinosaur of this.dinosaurs){
    total += dinosaur.visitors
    verdict = total * 360
  }
  return verdict
}

Park.prototype.totalRevenuePerYear = function(){
  total = 0
  for(let dinosaur of this.dinosaurs){
    total += dinosaur.visitors
    verdict = total * 360
    revenue = verdict * this.ticketPrice
  }
  return revenue
}


module.exports = Park
