export const inc = () => ({ type: 'INC' }); // экшн криейтор (создали экшн)
export const dec = () => ({ type: 'DEC' });
export const rnd = (value) => ({ type: 'RND', value });