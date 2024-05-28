export const formatNumber = (x='') => {
  if(x === null || x === '') {
    return '';
  } 
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};


