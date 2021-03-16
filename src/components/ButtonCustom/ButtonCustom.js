import React from 'react';

const ButtonCustom = ({
  idButton,
  typeButton = 'button',
  children,
  styleComponent,
  eventClick,
}) => {
  return (
    <button
      type={typeButton}
      name={idButton}
      id={idButton}
      className={
        styleComponent ? `buttonCustom ${styleComponent}` : `buttonCustom`
      }
      onClick={eventClick}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;
