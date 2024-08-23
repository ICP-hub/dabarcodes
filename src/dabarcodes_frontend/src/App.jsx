import { useState } from 'react';
import { dabarcodes_backend } from 'declarations/dabarcodes_backend';
import Home from './components/Home';
import PromotionSection from './components/PromotionSection';
// import Retailer from './components/Retailer';

function App() {
  const [greeting, setGreeting] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const name = event.target.elements.name.value;
    dabarcodes_backend.greet(name).then((greeting) => {
      setGreeting(greeting);
    });
    return false;
  }

  return (
    <main>
      {/* <img src="/logo2.svg" alt="DFINITY logo" />
      <br />
      <br />
      <form action="#" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name: &nbsp;</label>
        <input id="name" alt="Name" type="text" />
        <button type="submit">Click Me!</button>
      </form>
      <section id="greeting">{greeting}</section> */}

      <Home/>
      <PromotionSection/>
      {/* <Retailer/> */}
    </main>
  );
}

export default App;
