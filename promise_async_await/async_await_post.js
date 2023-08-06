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

async function main() {
  try {
    await Promise.all([
      createPost({ title: 'Post 1' }),
      updateLastUserActivityTime(),
    ]);

    console.log('Last Activity Time:', lastActivityTime);

    await Promise.all([
      createPost({ title: 'Post 2' }),
      updateLastUserActivityTime(),
    ]);

    await Promise.all([
      createPost({ title: 'Post 3' }),
      updateLastUserActivityTime(),
    ]);

    console.log('Last Activity Time:', lastActivityTime);

    await deleteLastPost();

    console.log('Post deletion complete');
    console.log('Updated Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
