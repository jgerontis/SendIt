// vue


var app = new Vue ( { 
    el: "#app", 
    vuetify: new Vuetify(),
    data:{
        page:"blog",

        new_message_type: "",
        new_message_destinationNum: "",
        new_message_destinationAddr: "",
        new_message_sendTime: Date.now(),
        new_message_body: "",

        new_user_fname: "",
        new_user_lname: "",
        new_user_pNumber: "",
        new_user_emailAddr: "",
        new_user_password: "",

        selected_message_id: "",

        messages = [],

        server_url:"http://localhost:8080"
    }, 
    created:function(){
        this.getMessages();
    },
    methods:{
        
        // message section WOWZA
        getMessages:function(){
            fetch(this.server_url+"/message").then(function(res){
                res.json().then(function(data){
                    app.threads= data;
                })
            });
        },
        getMessage:function(){
            fetch(this.server_url+"/message/"+this.selected_message_id).then(function(res){
                res.json().then(function(data){
                    app.messages = data;
                })
            })
        },

        postMessage:function(){
            var new_message={
                //put the v-model inputs here
            }
            fetch(this.server_url+"message", {
                method: "POST",
                headers: {
					"Content-Type": "application/json"
                },
                body:JSON.stringify(new_message)
            }).then(function() {
                //this is where we would reset input feilds
            });
        },

        deleteMessage:function(message_id){
            fetch(this.server_url+"/message/"+message_id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(function(){
                app.getMessages()})
        },

        


        
        getPosts:function(thread_id){
            fetch(this.server_url+"/message/"+thread_id).then(function(res){
                res.json().then(function(data){
                    app.postings= data;
                    console.log(data)
                })
            }).then(function(){
                app.page="posts"
            });
        },

        createPost:function(thread_id){
            var new_post={
                thread_id:thread_id,
                author:this.new_post_author,
                body:this.new_post_body
            };
            fetch(this.server_url+"/message",{
                method: "POST",
				headers: {
					"Content-Type": "application/json"
                },
                body:JSON.stringify(new_post)
            }).then(function() {
                app.getPosts(thread_id);
                app.new_post_author="";
                app.new_post_body="";

            });
        },
        deletePost:function(post){
            fetch(this.server_url+"/post/"+post.thread_id+"/"+post._id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(function(){
                app.getPosts(post.thread_id)})
        }


    },
    computed:{
        sorted_threads:function(){
            if(this.selected_category == "all"){
                return this.threads;
            } else {
                var sorted_threads = this.threads.filter(function(thread){
                    return thread.category == app.selected_category;
                });
                return sorted_threads;
            }
        }
    }
});