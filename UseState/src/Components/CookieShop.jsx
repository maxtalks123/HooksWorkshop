export default function CookieShop() {
  const shopItems = [
    { Item: "Grandma", Cost: 10, CPS: 1, ID: 1 },
    { Item: "Oven", Cost: 100, CPS: 10, ID: 2 },
    { Item: "factory", Cost: 1000, CPS: 1000, ID: 3 },
  ];
  const htmlShop = shopItems.map((item) => (
    <li key={item.ID}>
      {item.Item}
      {item.Cost}
      {item.CPS}
    </li>
  ));
  return <ul>{htmlShop}</ul>;
}
