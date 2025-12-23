import { useEffect, useState } from "react";

export function useShopMessages(initialMessage: string) {
  const [message, setMessage] = useState(initialMessage);
  useEffect(() => {
    setMessage(initialMessage);
  }, [initialMessage]);

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
