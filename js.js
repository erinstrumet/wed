document.querySelectorAll(' .nav-link') .forEach(link => {
    link.addEventListener('click',function(e){
        e.preventDefault();
        const targen = document.querySelector(this.getAttribute ('href'));
        if (target) {
            target.scrollintoview({behavior:'smooth'});
        }
    });
});