function validateWeight() {
  let weight = document.data.weight.value;

  if (isNaN(weight) || weight < 1) {
    ;
    return false;
  } else {
    
    return weight;
  };
};
