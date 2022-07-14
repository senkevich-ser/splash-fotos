import api from './utils/Api'


import './App.css';
import React from 'react';


function App() {

  const [search, setSearch] = React.useState('usa');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.search(search).then((res) => {
      const arr = res.results.map((item) => {
        return {
          src: item.urls.regular,
          title: item.description,
          alt: item.alt_description,
          subtitle: item.user.name,
          id: item.id,
        }
      })
      console.log(arr)
      setCards(arr);
    })
  }, [search])


  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
