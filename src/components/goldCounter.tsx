import { useShopInventory } from "../libs/contexts";

export default function GoldDisplay() {
  const { gold } = useShopInventory();
  const [goldAmount] = gold;
  return (
    <div className="goldDisplay">
      {" "}
      {goldAmount} <img src="./assets/coin.png" className="moneyIcon gold" />
    </div>
  );
}
