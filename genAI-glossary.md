# GenAI Glossary

## A

**AI (Artificial Intelligence)** - The field of computer science focused on creating systems that can perform tasks typically requiring human intelligence, such as learning, reasoning, problem-solving, perception, and language understanding. AI encompasses various approaches from rule-based systems to machine learning and neural networks, with the goal of building machines that can think, learn, and adapt to new situations.

**Accuracy** - A fundamental metric that measures how often a model's predictions are correct. For classification tasks, accuracy is calculated as the number of correct predictions divided by the total number of predictions. While accuracy is easy to understand, it can be misleading for imbalanced datasets where one class is much more common than others. Other metrics like precision, recall, and F1-score are often more informative for evaluating model performance in real-world scenarios.

**Activation Function** - A mathematical function applied to the output of each neuron in a neural network to determine whether and how strongly the neuron should be activated. Activation functions introduce non-linearity into neural networks, enabling them to learn complex patterns and relationships. Without activation functions, neural networks would only be able to learn linear relationships, severely limiting their capabilities.

**AGI (Artificial General Intelligence)** - AI systems that can understand, learn, and apply knowledge across a wide range of tasks at a human level or beyond.

**Agentic AI** - AI systems that can autonomously plan, execute, and adapt their actions to achieve goals without constant human intervention. These systems can break down complex tasks into steps, use tools and APIs, make decisions based on feedback, and modify their approach when encountering obstacles. Agentic AI represents a shift from reactive AI (responding to prompts) to proactive AI (taking initiative to accomplish objectives).

**Alignment** - The process of ensuring AI systems' goals and behaviors align with human values and intentions.

**Attention Mechanism** - A technique used in neural networks that allows the model to focus on relevant parts of the input when making predictions. Attention works by computing weighted relationships between different positions in the input sequence, where each position can "attend to" other positions based on their relevance. The mechanism calculates attention scores (often using query, key, and value vectors) to determine how much focus to give each input element.

## B

**Bias** - In machine learning, bias has two distinct meanings: (1) A technical parameter in neural networks that shifts the activation function, helping the model learn patterns that don't pass through the origin. (2) An ethical concern where AI systems exhibit unfair or prejudiced behavior toward certain groups, often due to biased training data or algorithmic design. Both meanings are important: technical bias is essential for model functionality, while ethical bias represents a significant challenge in AI fairness and responsible development.

## C

**Chatbot** - A computer program designed to simulate conversation with human users, often using natural language processing.

**Closed Weights Model** - AI models where the trained parameters (weights) are proprietary and not publicly available. These models are typically accessed through APIs or cloud services, and users cannot inspect, modify, or redistribute the underlying model weights. Examples include GPT-5, Claude, and most commercial AI services. Closed weights models offer convenience and often superior performance but limit transparency, customization, and research capabilities.

**Context** - The information that provides background and meaning to a current input or conversation. In language models, context includes previous messages in a conversation, retrieved documents in RAG systems, and any other relevant information that helps the model understand what the user is asking and generate appropriate responses. Context is crucial for maintaining coherence and relevance in AI interactions.

**Context Window** - The technical limit of how many tokens a language model can process in a single input. This includes everything fed to the model: the current prompt/query, conversation history, retrieved documents, system prompts, and any other context. When the total input exceeds the window size, older information must be truncated or summarized to fit within the limit.

## D

**Dataset** - A collection of data used to train, validate, or test machine learning models. Datasets can contain text, images, audio, or other types of data, and may be labeled (with correct answers) or unlabeled (raw data). The quality, size, and diversity of a dataset significantly impact model performance. Common datasets include text corpora for language models, image collections for computer vision, and structured data for various applications.

**Deep Learning** - A subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns.

**Dense Model** - Neural network models where all parameters are active and used for every input. In dense models, every neuron in every layer processes every input, making them computationally intensive but generally more predictable in their behavior. Most traditional language models are dense models.

**Diffusion Model** - A generative model that learns to generate data by reversing a noise process. Diffusion models work by gradually adding noise to training data, then learning to reverse this process to generate new samples. They excel at creating images, audio, and other continuous data. Key use cases include image generation (DALL-E, Midjourney, Stable Diffusion), image editing and inpainting, audio generation, video synthesis, and data augmentation. The models are particularly effective for creative applications, content generation, and tasks requiring high visual or audio fidelity.

## E

**Embedding** - A mathematical representation of data (like words or images) as a vector in a high-dimensional space that captures semantic relationships. In language models, embeddings convert tokens into dense numerical vectors that encode meaning and enable the model to understand relationships between different pieces of text.

## F

**Few-shot Learning** - The ability of AI models to learn new tasks or concepts from just a few examples (typically 2-10 examples) without extensive retraining. This is achieved by providing the model with a few examples of the desired task in the prompt, allowing it to understand the pattern and apply it to new inputs. Few-shot learning is particularly powerful in large language models, which can quickly adapt to new tasks by seeing examples in context.

**Fine-tuning** - The process of adapting a pre-trained model to a specific task or dataset by training it further on task-specific data.

**Foundation Model** - Large-scale AI models trained on broad data that can be adapted for various downstream tasks. See: Pre-training.

## G

**Generative AI** - AI systems that can create new content, such as text, images, music, or code, based on learned patterns.

**GPT (Generative Pre-trained Transformer)** - A family of large language models developed by OpenAI that use transformer architecture.

## H

**Hallucination** - When AI models generate plausible-sounding but factually incorrect or nonsensical information.

**Hyperparameter** - Configuration settings that control the learning process of a machine learning algorithm.

**Human-in-the-Loop (HITL)** - A design pattern where human oversight is integrated into AI systems to improve accuracy and safety.

## I

**Inference** - The process of using a trained model to make predictions on new data.

**Instruct Model** - Language models that have been fine-tuned specifically to follow instructions precisely. These models are trained on instruction-response pairs and excel at single-turn tasks like following specific commands, answering questions, or completing structured tasks. Instruct models are well-suited for RAG applications and task-oriented interactions where precise, direct responses are needed, rather than multi-turn conversational exchanges.

## J

**Jailbreaking** - Attempts to bypass safety restrictions or limitations in AI systems to make them behave in unintended ways.

## K

**Knowledge Graph** - A structured representation of information that captures relationships between entities in a graph format. Often used in AI systems to structure memory.

## L

**Large Language Model (LLM)** - Neural network models with billions of parameters trained on massive text datasets to understand and generate human-like text. LLMs use transformer architecture with self-attention mechanisms that process text as sequences of tokens, converting them into embeddings and learning contextual relationships between words. The models consist of multiple transformer layers that progressively build understanding through attention patterns, enabling them to capture long-range dependencies and complex language patterns. LLMs can perform a wide range of language tasks including text generation, translation, summarization, question answering, and code generation.

**Loss Function** - A mathematical function that measures how far a model's predictions are from the actual values.

## M

**Machine Learning (ML)** - A subset of AI that enables systems to learn and improve from experience without being explicitly programmed.

**Mixture of Experts (MoE)** - A neural network architecture where only a subset of parameters (experts) are activated for each input, making the model more efficient than dense models. In MoE models, a routing mechanism selects which experts to use based on the input, allowing for larger models with better performance while using fewer computational resources per inference. This creates "sparse" models where not all parameters are active simultaneously.

**Model** - A mathematical representation of a real-world process that can make predictions or decisions.

**Multimodal AI** - AI systems that can process and understand multiple types of data (text, images, audio, etc.) simultaneously.

## N

**Natural Language Processing (NLP)** - A field of AI focused on enabling computers to understand, interpret, and generate human language.

**Neural Network** - A computing system inspired by biological neural networks that can learn to perform tasks by analyzing training data.

## O

**Open Weights Model** - AI models where the trained parameters (weights) are publicly available and can be freely accessed, modified, and redistributed. These models allow researchers and developers to inspect, fine-tune, and build upon the model's capabilities. Examples include LLaMA, Mistral, and many models from organizations like Hugging Face.

**One-shot Learning** - The ability of AI models to learn a new task or concept from just a single example. This is the most extreme form of few-shot learning, where the model must understand and apply a pattern after seeing only one demonstration. One-shot learning is particularly challenging because it requires the model to generalize from minimal information, but it's achievable with large, well-trained models that have learned robust pattern recognition from extensive pre-training.

**Overfitting** - When a model learns the training data too well, including noise and outliers, leading to poor performance on new data.

## P

**Parameter** - All the learnable variables within a model that are adjusted during training to make predictions. This includes weights, biases, and other trainable values that determine how the model processes inputs.

**Prompt Engineering** - The practice of crafting effective input prompts to get desired outputs from AI models.

**Pre-training** - The initial training phase where a model learns general patterns from large, diverse datasets. Pre-training typically uses massive amounts of unlabeled text data (books, articles, web pages, code repositories) and trains the model to predict the next token in a sequence or fill in masked tokens. The result is a "foundation model" with broad language understanding and general capabilities. After pre-training, models are typically fine-tuned on specific tasks or datasets to adapt them for particular applications, or used directly through prompting techniques. For example, Qwen3-30B-A3B-Base is a foundation model that can be fine-tuned into Qwen3-30B-A3B-Thinking (for reasoning tasks), Qwen3-30B-A3B-Instruct (for instruction following), or Qwen3-30B-A3B-Coder (for programming tasks). Pre-training is computationally expensive but creates models that can be adapted for many downstream tasks.

**Prompt** - The input text or instructions given to an AI model to generate a response. A prompt can be a simple question, a detailed instruction, or a complex set of guidelines that tells the AI what to do and how to behave. The quality and specificity of a prompt directly influences the quality and relevance of the AI's output.

## Q

**Quantization** - A technique to reduce model size and computational requirements by using lower precision numbers.

## R

**Reasoning** - The process by which LLMs work through problems by generating intermediate steps and logical connections. In practice, this means the model produces text that shows its thinking process, such as breaking down a math problem into steps, considering multiple options before choosing one, or explaining the logic behind a conclusion. This "reasoning" is actually the model predicting what a human would write when thinking through the same problem, learned from training data containing examples of step-by-step problem solving. The reasoning is generated as tokens that bias the model's internal representations toward more productive directions, ultimately being discarded while the final output benefits from this intermediate processing. The model doesn't actually "think" but generates text that mimics human reasoning patterns.

**Reinforcement Learning** - A type of machine learning where agents learn to make decisions by receiving rewards or penalties.

**Retrieval-Augmented Generation (RAG)** - A technique that combines retrieval of relevant information with generation to improve AI responses. RAG works by first searching a knowledge base or document collection for relevant information related to a user's query, then using that retrieved information as context when generating a response. This approach helps reduce hallucinations, provides access to up-to-date information, and allows AI systems to cite specific sources. RAG typically involves embedding-based similarity search to find relevant documents, then feeding both the retrieved context and the user query to a language model for generation.

## S

**Small Language Model (SLM)** - Language models with fewer parameters (typically under 10 billion) that are more efficient and accessible than large language models. SLMs offer faster inference, lower computational requirements, and can run on consumer hardware while still providing good performance for many tasks. They represent a trade-off between capability and resource efficiency, making AI more accessible for edge computing and cost-sensitive applications.

**Supervised Learning** - Machine learning approach where models are trained on labeled data to learn input-output mappings.

**Synthetic Data** - Artificially generated data used to train or test AI models when real data is insufficient or unavailable.

**System Prompt** - Hidden instructions that define an AI model's behavior, personality, and operational constraints. Unlike user prompts, system prompts are processed during model initialization and act as persistent "personality firmware" that influences how the model interprets and responds to every subsequent user input throughout the conversation.

## T

**Token** - The basic unit of text that AI models process, which can be words, subwords, or characters. Tokens are converted into vectors (embeddings) that represent their meaning in a high-dimensional space, allowing the model to understand semantic relationships between different pieces of text.

**Token-Vector Relationship** - The fundamental connection between discrete text units (tokens) and their continuous mathematical representations (vectors). When text is processed by AI models, each token is mapped to a dense vector that encodes its semantic meaning. Similar tokens have similar vectors, enabling the model to understand relationships like synonyms, context, and meaning through vector similarity calculations.

**Tool**
A tool is an external capability an AI agent can call to extend what it can do on its own. By default, an AI model only generates text; a tool lets it act — for example, run code, search the web, look up a database, or trigger a workflow. Tools act like “plug-ins” or “skills.” The agent decides when to use them to accomplish a task it can’t solve by reasoning alone.

**Training** - The process of teaching a machine learning model to perform a task by exposing it to data and adjusting its parameters to minimize errors. During training, the model learns patterns and relationships in the data through repeated exposure and parameter updates. This is how models acquire their capabilities, whether through supervised learning (with labeled examples), unsupervised learning (finding patterns in unlabeled data), or reinforcement learning (learning from rewards and penalties).

**Transformer** - A neural network architecture that uses attention mechanisms and has become the foundation for many modern AI models.

## U

**Unsupervised Learning** - Machine learning approach where models find patterns in data without labeled examples.

## V

**Validation** - The process of evaluating a model's performance on a separate dataset to assess its generalization ability.

**Vector Database** - Specialized databases designed to store and query high-dimensional vectors used in AI applications.

**Vision-Language Model (VLM)** - AI models that can process and understand both visual (images, videos) and textual inputs simultaneously. VLMs typically use separate encoders for each modality: a vision encoder (like a CNN or Vision Transformer) processes images into visual representations, while a text encoder (like a transformer) processes text into language representations. These representations are then combined through cross-modal attention mechanisms, allowing the model to understand relationships between visual and textual elements. VLMs can perform tasks like image captioning, visual question answering, image generation from text descriptions, and multimodal reasoning.

## W

**Weights** - A specific type of parameter in neural networks that determines the strength of connections between neurons or layers. Weights are the most common type of parameter and are typically the values people refer to when discussing model size (e.g., "7 billion parameters" usually means 7 billion weights).

## X

## Y

## Z

**Zero-shot Learning** - The ability of AI models to perform tasks they haven't been explicitly trained on by leveraging general knowledge.

---

*This glossary is a living document and will be updated.*

**Last Updated:** 2025-09-25
