const productItemBtn = document.querySelectorAll('.icon-btn');

productItemBtn.forEach((item) => {
    item.addEventListener('click', function(e) {
        e.preventDefault();
        this.classList.toggle("active")
    })
})