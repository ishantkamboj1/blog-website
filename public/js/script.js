
document.addEventListener('DOMContentLoaded', (event) => {
    const buttons = document.querySelectorAll('.read-more-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const blogId = this.getAttribute('data-blog-id');
            const url = '../blogs/' + blogId;
            window.location.href = url;
        });
    });
});