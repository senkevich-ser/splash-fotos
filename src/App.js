import api from './utils/Api'


import './App.css';
import React from 'react';
import Header from './components/header/Header';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Card from './components/card/Card';
import PhotoPopup from './components/photoPopup/PhotoPopup';


function App() {

  const [search, setSearch] = React.useState('usa');
  const [cards, setCards] = React.useState([]);
  const [pageNamber, setPageNamber] = React.useState(1);
  const [itemClick, setItemClick] = React.useState({});
  const [isOpenPhotoPopup, setIsOpenPhotoPopup] = React.useState(false);



  function searchPhoto(search, pageNamber) {
    console.log(search, pageNamber)
    api.search(search, pageNamber).then((res) => {
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
    searchPhoto(search, pageNamber)
  }, [search, pageNamber])

  function handelSubmit(evt) {
    evt.preventDefault()
    searchPhoto(search, pageNamber)
  }

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  }

  function nextPage() {
    setPageNamber(pageNamber + 1);
    searchPhoto(search, pageNamber);
    document.documentElement.scrollIntoView(true);
  }

  const handleCardClick = (card) => {
    setItemClick(card)
    setIsOpenPhotoPopup(true)
  }

  const closePopup = () => {
    setIsOpenPhotoPopup(false)
  }

  /* const listenScrollEvent = () => {
    const cardContainer = document.querySelector('.card-container');
    const lastCard = cardContainer.lastElementChild.offsetTop;
    if (window.pageYOffset + 410 === lastCard) {
      nextPage()
    }
  } */
  /*  React.useEffect(() => {
     window.addEventListener('scroll', listenScrollEvent)
     return () => (
       window.removeEventListener('scroll', listenScrollEvent)
     )
   }, []) */





  return (
    <div className="App">
      <Header />
      <form className='search-container' onSubmit={handelSubmit}>
        <Input placeholder={"Введите поисковое слово"} handleChange={handleChange} />
        <Button />
      </form>
      <div className='card-container'>
        {cards.map((card) => (
          <Card key={card.id} item={card} handelCardClick={handleCardClick} />
        ))}
      </div>
      <button type='button' className='button elseBtn opacity' onClick={nextPage}>Ещё</button>
      {isOpenPhotoPopup && <PhotoPopup isOpen={isOpenPhotoPopup} clickCard={itemClick} onClose={closePopup} />}
    </div>
  );
}

export default App;
