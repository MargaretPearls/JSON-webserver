// Javascript for details.html

const id = new URLSearchParams(window.location.search).get(`id`);
// const id = new URLSearchParams(window.location.search).get(`name`);
const container = document.querySelector('.details');
const deleteBtn = document.querySelector('.delete');

const renderDetails = async () => {
    console.log('THIS IS THE id')
    console.log(id)
    const res = await fetch('http://localhost:4040/posts/' + id)
    const post = await res.json();
    // console.log(post);

    const template = `
    <h1>${post.title}</h1>
    <p>${post.body}</p>
    `

    container.innerHTML = template;
}

deleteBtn.addEventListener('click', async (e) => {
    const res = await fetch('http://localhost:4040/posts/' + id, {
        method: 'DELETE'
    })
    window.location.replace('../html/index.html');
})

window.addEventListener('DOMContentLoaded', () => renderDetails());