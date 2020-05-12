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

function createPost(post) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            posts.push(post);
            console.log(posts);
            const error = false;
            if(!error) {
                resolve();
            } else {
                reject("Error");
            }
        }, 2000)
    });
}

// createPost( { title: 'Post 3', body: 'Post 3'})
//     .then(getPosts)
//     .catch(err => console.log(err));


//Async / Await 
// async function init() {
//     await createPost( { title: 'Post 3', body: 'Post 3'});
//     getPosts();
// }

// init();

// Aync with Fetch
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users'); //instead of using then
    const data = await resp.json();
    console.log(data);
}
 
fetchUsers();

//Promise.all
// const promise1 = Promise.resolve("hello");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json());

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values));

