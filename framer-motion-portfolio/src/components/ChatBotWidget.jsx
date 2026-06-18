import Chatbot from "react-chatbot-kit";

import "react-chatbot-kit/build/main.css";
import { config } from "../config/chatbotConfig";
import ActionProvider from "../config/ActionProvider";

import MessageParser from "../config/MessageParser";

import React from "react";

const ChatBotWidget = () => {
  return(
   <div className="fixed bottom-5 right-5 w-[350px">
<Chatbot
 config={config}
 actionProvider={ActionProvider}
 messageParser={MessageParser}
 />
  </div>
  );
};

export default ChatBotWidget;
