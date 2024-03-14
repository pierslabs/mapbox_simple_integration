import { Card, CardContainer } from './components/cards';
import Map from './components/map/Map';
import { MapsProvider } from './context/maps.context';
import { pharmacies } from './data/pharmacy.data';
import useWindowSize from './hooks/useWindowSize';

function App() {
  const { width, height } = useWindowSize();
  const isDesktop = width > 768;

  return (
    <MapsProvider>
      <div className={isDesktop ? 'home-desk' : 'home-mob'}>
        <CardContainer>
          {pharmacies.map((pharmacy) => (
            <Card
              key={pharmacy.name}
              name={pharmacy.name}
              title={pharmacy.title}
              address={pharmacy.address}
              phoneNumber={pharmacy.phoneNumber}
            />
          ))}
        </CardContainer>
        <Map />
      </div>
    </MapsProvider>
  );
}

export default App;
