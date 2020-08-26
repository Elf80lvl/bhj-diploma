//import { response } from "express";

/**
 * Основная функция для совершения запросов
 * на сервер.
 * */

//https://github.com/netology-code/bhj-diploma/blob/master/md/api.md
const createRequest = (options = {
  url: url,
  headers: {},
  data: {email:email, password:password},
  responseType: responseType,
  method: method,
  callback: callback
}) => {
  let errorrr, response, finalXhr;
  
  if (options.method === 'GET') {
    const xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType;
    xhr.withCredentials = true;
    try {
      xhr.open('GET', options.url + `?mail=${options.data.email}&password=${options.data.password}`);
      xhr.send();
      response = xhr.response;
      finalXhr = xhr;
    } catch (error) {
      errorrr = error;
    }
    options.callback(errorrr, response);
    console.log(finalXhr);
    return finalXhr;
    
  } else {
    const xhr = new XMLHttpRequest();
    xhr.responseType = options.responseType;
    xhr.withCredentials = true;
    formData = new FormData();
    formData.append('mail', options.data.email);
    formData.append('password', options.data.password);
    try {
      xhr.open('POST', options.url);
      xhr.send(formData);
      response = xhr.response;
      finalXhr = xhr;
    } catch (error) {
      errorrr = error;
    }
    options.callback(errorrr, response);
    console.log(finalXhr);
    return finalXhr;
  }

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
