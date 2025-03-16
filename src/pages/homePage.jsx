
import HeroSection from '../components/heroSection';
import About from './about';
import Market from './market';


export default function homePage(){

    return(
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: '',
            height: '100vh',
            width: '100vw',
            backgroundColor: '#DCF7D0',
            color:'#000000'
        }}
        >
        
       <HeroSection/>
       <Market/>
        </div>
    )
}
