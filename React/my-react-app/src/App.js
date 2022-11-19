// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import { Button } from '@mantine/core';

// let arr = ["Mountain 1", "Mountain 2", "Mountain 3", "Mountain 4", "Mountain 5", "Mountain 6" ];

let arr = [
  {
    id: 1,
    title: "Mountain 1",
    p: "Açıklama 1",
  },
  {
    id: 2,
    title: "Mountain 2",
    p: "Açıklama 2",
  },
  {
    id: 3,
    title: "Mountain 3",
    p: "Açıklama 3",
  },
  {
    id: 4,
    title: "Mountain 4",
    p: "Açıklama 4",
  },
  {
    id: 5,
    title: "Mountain 5",
    p: "Açıklama 5",
  },
  {
    id: 6,
    title: "Mountain 6",
    p: "Açıklama 6",
  },
]

const App = () => {
  const [val, setVal] = useState(11);

  return (
    <div>
      <h1> Başlık</h1>
      <h2> Ders {val} </h2>
      <Button>Click me!</Button>;
      <button onClick={() => {
        setVal(val + 1);
      }}
      >
        Arttır.
      </button>
      <button onClick={() => {
        setVal(val - 1);
      }}
      >
        Azalt.
      </button>
      <button onClick={() => {
        setVal(100);
      }}
      >
        100'e getir.
      </button>

      <p>Yazı</p>   

      <div className='Cards'>
        {arr.map( ({title, p}, i) => {
          return <Card key= {`index ${i}`} title={title} p={p} val={val}  i={i} />  
        })}

        {/* <Card title="Mountain 1" p = "Açıklama 1" />
        <Card title="Mountain 2" p = "Açıklama 2" />
        <Card title="Mountain 3" p = "Açıklama 3" />
        <Card title="Mountain 4" p = "Açıklama 4" />
        <Card title="Mountain 5" p = "Açıklama 5" />
        <Card title="Mountain 6" p = "Açıklama 6" /> */}
       
      </div>
    </div>
  );
}

export default App;
