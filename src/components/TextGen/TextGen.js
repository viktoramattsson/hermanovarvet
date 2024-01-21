import { useEffect } from 'react';
import React from 'react';

function TextGen() {
  const [text, setText] = React.useState({}); // Initialisera som ett objekt istället för en sträng

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../text.json');
        const data = await response.json();
        console.log(data);

        if (data.length > 0) {
          setText(data[0]);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className=" bg-hv-yellow py-10 px-5">
        <h1 className="text-center mb-8">{text.title}</h1>
        <p className="text-center mb-4">{text.paragraph1}</p>
        <p className="text-center mb-4">{text.paragraph2}</p>
        <p className="text-center mb-4">{text.paragraph3}</p>
        <p className="text-center mb-4">{text.paragraph4}</p>
      </div>
    </>
  );
}

export default TextGen;
