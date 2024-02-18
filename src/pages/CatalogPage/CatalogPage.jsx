import CarsList from 'modules/CarsList/CarsList';
import { Container } from 'pages/HomePage/HomePage.styled';
import { Button, CatalogWrap } from './CatalogPage.styled';
import SearchBar from 'modules/SearchBar/SearchBar';
import { useEffect, useState } from 'react';
import Loader from 'shared/Loader/Loader';
// import { useDispatch, useSelector } from 'react-redux';
// import { fetchAdverts } from '../../redux/adverts/advert-operations';

const CatalogPage = () => {

  // const [page, setPage] = useState(1);
  // const [hasMore, setHasMore] = useState(true);
  // const dispatch = useDispatch();
  // const adverts = useSelector(state => state.adverts);
  // useEffect(() => {
  //   dispatch(fetchAdverts(page));
  // }, [dispatch, page]);

  // const loadMore = () => {
  //   if (adverts.length < page * 12) {
  //     setHasMore(false);
  //   } else {
  //     setPage(page + 1);
  //   }
  // };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // Здесь вызывайте вашу функцию для загрузки данных
    // После загрузки данных:
    setLoading(false);
  }, []);


  return (
    <Container>
    <CatalogWrap>
      <SearchBar/>
      {loading ? <Loader /> : <CarsList />}
      <Button type="button" >
        Load more
      </Button>
    </CatalogWrap>
  </Container>
  );
};

export default CatalogPage;
