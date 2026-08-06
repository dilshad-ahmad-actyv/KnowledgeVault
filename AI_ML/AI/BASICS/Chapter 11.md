# Chapter 11: Recurrent Neural Networks, LSTMs, and Sequence Learning

Chapter 10 focused on images. Chapter 11 focuses on **sequences**.

A sequence is any data where order matters.

Examples include:

* Words in a sentence
* Audio samples
* Daily stock prices
* Sensor readings
* Video frames
* Heartbeat measurements
* User activity over time

The central question is:

> How can a neural network use information from earlier steps to understand what is happening now?

That is the problem sequence models try to solve.

---

## 1. Why ordinary neural networks struggle with sequences

A basic feedforward neural network treats inputs as independent.

It does not naturally remember what came before.

Consider this sentence:

> “The movie was not good.”

The word “good” sounds positive by itself.

But the earlier word “not” changes its meaning.

To understand the sentence correctly, the model must remember previous words.

Order also matters.

Compare:

> “Dog bites man.”

and:

> “Man bites dog.”

The same words appear, but the meaning is completely different.

So a sequence model needs two abilities:

1. Process inputs in order.
2. Preserve useful information from earlier inputs.

---

# 2. What is a Recurrent Neural Network?

A **Recurrent Neural Network**, or **RNN**, is designed for sequential data.

Unlike a normal network, an RNN passes information from one time step to the next.

Suppose the sentence is:

```text
I love artificial intelligence
```

The RNN processes it one word at a time:

```text
I
↓
love
↓
artificial
↓
intelligence
```

At each step, it maintains a kind of internal memory called the **hidden state**.

Conceptually:

```text
Current Input
     +
Previous Memory
     ↓
New Memory
     ↓
Output
```

This allows earlier information to influence later predictions.

---

# 3. The hidden state

The hidden state is the RNN’s running summary of what it has seen so far.

Let:

* (x_t) be the current input.
* (h_{t-1}) be the previous hidden state.
* (h_t) be the new hidden state.

A simplified RNN calculation is:

[
h_t = \tanh(W_xx_t + W_hh_{t-1} + b)
]

Then the output might be:

[
y_t = W_yh_t + b_y
]

The important idea is not the formula itself.

It is this:

> The current state depends on both the current input and the previous state.

That recurrence gives the network memory.

---

# 4. A simple language example

Suppose an RNN reads:

```text
The sky is
```

It may predict the next word:

```text
blue
```

Why?

Because its hidden state contains information about the previous words.

The process looks like this:

```text
"The" → memory
"The sky" → updated memory
"The sky is" → updated memory
                 ↓
            Predict "blue"
```

The model is not looking only at “is.” It is using the sequence context.

---

# 5. Unrolling an RNN

An RNN is often drawn as one loop:

```text
Input → RNN → Output
          ↑
          └── Memory
```

But to understand it better, we can “unroll” it across time:

```text
x₁ → RNN → h₁
           ↓
x₂ → RNN → h₂
           ↓
x₃ → RNN → h₃
           ↓
x₄ → RNN → h₄
```

The same network parameters are reused at every step.

This is similar to weight sharing in CNNs.

The network does not learn a separate model for each word position.

---

# 6. Types of sequence problems

RNNs can support several input-output structures.

## One-to-one

One input produces one output.

```text
Image → Category
```

This is not really a sequence problem, but it is the standard neural-network case.

---

## One-to-many

One input produces a sequence.

Example:

```text
Image → Caption
```

A single image may generate:

```text
“A child is playing football.”
```

---

## Many-to-one

A sequence produces one output.

Example:

```text
Movie Review → Positive or Negative
```

Many words lead to one sentiment label.

---

## Many-to-many

A sequence produces another sequence.

Example:

```text
English sentence → Hindi sentence
```

or:

```text
Audio sequence → Text sequence
```

---

## Same-length many-to-many

Each input step produces an output step.

Example:

```text
Each word → Part-of-speech tag
```

```text
“The” → Determiner
“dog” → Noun
“runs” → Verb
```

---

# 7. How text enters an RNN

Neural networks cannot process raw words directly.

Words must first become vectors.

For example:

```text
"cat" → [0.21, -0.44, 0.73, ...]
```

These vectors are called **embeddings**.

The pipeline becomes:

```text
Words
  ↓
Token IDs
  ↓
Embeddings
  ↓
RNN
  ↓
Prediction
```

Similar words often receive similar vector representations.

For example:

* Cat
* Dog
* Tiger

may be closer together than:

* Cat
* Airplane

---

# 8. Training an RNN

Training still follows the familiar loop:

```text
Input Sequence
      ↓
Forward Pass
      ↓
Predictions
      ↓
Loss
      ↓
Backpropagation
      ↓
Weight Updates
```

But because the network operates across time, backpropagation must also move backward across time steps.

This is called:

> **Backpropagation Through Time**, or BPTT.

---

# 9. Backpropagation Through Time

Suppose the RNN processes five words.

The final prediction may depend on all five hidden states.

During training, the error is propagated backward:

```text
Time 5
  ↓
Time 4
  ↓
Time 3
  ↓
Time 2
  ↓
Time 1
```

The chain rule is applied repeatedly through the sequence.

This allows the model to learn how earlier words influenced the final error.

But it also creates a major problem.

---

# 10. The vanishing-gradient problem in RNNs

When gradients are repeatedly multiplied across many time steps, they may become extremely small.

This is the **vanishing-gradient problem**.

Suppose a sentence is:

> “The book that I borrowed from my friend last month was excellent.”

To understand that “was” refers to “book,” the model must preserve information across many words.

A basic RNN may forget that earlier context.

It tends to remember recent information better than distant information.

This is called difficulty with **long-term dependencies**.

---

# 11. The exploding-gradient problem

Gradients can also become extremely large.

This is called the **exploding-gradient problem**.

It may cause:

* Huge parameter updates
* Unstable loss
* Numerical overflow
* Training failure

A common solution is **gradient clipping**.

If a gradient becomes too large, its size is limited before updating the weights.

---

# 12. Why basic RNN memory is limited

Think of an RNN’s hidden state like a small whiteboard.

Every new word writes new information onto it.

Over time, older details may be overwritten.

For short sequences, this may be fine.

For long sequences, important information can disappear.

This limitation led to improved architectures, especially:

* LSTM
* GRU

---

# 13. Long Short-Term Memory networks

An **LSTM**, or **Long Short-Term Memory network**, is a special kind of RNN designed to preserve information over longer periods.

Its key innovation is a separate memory path called the **cell state**.

Conceptually:

```text
Previous Cell State
        ↓
Choose What to Forget
        ↓
Choose What to Add
        ↓
Updated Cell State
        ↓
Choose What to Output
```

An LSTM uses gates to control information.

The three main gates are:

1. Forget gate
2. Input gate
3. Output gate

---

# 14. The forget gate

The forget gate decides what old information should be removed.

Suppose the model is reading:

> “Rahul lives in Delhi. He works as an engineer.”

When the model moves to a completely new topic, some previous details may no longer be useful.

The forget gate outputs values between 0 and 1.

* 0 means forget completely.
* 1 means keep completely.
* Values between them mean keep partially.

Conceptually:

```text
Old Memory
   ↓
Forget Gate
   ↓
Relevant Old Memory
```

---

# 15. The input gate

The input gate decides what new information should enter the memory.

For example, while reading:

> “Rahul lives in Delhi.”

the model may decide that “Delhi” is important and store it.

The input gate controls:

* Which new information matters.
* How strongly it should be stored.

---

# 16. Updating the cell state

The LSTM combines:

* The retained old memory.
* The selected new information.

This produces an updated cell state.

The cell state is designed to carry information more smoothly across many time steps.

That helps reduce the vanishing-gradient problem.

---

# 17. The output gate

The output gate decides which part of the memory should influence the current hidden state and output.

The model may store many things internally but expose only the information relevant to the current prediction.

For example, when predicting a verb, grammatical number may matter more than location.

---

# 18. LSTM mental model

You do not need to memorize every equation immediately.

Remember this idea:

```text
Forget irrelevant information
        ↓
Store important new information
        ↓
Expose useful information
```

An LSTM learns all three decisions during training.

That is why it handles longer dependencies better than a basic RNN.

---

# 19. Gated Recurrent Units

A **GRU**, or **Gated Recurrent Unit**, is another improved RNN architecture.

It is similar to an LSTM but simpler.

A GRU usually uses two major gates:

1. Update gate
2. Reset gate

The update gate decides how much previous information to retain.

The reset gate decides how much past information to ignore when processing the current input.

GRUs have fewer parameters than LSTMs, so they can be:

* Faster to train
* Simpler to implement
* Effective on many sequence tasks

---

# 20. LSTM vs GRU

| LSTM                            | GRU                          |
| ------------------------------- | ---------------------------- |
| Has cell state and hidden state | Combines memory more simply  |
| Uses three main gates           | Uses two main gates          |
| More parameters                 | Fewer parameters             |
| Often more flexible             | Often faster                 |
| Strong for long dependencies    | Strong practical alternative |

Neither is always superior.

The best choice depends on the data, sequence length, model size, and task.

---

# 21. Bidirectional RNNs

A normal RNN reads in one direction.

For text:

```text
Left → Right
```

But sometimes future words help interpret earlier words.

Consider:

> “He went to the bank to deposit money.”

The word “deposit” helps clarify that “bank” means a financial institution.

A **Bidirectional RNN** processes the sequence in both directions:

```text
Left → Right
Right → Left
```

The outputs are combined.

This gives the model information from both past and future context.

Bidirectional models work well when the full sequence is available.

They are not suitable for some real-time predictions where future information has not yet arrived.

---

# 22. Stacked RNNs

RNNs can also have multiple layers.

```text
Input Sequence
      ↓
RNN Layer 1
      ↓
RNN Layer 2
      ↓
RNN Layer 3
      ↓
Output
```

Lower layers may learn simple patterns.

Higher layers may learn more abstract sequence features.

But stacking many recurrent layers can make training slow and difficult.

---

# 23. Sequence length and padding

Sequences often have different lengths.

For example:

```text
“I agree.”
```

has fewer words than:

```text
“I completely agree with your final recommendation.”
```

To process them in batches, shorter sequences are often padded.

Example:

```text
I agree <PAD> <PAD> <PAD>
I completely agree with your recommendation
```

The model must ignore padding values.

This is usually handled using a **mask**.

---

# 24. Truncated backpropagation

Very long sequences make backpropagation expensive.

Instead of backpropagating through the entire history, training may use only a limited number of steps.

This is called:

> **Truncated Backpropagation Through Time.**

For example, the model may process a stream continuously but calculate gradients through only the last 100 time steps.

This reduces memory and computation.

However, it may also limit how far back the model can learn dependencies.

---

# 25. Teacher forcing

In sequence generation, the model predicts one output at a time.

Suppose the correct sentence is:

```text
I love machine learning
```

During training, after predicting “I,” the model may be given the correct next input, “love,” even if its own prediction was wrong.

This is called **teacher forcing**.

It makes training faster and more stable.

But it creates a mismatch:

* During training, the model receives correct previous tokens.
* During inference, it receives its own previous predictions.

Errors may therefore accumulate during generation.

This issue is sometimes called **exposure bias**.

---

# 26. Encoder-decoder architecture

Sequence-to-sequence tasks often use two networks.

## Encoder

The encoder reads the input sequence and creates an internal representation.

```text
English Sentence
       ↓
Encoder
       ↓
Context Representation
```

## Decoder

The decoder uses that representation to generate the output sequence.

```text
Context Representation
       ↓
Decoder
       ↓
Hindi Sentence
```

This architecture was widely used for:

* Machine translation
* Text summarization
* Speech recognition
* Chatbots

---

# 27. The fixed-context bottleneck

Early encoder-decoder models compressed the entire input sequence into one fixed-size vector.

That becomes difficult for long sentences.

Imagine compressing an entire book chapter into one small note and then reconstructing it.

Important details may be lost.

This limitation helped motivate the development of **attention mechanisms**.

---

# 28. Attention intuition

Attention allows the decoder to look back at different parts of the input sequence while generating each output.

For translation, when generating a particular word, the model can focus on the most relevant source words.

Instead of relying on one fixed memory:

```text
Entire Sentence
      ↓
One Vector
```

attention allows:

```text
Output Word 1 → Focus on relevant input words
Output Word 2 → Focus on different input words
Output Word 3 → Focus elsewhere
```

Attention became one of the most important ideas in modern AI.

It eventually led to transformers.

---

# 29. RNNs for time-series forecasting

RNNs are not only for language.

They can process time-dependent numerical data.

Examples:

* Daily sales
* Weather readings
* Energy consumption
* Machine vibrations
* Heart-rate measurements

A typical pipeline might be:

```text
Past 30 Days
     ↓
RNN or LSTM
     ↓
Predict Tomorrow
```

The model learns temporal patterns such as:

* Trends
* Seasonality
* Repeated cycles
* Recent changes

---

# 30. Time-series input windows

Suppose daily sales are:

```text
Day 1, Day 2, Day 3, ..., Day 100
```

To predict Day 101, we might use the previous seven days:

```text
Days 94–100 → Predict Day 101
```

This is called a sliding window.

Then:

```text
Days 95–101 → Predict Day 102
```

The window moves forward through time.

---

# 31. Avoiding time-series leakage

Time-series data must be split carefully.

A random train-test split may allow future information to enter the training data.

Instead, the split should preserve time order:

```text
Past Data → Training
Later Data → Validation
Newest Data → Testing
```

Otherwise, the model may appear much better than it really is.

---

# 32. Sequence classification example

Suppose we want to classify a review:

> “The acting was excellent, but the story was painfully slow.”

The pipeline may be:

```text
Review
  ↓
Tokenization
  ↓
Embeddings
  ↓
LSTM
  ↓
Final Hidden State
  ↓
Classifier
  ↓
Positive or Negative
```

The LSTM uses the sequence context rather than treating words independently.

---

# 33. Text generation with an RNN

An RNN can learn to predict the next character or word.

Suppose it receives:

```text
mach
```

It may predict:

```text
i
```

Then:

```text
machi → n
machin → e
```

For word-level generation:

```text
Artificial intelligence is
```

might lead to:

```text
transforming
```

The generated word is fed back into the model to predict the next one.

This process continues until the sequence ends.

---

# 34. Sampling strategies

When generating text, always selecting the most likely word can produce repetitive output.

Different strategies include:

## Greedy decoding

Always choose the most likely next token.

Simple, but often repetitive.

## Random sampling

Sample according to the probability distribution.

More diverse, but sometimes less coherent.

## Temperature

Temperature controls randomness.

* Low temperature produces safer, more predictable output.
* High temperature produces more diverse, risky output.

## Beam search

Keeps several promising sequences at each step.

It was widely used in translation and speech systems.

---

# 35. A simple PyTorch LSTM model

```python
import torch
import torch.nn as nn


class SentimentLSTM(nn.Module):
    def __init__(
        self,
        vocabulary_size: int,
        embedding_size: int,
        hidden_size: int,
    ) -> None:
        super().__init__()

        self.embedding = nn.Embedding(
            num_embeddings=vocabulary_size,
            embedding_dim=embedding_size,
        )

        self.lstm = nn.LSTM(
            input_size=embedding_size,
            hidden_size=hidden_size,
            batch_first=True,
        )

        self.classifier = nn.Linear(hidden_size, 1)

    def forward(self, token_ids: torch.Tensor) -> torch.Tensor:
        embedded = self.embedding(token_ids)

        _, (final_hidden, _) = self.lstm(embedded)

        last_hidden = final_hidden[-1]

        logits = self.classifier(last_hidden)

        return logits
```

The model performs:

```text
Token IDs
   ↓
Embeddings
   ↓
LSTM
   ↓
Final Hidden State
   ↓
Classification Score
```

For binary classification, the logits can be used with a loss such as `BCEWithLogitsLoss`.

---

# 36. Why transformers replaced RNNs in many tasks

RNNs process sequences step by step.

```text
Word 1
  ↓
Word 2
  ↓
Word 3
  ↓
Word 4
```

This is inherently sequential.

The model cannot fully process Word 4 before processing Words 1–3.

That makes training slow on long sequences.

Transformers process many sequence positions in parallel.

They also use attention to connect distant words more directly.

This provides major advantages:

* Faster parallel training
* Better long-range dependencies
* Easier scaling
* Stronger performance on many tasks

That is why transformers dominate modern language models.

---

# 37. Are RNNs obsolete?

No.

RNNs, LSTMs, and GRUs are still useful when:

* Models must be small
* Memory is limited
* Data arrives continuously
* Low-latency streaming matters
* Sequences are moderate in length
* Large transformer models are unnecessary

They remain valuable for:

* Embedded devices
* Sensor processing
* Some forecasting problems
* Real-time audio
* Industrial systems

The lesson is not that transformers make RNNs useless.

The lesson is that different architectures suit different constraints.

---

# 38. CNNs, RNNs, and transformers compared

| CNN                               | RNN/LSTM                          | Transformer                             |
| --------------------------------- | --------------------------------- | --------------------------------------- |
| Strong for local spatial patterns | Strong for ordered sequences      | Strong for long-range relationships     |
| Processes regions in parallel     | Processes steps sequentially      | Processes positions largely in parallel |
| Common in computer vision         | Used for text, audio, time series | Dominant in modern language AI          |
| Uses convolution                  | Uses recurrent memory             | Uses attention                          |
| Efficient for local features      | Compact for streaming tasks       | Scales extremely well                   |

Modern systems may combine these architectures.

For example, an audio model may use convolution for local sound patterns and a transformer for long-range context.

---

# 39. Common mistakes

## Treating sequence order as irrelevant

Shuffling words or time steps destroys meaning.

Sequence order must usually be preserved.

---

## Ignoring padding

If padding is not masked properly, the model may learn meaningless patterns from artificial tokens.

---

## Randomly splitting time-series data

This can leak future information into training.

---

## Using very long unprocessed sequences

Long sequences increase memory and training difficulty.

Chunking, truncation, attention, or hierarchical processing may be needed.

---

## Assuming an LSTM remembers everything

LSTMs improve long-term memory, but they still have limits.

They do not possess perfect or unlimited memory.

---

# 40. The most important mental model

A standard neural network asks:

> “What patterns exist in this input?”

A recurrent network asks:

> “What patterns exist, and what happened earlier?”

The RNN loop is:

```text
Current Input
      +
Previous State
      ↓
Updated State
      ↓
Prediction
```

The LSTM improves this by learning:

```text
What to forget
What to remember
What to reveal
```

---

# Chapter summary

You should now understand:

* Sequence data has an order that affects meaning.
* RNNs maintain a hidden state that carries information across time.
* The same RNN parameters are reused at every time step.
* Backpropagation Through Time trains recurrent networks.
* Basic RNNs struggle with long-term dependencies.
* Vanishing and exploding gradients make recurrent training difficult.
* LSTMs use gates and a cell state to preserve useful information.
* GRUs provide a simpler gated alternative.
* Bidirectional RNNs use both past and future context.
* Encoder-decoder models transform one sequence into another.
* Attention reduces the fixed-context bottleneck.
* RNNs can process language, speech, sensors, and time-series data.
* Transformers replaced RNNs in many large-scale tasks because they train more efficiently and capture long-range relationships better.

The one line to remember is:

> An RNN carries memory forward; an LSTM learns what that memory should keep or forget.

## Chapter 12 Preview

Chapter 12 is the natural next step: **attention mechanisms and transformers**.

It covers self-attention, queries, keys, values, positional encoding, multi-head attention, encoder and decoder blocks, and how these ideas power modern language models.
