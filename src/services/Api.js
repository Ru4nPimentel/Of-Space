export function POSTS_GET() {
  return {
    url: `https://jsonplaceholder.typicode.com/posts`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function USER_GET(id) {
  return {
    url: `https://jsonplaceholder.typicode.com/users?id=${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}

export function COMMENTS_GET(id) {
  return {
    url: `https://jsonplaceholder.typicode.com/comments?postId=${id}`,
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    },
  };
}
