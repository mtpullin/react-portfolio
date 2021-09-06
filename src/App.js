import React, {useState} from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Header from './components/Header'
import Resume from './components/Resume'
import ContactForm from './components/Contact'
import ProjectList from './components/Project'

function App() {
  const [currentPage, handlePageChange]= useState('About')
  const renderPage = () => {
    switch(currentPage){
      case 'About':
        return<About />;
      case 'Contact':
        return<ContactForm />
      case 'Projects' :
        return<ProjectList />
      case 'Resume' :
        return<Resume />
      default:
        return <About />
    }
  }
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}>
        
      </Header>
      <main>
       {renderPage(currentPage)}
       </main>
      <Footer />
    </div>
  );
}

export default App;
