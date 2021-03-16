import React from 'react';
import { FaRocketchat } from 'react-icons/fa';

import Author from '../Author/Author';
import CardComment from '../CardComment/CardComment';
import './CardPost.scss';

const CardPost = ({ dadosPosts, navPage = 5 }) => {
  const [openComment, setOpenComment] = React.useState();

  return (
    <>
      {dadosPosts.slice(0, navPage).map((post, index) => {
        return (
          <div className="cardPost" key={post.id}>
            <div className="cardPost_content">
              <Author idAuthor={post.userId} />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <div className="cardPost_comment">
                {openComment === index && (
                  <CardComment idComment={post.userId} />
                )}
              </div>
            </div>
            <button
              className="cardPost_btnComment"
              onClick={() => {
                setOpenComment(index);
              }}
            >
              <FaRocketchat /> Ver Comentarios
            </button>
          </div>
        );
      })}
    </>
  );
};

export default CardPost;
