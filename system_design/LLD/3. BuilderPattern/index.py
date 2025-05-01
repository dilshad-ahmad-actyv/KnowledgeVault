class User:
    def __init__(self, first_name: str, last_name: str, email: str, password: str, age: int = None, is_admin: bool = False):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.password = password
        self.age = age
        self.is_admin = is_admin
    
    def __str__(self):
        return f"{self.first_name} {self.last_name} {self.email} {self.password} {self.age} {self.is_admin}"
    

class UserBuilder:
    first_name = None
    last_name = None
    email = None
    password = None
    age = None
    is_admin = None

    def set_first_name(self, first_name: str):
        self.first_name = first_name
        return self
    
    def set_last_name(self, last_name: str):
        self.last_name = last_name
        return self
    
    def set_email(self, email: str):
        self.email = email
        return self
    
    def set_password(self, password: str):
        self.password = password
        return self
    
    def set_age(self, age: int):
        self.age = age
        return self
    
    def set_is_admin(self, is_admin: bool):
        self.is_admin = is_admin
        return self
        
    def build(self):
        return User(self.first_name, self.last_name, self.email, self.password, self.age, self.is_admin)
    

user = (
    UserBuilder()
    .set_first_name('Dilshad')
    .set_last_name('Ahmad')
    .set_email('dilshad@gmail.com')
    .set_password('12345')
    .set_age(30)
    .set_is_admin(True)
    .build()
)

print(user)