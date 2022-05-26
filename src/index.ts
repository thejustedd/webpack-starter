import './style.scss';

interface PersonProps {
  name: string,
  age: number,
  getInfo: () => Promise<string>,
}

class Person implements PersonProps {
  constructor(readonly name: string, public age: number) {
  }

  async getInfo(): Promise<string> {
    return new Promise(res =>
      setTimeout(() =>
        res(`Name: ${this.name} / Age: ${this.age}`), 1000));
  }
}

const vasya = new Person('Vasya', 20);
vasya.getInfo().then(console.log);