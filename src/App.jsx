import Header from './components/Header';
import Container from './components/Container';
import HomeView from './views/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <HomeView />
      </Container>
    </div>
  );
}

export default App;
