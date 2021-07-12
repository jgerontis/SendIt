// vue


var app = new Vue ( { 
    el: "#app", 
    vuetify: new Vuetify(),
    data:{
        page:"blog",
        drawer:false,
        selected_category:"all",
        categories:[
            "all",
            "clothing",
            "hunting",
            "books",
            "cards",
            "coins",
            "keychains",
            "comic books",
            "misc.",
        ],
        threads:[],

        postings:[],

        //for a new thread
        new_name:"",
        new_author:"",
        new_description:"",
        new_category:"all",

        //for a new post on a thread
        new_post_body:"",
        new_post_author:"",

        server_url:"http://forum2021.codeschool.cloud"
    }, 
    created:function(){
        this.getThreads();
    },
    methods:{
        getThreads:function(){
            fetch(this.server_url+"/thread").then(function(res){
                res.json().then(function(data){
                    app.threads= data;
                })
            });
        },

        createThread:function(){
            var new_thread={
                name:this.new_name,
                author:this.new_author,
                description:this.new_description,
                category:this.new_category,
            };
            fetch(this.server_url+"/thread",{
                method: "POST",
				headers: {
					"Content-Type": "application/json"
                },
                body:JSON.stringify(new_thread)
            }).then(function() {
                app.getThreads();
                app.new_name="";
                app.new_author="";
                app.category="all";
                app.new_description="";
                app.page="blog";

            });
        },
        deleteThread:function(thread_id){
            fetch(this.server_url+"/thread/"+thread_id,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(function(){
                app.getThreads()})
        },
        
        getPosts:function(thread_id){
            fetch(this.server_url+"/thread/"+thread_id).then(function(res){
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
            fetch(this.server_url+"/post",{
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