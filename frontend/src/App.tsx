import { Routes, Route } from 'react-router-dom';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import MainLayout from './layout/MainLayout';
import Library from './pages/Library';
import Song from './pages/Song';
import Album from './pages/Album';
import Login from './pages/Authenticate/Login';
import Register from './pages/Authenticate/Register';

const App = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/library" element={<Library />} />
                <Route path="/song/:id" element={<Song />} />
                <Route path="/album/:id" element={<Album />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default App;
