import { Injectable } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Injectable()
export class NinjasService {
  private ninjas = [
    { id: 1, name: 'Naruto', weapon: 'stars' },
    { id: 2, name: 'Sasuke', weapon: 'sword' },
    { id: 3, name: 'Sakura', weapon: 'katana' },
  ];

  getNinjas(weapon?: 'stars' | 'sword' | 'katana') {
    if (weapon) {
      return this.ninjas.filter((ninja) => ninja.weapon === weapon);
    }
    return this.ninjas;
  }

  getNinja(id: number) {
    const ninja = this.ninjas.find((ninja) => ninja.id === id);
    if (!ninja) {
      throw new Error('Ninja not found');
    }
    return ninja;
  }

  createNinja(ninja: CreateNinjaDto) {
    const newNinja = { id: Date.now(), ...ninja };
    this.ninjas.push(newNinja);
    return newNinja;
  }

  updateNinja(id: number, ninja: UpdateNinjaDto) {
    const ninjaIndex = this.ninjas.findIndex((ninja) => ninja.id === id);
    if (ninjaIndex === -1) {
      throw new Error('Ninja not found');
    }
    this.ninjas[ninjaIndex] = { ...this.ninjas[ninjaIndex], ...ninja };
    return this.ninjas[ninjaIndex];
  }

  removeNinja(id: number) {
    const ninjaIndex = this.ninjas.findIndex((ninja) => ninja.id === id);
    if (ninjaIndex === -1) {
      throw new Error('Ninja not found');
    }
    const ninja = this.ninjas[ninjaIndex];
    this.ninjas.splice(ninjaIndex, 1);
    return ninja;
  }
}
