"use client";

import React, { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Toast from '@/components/Toast'
import Modal from '@/components/Modal'
import '../components/Toast.css'

const items = [
  { label: 'Home', href: '#' }, 
  { label: 'About', href: '#' }, 
  { label: 'Contact', href: '#' }
];

// const [toastVisible, setToastVisible] = useState(false);
// const [toastContent, setToastContent] = useState({
//   type: '',
//   title: '',
//   message: '',
//   timeAgo: '',
//   size: ''
// });

// const handleShowToast = () => {
//   setToastContent({
//     type: 'success', 
//     title: 'Success!',
//     message: 'This is a success notification',
//     timeAgo: 'Just now',
//     size: 'medium'
//   });
//   setToastVisible(true);

//   setTimeout(() => {
//     setToastVisible(false);
//   }, 3000);
// };
// const [isModalOpen, setIsModalOpen] = useState(false);

// const openModal = () => setIsModalOpen(true);
// const closeModal = () => setIsModalOpen(false);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Breadcrumb</h1>
        <Breadcrumb items={items} />  {/* Properti items dilewatkan ke komponen Breadcrumb */}
      </div>

      {/* <div>
        <h1>My Page</h1>
        <button onClick={handleShowToast}>Show Toast</button>
      </div>

      {toastVisible && (
        <Toast
          type={toastContent.type}
          title={toastContent.title}
          message={toastContent.message}
          timeAgo={toastContent.timeAgo}
          size={toastContent.size}
        />
      )} */}

{/* <div>
      <button onClick={openModal}>Open Modal</button>
      {isModalOpen && (
        <Modal
          size="medium" // Misalnya, ukuran modal dapat disesuaikan
          content={<div>This is the content of the modal</div>}
          onClose={closeModal}
        />
      )}
    </div> */}

{/* <Modal size={undefined} content={undefined} onClose={undefined}></Modal> */}
    </main>
  );
}
