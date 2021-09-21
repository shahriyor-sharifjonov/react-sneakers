function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay" style={{display: 'none'}}>
        <div className="drawer">

          <h2 className="mb-30 d-flex justify-between">Корзина <img className="removeBtn cu-p" src="/img/btn-remove.svg" alt="Remove" /></h2>

          <div className="items">
            <div className="cartItem">
              <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/1.jpg)"}}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem">
              <div className="cartItemImg" style={{backgroundImage: "url(/img/sneakers/1.jpg)"}}></div>
              <div className="mr-20 flex">
                <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                <b>12 999 руб.</b>
              </div>
              <img className="removeBtn" src="/img/btn-remove.svg" alt="Remove" />
            </div>
          </div>

          <div className="cartTotalBlock">
            <ul>
              <li>
                <span>Итого: </span>
                <div></div>
                <b>21 498 руб. </b>
              </li>
              <li>
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб. </b>
              </li>
            </ul>
            <button className="greenButton">
              Оформить заказ <img src="/img/arrow.svg" alt="Arrow"></img>
            </button>
          </div>
          
        </div>
      </div>
      <header className="header d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" className="header__logo"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p style={{color: '#9D9D9D', fontSize: '14px'}}>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="headerRight d-flex align-center">
            <li className="d-flex align-center mr-30">
              <img width={18} height={18} src="/img/cart.svg" alt="" className="mr-10"/>
              <span>1205 руб.</span>
            </li>
            <li className="d-flex align-center">
              <img width={18} height={18} src="/img/user.svg" alt="" />
            </li>
          </ul>
      </header>
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="title">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakers">
          <div className="card">
            <div className="favourite">
              <img src="/img/heart-unliked.svg" alt="" />
            </div>
            <img width={133} height={112} src="img/sneakers/1.jpg" alt="Sneakers" />
            <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="card__p">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneakers/2.jpg" alt="Sneakers" />
            <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="card__p">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneakers/3.jpg" alt="Sneakers" />
            <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="card__p">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="img/sneakers/4.jpg" alt="Sneakers" />
            <p className="card__title">Мужские Кроссовки Nike Blazer Mid Suede</p>
            <div className="d-flex justify-between align-center">
              <div className="d-flex flex-column">
                <span className="card__p">Цена:</span>
                <b className="card__price">12 999 руб.</b>
              </div>
              <button className="card__btn">
                <img width={11} height={11} src="/img/plus.svg" alt=""></img>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
