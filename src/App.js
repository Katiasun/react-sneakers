import React from "react";
import Card from "./components/Card/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

// const arr = [
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 12999,
//     imgUrl: "/img/sneakers/1.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Air Max 270",
//     price: 12999,
//     imgUrl: "/img/sneakers/2.jpg",
//   },
//   {
//     title: "Мужские Кроссовки Nike Blazer Mid Suede",
//     price: 8499,
//     imgUrl: "/img/sneakers/3.jpg",
//   },
//   {
//     title: "Кроссовки Puma X Aka Boku Future Rider",
//     price: 8999,
//     imgUrl: "/img/sneakers/4.jpg",
//   },
// ];

function App() {
  const [items, setItems] = React.useState([
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 12999,
      imageUrl: "process.env.PUBLIC_URL + '/img/sneakers/1.jpg'",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imageUrl: "./img/sneakers/2.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imageUrl: "./img/sneakers/3.jpg",
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      imageUrl: "./img/sneakers/4.jpg",
    },
    {
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      imageUrl: "./img/sneakers/5.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      imageUrl: "./img/sneakers/6.jpg",
    },
    {
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      imageUrl: "./img/sneakers/7.jpg",
    },
    {
      title: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      imageUrl: "./img/sneakers/8.jpg",
    },
  ]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);

  // React.useEffect(() => {
  //   fetch("https://612187c0f5849d0017fb4269.mockapi.io/sneakers")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((json) => {
  //       setItems((prev) => [...prev, ...json]);
  //     });
  // }, []);
  const onAddToCart = () => {
    console.log(123);
  };
  return (
    <div className="App clear">
      {cartOpened && (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      )}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content  p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1> Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((item) => (
            <Card
              title={item.title}
              price={item.price}
              imgUrl={item.imageUrl}
              onClickFavorite={() => alert("Добавили закладки")}
              onPlus={(obj) => console.log(obj)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
