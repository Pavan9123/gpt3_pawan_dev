import './App.css';
import './index.css'
import {Footer, Blog, WhatGPT3, Features, Header, Possibility} from './containers'
import {Navbar,Brand, CTA} from './components'

function App() {
  return (
    <div className="App">
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <CTA />
        <Blog />
        <Footer/>
    </div>
  );
}

export default App;
