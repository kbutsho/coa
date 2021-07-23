import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const QuestionAnsCard = (props) => {
    const { que, ans } = props.QAns;
    const [modal, setModal] = useState(false);
    console.log(setModal);

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <div className="my-5">
            <div className="row">
                <div className="col-md-9">
                    <h4>{que}</h4>
                </div>
                <div className="col-md-3">
                    <button onClick={toggleModal} className="btn btn-sm btn-warning font-weight-bold mx-3">Answer</button>
                </div>
            </div>
            {modal ? (
                <Modal isOpen={modal} onClick={toggleModal} style={{ marginTop: "70px" }}>
                    <ModalBody>
                        <h4 className="my-3 font-weight-bold text-uppercase text-info text-center">{que}</h4>
                        <p className="font-weight-bold text-danger text-uppercase">{ans}</p>
                    </ModalBody>
                    <ModalFooter>
                        <div className="text-left">
                            <button onClick={toggleModal} className="btn btn-sm btn-outline-danger font-weight-bold">
                                Close
                            </button>
                        </div>
                    </ModalFooter>
                </Modal>
            ) : null}
        </div>
    );
};

export default QuestionAnsCard;