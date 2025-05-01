class User {
  constructor(
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
    public age: number,
    public isAdmin: boolean = false
  ) {}

  toString() {
    return `${this.firstName} ${this.lastName} ${this.email} ${this.password} ${this.age} ${this.isAdmin}`;
  }
}

class UserBuilder {
  private firstName!: string;
  private lastName!: string;
  private email!: string;
  private password!: string;
  private age!: number;
  private isAdmin: boolean = false;

  setFirstName(firstName: string): this {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): this {
    this.lastName = lastName;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setPassword(password: string): this {
    this.password = password;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setIsAdmin(isAdmin: boolean): this {
    this.isAdmin = isAdmin;
    return this;
  }

  build(): User {
    return new User(
      this.firstName,
      this.lastName,
      this.email,
      this.password,
      this.age,
      this.isAdmin
    );
  }
}

const user = new UserBuilder()
  .setFirstName("Dilshad")
  .setLastName("Ahmad")
  .setEmail("dilshad09@gmail.com")
  .setPassword("12345")
  .setAge(30)
  .setIsAdmin(true)
  .build();

console.log(user.toString());
