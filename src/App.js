import React, {useState} from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import ContactForm from './components/Contact'

function App() {
  const [currentPage, handlePageChange]= useState('Home')
  const renderPage = () => {
    switch(currentPage){
      case 'About':
        return<About />;
      case 'Contact':
        return<ContactForm />
      // case 'Projects'
      //   return<Projects />
    }
  }
  return (
    <div>
      <Header>
        
      </Header>
      <main>
       <About />
        
       </main>
      <Footer />
    </div>
  );
}

export default App;
