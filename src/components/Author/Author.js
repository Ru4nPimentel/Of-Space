import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';
import { FiEdit } from 'react-icons/fi';

import ButtonCustom from '../ButtonCustom/ButtonCustom';
import useFetch from '../../hooks/useFetch';
import { USER_GET } from '../../services/Api.js';

const Author = ({ idAuthor, openEdit, indexElement }) => {
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
          <div className="author_name">
            <FaUserAstronaut />
            <span>{aut.username}</span>
          </div>
          <ButtonCustom
            idButton="editPost"
            styleComponent="btn_edit"
            eventClick={() => openEdit(indexElement)}
          >
            <FiEdit />
          </ButtonCustom>
        </div>
      ))}
    </>
  );
};

export default Author;
