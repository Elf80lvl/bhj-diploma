//import { response } from "express";

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

//https://github.com/netology-code/bhj-diploma/blob/master/md/api.md
const createRequest = (options = {}) => {
  let xhr = new XMLHttpRequest();
  let formData = new formData();

  xhr.responseType = options.responseType;
  xhr.withCredentials = true;

  //При параметре method = GET, данные из объекта data должны передаваться в строке адреса
  if (options.method === 'GET') {
    options.url = options.url + '?';
    for (let elem in options.data) {
      options.url = options.url + `${elem}=${options.data[elem]}&`;
    }
    //При параметре method отличном от GET, данные из объекта data должны передаваться через объект FormData
  } else {
    for (let elem in options.data) {
      formData.append(elem, options.data[elem]);
    }
  }

  //В случае успешного выполнения кода, необходимо вызвать функцию, заданную в callback и передать туда данные
  xhr.onload = () => {
    let response = xhr.response;
    options.callback(null, response);
    console.log(response);
  }

  xhr.open(options.method, options.url);

  //В случае, если в процессе выполнения функции возникают ошибки, вам необходимо передать эту ошибку в параметр err
  try {
    xhr.send(formData);
  } catch(err) {
    callback(err);
  }
  
  return xhr;

};







const xhr = createRequest({
  url: 'http://localhost:8000', // адрес
  headers: { // произвольные заголовки, могут отсутствовать
    'Content-type': 'application/json' 
  },
  data: { // произвольные данные, могут отсутствовать
    email: 'demo@demo',
    password: 'demo'
  },
  responseType: 'json', // формат, в котором необходимо выдать результат
  method: 'GET', // метод запроса
  /*
    Функция, которая сработает после запроса.
    Если в процессе запроса произойдёт ошибка, её объект
    должен быть в параметре err.
    Если в запросе есть данные, они должны быть переданы в response.
  */
  callback: (err, response) => {
    console.log( 'Ошибка, если есть', err );
    console.log( 'Данные, если нет ошибки', response );
  }
})

// xhr();
