const DragonflyData = [
  {
    dragonflyId: 1,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: 'May 24, 1993, 4:22 pm'
  },
  {
    dragonflyId: 2,
    Message: 'buzz buzz',
    timestamp: 'May 24, 1993, 4:25 pm'
  },
  {
    dragonflyId: 3,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: 'May 24, 1993, 5:22 pm'
  },
  {
    dragonflyId: 4,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: 'May 24, 1993, 6:27 pm'
  },
  {
    dragonflyId: 5,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: 'May 24, 1993, 9:30 pm'
  },
];

const dragonFlies = [
  {
    Name: 'King Dragonflight',
    dragonflyId: 1,
    Image: './documentation/kingDragon.png'
  },
  {
    Name: 'Queen Dragonflight',
    dragonflyId: 2,
    Image: './documentation/queendragonfly.png'
  },
  {
    Name: 'Peasant Dragonfly 1',
    dragonflyId: 3,
    Image: './documentation/peasant1.png'
  },
  {
    Name: 'Peasant Dragonfly 2',
    dragonflyId: 4,
    Image: './documentation/peasant2.png'
  },
  {
    Name: 'Peasant Dragonfly 3',
    dragonflyId: 5,
    Image: './documentation/peasant3.png'
  },
];

const getDragonFlies = () => dragonFlies;
const getDragonData = () => DragonflyData;

const findDragon = (index) => dragonFlies.find((o) => o.dragonflyId === index);

export default { getDragonData, getDragonFlies, findDragon };
