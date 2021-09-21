function Card() {
  return (
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
  );
}

export default Card