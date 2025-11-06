
export interface ClienteDTO {
    idCliente?: number, // ID do cliente (? indica um parâmetro opcional)
    nome: string, // nome do cliente
    cpf: string, // cpf do cliente
    nascimento: string, // nascimento do cliente
    telefone: string, // telefone do cliente
    email: string, // email do cliente
    situacao?: boolean // situação do cliente
}