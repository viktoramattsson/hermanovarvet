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
          setText(data[0]); // Sätt det första objektet från arrayen som text
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="w-1/2 mx-auto">
        <h1 className="text-center">{text.title}</h1>
        <p>{text.message}</p>
      </div>
    </>
  );
}

export default TextGen;
