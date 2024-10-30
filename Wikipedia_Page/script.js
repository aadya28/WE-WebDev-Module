document.addEventListener('DOMContentLoaded', () => {
    const toc = document.querySelector('#table-of-contents ul');
    const headings = document.querySelectorAll('h1, h2');
    let headingIndex = 0;

    headings.forEach((heading) => {
        if (heading.closest('#table-of-contents')) {
            return;
        }
        
        const id = `heading-${headingIndex++}`;
        heading.id = id;

        const li = document.createElement('li');
        if (heading.tagName === 'H2') {
            li.style.marginLeft = '20px'; 
        }

        const a = document.createElement('a');
        a.href = `#${id}`;
        a.textContent = heading.textContent;

        li.appendChild(a);
        toc.appendChild(li);
    });
});
