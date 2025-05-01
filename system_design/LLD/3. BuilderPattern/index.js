var User = /** @class */ (function () {
    function User(firstName, lastName, email, password, age, isAdmin) {
        if (isAdmin === void 0) { isAdmin = false; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    User.prototype.toString = function () {
        return "".concat(this.firstName, " ").concat(this.lastName, " ").concat(this.email, " ").concat(this.password, " ").concat(this.age, " ").concat(this.isAdmin);
    };
    return User;
}());
var UserBuilder = /** @class */ (function () {
    function UserBuilder() {
        this.isAdmin = false;
    }
    UserBuilder.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
        return this;
    };
    UserBuilder.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
        return this;
    };
    UserBuilder.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    UserBuilder.prototype.setPassword = function (password) {
        this.password = password;
        return this;
    };
    UserBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    UserBuilder.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
        return this;
    };
    UserBuilder.prototype.build = function () {
        return new User(this.firstName, this.lastName, this.email, this.password, this.age, this.isAdmin);
    };
    return UserBuilder;
}());
var user = new UserBuilder()
    .setFirstName("Dilshad")
    .setLastName("Ahmad")
    .setEmail("dilshad09@gmail.com")
    .setPassword("12345")
    .setAge(30)
    .setIsAdmin(true)
    .build();
console.log(user.toString());
