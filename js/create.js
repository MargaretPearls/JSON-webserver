// Javascript for create.html

const form = document.querySelector('form');

const createPost = async(e) => {
     e.preventDefault();

     const doc = {
        title: form.title.value,
        body: form.body.value,
        likes:0
     }
    //  console.log(doc)
    await fetch('http://localhost:4040/posts', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json'}
    });

    window.location.replace('../html/index.html');
}

form.addEventListener('submit', createPost);