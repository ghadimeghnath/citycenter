import { useEffect, useState } from "react";

export type MenuItem = { name: string; desc: string; price: string };
export type Menu = Record<string, MenuItem[]>;

export const STORAGE_KEY = "ccc-menu-v1";

export const defaultMenu: Menu = {
  Espresso: [
    { name: "Espresso", desc: "Single origin, 30 ml", price: "₹120" },
    { name: "Double Espresso", desc: "60 ml, bold and full-bodied", price: "₹150" },
    { name: "Macchiato", desc: "Espresso marked with milk foam", price: "₹140" },
    { name: "Cortado", desc: "Equal parts espresso & warm milk", price: "₹160" },
    { name: "Cappuccino", desc: "Rich foam, dusted with cocoa", price: "₹180" },
    { name: "Flat White", desc: "Double ristretto, silk microfoam", price: "₹200" },
    { name: "Cafe Latte", desc: "Smooth, mellow, our house pour", price: "₹200" },
    { name: "Mocha", desc: "Dark chocolate ganache", price: "₹220" },
    { name: "Caramel Latte", desc: "House caramel, sea salt finish", price: "₹230" },
    { name: "Hazelnut Latte", desc: "Toasted hazelnut syrup", price: "₹230" },
  ],
  "Slow Brew & Iced": [
    { name: "V60 Pour Over", desc: "Bright, clean, seasonal beans", price: "₹240" },
    { name: "Chemex", desc: "Full carafe, delicate & tea-like", price: "₹280" },
    { name: "Cold Brew", desc: "18-hour steeped, served over ice", price: "₹220" },
    { name: "Nitro Cold Brew", desc: "Nitrogen infused, creamy head", price: "₹260" },
    { name: "Iced Latte", desc: "Chilled espresso, cold milk", price: "₹210" },
    { name: "Iced Americano", desc: "Espresso over ice and water", price: "₹180" },
    { name: "Affogato", desc: "Vanilla gelato drowned in espresso", price: "₹260" },
    { name: "Iced Mocha", desc: "Cocoa, espresso, cold milk", price: "₹240" },
  ],
  "Tea & Not-Coffee": [
    { name: "Masala Chai", desc: "House spice blend, whole milk", price: "₹90" },
    { name: "Kashmiri Kahwa", desc: "Saffron, almond, green tea", price: "₹150" },
    { name: "Matcha Latte", desc: "Ceremonial grade, oat milk optional", price: "₹240" },
    { name: "Hot Chocolate", desc: "70% single-origin ganache", price: "₹210" },
    { name: "Fresh Lime Soda", desc: "Sweet, salty or mixed", price: "₹110" },
    { name: "Kokum Cooler", desc: "Goan kokum, mint, black salt", price: "₹140" },
  ],
  "All-Day Kitchen": [
    { name: "Sourdough & Eggs", desc: "Two eggs your way, salted butter", price: "₹280" },
    { name: "Avocado Toast", desc: "Chilli oil, lime, sesame", price: "₹320" },
    { name: "Chorizo Chilli Cheese Toast", desc: "House-baked bread, melty cheddar", price: "₹340" },
    { name: "Shakshuka", desc: "Baked eggs, spiced tomato, feta", price: "₹360" },
    { name: "Prawn Balchão Croissant", desc: "Flaky butter croissant, Goan prawns", price: "₹380" },
    { name: "Ham & Gruyère Croissant", desc: "Black forest ham, aged gruyère", price: "₹340" },
    { name: "Mushroom & Truffle Toast", desc: "Wild mushrooms, truffle oil", price: "₹360" },
    { name: "Big Breakfast Plate", desc: "Eggs, bacon, sausage, beans, toast", price: "₹480" },
  ],
  "Small Plates": [
    { name: "Truffle Fries", desc: "Parmesan, truffle oil, herbs", price: "₹280" },
    { name: "Chicken Cafreal Slider", desc: "Two sliders, Goan cafreal, lime aioli", price: "₹320" },
    { name: "Veg Xacuti Bao", desc: "Steamed bao, spiced coconut curry", price: "₹280" },
    { name: "Cheese & Charcuterie", desc: "Chef's selection, sourdough crackers", price: "₹520" },
  ],
  Bakery: [
    { name: "Butter Croissant", desc: "72-hour laminated, baked daily", price: "₹140" },
    { name: "Pain au Chocolat", desc: "Dark chocolate batons", price: "₹170" },
    { name: "Almond Danish", desc: "Toasted almonds, vanilla crème", price: "₹180" },
    { name: "Cinnamon Roll", desc: "Cream cheese glaze", price: "₹190" },
    { name: "Bebinca Slice", desc: "Traditional Goan seven-layer", price: "₹160" },
    { name: "Dark Chocolate Cookie", desc: "70% single-origin cacao", price: "₹120" },
    { name: "Banana Walnut Loaf", desc: "House recipe, warm slice", price: "₹150" },
    { name: "Lemon Drizzle Cake", desc: "Bright, buttery, glazed", price: "₹170" },
  ],
};

function loadMenu(): Menu {
  if (typeof window === "undefined") return defaultMenu;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultMenu;
    const parsed = JSON.parse(raw) as Menu;
    if (!parsed || typeof parsed !== "object") return defaultMenu;
    return parsed;
  } catch {
    return defaultMenu;
  }
}

export function saveMenu(menu: Menu) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(menu));
  window.dispatchEvent(new Event("ccc-menu-updated"));
}

export function useMenu(): Menu {
  // Start with defaultMenu on both SSR and first client render to avoid hydration mismatch.
  const [menu, setMenu] = useState<Menu>(defaultMenu);
  useEffect(() => {
    setMenu(loadMenu());
    const onUpdate = () => setMenu(loadMenu());
    window.addEventListener("ccc-menu-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("ccc-menu-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, []);
  return menu;
}
