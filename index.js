const { ClientRequest } = require('http')

const Client = require('pg').Client
const cliente = new Client({
    user: "postgres",
    password: "adimin",
    host: "127.0.0.1",
    port: 5432,
    database: "salgadinhos"
})

getprodutos()

async function getprodutos(){
    try{
    console.log('Iniciando conexão.')
    await cliente.connect()
    console.log('Conexão bem sucedida')
    const resultado = await cliente.query("select* from produtos")
    console.table(resultado.rows)
}

catch(ex){
console.log("Ocorreu erro no getprodutos. Erro: "+ ex)

}

finally{
    await cliente.end()
    console.log("Desconectando do banco de dados...")
}}