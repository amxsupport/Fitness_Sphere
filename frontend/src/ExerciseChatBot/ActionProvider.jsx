class ActionProvider {
  constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }

  ResponseHandler = (message) => {
    let prompt = `You are a bot that provides ways to heal injuries.
    My weight is ${localStorage.getItem("weight")}kg and my height is ${localStorage.getItem("height")}cm.
${localStorage.getItem("condition")==''?'I have '+localStorage.getItem("condition"):''}

 Suggest ways to heal my ${message} injury as a paragraph` //paragraph because react chat bot handle \n
    console.log(prompt)
      fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer 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`
        },
        body: JSON.stringify({
          prompt: prompt,
          max_tokens: 512
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data.choices[0].text)
          this.setChatbotMessage(this.createChatBotMessage(data.choices[0].text))
        })
    }
    setChatbotMessage = (message) => {
      this.setState(state => ({ ...state, messages: [...state.messages, message] }))
    }
  }

export default ActionProvider;