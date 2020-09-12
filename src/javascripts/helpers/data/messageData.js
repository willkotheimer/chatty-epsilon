const DragonflyData = [
  {
    dragonflyId: 0,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: '09/10/2020 @ 2:00am (UTC)'
  },
  {
    dragonflyId: 1,
    Message: 'buzz buzz',
    timestamp: '09/10/2020 @ 2:01am (UTC)'
  },
  {
    dragonflyId: 2,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: '09/10/2020 @ 2:03am (UTC)'
  },
  {
    dragonflyId: 3,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: '09/10/2020 @ 2:04am (UTC)'
  },
  {
    dragonflyId: 4,
    Message: 'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: '09/10/2020 @ 2:05am (UTC)'
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

const findDragon = (index) => dragonFlies.find((o) => o.dragonflyId === index);

export default { getDragonData, getDragonFlies, findDragon };
