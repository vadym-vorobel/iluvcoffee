import { Injectable, NotFoundException } from '@nestjs/common'
import { Coffee } from './entities/coffee.entity'

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    }
  ]

  findAll() {
    return this.coffees
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === parseInt(id, 10))

    if (!coffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    return coffee
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto)
  }

  update(id: string, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id)

    if (!existingCoffee) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    if (existingCoffee) {
      // update existing entity
    }
  }

  remove(id: string) {
    const coffeeIndex = this.coffees.findIndex((item) => item.id === parseInt(id, 10))
   
    if (coffeeIndex === -1) {
      throw new NotFoundException(`Coffee #${id} not found`)
    }

    if (coffeeIndex > -1) {
      this.coffees.splice(coffeeIndex, 1)
    }
  }
}
