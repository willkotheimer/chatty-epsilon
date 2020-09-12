const twentyMessageLimit = (array) => {
  if (array.length > 20) {
    array.pop();
  }
  return array;
};

export default { twentyMessageLimit };
