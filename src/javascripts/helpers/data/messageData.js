const DragonflyData = [
  {
    dragonflyId: 1,
    Message:'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: "1",
  },
  {
    dragonflyId: 2,
    Message:'buzz buzz',
    timestamp: "2",
    
  },
  {
    dragonflyId: 3,
    Message:'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: "3",

  },
  {
    dragonflyId: 4,
    Message:'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: "4",
  },
  {
    dragonflyId: 5,
    Message:'Wow Im so glad they finally made a place to where I can talk to my peasants buzz buzz',
    timestamp: "5",
  },
];

const dragonFlies = [
  {
     Name:'King Dragonflight',
     dragonflyId: 1,
     Image: '',
  },
  {
     Name:'Queen Dragonflight',
     dragonflyId: 2,
     Image:'',
  },
  {
     Name:'Peasant Dragonfly 2',
     dragonflyId: 3,
     Image:'',
  },
  {
     Name:'Peasant Dragonfly 3',
     dragonflyId: 4,
     Image:'',
  },
  {
     Name:'Peasant Dragonfly 4',
     dragonflyId: 5,
     Image:'',
  },
];

const getDragonFlies = () => dragonFlies;
const getDragonData = () => DragonflyData;

export default { getDragonData, getDragonFlies }