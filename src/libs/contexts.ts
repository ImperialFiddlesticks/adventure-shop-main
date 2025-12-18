import { createContext, useContext } from "react";
import type { IGood } from "../data/InitialData";
import {
  purchaseMessages,
  sellMessages,
  notEnoughGoldMessage,
} from "../data/shopMessages";

export interface ShopInventoryContextType {
  shopInventory: [IGood[], React.Dispatch<React.SetStateAction<IGood[]>>];
  yourInventory: [IGood[], React.Dispatch<React.SetStateAction<IGood[]>>];
  gold: [number, React.Dispatch<React.SetStateAction<number>>];
  setRandomMessage: (messages: string[], resetDelayMs?: number) => void;
}

export const ShopInventoryContext =
  createContext<ShopInventoryContextType | null>(null);

export function useShopInventory() {
  const ctx = useContext(ShopInventoryContext);
  if (!ctx) {
    throw new Error(
      "useShopInventory must be used inside ShopInventoryContext"
    );
  }
  const { shopInventory, yourInventory, gold, setRandomMessage } = ctx;
  const [, setShopInventory] = shopInventory;
  const [, setYourInventory] = yourInventory;
  const [goldAmount, setGold] = gold;

  // const { setRandomMessage } = useShopMessages();

  function handleBuy(item: IGood) {
    if (goldAmount < item.price) {
      setRandomMessage(notEnoughGoldMessage, 4000);
      return;
    }
    setShopInventory((prev) =>
      prev.filter((shopItem) => shopItem.id !== item.id)
    );
    setYourInventory((prev) => [...prev, item]);
    setGold((prev) => prev - item.price);
    setRandomMessage(purchaseMessages, 4000);
  }
  function handleSell(item: IGood) {
    setYourInventory((prev) =>
      prev.filter((invItem) => invItem.id !== item.id)
    );
    setShopInventory((prev) => [...prev, item]);
    setGold((prev) => prev + item.price);
    setRandomMessage(sellMessages, 4000);
  }

  return {
    shopInventory,
    yourInventory,
    gold,
    handleBuy,
    handleSell,
  };
}
