function Header(){
  return(
    <header className="header d-flex justify-between align-center">
      <div className="headerLeft d-flex align-center">
        <img
          width={40}
          height={40}
          src="/img/logo.png"
          alt=""
          className="header__logo"
        />
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p style={{ color: "#9D9D9D", fontSize: "14px" }}>
            Магазин лучших кроссовок
          </p>
        </div>
      </div>
      <ul className="headerRight d-flex align-center">
        <li className="d-flex align-center mr-30">
          <img
            width={18}
            height={18}
            src="/img/cart.svg"
            alt=""
            className="mr-10"
          />
          <span>1205 руб.</span>
        </li>
        <li className="d-flex align-center">
          <img width={18} height={18} src="/img/user.svg" alt="" />
        </li>
      </ul>
    </header>
  )
}

export default Header