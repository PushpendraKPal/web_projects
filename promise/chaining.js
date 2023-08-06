const posts = [];
let lastActivityTime = null;

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      console.log('User last activity time updated:', lastActivityTime);
      resolve();
    }, 1000);
  });
}

function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      posts.push(post);
      console.log('Post created:', post);
      resolve();
    }, 1000);
  });
}

function deleteLastPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const deletedPost = posts.pop();
      console.log('Post deleted:', deletedPost);
      resolve();
    }, 1000);
  });
}


Promise.all([
  createPost({ title: 'Post 1' }),
  updateLastUserActivityTime()
  ])
  .then(() => {
    console.log('Last Activity Time:', lastActivityTime);
  })
  .then(()=>{
    Promise.all([createPost({ title: 'Post 2' }),
    updateLastUserActivityTime()])
  })
  .then(()=>{
    Promise.all([createPost({ title: 'Post 3' }),
    updateLastUserActivityTime()])
  })
  .then(()=>{
    console.log('Last Activity Time:', lastActivityTime)
  })
  .then(()=>{
    return deleteLastPost()
  })
  .then(() => {
    console.log('Post deletion complete');
    console.log('Updated Posts:', posts);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
