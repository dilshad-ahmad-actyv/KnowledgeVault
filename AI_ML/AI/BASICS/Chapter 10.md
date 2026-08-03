Chapter 10 is about **Convolutional Neural Networks**, usually called **CNNs**.

CNNs are neural networks designed to understand images.

A normal neural network sees an image as a huge list of numbers. A CNN tries to preserve something more important:

> Which pixels are near each other, and what local patterns do they form?

That simple idea makes CNNs extremely effective for computer vision.

# Chapter 10: Convolutional Neural Networks

## 1. Why ordinary neural networks struggle with images

Suppose an image is:

```text
1000 × 1000 pixels
```

and it has three color channels:

```text
Red, Green, Blue
```

The total number of input values is:

```text
1000 × 1000 × 3 = 3,000,000
```

Now imagine connecting those three million inputs to just 1,000 neurons.

That would require roughly:

```text
3 billion weights
```

That is huge, expensive, and likely to overfit.

There is another problem.

A fully connected network treats pixels as separate numbers. It does not naturally understand that neighboring pixels often form useful structures like:

- Edges
- Corners
- Curves
- Textures
- Eyes
- Wheels

CNNs solve both problems.

---

# 2. Images as tensors

A grayscale image can be represented as a two-dimensional matrix.

For example:

```text
[
  [0,   0, 255],
  [0, 255, 255],
  [0,   0, 255]
]
```

Here:

- `0` might represent black
- `255` might represent white

A color image has three channels:

```text
Red channel
Green channel
Blue channel
```

So a color image is typically represented as:

```text
Height × Width × Channels
```

For example:

```text
224 × 224 × 3
```

In deep-learning frameworks, a batch may be represented as:

```text
Batch × Channels × Height × Width
```

The exact order depends on the framework.

---

# 3. The central idea: local patterns

Imagine looking at a photograph.

You do not identify a face by examining every pixel at once.

You first notice small features:

```text
Edges
↓
Curves
↓
Eyes and nose
↓
Face
```

CNNs follow the same hierarchy.

Early layers learn simple features.

Middle layers learn combinations of those features.

Later layers learn meaningful objects.

For example:

```text
Pixels
  ↓
Edges
  ↓
Textures
  ↓
Object parts
  ↓
Complete object
```

---

# 4. What is convolution?

Convolution is the main operation in a CNN.

A small matrix, called a **filter** or **kernel**, moves across the image.

At every position, it examines a small local region.

Suppose the filter is:

```text
3 × 3
```

It looks at nine pixels at a time.

It performs:

1. Element-by-element multiplication
2. Addition of the results
3. Produces one output value

Then it moves to the next position.

The full output is called a **feature map**.

---

## A simple example

Imagine this image region:

```text
1  1  0
1  1  0
1  1  0
```

And this filter:

```text
1  0  -1
1  0  -1
1  0  -1
```

Multiply corresponding values:

```text
1×1 + 1×0 + 0×-1
+
1×1 + 1×0 + 0×-1
+
1×1 + 1×0 + 0×-1
```

The result is:

```text
3
```

This particular filter responds strongly to certain vertical patterns.

So a CNN filter can behave like an edge detector.

The important part is that modern CNNs usually **learn these filters automatically** during training.

Humans do not manually program them.

---

# 5. Filters and kernels

The words **filter** and **kernel** are often used interchangeably.

A kernel might detect:

- Vertical edges
- Horizontal edges
- Diagonal lines
- Curves
- Textures
- Color transitions

A convolutional layer normally contains many filters.

For example:

```text
32 filters
```

means the layer produces:

```text
32 feature maps
```

Each filter learns a different pattern.

---

# 6. Feature maps

A feature map shows where a particular pattern appears in the image.

Suppose one filter detects vertical edges.

Its feature map may contain high values wherever vertical edges are present.

Another filter may detect curves.

Another may respond to texture.

So the output of a convolutional layer is not just another image.

It is a collection of learned pattern maps.

```text
Input Image
    ↓
Multiple Filters
    ↓
Multiple Feature Maps
```

---

# 7. Weight sharing

This is one of the biggest reasons CNNs are efficient.

The same filter is reused across the entire image.

Suppose a filter detects an eye.

It can detect that eye:

- At the top
- At the bottom
- On the left
- On the right

The network does not need separate weights for every location.

This is called **weight sharing**.

It greatly reduces the number of parameters.

---

# 8. Translation equivariance

A CNN can recognize that a pattern has moved.

For example, if a cat shifts slightly to the left, an edge-detecting filter can still find the same edge.

More precisely, convolution is often described as **translation equivariant**:

> When the input moves, the resulting feature map moves correspondingly.

Pooling and later processing can help the model become less sensitive to exact position.

---

# 9. Stride

Stride controls how far the filter moves each time.

With stride 1:

```text
Move one pixel at a time
```

With stride 2:

```text
Move two pixels at a time
```

A larger stride produces a smaller output.

### Stride 1

- Preserves more detail
- Produces a larger feature map
- Requires more computation

### Stride 2

- Reduces spatial size
- Requires less computation
- May lose some detail

---

# 10. Padding

Without padding, the output feature map becomes smaller after convolution.

Padding adds extra pixels around the border.

Often, zeros are added.

Example:

Original image:

```text
3 × 3
```

After adding one layer of zero padding:

```text
5 × 5
```

Why use padding?

- Preserve image dimensions
- Allow filters to examine edge pixels properly
- Prevent spatial dimensions from shrinking too quickly

Two common terms are:

### Valid padding

No padding is used.

The output becomes smaller.

### Same padding

Padding is chosen so the output has approximately the same height and width as the input, usually when stride is 1.

---

# 11. Output-size formula

For one spatial dimension, the output size is approximately:

[
\text{Output}=
\left\lfloor
\frac{N+2P-K}{S}
\right\rfloor+1
]

where:

- (N) = input size
- (P) = padding
- (K) = kernel size
- (S) = stride

Suppose:

```text
Input size = 32
Kernel = 3
Padding = 1
Stride = 1
```

Then:

[
\frac{32+2(1)-3}{1}+1=32
]

So the spatial size remains 32.

---

# 12. Activation functions in CNNs

After convolution, the output usually passes through an activation function.

A common choice is ReLU:

[
ReLU(x)=\max(0,x)
]

So:

```text
Negative values → 0
Positive values → unchanged
```

The typical pattern is:

```text
Convolution
    ↓
ReLU
    ↓
Feature Map
```

Without nonlinear activation functions, stacking many convolutional layers would not provide enough modeling power.

---

# 13. Pooling

Pooling reduces the height and width of feature maps.

The most common type is **max pooling**.

Suppose we have:

```text
1  3
2  4
```

Max pooling selects the largest value:

```text
4
```

A two-by-two max-pooling window moves across the feature map and keeps the maximum from each region.

---

## Why pooling is useful

Pooling can:

- Reduce computation
- Reduce memory usage
- Retain strong features
- Make the network less sensitive to small movements
- Help control overfitting

The trade-off is that pooling throws away some spatial information.

Modern architectures sometimes replace pooling with strided convolutions.

---

# 14. Max pooling vs average pooling

### Max pooling

Keeps the strongest activation.

```text
1  3
2  4

Result = 4
```

Useful when the strongest detected feature matters.

### Average pooling

Calculates the average.

```text
1  3
2  4

Result = 2.5
```

It gives a smoother summary.

### Global average pooling

Takes the average of an entire feature map.

If there are 256 feature maps, global average pooling produces 256 values.

It is often used near the end of modern CNNs instead of large fully connected layers.

---

# 15. A typical CNN architecture

A simple CNN may look like this:

```text
Input Image
    ↓
Convolution
    ↓
ReLU
    ↓
Pooling
    ↓
Convolution
    ↓
ReLU
    ↓
Pooling
    ↓
Flatten
    ↓
Fully Connected Layer
    ↓
Output
```

Let’s understand the final stages.

---

# 16. Flattening

After several convolution and pooling layers, the network has multiple feature maps.

For example:

```text
7 × 7 × 64
```

Flattening converts them into one long vector:

```text
3136 values
```

That vector can be sent into a fully connected layer.

However, modern CNNs often use global average pooling instead of flattening because it can reduce parameter count significantly.

---

# 17. Fully connected output layer

The final layers use the extracted features to produce a prediction.

For example:

```text
Cat = 0.85
Dog = 0.10
Horse = 0.05
```

For multiclass classification, the output layer often uses softmax.

The convolutional layers act as feature extractors.

The final layers act as classifiers.

---

# 18. How a CNN learns

At the beginning, the filters contain random values.

The model may make terrible predictions.

Training then follows the familiar cycle:

```text
Image
  ↓
Forward Pass
  ↓
Prediction
  ↓
Loss
  ↓
Backpropagation
  ↓
Update Filters
```

Backpropagation adjusts the kernel values.

Over time, the filters become useful detectors.

Some learn edges.

Some learn patterns.

Some learn object parts.

The network is not told, “This filter should detect an eye.”

It discovers useful features because those features reduce the loss.

---

# 19. Receptive field

A neuron in a convolutional layer looks at only part of the original image.

That region is called its **receptive field**.

In an early layer, the receptive field may be very small.

For example:

```text
3 × 3 pixels
```

But when layers are stacked, later neurons indirectly see larger parts of the image.

Example:

```text
Layer 1 → small edges
Layer 2 → larger shapes
Layer 3 → object parts
Layer 4 → whole objects
```

The receptive field grows as the network becomes deeper.

---

# 20. Channels in CNNs

Suppose the input is an RGB image.

It has three channels.

A convolutional kernel must span all three input channels.

So a filter might have shape:

```text
3 × 3 × 3
```

If a layer receives 64 input channels, each new filter spans all 64 channels:

```text
3 × 3 × 64
```

If the layer has 128 filters, it produces 128 output channels.

---

# 21. Parameter count

Suppose a convolutional layer has:

- Kernel size: `3 × 3`
- Input channels: `64`
- Output filters: `128`

Each filter contains:

[
3 \times 3 \times 64=576
]

weights.

For 128 filters:

[
576 \times 128=73,728
]

Add 128 biases:

[
73,856
]

total parameters.

Notice that this parameter count does not depend directly on the image width or height.

That is another reason CNNs are efficient.

---

# 22. CNNs vs fully connected networks

| Fully Connected Network               | CNN                                     |
| ------------------------------------- | --------------------------------------- |
| Every neuron connects to every input  | Neurons examine local regions           |
| Very large parameter count for images | Fewer parameters through weight sharing |
| Ignores spatial structure             | Preserves spatial relationships         |
| Usually weak for raw images           | Strong for computer vision              |
| Requires flattened input              | Processes grids naturally               |

---

# 23. Data augmentation

CNNs can overfit, especially when training data is limited.

Data augmentation creates modified versions of images.

Examples:

- Horizontal flipping
- Small rotations
- Cropping
- Translation
- Brightness changes
- Color variation
- Zooming

The label remains the same.

For example, a rotated cat is still a cat.

Data augmentation teaches the network to focus on important features rather than memorizing exact images.

But augmentation must make sense.

For example, flipping a handwritten digit may change its meaning, so not every transformation is appropriate.

---

# 24. Batch normalization

Batch normalization is often inserted after a convolution and before or after the activation, depending on the architecture.

A common block is:

```text
Convolution
    ↓
Batch Normalization
    ↓
ReLU
```

It helps stabilize activations and can make training faster and more reliable.

---

# 25. Dropout in CNNs

Dropout can be used to reduce overfitting.

It randomly disables activations during training.

However, standard dropout is often used more heavily in fully connected layers than in early convolutional layers.

Some CNNs use variants such as spatial dropout, which drops entire feature maps.

---

# 26. Famous CNN architectures

## LeNet

One of the earliest successful CNNs.

It was designed for handwritten digit recognition.

Its general structure was:

```text
Convolution
↓
Pooling
↓
Convolution
↓
Pooling
↓
Fully Connected Layers
```

---

## AlexNet

AlexNet became famous after performing extremely well in a major image-recognition competition.

It helped trigger the modern deep-learning boom.

Important ideas included:

- ReLU
- GPUs
- Data augmentation
- Dropout
- Deeper CNNs

---

## VGG

VGG used many small `3 × 3` filters.

Its design was simple and uniform.

```text
Several 3×3 convolutions
↓
Pooling
↓
Repeat
```

It was powerful but computationally expensive.

---

## Inception

Inception networks process the input using different kernel sizes in parallel.

For example:

```text
1×1 convolution
3×3 convolution
5×5 convolution
Pooling
```

The outputs are combined.

This allows the network to capture patterns at different scales.

---

## ResNet

ResNet introduced residual connections.

Instead of forcing every layer to learn an entirely new transformation, the network can learn a correction to its input.

Conceptually:

[
Output = F(x)+x
]

The direct connection carrying (x) is called a skip connection.

This helped train very deep networks by improving gradient flow.

---

## EfficientNet

EfficientNet scales network depth, width, and image resolution in a balanced way.

The goal is to achieve strong performance with better computational efficiency.

---

# 27. One-by-one convolution

A `1 × 1` convolution may sound strange because it examines one spatial position at a time.

But it combines information across channels.

It can:

- Reduce channel count
- Increase channel count
- Add nonlinearity
- Lower computation cost
- Mix learned features

It is heavily used in architectures such as Inception and ResNet.

---

# 28. Depthwise separable convolution

Standard convolution can be expensive.

Depthwise separable convolution splits the operation into two stages:

1. Process each input channel separately
2. Combine channels using a one-by-one convolution

This reduces computation significantly.

It is used in efficient mobile architectures such as MobileNet.

---

# 29. Image classification

Image classification gives one label to an entire image.

Example:

```text
Input Image
    ↓
CNN
    ↓
Dog
```

Typical applications include:

- Animal recognition
- Product classification
- Medical image classification
- Plant disease detection

---

# 30. Object detection

Object detection answers two questions:

1. What objects are present?
2. Where are they?

The output may look like:

```text
Person → bounding box
Car → bounding box
Dog → bounding box
```

Popular object-detection families include:

- R-CNN
- Fast R-CNN
- Faster R-CNN
- YOLO
- SSD

YOLO means “You Only Look Once.”

It predicts objects and bounding boxes efficiently in one main pass.

---

# 31. Image segmentation

Segmentation predicts a label for each pixel.

There are two main types.

### Semantic segmentation

Every pixel receives a category.

For example:

```text
Road
Car
Sky
Person
```

All cars may be treated as the same class.

### Instance segmentation

Different objects of the same type are separated.

For example:

```text
Car 1
Car 2
Car 3
```

Applications include:

- Autonomous driving
- Medical imaging
- Satellite analysis
- Robotics

---

# 32. Transfer learning with CNNs

Training a large CNN from scratch requires significant data and computation.

Instead, we can use a pretrained model.

For example:

```text
Model pretrained on millions of images
              ↓
Replace final classifier
              ↓
Fine-tune on a smaller custom dataset
```

This is transfer learning.

Suppose you want to classify:

```text
Healthy leaf
Diseased leaf
```

You could start with a pretrained ResNet and fine-tune it using a much smaller plant dataset.

Earlier layers already understand general features such as edges, textures, and shapes.

---

# 33. Feature extraction vs fine-tuning

There are two common transfer-learning strategies.

### Feature extraction

Freeze the pretrained CNN.

Train only a new output layer.

```text
Frozen pretrained layers
          ↓
New classifier
```

This is fast and useful when the new dataset is small.

### Fine-tuning

Unfreeze some or all pretrained layers.

Continue training with a small learning rate.

This allows the features to adapt to the new domain.

---

# 34. A simple PyTorch CNN

```python
import torch
import torch.nn as nn


class SimpleCNN(nn.Module):
    def __init__(self, num_classes: int = 10) -> None:
        super().__init__()

        self.features = nn.Sequential(
            nn.Conv2d(
                in_channels=3,
                out_channels=16,
                kernel_size=3,
                padding=1,
            ),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2),

            nn.Conv2d(
                in_channels=16,
                out_channels=32,
                kernel_size=3,
                padding=1,
            ),
            nn.ReLU(),
            nn.MaxPool2d(kernel_size=2),
        )

        self.classifier = nn.Sequential(
            nn.Flatten(),
            nn.Linear(32 * 8 * 8, 128),
            nn.ReLU(),
            nn.Linear(128, num_classes),
        )

    def forward(self, inputs: torch.Tensor) -> torch.Tensor:
        features = self.features(inputs)
        return self.classifier(features)
```

Assuming the input images are:

```text
3 × 32 × 32
```

the first pooling layer reduces them to:

```text
16 × 16 × 16
```

The second reduces them to:

```text
32 × 8 × 8
```

Then the feature maps are flattened and classified.

The output contains raw class scores called logits.

During training, those logits can be passed to cross-entropy loss.

---

# 35. Common CNN mistakes

## Wrong image normalization

Training and inference images must be processed consistently.

Different scaling can seriously damage performance.

---

## Too little data

A large CNN may memorize a small dataset.

Use:

- Transfer learning
- Data augmentation
- Regularization
- A smaller model

---

## Ignoring class imbalance

Suppose 95% of medical images are healthy.

A model may predict healthy almost every time and appear accurate.

Use suitable metrics such as:

- Precision
- Recall
- F1 score
- Confusion matrix

---

## Data leakage

Near-duplicate images from the same source may accidentally appear in both training and test sets.

This produces misleadingly high performance.

---

## Inappropriate augmentation

A transformation may alter the label.

For example, rotating medical scans or flipping text may not always be valid.

---

# 36. CNN limitations

CNNs are powerful, but not perfect.

They may:

- Need large datasets
- Require significant computation
- Learn dataset biases
- Fail under unusual lighting or viewpoints
- Be vulnerable to adversarial perturbations
- Struggle with long-range relationships in some architectures

Vision Transformers now compete with or outperform CNNs in many tasks, especially with large-scale training.

Still, CNNs remain extremely important and widely used.

---

# 37. Complete CNN mental model

Remember this sequence:

```text
Image Pixels
    ↓
Convolutional Filters
    ↓
Edges and Textures
    ↓
Shapes and Object Parts
    ↓
High-Level Features
    ↓
Classification or Detection
```

And the training loop remains:

```text
Image
  ↓
CNN Prediction
  ↓
Loss
  ↓
Backpropagation
  ↓
Filter Updates
```

# Chapter summary

A CNN is a neural network specialized for grid-like data such as images.

The essential ideas are:

- **Convolution** detects local patterns.
- **Filters** are learned during training.
- **Feature maps** show where patterns occur.
- **Weight sharing** reduces the parameter count.
- **Stride** controls how far the filter moves.
- **Padding** controls image-border handling and output size.
- **Pooling** reduces spatial dimensions.
- Deeper layers learn increasingly complex features.
- CNNs can perform classification, detection, and segmentation.
- Transfer learning makes CNNs practical even with smaller datasets.
- Architectures such as AlexNet, VGG, Inception, ResNet, and EfficientNet shaped modern computer vision.

The one sentence to remember is:

> A CNN learns small visual patterns first, then combines them into increasingly meaningful objects.

**Chapter 11** naturally moves into sequence models: recurrent neural networks, LSTMs, GRUs, time-series data, language sequences, and why transformers eventually replaced RNNs for many tasks.
