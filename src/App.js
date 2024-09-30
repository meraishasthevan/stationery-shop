import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import Banner from './components/Banner';
import Logo from './components/Logo';
import Card from './components/Card';
import CardSection from './components/CardSection';
import Shop from './components/Shop';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import ViewPins from './components/ViewPins';
import ViewCalculator from './components/ViewCalculator';
import ViewFolders from './components/ViewFolders';
import ViewOrganizer from './components/ViewOrganizer';
import ViewMagnifiers from './components/ViewMagnifiers';
import ViewCutters from './components/ViewCutters';
import ViewMarkers from './components/ViewMarkers';
import ViewGlue from './components/ViewGlue';
import Cart from './components/Cart';

function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path='/' element={
          <>
            <Banner/> 
            <Logo/>
            <Card/>
            <Carousel/>
            <CardSection/>
            <Shop/>
            <Footer/>
          </>
        }/>
        <Route path='/viewpins' element={<ViewPins/>}/>
        <Route path='/viewcalculator' element={<ViewCalculator/>}/>
        <Route path='/viewfolders' element={<ViewFolders/>}/>
        <Route path='/vieworganizer' element={<ViewOrganizer/>}/>
        <Route path='/viewmagnifiers' element={<ViewMagnifiers/>}/>
        <Route path='/viewcutters' element={<ViewCutters/>}/>
        <Route path='/viewmarkers' element={<ViewMarkers/>}/>
        <Route path='/viewglue' element={<ViewGlue/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </div>
  );
}

export default App;
