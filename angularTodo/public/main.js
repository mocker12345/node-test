var angularTodo = angular.module('angularTodo', []);
angularTodo.service('todo', function () {
  return [
    'GET /todos',
    'POST /create',
    'DELETE /todos/:todo'
  ]
});
angularTodo.factory('api', function ($q, $http, todo) {
  new Apisdk(todo, {
    host: '/api',
    promise: $q,
    http: request => {
      if (request.method === 'GET' && request.data) {
        let queryString = [];
        for (let i in request.data) {
          let value = request.data[i];
          if (value === null) value = '';
          if (value === void 0) continue;
          queryString.push(encodeURIComponent(i) + '=' + encodeURIComponent(value));
        }
        if (queryString.length) {
          if (!~request.url.indexOf('?')) request.url += '?';
          if (!/[?&]$/.test(request.url)) request.url += '&';
          request.url += queryString.join('&');
        }
        delete request.data;
      }
      // Angular 默认给所有请求加上 application/json，对 FormData 单独处理
      if (request.data instanceof FormData) {
        request.headers = {
          'Content-Type': undefined
        };
      }
      return $http(request).then(response => response.data);
    }
  });
});
angularTodo.controller('mainController', function ($scope, api) {
  api.todos.get().then(function (res) {
    $scope.todos = res;
    console.log(res);
  }, function (err) {
    console.log(err);
  });
  $scope.createTodo = function () {
    $scope.formData = {};
    api.create.post($scope.formData).then(function (res) {
      $scope.todos = res;
      console.log(res);
    }, function (err) {
      console.log(err);
    })
  }
});