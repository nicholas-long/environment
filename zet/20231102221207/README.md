# working with openai chatgpt prompts

- i have been hearing about crafting GPT prompts lately. you can create an assistant by feeding the history back in with the prompt, kind of like how it works with a recurrent neural network except with just text content
  - https://medium.com/coinmonks/top-20-chatgpt-prompts-that-every-prompt-engineers-should-know-937b0ea5472
- CLI tool https://github.com/peterdemin/openai-cli
- i am making it so i can source a config.rc file in here to get the API key. this file should be excluded from git in gitignore for security.

```bash
pip3 install openai-cli

# before running, export API key variable
export OPENAI_API_TOKEN="..."
```

## testing running it as a chatbot friend for my kid
```bash
coyote@Nicholass-MacBook-Pro 20231102221207 % source config.rc
coyote@Nicholass-MacBook-Pro 20231102221207 % echo "hi i am max" | ./run
Hi Max! It's nice to meet you. What would you like to talk about?
coyote@Nicholass-MacBook-Pro 20231102221207 % echo "how old are you?" | ./run
Hi Max! I'm not sure how old I am, but I'm a lot older than you! I'm here to be your friend and help you learn new things. What would you like to talk about?
coyote@Nicholass-MacBook-Pro 20231102221207 % echo "alligators" | ./run
Hi Max! I'm a chatbot friend and I'm not sure how old I am. But I'm here to help you learn about alligators! Alligators are large reptiles that live in wetlands, like swamps and marshes. They have long, powerful jaws and sharp teeth. Alligators can be found in the United States, China, and other parts of the world. They usually eat fish, birds, and other small animals. Alligators can be dangerous, so it's important to stay away from them.
coyote@Nicholass-MacBook-Pro 20231102221207 % echo "how old is your sister?" | ./run
I don't have a sister, Max. But I'm sure you have lots of friends your age that you can play with!
```

` zet/20231102221207/README.md `

# Related

- [20230929153207](/zet/20230929153207/README.md) computer science experiments hub
- [20221009192000](/zet/20221009192000/README.md) stuff to put on main page
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #ai
