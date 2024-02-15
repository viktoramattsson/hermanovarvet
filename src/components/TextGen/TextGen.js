import { useEffect } from 'react';
import React from 'react';

function TextGen() {
  const [text, setText] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('../../../text.json');
        const data = await response.json();

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
      <div className=" bg-hv-yellow py-10 px-14">
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
