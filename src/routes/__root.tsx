import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "../App.css";
import { ShopInventoryContext } from "../libs/contexts";
import type { IGood } from "../data/InitialData";
import { useState } from "react";
import goods from "../data/InitialData";
import GoldDisplay from "../components/goldCounter";
import { useShopMessages } from "../libs/useShopMessages";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const shopInventory = useState<IGood[]>(goods);
  const yourInventory = useState<IGood[]>([]);
  const gold = useState<number>(500);

  const { message, setRandomMessage } = useShopMessages(
    "Hello, Adventurer! Welcome to my shop!"
  );

  const store = {
    shopInventory,
    yourInventory,
    gold,
    setRandomMessage,
  };

  return (
    <ShopInventoryContext.Provider value={store}>
      <div className="shopHeader">
        <div className="talkBubble">
          <h2>{message}</h2>
        </div>
        <img
          src="./assets/Tilly.jpg"
          className="shopKeeperImg"
          alt="Shop keeper Tilly"
        />
      </div>
      <div className="menuBar">
        <div className="shopMenu">
          <Link to="/" className="menuButton">
            Buy
          </Link>
          <Link to="/sell" className="menuButton">
            Sell
          </Link>
          <Link to="/chat" className="menuButton">
            Chat
          </Link>
        </div>
        <div className="goldCounterBox">
          <GoldDisplay />
        </div>
      </div>

      <Outlet />
      <TanStackRouterDevtools />
    </ShopInventoryContext.Provider>
  );
}
