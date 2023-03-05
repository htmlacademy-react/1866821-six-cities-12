import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  rentalOffersNumber: number;
}

export default function App(props: AppProps): JSX.Element {
  return (<MainPage rentalOffersNumber={props.rentalOffersNumber}/>);
}
