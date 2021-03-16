import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

import useFetch from '../../hooks/useFetch';
import { USER_GET } from '../../services/Api.js';

const Author = ({ idAuthor }) => {
  const [author, setAuthor] = React.useState([]);
  const { request } = useFetch();

  React.useEffect(() => {
    async function consumeApi() {
      const getAuthor = USER_GET(idAuthor);
      const { json } = await request(getAuthor.url, {});
      setAuthor(json);
    }
    consumeApi();
  }, [request, idAuthor]);

  return (
    <>
      {author.map((aut) => (
        <div className="author" key={aut.id}>
          <FaUserAstronaut />
          <span>{aut.username}</span>
        </div>
      ))}
    </>
  );
};

export default Author;
