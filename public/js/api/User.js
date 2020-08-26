/**
 * Класс User управляет авторизацией, выходом и
 * регистрацией пользователя из приложения
 * Имеет свойство URL, равное '/user'.
 * */
class User {

  static url = '/user';
  /**
   * Устанавливает текущего пользователя в
   * локальном хранилище.
   * */
  static setCurrent(user) {
    localStorage.user = {
      id: user.id,
      name: user.name
    }
  }

  /**
   * Удаляет информацию об авторизованном
   * пользователе из локального хранилища.
   * */
  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  /**
   * Возвращает текущего авторизованного пользователя
   * из локального хранилища
   * */
  static current() {
    if (localStorage.user) {
      return JSON.parse(localStorage.user);
    }
    return undefined; 
  }

  /**
   * Получает информацию о текущем
   * авторизованном пользователе.
   * */
  static fetch( data, callback = f => f ) {
    //return createRequest({})

  }

  /**
   * Производит попытку авторизации.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  static login( data, callback = f => f ) {

  }

  /**
   * Производит попытку регистрации пользователя.
   * После успешной авторизации необходимо
   * сохранить пользователя через метод
   * User.setCurrent.
   * */
  // const data = {
  //   name: 'Vlad',
  //   email: 'test@test.ru',
  //   password: 'abracadabra'
  // }
  static register( data, callback = f => f ) {
    try {
      let xhr = createRequest({
        url: this.url + '/register',
        data: {email: data.email, password: data.password},
        responseType: 'json',
        method: 'PUT'
      });

    } catch(error) {
      let err = error;
    }


    //После регистрации установите в случае успешного ответа полученного пользователя с помощью метода User.setCurrent
    user.setCurrent({
      id: 1,//где взять id
      name: data.name
    });

    return xhr;

  }

  /**
   * Производит выход из приложения. После успешного
   * выхода необходимо вызвать метод User.unsetCurrent
   * */
  static logout( data, callback = f => f ) {

  }
}
