import React from 'react';

import useFetch from '../../hooks/useFetch';
import { COMMENTS_GET } from '../../services/Api.js';
import './CardComment.scss';

const CardComment = ({ idComment }) => {
  const [comments, setComments] = React.useState([]);
  const { request } = useFetch();

  React.useEffect(() => {
    async function consumeApi() {
      const getComment = COMMENTS_GET(idComment);
      const { json } = await request(getComment.url, {});
      setComments(json);
    }
    consumeApi();
  }, [request, idComment]);

  return (
    <>
      {comments.slice(0, 2).map((comment) => {
        return (
          <div className="CardComment_box" key={comment.id}>
            <div className="CardComment_user">
              <span>{comment.name}</span>
            </div>
            <div className="CardComment_text">
              <span>{comment.body}</span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CardComment;
