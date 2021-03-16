import React from 'react';
import './EditPost.scss';

const EditPost = ({ refDom, idElement }) => {
  const [textRef, setTextRef] = React.useState('');

  React.useEffect(() => {
    setTextRef(
      refDom.querySelector(`#${idElement}`).querySelector('p').innerText,
    );
  }, [refDom, idElement]);

  function handleClick() {
    refDom
      .querySelector(`#${idElement}`)
      .querySelector('p').innerText = textRef;
  }

  return (
    <div className="EditPost">
      <input
        type="text"
        name={`inputEdit${idElement}`}
        id={`inputEdit${idElement}`}
        value={textRef}
        onChange={({ target }) => setTextRef(target.value)}
      />
      <button onClick={handleClick}>Editar</button>
    </div>
  );
};

export default EditPost;
