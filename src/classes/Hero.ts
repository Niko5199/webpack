import { powers } from '../data/powers';

interface hero {
  name: string;
  powerId: number;
  age: number;
}

class Hero implements hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {}
  get power(): string {
    return powers.find(power => power.id === this.powerId)?.desc || 'Not found';
  }
}

export default Hero;
