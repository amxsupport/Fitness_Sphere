import { createChatBotMessage } from "react-chatbot-kit";
import { AiFillRobot } from 'react-icons/ai';

const config = {
  initialMessages: [createChatBotMessage(`Hello, I am the Injury Bot! I use your health information and sugguest ways to heal your injury. Name your injury.`)],
  botName: "Injury Bot",
  botAvatar: <AiFillRobot/>,
  
}

export default config