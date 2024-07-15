import OptimizedVideo from './components/elements/OptimizedVideo';
import HeroSection from './components/modules/Hero/HeroSection/HeroSection';

export default function Home() {
  return (
    <div style={{ display: 'grid', width: '100vw', minHeight: '100vh', backgroundColor: '#F9F7F4' }} >
      {/* <div style={{ gridColumn:1, gridRow:1 }}> */}
        <HeroSection/>
      {/* </div> */}

      {/* <div style={{ gridColumn: 1, gridRow: 1 }}>
        <OptimizedVideo />
      </div> */}
    </div>
  );
}
