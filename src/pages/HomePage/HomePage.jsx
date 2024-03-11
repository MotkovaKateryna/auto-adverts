import React from 'react';
import { Container, HomePageContainer, RedirectButton } from './HomePage.styled';
import Slider from 'modules/Slider/Slider';

const HomePage = () => {

  // const carImages = [
  //   "https://ftp.goit.study/img/cars-test-task/buick_enclave.jpeg",
  //   "https://th.bing.com/th/id/R.2de07efe8137ab53954ca6ddc3e5891d?rik=ELyGSiOsjFwmmA&riu=http%3a%2f%2fwww.rabstol.net%2fuploads%2fgallery%2fmain%2f264%2frabstol_net_chevrolet_camaro_04.jpg&ehk=hGADBnwKAjaLuqiBeY7mKm3TEjQRSp3DcBsANGvxyA0%3d&risl=&pid=ImgRaw&r=0",
  //   "https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2022/07/Ford-GT-500-Render.jpg",
  //   "https://media.evo.co.uk/image/private/s--X-WVjvBW--/f_auto,t_content-image-full-desktop@1/v1623418450/evo/2021/06/Tesla%20Model%20S%20Plaid%20front%20track.jpg",
  //   "https://www.automobilesreview.com/gallery/2017-porsche-panamera/2017-porsche-panamera-05.jpg",
  //   "https://th.bing.com/th/id/R.8f27c36a41a222fb627313ac4d9e5750?rik=c%2f0nnH2hIWwDPw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-cYWu_ovgzm4%2fUNtDFGnuAqI%2fAAAAAAAABu4%2f-1mzgDEgOdI%2fs1600%2fAudi-Q7-3.0-TDI-quattro-3.jpg&ehk=SD4FjJw4TuTqzW3Jemek8LoHN0chQTcV0v5jPhlyoTc%3d&risl=&pid=ImgRaw&r=0",
  //   "https://www.sifiraracal.com/resim/galeri/38/25452/bmw-x5.jpg",
  //   "https://www.carscoops.com/wp-content/uploads/2019/04/59cfb2b3-2020-mercedes-benz-gls-9457.jpg",
  //   "https://th.bing.com/th/id/OIP.ep7aM5B4VdJDDfhNUObNlQAAAA?rs=1&pid=ImgDetMain",
  //   "https://i.gaw.to/vehicles/photos/40/20/402073-2020-kia-rio.jpg"    
  // ];

  const onRedirect = () => {
    window.location.href = '/auto-adverts/catalog';
  };
  return (
    <Container>
      <HomePageContainer>
        <h1>Do you want to rent a car?</h1>

        <Slider/>
        {/* <ImageContainer>
      {carImages.map((image, index) => (
        <CarImage key={index} src={image} alt={`Car for rent ${index + 1}`} />
      ))}
    </ImageContainer> */}
    <RedirectButton onClick={onRedirect}>
      Catalog
    </RedirectButton>
      </HomePageContainer>
    </Container>
    
  )
}

export default HomePage

