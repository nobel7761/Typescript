export class Player {
    constructor(
      public  name: string,
      public age: number,
      public  country: string
    ){}
    
    play() {
      console.log(`${this.name} from ${this.country} is playing!`);
    }
  }