var myApp = angular.module('myApp', []);

function mainController($scope, $http){
    $scope.formData = {};
    
    // get all todos and show them
    $http.get('/api/todos')
        .success(function(data){
            $scope.todos = data; // bind json from api to $scope.todos
            console.log('all todos: ' + data);
        })
        .error(function(data){
            console.log('Error: ' + data);
        });
    
    // when submitting post req to route, send text to node api    
    $scope.createTodo = function(){
        $http.post('api/todos', $scope.formData)
            .success(function(data){
                $('input').val('');
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data){
                console.log('Error: ' + data);
            });
    };
    
    // delete todo after checking it
    $scope.deleteTodo = function(id){
        $http.delete('/api/todos/' + id)
            .success(function(data){
                $scope.todos = data;
                console.log('delete ' + data);
            })
            .error(function(data){
                console.log('Error: ' + data);
            });
    };
}
