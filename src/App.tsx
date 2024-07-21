import { Route, Routes } from 'react-router-dom';
import { Home, HomeContainer, Login } from './containers';

function App() {
  
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<HomeContainer />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
