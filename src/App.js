function App() {
  return (
    <div className="wrapper clear">
      <header className="header d-flex justify-between align-center">
        <div className="headerLeft d-flex align-center">
          <img width={40} height={40} src="/img/logo.png" alt="" className="header__logo"/>
          <div className="headerInfo">
            <h3 className="text-uppercase">React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
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
        <h1 className="title">Все кроссовки</h1>
        
        <div className="sneakers">
          <div className="card">
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
