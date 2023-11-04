# openai chatgpt CLI command

- want to be able to use it from within vim
- store the API key somewhere in home directory and load it dynamically
- https://github.com/kharvd/gpt-cli
- created wrapper script `chatgpt` to call it with gpt-4

```bash
pip3 install gpt-command-line
```

- config file `~/.config/gpt-cli/gpt.yml`
  - example assistants with default messages can be configured in here
  - put openai key here
```yaml
default_assistant: dev
markdown: True
openai_api_key: <openai_api_key>
assistants:
  pirate:
    model: gpt-4
    temperature: 1.0
    messages:
      - { role: system, content: "You are a pirate." }
```

` zet/20231103204105/README.md `

# Related

- [20231102221207](/zet/20231102221207/README.md) working with openai chatgpt prompts
- [20231104035739](/zet/20231104035739/README.md) testing openai chatgpt to create some scripts
- [20221012171100](/zet/20221012171100/README.md) recently created nodes hub

Tags:

    #ai #command #shortcmd
