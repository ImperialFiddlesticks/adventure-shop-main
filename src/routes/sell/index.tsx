import { createFileRoute } from "@tanstack/react-router";

import { useShopInventory } from "../../libs/contexts";
import ShopItem from "../../components/ShopItem";

export const Route = createFileRoute("/sell/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { yourInventory, handleSell } = useShopInventory();
  const [yourInventoryState] = yourInventory;

  return (
    <>
      <div className="shopLabel">
        <h3 className="shopHeadline">Inventory</h3>
        <img src="./assets/back-pack.png" className="moneyIcon" />
      </div>
      <div className="yourInventory">
        {yourInventoryState.map((item) => (
          <ShopItem
            key={item.id}
            item={item}
            onClick={() => handleSell(item)}
            buttonText="Sell"
          />
        ))}
      </div>
    </>
  );
}
