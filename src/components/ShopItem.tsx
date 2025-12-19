import type { IGood } from "../data/InitialData";
import * as HoverCard from "@radix-ui/react-hover-card";
import { StatRow } from "./statRow";

interface IShopItem {
  item: IGood;
  onClick?: (item: IGood) => void;
  buttonText?: string;
}
const ShopItem = ({ item, onClick, buttonText }: IShopItem) => {
  return (
    <HoverCard.Root openDelay={200}>
      <div className="shopLine">
        <img src={item.img} className="shopIcons" />
        {/* Hover trigger */}
        <HoverCard.Trigger asChild>
          <p className="itemName cursor-pointer">{item.name}</p>
        </HoverCard.Trigger>
        <p className="itemPrice">
          Price: {item.price}{" "}
          <img src="./assets/singlecoin.png" className="goldIcon" />
        </p>

        {onClick && buttonText && (
          <button className="buyButton" onClick={() => onClick(item)}>
            {buttonText}
          </button>
        )}
      </div>
      {/* Hover content */}
      <HoverCard.Portal>
        <HoverCard.Content
          side="right"
          sideOffset={12}
          className="hoverCardContent"
        >
          <div className="hoverCardHeader">
            <img src={item.img} className="hoverIcon" />
            <div>
              <p className="hoverTitle">{item.name}</p>
            </div>
          </div>

          <div className="hoverStats">
            {item.category && (
              <div className="hoverCategory">
                <p className="categoryLabel">Category: </p>
                <p className="categoryValue"> {item.category}</p>
              </div>
            )}
            <StatRow label="Damage" value={item.damage} />
            <StatRow label="Damage Type" value={item.damageType} />

            <StatRow label="Armor Class" value={item.ac && `+${item.ac}`} />
            <StatRow label="Properties" value={item.properties} />
            <StatRow label="Effect" value={item.effect} />
            <StatRow
              label="Weight"
              value={item.weight && `${item.weight} lbs`}
            />
            <StatRow label="Price" value={`${item.price} gold`} />
          </div>

          <HoverCard.Arrow className="hoverCardArrow" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
};
export default ShopItem;
