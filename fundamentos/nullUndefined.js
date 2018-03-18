let valor // não inicializado
console.log(valor)  

valor = null // ausência de valor 
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined
console.log(!!produto.preco)
delete produto.preco
console.log(produto)

produto.preco = null // pode ser usado, como por exmplo quando se quer deixar um produto sem preço

