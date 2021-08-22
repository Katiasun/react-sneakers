import React from "react";
import Card from "./components/Card";
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
      imgUrl: "/img/sneakers/1.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Air Max 270",
      price: 12999,
      imgUrl: "/img/sneakers/2.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Blazer Mid Suede",
      price: 8499,
      imgUrl: "/img/sneakers/3.jpg",
    },
    {
      title: "Кроссовки Puma X Aka Boku Future Rider",
      price: 8999,
      imgUrl: "/img/sneakers/4.jpg",
    },
    {
      title: "Мужские Кроссовки Under Armour Curry 8",
      price: 15199,
      imgUrl: "/img/sneakers/5.jpg",
    },
    {
      title: "Мужские Кроссовки Nike Kyrie 7",
      price: 11299,
      imgUrl: "/img/sneakers/6.jpg",
    },
    {
      title: "Мужские Кроссовки Jordan Air Jordan 11",
      price: 10799,
      imgUrl: "/img/sneakers/7.jpg",
    },
    {
      title: "Мужские Кроссовки Nike LeBron XVIII",
      price: 16499,
      imgUrl: "/img/sneakers/8.jpg",
    },
  ]);
  const [cartOpened, setCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://612187c0f5849d0017fb4269.mockapi.io/sneakers")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <div className="App clear">
      {cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
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
          {items.map((obj) => (
            <Card
              title={obj.title}
              price={obj.price}
              imgUrl={obj.imgUrl}
              onClickFavorite={() => alert("Добавили закладки")}
              onClickPlus={() => alert("Нажали плюс")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
