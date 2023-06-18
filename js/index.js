//// Javascript for food html
const container = document.querySelector('.blogs');
const searchForm = document.querySelector('.search');

const renderPosts = async (term) => {
    let uri = 'http://localhost:4040/posts?_sort=likes&_order=desc';
    
    if (term) {
        uri += `&q=${term}`;
    }
    
    const res = await fetch(uri);
    const posts = await res.json();
    
    let template = '';
    posts.forEach(post => {
        template += `
        <div class="post">
            <h2>${post.title}</h2>
            <p><small>${post.likes} likes</small></p>
            <p>${post.body?.slice(0, 20)}<a href="../html/details.html?id=${post.id}"> read more...</a></p>
            <button value='update'>UPDATE<a href="../html/details.html?id=${post.id}"></a></button>
            <button value='delete'>DELETE<a href="../html/details.html?id=${post.id}"></a></button>
        </div>
        `
        
    })

    container.innerHTML = template;
}

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    renderPosts(searchForm.term.value.trim());
})

window.addEventListener('DOMContentLoaded', () => renderPosts());