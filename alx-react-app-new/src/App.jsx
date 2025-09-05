import Header from './components/Header';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import Footer from './components/Footer';
import Counter from './components/Counter';  // ✅ make sure this line is present

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age={25} bio="Loves traveling and photography." />
      <UserProfile name="Bob" age={30} bio="Enjoys coding and coffee." />
      
      {/* ✅ Use the Counter component here */}
      <Counter />
      
      <Footer />
    </div>
  );
}

export default App;
