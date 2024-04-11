import React, { useState } from 'react';
import { SlClose } from 'react-icons/sl';

const EventForm = (props) => {
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData(e.target);

  //   fetch('https://formkeep.com/f/e8e453e4a34c', {
  //     method: 'POST',
  //     body: formData,
  //   })
  //     .then((response) => {
  //       console.log('Formulärdata skickades:', response);
  //       alert('Tack för din anmälan!');
  //       closeForm();
  //     })
  //     .catch((error) => {
  //       console.error('Det uppstod ett fel:', error);
  //     });
  // };

  const closeForm = () => {
    props.closeIt();
  };

  return (
    <div className="max-h-96 max-w-96 p-10 bg-hv-green border-solid border-hv-blue border-2 rounded-md fixed m-auto inset-0">
      <div>
        <SlClose size={40} className="ml-auto mb-4" onClick={closeForm} />
      </div>
      <h1 className="mb-6">Jag vill gärna anmäla mig!</h1>
      {/* <form className="flex flex-col" onSubmit={handleSubmit}>
        <label htmlFor="email-address">Email-adress</label>
        <input
          className="rounded-full mb-4 h-8"
          type="email"
          id="email-address"
          name="email"
        />

        <label htmlFor="name">För- och efternamn</label>
        <input className="rounded-full h-8" type="text" id="name" name="name" />

        <button
          className="bg-gray-950 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-8 rounded-full"
          type="submit"
        >
          Skicka
        </button>
      </form> */}
      <form
        className="flex flex-col"
        action="https://formkeep.com/f/e8e453e4a34c"
        accept-charset="UTF-8"
        enctype="multipart/form-data"
        method="POST"
      >
        <input type="hidden" name="utf8" value="✓"></input>
        <label htmlFor="email-address">Email-adress</label>
        <input
          className="rounded-full mb-4 h-8"
          type="email"
          id="email-address"
          name="email"
        />

        <label htmlFor="name">För- och efternamn</label>
        <input className="rounded-full h-8" type="text" id="name" name="name" />

        <button
          className="bg-gray-950 hover:bg-blue-700 text-white font-bold mt-6 py-2 px-8 rounded-full"
          type="submit"
        >
          Skicka
        </button>
      </form>
    </div>
  );
};

export default EventForm;
