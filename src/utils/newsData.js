import { v4 as uuidv4 } from 'uuid';

const newsData = [
    {
        id: uuidv4(),
        name: 'About cats',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: '31.01.2022'
    },
    {
        id: uuidv4(),
        name: 'Cars',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        date: '15.09.2021'
    },
    {
        id: uuidv4(),
        name: 'Education time',
        description: 'Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        date: '30.01.2022'
    },
    {
        id: uuidv4(),
        name: 'Todo application',
        description: 'This was a great project from NW',
        date: '1.12.2021'
    },
    {
        id: uuidv4(),
        name: 'Non of you',
        description: 'Nor is there anyone who loves or pursues or desires to obtain pain of itself',
        date: '30.01.2022'
    }
];
export default newsData;