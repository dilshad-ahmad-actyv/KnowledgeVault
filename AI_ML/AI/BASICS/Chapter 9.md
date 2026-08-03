# Chapter 9: Neural Networks in Depth

This chapter explains what actually happens inside a neural network during training.

The central idea is:

> A neural network makes a prediction, measures its error, figures out which weights caused that error, and adjusts them.

That cycle repeats many times.

---

## 1. The Basic Neuron

A neuron receives inputs.

For example, suppose we want to predict whether a student will pass an exam.

Inputs:

- Study hours
- Attendance

Let:

[
x_1 = 4
]

[
x_2 = 0.8
]

Here, the student studied for 4 hours, and attendance was 80%.

Each input has a weight:

[
w_1 = 0.5
]

[
w_2 = 1.0
]

The neuron also has a bias:

[
b = -1
]

The neuron calculates:

[
z = x_1w_1 + x_2w_2 + b
]

Substitute the values:

[
z = (4 \times 0.5) + (0.8 \times 1.0) - 1
]

[
z = 2 + 0.8 - 1
]

[
z = 1.8
]

This value is called the **weighted sum** or **logit**.

---

## 2. Applying an Activation Function

For binary classification, we can use the sigmoid function:

[
\sigma(z)=\frac{1}{1+e^{-z}}
]

For (z = 1.8):

[
\sigma(1.8) \approx 0.858
]

So the model predicts:

```text
Probability of passing = 85.8%
```

Using a threshold of 0.5:

```text
Prediction = Pass
```

That is one neuron performing a complete prediction.

---

# 3. Why We Need Many Neurons

One neuron can learn only a limited pattern.

Real-world problems are much more complicated.

Consider face recognition.

The network may need neurons that detect:

- Vertical edges
- Horizontal edges
- Curves
- Eyes
- Noses
- Mouths
- Complete faces

So we connect many neurons into layers.

```text
Inputs
  ↓
Hidden Layer 1
  ↓
Hidden Layer 2
  ↓
Output Layer
```

Each neuron learns a different pattern.

---

# 4. A Small Neural Network

Suppose our network has:

- Two input features
- Two hidden neurons
- One output neuron

```text
x₁ ─────► h₁ ───┐
  ╲              │
   ╲             ▼
    ╲──────────► y
    ╱             ▲
   ╱              │
x₂ ─────► h₂ ────┘
```

Every arrow has a weight.

Each hidden neuron calculates its own weighted sum and activation.

---

## Hidden Neuron 1

Suppose:

[
w_{11}=0.5,\quad w_{21}=0.4,\quad b_1=0.1
]

Inputs:

[
x_1=2,\quad x_2=3
]

Then:

[
z_1 = 2(0.5)+3(0.4)+0.1
]

[
z_1 = 1+1.2+0.1
]

[
z_1 = 2.3
]

Using ReLU:

[
ReLU(2.3)=2.3
]

So:

[
h_1=2.3
]

---

## Hidden Neuron 2

Suppose:

[
w_{12}=-0.3,\quad w_{22}=0.8,\quad b_2=-0.2
]

Then:

[
z_2=2(-0.3)+3(0.8)-0.2
]

[
z_2=-0.6+2.4-0.2
]

[
z_2=1.6
]

Using ReLU:

[
h_2=1.6
]

The hidden layer output is now:

```text
[2.3, 1.6]
```

---

# 5. The Output Neuron

The output neuron receives the hidden-layer values.

Suppose its weights are:

[
v_1=0.7,\quad v_2=-0.4
]

Bias:

[
b_3=0.2
]

Then:

[
z_3=(2.3)(0.7)+(1.6)(-0.4)+0.2
]

[
z_3=1.61-0.64+0.2
]

[
z_3=1.17
]

Apply sigmoid:

[
\sigma(1.17)\approx0.763
]

The final prediction is:

```text
Probability = 76.3%
```

This entire movement from input to prediction is called **forward propagation**.

---

# 6. Matrix Form

Neural networks do not usually calculate each neuron separately.

They use matrix operations.

Suppose the input vector is:

[
X=
\begin{bmatrix}
2 & 3
\end{bmatrix}
]

The hidden-layer weight matrix is:

[
W=
\begin{bmatrix}
0.5 & -0.3\
0.4 & 0.8
\end{bmatrix}
]

Bias vector:

[
B=
\begin{bmatrix}
0.1 & -0.2
\end{bmatrix}
]

Then:

[
Z=XW+B
]

The activation is:

[
H=ReLU(Z)
]

Matrix multiplication allows thousands of neurons and examples to be processed efficiently.

That is why GPUs are so useful for deep learning.

---

# 7. The Loss Function

A prediction alone is not enough.

The model needs to know how wrong it was.

Suppose:

```text
Actual label = 1
Predicted probability = 0.763
```

For binary classification, we often use **binary cross-entropy**:

[
L=-[y\log(\hat{y})+(1-y)\log(1-\hat{y})]
]

Here:

- (y) is the actual label.
- (\hat{y}) is the prediction.

Since (y=1):

[
L=-\log(0.763)
]

[
L\approx0.270
]

A smaller loss is better.

If the model predicted 0.99 for the correct class, the loss would be very small.

If it predicted 0.01, the loss would be very large.

---

# 8. Why Not Just Use Accuracy?

Accuracy only tells us whether the final class was correct.

For example:

```text
Prediction 1 = 0.51
Prediction 2 = 0.99
Actual label = 1
```

Both are classified as positive.

So both are technically correct.

But 0.99 is much more confident and much closer to the correct answer.

A loss function captures this difference.

Loss gives the model a smoother and more useful learning signal than accuracy.

---

# 9. Backpropagation

Now comes the heart of neural network training.

Backpropagation calculates:

> How much did each weight contribute to the final loss?

It works backward.

```text
Loss
  ↓
Output Layer
  ↓
Hidden Layers
  ↓
Earlier Layers
```

Backpropagation uses derivatives and the chain rule.

---

# 10. A Simple Weight Update

Suppose a network has one weight:

[
w=0.5
]

The calculated gradient is:

[
\frac{\partial L}{\partial w}=0.2
]

Learning rate:

[
\eta=0.1
]

The update rule is:

[
w_{new}=w_{old}-\eta\frac{\partial L}{\partial w}
]

Substitute:

[
w_{new}=0.5-(0.1)(0.2)
]

[
w_{new}=0.48
]

The weight moves from 0.5 to 0.48.

Why?

Because the gradient indicated that reducing the weight would reduce the loss.

---

# 11. Understanding the Gradient Sign

Suppose the gradient is positive:

[
\frac{\partial L}{\partial w}>0
]

Increasing the weight increases the loss.

So gradient descent reduces the weight.

Now suppose the gradient is negative:

[
\frac{\partial L}{\partial w}<0
]

Increasing the weight reduces the loss.

Because we subtract a negative number, the weight increases.

So the gradient tells us both:

- The direction to move
- How strongly the loss responds

---

# 12. Chain Rule Intuition

Imagine a production line:

```text
Input
  ↓
Hidden Neuron
  ↓
Output Neuron
  ↓
Loss
```

A hidden-layer weight does not directly affect the loss.

It affects:

1. The hidden neuron
2. Which affects the output
3. Which affects the loss

The chain rule combines all these effects.

Conceptually:

[
\frac{\partial L}{\partial w}
=============================

\frac{\partial L}{\partial output}
\times
\frac{\partial output}{\partial hidden}
\times
\frac{\partial hidden}{\partial w}
]

This allows the network to assign responsibility to weights in earlier layers.

---

# 13. One Complete Training Step

A single training step looks like this:

### Step 1: Input

```text
Features enter the network.
```

### Step 2: Forward propagation

```text
The network calculates a prediction.
```

### Step 3: Loss calculation

```text
The prediction is compared with the actual answer.
```

### Step 4: Backpropagation

```text
Gradients are calculated for every trainable parameter.
```

### Step 5: Optimization

```text
The optimizer updates the weights and biases.
```

Then the process repeats.

---

# 14. Epochs, Batches, and Iterations

Suppose the dataset contains 10,000 examples.

Processing all 10,000 at once may require too much memory.

So we divide them into batches.

If:

```text
Dataset size = 10,000
Batch size = 100
```

Then:

[
10,000 \div 100 = 100
]

There are 100 iterations per epoch.

An **epoch** means one full pass through the dataset.

If training lasts 20 epochs:

[
100 \times 20 = 2,000
]

The network performs 2,000 parameter updates.

---

# 15. Batch Gradient Descent Variants

There are three common approaches.

## Full-Batch Gradient Descent

Uses the entire training dataset for one update.

Advantages:

- Stable gradients

Disadvantages:

- Slow
- Memory-intensive

---

## Stochastic Gradient Descent

Uses one example per update.

Advantages:

- Frequent updates
- Can escape some poor regions

Disadvantages:

- Very noisy

---

## Mini-Batch Gradient Descent

Uses a small batch, such as 32, 64, or 128 examples.

Advantages:

- Efficient
- Stable enough
- Works well with GPUs

This is the most common approach in deep learning.

---

# 16. Optimizers

Gradient descent has several advanced versions.

## SGD

Basic stochastic or mini-batch gradient descent.

Simple and effective, but it may converge slowly.

---

## Momentum

Momentum remembers previous updates.

Imagine rolling a ball downhill.

The ball builds speed when moving consistently in one direction.

Momentum can:

- Speed up training
- Reduce oscillation
- Move through flat regions

---

## RMSProp

RMSProp adjusts the learning rate separately for each parameter.

It reduces updates for parameters with consistently large gradients.

---

## Adam

Adam combines ideas from momentum and RMSProp.

It is one of the most widely used optimizers because it:

- Adapts learning rates
- Converges quickly
- Works well for many problems

However, Adam is not always automatically better than SGD. The best optimizer depends on the task.

---

# 17. Learning Rate

The learning rate controls the size of parameter updates.

Too small:

```text
Training is painfully slow.
```

Too large:

```text
The loss may jump around or diverge.
```

A good learning rate allows steady improvement.

Sometimes the learning rate changes during training.

This is called a **learning-rate schedule**.

For example:

```text
Begin with a larger learning rate
            ↓
Reduce it gradually
            ↓
Make smaller refinements near the end
```

---

# 18. Neural Network Parameters

A parameter is something the model learns.

These include:

- Weights
- Biases

Suppose a layer has:

- 100 input neurons
- 50 output neurons

Each input connects to every output neuron.

Number of weights:

[
100 \times 50=5,000
]

Number of biases:

[
50
]

Total parameters:

[
5,050
]

Deep networks may contain millions or billions of parameters.

---

# 19. Trainable vs Non-Trainable Values

Most weights and biases are trainable.

But some values may not be updated through normal gradient descent.

Examples include:

- Certain normalization statistics
- Frozen pretrained layers
- Fixed positional information

When transfer learning is used, earlier layers may be frozen while later layers are trained.

---

# 20. Hidden-Layer Representations

Hidden layers transform raw inputs into useful internal representations.

Suppose the input is a face image.

The layers may progressively represent:

```text
Pixels
  ↓
Edges
  ↓
Textures
  ↓
Eyes and nose
  ↓
Face structure
  ↓
Person identity
```

These internal representations are often called **features** or **embeddings**.

The model learns them automatically.

---

# 21. Activation Functions in More Detail

## ReLU

[
ReLU(x)=\max(0,x)
]

Advantages:

- Fast
- Helps reduce vanishing gradients
- Produces sparse activations

Weakness:

A neuron can become permanently inactive if it always receives negative values.

This is sometimes called the **dying ReLU problem**.

---

## Leaky ReLU

Leaky ReLU keeps a small negative slope:

[
f(x)=
\begin{cases}
x, & x>0\
0.01x, & x\leq0
\end{cases}
]

This helps prevent neurons from becoming completely inactive.

---

## GELU

GELU is widely used in transformers.

It smoothly scales values instead of using ReLU’s hard cutoff.

Modern language models frequently use GELU or similar activations.

---

## Softmax

For multiclass classification:

[
P_i=\frac{e^{z_i}}{\sum_j e^{z_j}}
]

Softmax converts raw output scores into probabilities.

Example:

```text
Raw scores:
Cat = 3.2
Dog = 1.8
Bird = 0.5
```

After softmax:

```text
Cat = 0.76
Dog = 0.19
Bird = 0.05
```

---

# 22. Training Mode vs Inference Mode

A network behaves slightly differently during training and inference.

During training:

- Dropout may be active.
- Gradients are stored.
- Weights are updated.
- Batch statistics may be calculated.

During inference:

- Dropout is disabled.
- Gradients are usually unnecessary.
- Weights remain fixed.
- Predictions are produced faster.

This distinction is important in frameworks such as PyTorch.

---

# 23. Common Training Problems

## Loss Does Not Decrease

Possible causes:

- Learning rate is too low
- Incorrect loss function
- Bad data preprocessing
- Frozen parameters
- Implementation bug

---

## Loss Becomes NaN

Possible causes:

- Learning rate is too high
- Exploding gradients
- Division by zero
- Invalid logarithms
- Numerical instability

---

## Training Accuracy Is High, Validation Accuracy Is Low

This usually indicates overfitting.

Possible solutions:

- More data
- Dropout
- Weight decay
- Data augmentation
- Early stopping

---

## Both Training and Validation Performance Are Poor

This may indicate underfitting.

Possible solutions:

- Larger model
- Better features
- Longer training
- Improved architecture

---

# 24. Early Stopping

During training, validation performance is monitored.

At first:

```text
Training loss decreases
Validation loss decreases
```

Later:

```text
Training loss continues decreasing
Validation loss starts increasing
```

That often means the model is beginning to overfit.

Early stopping saves the model from the point where validation performance was best.

---

# 25. Regularization

Regularization discourages the model from becoming unnecessarily complex.

## L2 Regularization

Also called weight decay.

It penalizes very large weights.

The updated objective becomes:

[
Total\ Loss=Original\ Loss+\lambda\sum w^2
]

This encourages smaller and more stable weights.

---

## Dropout

Randomly disables neurons during training.

This reduces dependence on individual pathways.

---

## Data Augmentation

Creates varied versions of training data.

This encourages the network to learn general patterns rather than memorize exact examples.

---

# 26. A Tiny Network in Pseudocode

Here is the basic logic:

```python
initialize weights

for each epoch:
    for each batch:
        predictions = model(inputs)
        loss = loss_function(predictions, labels)

        clear_old_gradients()
        calculate_gradients_using_backpropagation()
        update_weights()
```

Nearly every neural-network training program follows this structure.

---

# 27. A Simple PyTorch Example

```python
import torch
import torch.nn as nn
import torch.optim as optim


class PassPredictor(nn.Module):
    def __init__(self) -> None:
        super().__init__()

        self.network = nn.Sequential(
            nn.Linear(2, 4),
            nn.ReLU(),
            nn.Linear(4, 1),
            nn.Sigmoid(),
        )

    def forward(self, inputs: torch.Tensor) -> torch.Tensor:
        return self.network(inputs)


features = torch.tensor(
    [
        [2.0, 0.60],
        [5.0, 0.90],
        [1.0, 0.50],
        [6.0, 0.95],
    ],
    dtype=torch.float32,
)

labels = torch.tensor(
    [
        [0.0],
        [1.0],
        [0.0],
        [1.0],
    ],
    dtype=torch.float32,
)

model = PassPredictor()
loss_function = nn.BCELoss()
optimizer = optim.Adam(model.parameters(), lr=0.01)

for epoch in range(500):
    predictions = model(features)
    loss = loss_function(predictions, labels)

    optimizer.zero_grad()
    loss.backward()
    optimizer.step()

print(model(features))
```

The important lines are:

```python
predictions = model(features)
```

This performs forward propagation.

```python
loss = loss_function(predictions, labels)
```

This measures the error.

```python
optimizer.zero_grad()
```

This clears gradients from the previous iteration.

```python
loss.backward()
```

This performs backpropagation.

```python
optimizer.step()
```

This updates the parameters.

---

# 28. The Most Important Mental Model

A neural network is not a magical brain.

It is a large mathematical function with adjustable numbers.

Those adjustable numbers are its parameters.

Training repeatedly performs:

```text
Predict
  ↓
Measure Error
  ↓
Assign Responsibility
  ↓
Adjust Parameters
  ↓
Predict Again
```

After enough useful examples and updates, the function becomes good at the task.

---

# Chapter Summary

You should now understand that:

- A neuron calculates a weighted sum, adds a bias, and applies an activation function.
- Many neurons form layers, and many layers form a neural network.
- Forward propagation produces the prediction.
- A loss function measures how wrong the prediction is.
- Backpropagation calculates gradients for every trainable parameter.
- Gradient descent and optimizers use those gradients to update the model.
- The chain rule allows errors to travel backward through many layers.
- Mini-batch training is the most common training approach.
- Adam, SGD, momentum, and RMSProp are common optimizers.
- Learning rate strongly affects training stability.
- Hidden layers learn increasingly useful representations.
- Regularization, dropout, and early stopping help control overfitting.

The complete process to remember is:

```text
Input
  ↓
Weighted Calculations
  ↓
Activation Functions
  ↓
Prediction
  ↓
Loss
  ↓
Backpropagation
  ↓
Optimizer Update
  ↓
Improved Network
```

## Chapter 10 Preview: Convolutional Neural Networks

Chapter 10 covers how neural networks understand images, including convolutions, filters, feature maps, pooling, padding, stride, CNN architectures, image classification, and object detection.
