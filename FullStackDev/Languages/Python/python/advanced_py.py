class User:
    def __init__(self, username, password):
        self.username = username
        self.password = password
        
    def __str__(self):
        return f"{self.username} {self.password}"
user = User('epiplex.ai', '123234')

print(user)