import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Container from './components/Container';
import HomeView from './views/HomeView/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <Routes>
          <Route path="/" exact component={HomeView} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
