export interface IGood {
  id: number;
  name: string;
  price: number;
  img: string;
  category?: string;
  damage?: string;
  damageType?: string;
  properties?: string;
  weight?: number;
  ac?: number;
  effect?: string;
}

const goods: IGood[] = [
  {
    id: 1,
    name: "Sword",
    price: 80,
    img: "./assets/sword.png",
    category: "Weapons",
    damage: "1d8",
    damageType: "Slashing",
    properties: "Versatile",
    weight: 3,
  },
  {
    id: 2,
    name: "Dagger",
    price: 40,
    img: "./assets/dagger.png",
    category: "Weapons",
    damage: "1d4",
    damageType: "Piercing",
    properties: "Finesse, Light, Range, Thrown",
    weight: 1,
  },
  {
    id: 3,
    name: "Platemail",
    price: 150,
    img: "./assets/fantasy.png",
    category: "Armor",
    ac: 18,
    properties: "Strength Requirement, Stealth Disadvantage",
    weight: 65,
  },
  {
    id: 4,
    name: "Staff",
    price: 75,
    img: "./assets/staff.png",
    category: "Weapons",
    damage: "1d6",
    damageType: "Bludgeoning",
    properties: "Versatile",
    weight: 4,
  },
  {
    id: 5,
    name: "Wand",
    price: 50,
    img: "./assets/magic-wand.png",
    category: "Arcane Spell Focus",
    weight: 1,
  },
  {
    id: 6,
    name: "Elixir",
    price: 70,
    img: "./assets/elixir.png",
    category: "Magical Items",
    effect: "Gain the effect of the haste spell for 1 minute",
    weight: 0.5,
  },
  {
    id: 7,
    name: "Potion",
    price: 85,
    img: "./assets/potion.png",
    category: "Magical Items",
    effect: "Regain 2d4+2 hit points",
    weight: 0.5,
  },
  {
    id: 8,
    name: "Magic Scroll",
    price: 100,
    img: "./assets/scrolls.png",
    category: "Magical Items",
    effect: "Cast Magic Missile at 1st level",
    weight: 0.1,
  },
  {
    id: 9,
    name: "Buckler",
    price: 60,
    img: "./assets/buckler.png",
    category: "Shields",
    ac: 1,
    weight: 4,
  },
  {
    id: 10,
    name: "Tower Shield",
    price: 125,
    img: "./assets/shield.png",
    category: "Shields",
    ac: 2,
    weight: 6,
  },
];
export default goods;
