const apiURL = 'https://wf-challenge-d6haqugtoo.herokuapp.com/api/v1/posts';

const getPosts = async () => {
  let requestURL = apiURL;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'GET',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
    });
    if (!response.ok)
      throw new Error('Error');

    output = await response.json();


  } catch (err) {
    output = err;
  }

  return output;
}

const getPost = async (id:any) => {
  let requestURL = apiURL+'/'+id;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'GET',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
    });
    if (!response.ok)
      throw new Error('Error');

    output = await response.json();


  } catch (err) {
    output = err;
  }

  return output;
}

const createPost = async (post:object) => {
  let requestURL = apiURL;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'POST',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: JSON.stringify(post)
    });
    if (!response.ok)
      throw new Error('Error');

    output = await response.json();


  } catch (err) {
    output = err;
  }

  return output;
}

const updatePost = async (id:any, post:object) => {
  let requestURL = apiURL+'/'+id;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'PUT',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
      body: JSON.stringify(post)
    });
    if (!response.ok)
      throw new Error('Error');

    output = await response.json();


  } catch (err) {
    output = err;
  }

  return output;
}

const deletePost = async(id:any) => {
  let requestURL = apiURL+'/'+id;
  let output;

  try {
    let response = await fetch(requestURL, {
      method: 'DELETE',
      headers: new Headers({
        "Content-Type": "application/json",
        "Accept": "application/json",
      }),
    });
    if (!response.ok)
      throw new Error('Error');

    output = await response.json();


  } catch (err) {
    output = err;
  }

  return output;
}

export { getPosts, getPost, createPost, updatePost, deletePost }
