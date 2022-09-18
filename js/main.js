// let filters = {
//     'all': function (todos) {
//         return todos
//     },
//     'active': function (todos) {
//         return todos.filter(function(todo){
//             return ! todo.complet
//         })
//     },
//     'complet': function (todos) {
//         return todos.filter(function(todo){
//             return todo.complet
//         })
//     }
// }


var app = new Vue({
    el: '#app',
    data:{
        s: '',
        alldone: false,
        add_value: '',
        todo:[],
        visibility: 'all',
        local: localStorage.getItem('item'),
    },
    methods: {
       'edit': function(event, x){
            event.preventDefault();
            this.todo[x].contenteditable = false;
            this.todo[x].title = event.target.innerText;
       },
      'add_item': function(){
          if(this.add_value !== ""){
                this.todo.push({
                    id: 1,
                    title: this.add_value,
                    complet: false,
                    contenteditable: false,
                })
                this.add_value = '';
            }
      },
      'remove_item': function(x){
        this.todo.splice(x,1)
      },
      'complet_app': function(){
        // if(filters['active'] (this.todo).length == 0){
        //     return filters['complet'](this.todo).filter(function(el){
        //         el.complet = !el.complet;
        //     })
        // }else{
        //     return filters['all'](this.todo).filter(function(el){
        //         if(el.complet == false){
        //             el.complet = !el.complet;
        //         }
        //     })
        // }
      },
      'remove_complet': function () {
        this.todo =  this.todo.filter(function(el){
            return ! el.complet
        })
      }
    },
    computed: {
        'loadlocal' : function (){
            console.log('sads')
            this.todo = JSON.parse(this.local);
        },
       'filters_active': function(){
            localStorage.setItem('item', JSON.stringify(this.todo));  
            if(this.visibility == 'all'){
               return this.todo.map(function(el){
                    return el;
                })
            }else if(this.visibility == 'active'){
                return this.todo.filter(function(el){
                    return ! el.complet;
                })
            }else if(this.visibility == 'complet'){
                return this.todo.filter(function(el){
                    return el.complet;
                })
            }
       },
       'count_active': function(){
        // if(filters['active'] (this.todo).length == 0 && filters['all'] (this.todo).length > 0){
        //     this.alldone = true;
        // }else{
        //     this.alldone = false;
        // }
        let fil = this.todo.filter(function(el){
            return ! el.complet
        })

        return fil.length
       },
    },
})
