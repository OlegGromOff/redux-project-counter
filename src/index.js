import { createStore } from 'redux'; //подключили функцию из redux

const reducer = (state = 0, action) => { // state по дефолту сделали 0
  switch (action.type) { //проверяеи если тип екшена равен INC или DEC
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

const inc = () => { // экшн криейтор (создали экшн)
  return {
    type: 'INC'
  }
}


const store = createStore(reducer); // создали store при помощи функции createStore

document.getElementById('inc').addEventListener('click', () => {
  store.dispatch(inc()) //передаем в store action type: 'INC' с помощью екшн криейтора
});
document.getElementById('dec').addEventListener('click', () => {
  store.dispatch({ type: 'DEC' }) //передаем в store action type: 'DEC'
});
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  store.dispatch({ type: 'RND', value }) //передаем в store action type: 'DEC'
});


const update = () => {
  document.getElementById('counter').textContent = store.getState(); // передадим в поле counter значение нашего текущего стейта
}

store.subscribe(() => { // функция подписки, будет вызываться каждый раз когда будет изменяться store
  update(); //вызываем функцию update
})


// console.log(store.getState()); // выведем текущий стейт нашего стора

// store.dispatch({ type: 'INC' }); // запускаем reducer с тем state что есть в store и с екшеном который тут передаем 
// console.log(store.getState());



