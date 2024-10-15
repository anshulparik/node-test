export const add = (num) => {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum = sum + num[i];
  }
  return sum;
};
