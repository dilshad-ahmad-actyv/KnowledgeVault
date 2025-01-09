import torch
import torch.nn as nn
import torch.optim as optim

class LinearModel(nn.Module):
    def __init__(self):
        super(LinearModel, self).__init__()
        self.linear = nn.Linear(1, 1)
        
    def forward(self, x):
        return self.linear(x)



# training loop

# sample data
x_train = torch.tensor([[1.0], [2.0], [3.0]])
y_train = torch.tensor([[2.0], [4.0], [6.0]])

# Define the model, loss and optimizer
model = LinearModel()

criterion = nn.MSELoss()

optimizer = optim.SGD(model.parameters(), lr=0.01)

# training loop

for epoch in range(1000):
    # forward pass
    predictions = model(x_train)
    loss = criterion(predictions, y_train)

    # backward pass and optimization
    optimizer.zero_grad()
    loss.backward()
    optimizer.step()
    
    print(f"Epoch {epoch + 1}, Loss {loss.item()}")


device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')
print(f"Using device: {device}")

# move tensor to GPU

tensor_gpu = torch.tensor([1, 2, 3]).to(device)
print(tensor_gpu)

