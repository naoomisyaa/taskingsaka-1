import React, { useState } from 'react';
import Modal from './Modal';


export default {
    title: 'Components/Modal',
    component: Modal,
};

const Template = (args) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(true)} className="modal-button">Open Modal</button>
            {isOpen && <Modal {...args} onClose={() => setIsOpen(false)} />}
        </>
    );
};

export const SmallModal = Template.bind({});
SmallModal.args = {
    size: 'small',
    content: 'This is a small modal',
};

export const MediumModal = Template.bind({});
MediumModal.args = {
    size: 'medium',
    content: 'This is a medium modal',
};

export const LargeModal = Template.bind({});
LargeModal.args = {
    size: 'large',
    content: 'This is a large modal',
};
