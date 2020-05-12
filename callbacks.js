const posts = [
    { title: 'Post 1', body: 'Post 1'},
    { title: 'Post 2', body: 'Post 2'}
];

function getPosts() {
    setTimeout(function() {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1000); //1000 in ms
}

function createPost(post, callback) {
    setTimeout(()=> {
        posts.push(post);
        console.log(posts);
        callback();
    }, 2000)
}
// getPosts();

//since creating took 2 s and by then the document wal already set, we need a better async method and hence we used callbacks
createPost( { title: 'Post 3', body: 'Post 3'}, getPosts );