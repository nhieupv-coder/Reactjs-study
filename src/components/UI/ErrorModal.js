import React from "react";
import Card from "./Card";
import errorModalCss from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (
    <div>
        <div className={errorModalCss.backdrop}/>
    <Card cssClass={errorModalCss.modal}>
      <header className={errorModalCss.header}>
        <h2>{props.title} </h2>
      </header>
      <div className={errorModalCss.content}>
        <p>{props.content}</p>
      </div>
      <footer className={errorModalCss.actions}>
        <Button onClick={props.onCloseModal}>Confirm</Button>
      </footer>
    </Card>
    </div>
  );
};

export default ErrorModal;
