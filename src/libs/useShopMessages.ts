import { useState } from "react";

export function useShopMessages(
  defaultMessage: string = "Hello Adventurer! Welcome to my shop!"
) {
  const [message, setMessage] = useState(defaultMessage);
  function setRandomMessage(messages: string[], resetDelayMs?: number) {
    const randomIndex = Math.floor(Math.random() * messages.length);
    setMessage(messages[randomIndex]);

    if (resetDelayMs) {
      setTimeout(() => {
        setMessage("Is there anything else I can do for you today?");
      }, resetDelayMs);
    }
  }
  return {
    message,
    setRandomMessage,
    setMessage,
  };
}
