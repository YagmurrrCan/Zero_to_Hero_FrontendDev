
import './App.css';
import React from 'react';
import { ActionIcon, Badge, Container, SimpleGrid, Group, Drawer, Indicator, List, ThemeIcon, Stack, Button, Input } from '@mantine/core';
import Card from "./components/Card"
import {useState} from 'react';
import { IconAdjustments, IconShoppingCart, IconCircleCheck, IconCircleDashed } from '@tabler/icons';

const storeItems = [
{
  id: 100,
  name:"Keyboard",
  src: "keyboard",
  price: 1000
},
{
  id: 101,
  name:"Phone",
  src: "phone",
  price: 1500
},
{
  id: 102,
  name:"Camera",
  src: "camera",
  price: 500
},
{
  id: 103,
  name:"Joystick",
  src: "joystick",
  price: 500
},
{
  id: 104,
  name:"Headphone",
  src: "headphone",
  price: 500
},
{
  id: 105,
  name:"Computer Desk",
  src: "desk",
  price: 500
}
]

function App() {
  let [basketItems, setBasketItems] = useState([]);
  let [searchValue, setSearchValue] = useState("");
  let [opened, setOpened] = useState(false);
  let filteredItems = storeItems.filter(
    (item) => item.name.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0
  );
  // let filteredItems = basketItems.filter((item) => item.name.indexOf("a") >= 0);
  let addToBasket = ({ id, name}) => {
    let basketIndex = basketItems.findIndex((item) => item.id === id);
    if (basketIndex >= 0) {
      let _basketItems = [...basketItems];
      _basketItems[basketIndex].count += 1;
      setBasketItems(_basketItems);
    } 
    else {
    setBasketItems([...basketItems, {id, name, count:1 }]);
    }
  };
  return (
    <Container className="App">

      <Group align= "end" position="center" spacing="xl">
        <Input.Wrapper label="Search">
          <Input 
            value={searchValue}
            onChange={(e)=> setSearchValue(e.target.value)}
          />
        </Input.Wrapper>

        <Button onClick={() => setSearchValue("")}>Delete</Button>
        <Indicator label= {basketItems.length} color="gray" showZero={false} inline size={15} >
          <ActionIcon onClick={() => setOpened(true)} radius={10} color="dark" variant='filled' size="lg">
            <IconShoppingCart size={16} />
          </ActionIcon>
        </Indicator>

      </Group>

      <SimpleGrid cols={3} className="store">
        {filteredItems.map(({ id, name, src }) => {
          return (
            <Card  
              key={name} 
              name={name}
              src={src} 
              onAdd={() => addToBasket({ id, name})}
              
            />
          );
        })}
      </SimpleGrid> 

      
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="My Baskets"
        padding="md"
        size="md"
        >
        
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
          {basketItems.map( ({name, count}, index) => (
            <List.Item key={index}> 
              <Group>
                <div>{name}</div>  
                <Badge variant="light"> {count} </Badge>
              </Group>
            </List.Item> 
          ))}
        </List>   
      </Drawer>

    </Container>
  );
}

export default App;
