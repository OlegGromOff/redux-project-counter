const reducer = (state = 0, action) => { // state по дефолту сделали 0
  switch (action.type) { //проверяем если тип екшена равен INC или DEC
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    case 'RND':
      return state + action.value;
    default:
      return state; // если неизвестный тип екшена
  }

}

export default reducer;