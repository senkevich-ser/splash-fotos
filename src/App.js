import api from './utils/Api'


import './App.css';
import React from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Card from './components/card/Card';
import PhotoPopup from './components/photoPopup/PhotoPopup';


function App() {

  const [search, setSearch] = React.useState('usa');
  const [cards, setCards] = React.useState([]);
  const [pageNamber,setPageNamber] = React.useState(1);
  const [itemClick,setItemClick] = React.useState({});

  function searchPhoto(search,pageNamber){
    api.search(search,pageNamber).then((res) => {
      const arr = res.results.map((item) => {
        return {
          src: item.urls.regular,
          title: item.description,
          alt: item.alt_description,
          subtitle: item.user.name,
          id: item.id,
        }
      })
      setCards(arr);
    })
  }

  React.useEffect(() => {
    searchPhoto(search,pageNamber)
  }, [])

  function handelSubmit(evt){
    evt.preventDefault()
   searchPhoto(search)
  }

const handleChange=(evt)=>{
  setSearch(evt.target.value); 
}

function nextPage(){
  setPageNamber(pageNamber+1);
  searchPhoto(search,pageNamber);
}

const handleCardClick=(card)=>{
  setItemClick(card)
  console.log(card)
}

  return (
    <div className="App">
      <header>
        <h1>Найди любимые фото</h1>
        </header>
      <form  className='search-container' onSubmit={handelSubmit}>
       <Input placeholder={"Введите поисковое слово"} handleChange={handleChange}/> 
       <Button/>
      </form>
      <div className='card-container'>
        {cards.map((card)=>(
          <Card key={card.id} item={card} handelCardClick={handleCardClick}/>
        ))}
      </div> 
      <button type='button' className='button elseBtn' onClick={nextPage}>Ещё</button>
      <PhotoPopup isOpen={true} clickCard={itemClick}/> 
    </div>
  );
}

export default App;
