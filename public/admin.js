
// Your Code Here
let root = document.querySelector('#root')

const updateQuantity = async () => {
    let res = await fetch('http://localhost:3001/listBooks')
    let books = await res.json()

    let ul = document.createElement('ul')

    books.forEach(ube => {
        let li = document.createElement('li')

        let input = document.createElement('input')
        input.type = 'text'
        input.value = ube.quantity

        let btn = document.createElement('button')
        btn.textContent = 'Save'
        btn.addEventListener('click', () => {
            fetch('http://localhost:3001/updateBook', {
                method: 'PATCH',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({'id': ube.id, 'quantity': `${input.value}`})
            })
        })

        let p = document.createElement('p')
        p.textContent = ube.title
        
        li.append(p, input, btn)
        ul.append(li)
    })

    root.append(ul)
}

updateQuantity()