import Search from './Search';
import City from './City';
import Details from './Details';
import Footer from './Footer';
import HeaderLinks from './HeaderLinks';

import './App.css';

export default function App() {
    return (
        <div className="App">
            <HeaderLinks />
            <Search />
            <City />
            <Details />
            <Footer />
        </div>
    );
}
