// import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import { useState } from 'react';
import { Container, Grid, Stack, Button, Input, Textarea, Checkbox } from '@mantine/core';


let arr = [
  {
    id: 1,
    title: "Mountain 1",
    par: "Açıklama 1",
  },
  {
    id: 2,
    title: "Mountain 2",
    par: "Açıklama 2",
  },
  {
    id: 3,
    title: "Mountain 3",
    par: "Açıklama 3",
  },
  {
    id: 4,
    title: "Mountain 4",
    par: "Açıklama 4",
  },
  {
    id: 5,
    title: "Mountain 5",
    par: "Açıklama 5",
  },
  {
    id: 6,
    title: "Mountain 6",
    par: "Açıklama 6",
  },
]

const App = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [list, setList] = useState(arr);
  const [val, setVal] = useState([]);
  const click = () => {
    if (title !== "" && paragraph !== "") {
      setTitle("");
      setParagraph("");
      setList([
        ...list,
        {
          id: 5,
          title,
          par: paragraph,
        },
      ]);
    }
  };

  return (
    <Container>
      <h1> Create cards app </h1>

      <Stack>

        <Input.Wrapper label = "Title"  withAsterisk>
            <Input 
              placeholder = "Please give a title here!" 
              value = {title} 
              onChange = {(e) => setTitle(e.target.value)} 
            />
        </Input.Wrapper>

        <Textarea
          placeholder = "Paragraph..."
          label = "Paragraph"
          value = {paragraph}
          onChange = {(e) => setParagraph(e.target.value)} 
        />
        
        <Button 
          variant="outline" 
          color="submission" 
          radius="md" 
          onClick = {click}
        >
            Create
        </Button>

      </Stack>


      <h2>Cards: </h2>

      <Grid>
        {list.map(({ par, title }, i) => (
          <Grid.Col span={4} key={`index ${i}`}>
            <Card
              par={par}
              title={title}
              i={i}
              click={() => {
                let copyList = [...list];
                copyList.splice(i, 1);
                setList(copyList);
              }}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Container>
  );
}

export default App;
