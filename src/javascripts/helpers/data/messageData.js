const DragonflyData = [
  {
    messageId: 0,
    dragonflyId: 0,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    prettytimestamp: 'May 24 1993, 4:22 pm',
    timestamp: 1600133129920
  },
  {
    messageId: 1,
    dragonflyId: 1,
    Message: 'Dont talk to them like that buzz buzz',
    prettytimestamp: 'May 24 1993, 4:25 pm',
    timestamp: 1600133129917

  },
  {
    messageId: 2,
    dragonflyId: 2,
    Message: 'Some King, he doesnt even have a crown. BUZZ BUZZ',
    prettytimestamp: 'May 24 1993, 5:22 pm',
    timestamp: 1600133088204
  },
  {
    messageId: 3,
    dragonflyId: 3,
    Message: 'Wow @peasant1 I dont think you can say that.... buzz buzz.',
    prettytimestamp: 'May 24 1993, 6:27 pm',
    timestamp: 600133000336

  },
  {
    messageId: 4,
    dragonflyId: 4,
    Message: 'Im scared can I remove myself from this chat?.....buzz buzz..... please.. buzz buzz.',
    prettytimestamp: 'May 24 1993, 9:30 pm',
    timestamp: 1600133000003
  },
];

const dragonFlies = [
  {
    Name: 'King Dragonflight',
    dragonflyId: 0,
    Image: './documentation/kingDragon.png'
  },
  {
    Name: 'Queen Dragonflight',
    dragonflyId: 1,
    Image: './documentation/queendragonfly.png'
  },
  {
    Name: 'Peasant Dragonfly 1',
    dragonflyId: 2,
    Image: './documentation/peasant1.png'
  },
  {
    Name: 'Peasant Dragonfly 2',
    dragonflyId: 3,
    Image: './documentation/peasant2.png'
  },
  {
    Name: 'Peasant Dragonfly 3',
    dragonflyId: 4,
    Image: './documentation/peasant3.png'
  },
];

const getDragonFlies = () => dragonFlies;
const getDragonData = () => DragonflyData;

export default { getDragonData, getDragonFlies };
