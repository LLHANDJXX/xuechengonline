onload = function () {
    const search = document.querySelector('#search')
    const initValue = search.value
    document.addEventListener('keyup', function (e) {
        if (e && e.code && e.code === 'KeyS') {
            search.focus()
        }
    })

    search.onfocus = function () {
        if (this.value && this.value === initValue) {
            this.value = ''
        }
        this.style.color = '#333333'
    }

    search.addEventListener('blur', function () {

        if (!this.value) {
            this.value = initValue
            this.style.color = '#989898'
        }
    })
}