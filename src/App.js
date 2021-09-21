import Card from './components/Card'
import Header from './components/Header'
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content">
        <div className="d-flex align-center justify-between mb-40">
          <h1 className="title">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="sneakers">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
