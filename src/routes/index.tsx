import { createFileRoute } from "@tanstack/react-router";
import ShopItem from "../components/ShopItem";
import type { IGood } from "../data/InitialData";
import { useShopInventory } from "../libs/contexts";

export const Route = createFileRoute("/")({
  component: BuyPage,
});

function BuyPage() {
  const { shopInventory, handleBuy } = useShopInventory();
  const [shopInventoryState] = shopInventory;
  // const shop = useShopInventory();

  return (
    <div className="shopContainer">
      <div className="shopLabel">
        <h3 className="shopHeadline">Shop</h3>
        <img src="./assets/money.png" className="moneyIcon" />
      </div>
      <div className="shopInventory">
        {shopInventoryState.map((item: IGood) => (
          <ShopItem
            key={item.id}
            item={item}
            onClick={() => handleBuy(item)}
            buttonText="Buy"
          />
        ))}
      </div>
    </div>
  );
}
