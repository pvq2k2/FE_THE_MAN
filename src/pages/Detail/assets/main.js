const subimga = document.querySelectorAll("#subimga");
subimga.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        e.preventDefault()
        console.log(subimga);
        subimga.forEach(element => {
                element.classList.remove('active')
                btn.classList.add('select')
        });
    })
})