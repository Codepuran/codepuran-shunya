interface Person {
  name: string;
  age: number;
  greet(): void;
}

class Student implements Person {
  constructor(
    public name: string,
    public age: number,
    private studentId: string
  ) {}

  greet(): void {
    console.log(`Hello, I'm ${this.name}, a student with ID ${this.studentId}`);
  }

  study(subject: string): void {
    console.log(`${this.name} is studying ${subject}`);
  }
}

// Example usage
const student = new Student("Alice", 20, "ST123");
student.greet();
student.study("TypeScript");
