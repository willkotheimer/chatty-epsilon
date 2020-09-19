import Dragons from './messageData';

const findDragon = (index) => Dragons.getDragonFlies().find((o) => o.dragonflyId === index);
const findByTS = (ts) => Dragons.getDragonData().find((o) => o.timestamp === ts);

export default { findByTS, findDragon };
