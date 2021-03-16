import React from 'react';
import { FaRocketchat } from 'react-icons/fa';

import Author from '../Author/Author';
import CardComment from '../CardComment/CardComment';
import EditPost from '../EditPost/EditPost';
import './CardPost.scss';

const CardPost = ({ dadosPosts, navPage = 5 }) => {
  const [openComment, setOpenComment] = React.useState();
  const [openEditPost, setOpenEditPost] = React.useState();
  const postRef = React.useRef();
  const [refDom, setRefDom] = React.useState();
  React.useEffect(() => {
    setRefDom(postRef.current);
  }, []);

  return (
    <div ref={postRef}>
      {dadosPosts.slice(0, navPage).map((post, index) => {
        return (
          <div className="cardPost" key={post.id} id={`post${post.id}`}>
            <div className="cardPost_content">
              <Author
                idAuthor={post.userId}
                openEdit={setOpenEditPost}
                indexElement={index}
              />
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              {openEditPost === index && (
                <EditPost refDom={refDom} idElement={`post${post.id}`} />
              )}
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
    </div>
  );
};

export default CardPost;
