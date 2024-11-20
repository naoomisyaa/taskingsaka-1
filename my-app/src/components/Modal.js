import React from 'react';
import './Modal.css'; // Impor file CSS dengan path relatif


const Modal = ({ size, content, onClose }) => {
    return (
        <div className={`modal-overlay modal-${size}`}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose}>✖</button>
                <div>{content}</div>
            </div>
        </div>
    );
};

export default Modal;
