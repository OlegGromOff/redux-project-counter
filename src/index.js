import { createStore } from 'redux'; //подключили функцию из redux
import reducer from './reducer';
import { inc, dec, rnd } from './actions';

const store = createStore(reducer); // создали store при помощи функции createStore
const { dispatch } = store;

const incDispatch = () => dispatch(inc()); // создал функцию передающую action creator inc в store через dispatch
const decDispatch = () => dispatch(dec());
const rndDispatch = (value) => dispatch(rnd(value));

document.getElementById('inc').addEventListener('click', incDispatch); //с помощью dispatch передаем в store action type: 'INC' используя екшн криейтор
document.getElementById('dec').addEventListener('click', decDispatch); //передаем в store action type: 'DEC'
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value) //передаем в store action type: 'RND'
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



