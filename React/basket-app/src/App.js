
import './App.css';
import React from 'react';
import { Container, SimpleGrid, List, ThemeIcon, Stack, Button, Input } from '@mantine/core';
import Card from "./components/Card"
import {useState} from 'react';
import { IconCircleCheck, IconCircleDashed } from '@tabler/icons';

const storeItems = [
{
  name:"Keyboard",
  src: "keyboard",
  price: 1000
},
{
  name:"Phone",
  src: "phone",
  price: 1500
},
{
  name:"Camera",
  src: "camera",
  price: 500
},
{
  name:"Joystick",
  src: "joystick",
  price: 500
},
{
  name:"Headphone",
  src: "headphone",
  price: 500
},
{
  name:"Computer Desk",
  src: "desk",
  price: 500
}
]

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let filteredItems = storeItems.filter((item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0);
  // let filteredItems = basketItems.filter((item) => item.name.indexOf("a") >= 0);
  return (
    <Container className="App">

      <Input.Wrapper label="Search">
        <Input 
          onChange={(e)=> setSearchValue(e.target.value)}
        />
      </Input.Wrapper>
      <SimpleGrid cols={3} className="store">
        {filteredItems.map(({ name, src }) => {
          return (
            <Card  
              key={name} 
              name={name}
              src={src} 
              onAdd={() => setBasketItems([...basketItems, { name }])}
              
            />
          );
        })}
      </SimpleGrid> 

      <List
      className="list"
      spacing="xs"
      size="sm"
      center
      icon={
        <ThemeIcon color="teal" size={24} radius="xl">
          <IconCircleCheck size={16} />
        </ThemeIcon>
      }
    >
      {basketItems.map( ({name}, index) => (
        <List.Item key={index}> {name} </List.Item> 
      ))}
      
    </List>   
    </Container>
  );
}

export default App;
