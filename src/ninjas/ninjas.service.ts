import { Injectable } from '@nestjs/common';

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
}
