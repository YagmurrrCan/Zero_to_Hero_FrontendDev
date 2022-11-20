import './Card.css'
import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

// const Card = ({title, p , val, i})  => {
//     return (
//     <div className='Card'> 
//         <h6>{title}</h6>
//         <b>{i}</b>
//         <p>{p}</p>
//         {val > 20 ? <div>İleri düzey</div> : <div>Başlangıç</div> }
//         {val >20 && i===0 && <div>SADECE BU İLERİ SEVİYE.</div>} 

//         <p>Ders {val}</p>
//         <button>Read More...</button>
//     </div>
//     )
// }

//export default Card;

const CardComponent = ({title, p , val, i})  => {
    return (
        <Card shadow="sm" p="lg" radius="md" withBorder>
        <Card.Section>
        <Image
            src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80"
            height={160}
            alt="Norway"
        />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
        <Text weight={500}>{title}</Text>
        <Badge color="pink" variant="light">
            On Sale
        </Badge>
        </Group>

        <Text size="sm" color="dimmed">
        <p>p</p>
        </Text>

        <Button variant="light" color="blue" fullWidth mt="md" radius="md">
        Button
        </Button>
    </Card>
    )
}

export default CardComponent;