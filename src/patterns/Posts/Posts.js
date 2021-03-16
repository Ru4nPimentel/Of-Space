import React from 'react';
import ButtonCustom from '../../components/ButtonCustom/ButtonCustom';
import useFetch from '../../hooks/useFetch';
import { POSTS_GET } from '../../services/Api';
import './Posts.scss';
import { BsPlusCircle } from 'react-icons/bs';
import Loading from '../../components/Loading/Loading';
const CardPost = React.lazy(() => import('../../components/CardPost/CardPost'));

const Posts = () => {
  const { request, loading } = useFetch();
  const [postArray, setPostArray] = React.useState([]);
  const [navPage, setNavPage] = React.useState(5);

  function plusPost() {
    setNavPage(navPage + 5);
  }

  React.useEffect(() => {
    async function consumeApi() {
      const getPost = POSTS_GET();
      const { json } = await request(getPost.url, {});
      setPostArray(json);
    }
    consumeApi();
  }, [request]);

  return (
    <section className="Posts">
      <div className="posts_box">
        {loading && <Loading />}
        <React.Suspense fallback={<div>carregando</div>}>
          <CardPost dadosPosts={postArray} navPage={navPage} />
        </React.Suspense>
      </div>
      <div className="post_btn">
        <ButtonCustom
          idButton="plusPost"
          styleComponent="btn_plusPost"
          eventClick={plusPost}
        >
          <BsPlusCircle />
        </ButtonCustom>
      </div>
    </section>
  );
};

export default Posts;
