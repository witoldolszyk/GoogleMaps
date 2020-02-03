import faker from 'faker';
import { Mappable } from './CustomMap';
export class Company implements Mappable {
  companyName: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';
  constructor() {
    this.companyName = faker.company.companyName();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    };
  }
  markerContent(): string {
    return `Company name is ${this.companyName}`;
  }
}
