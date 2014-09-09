
    
app.factory('Todos', function($http){
    return {
        // get, create, delete will return promise objects
        get: function(){
            return $http.get('/api/todos');
        },
        
        create: function(todoData){
            return $http.post('/api/todos', todoData);
        },
        
        delete: function(id){
            return $http.delete('/api/todos/' + id);
        }
    }
});