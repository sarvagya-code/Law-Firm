import './App.css';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import AreaOfPractice from './components/AreaOfPractice/AreaOfPractice';
import Clients from './components/Clients/Clients';
import Team from './components/Team/Team';
import FAQ from './components/FAQ/FAQ';
import Newsletter from './components/Newsletter/Newsletter';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Home />
      <Introduction />
      <AreaOfPractice />
      <Clients />
      <Team />
      <FAQ />
      <Newsletter />
      <Footer />
    </>
  );
}

export default App;
