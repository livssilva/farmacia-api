CREATE TABLE Clientes ( 
    id_cliente INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cpf VARCHAR (13) UNIQUE NOT NULL,   
    nome VARCHAR (50) NOT NULL,
    nascimento DATE NOT NULL,
    telefone VARCHAR (20) NOT NULL,
    email VARCHAR (70) NOT NULL
);

CREATE TABLE Medicamentos ( 
    id_medicamento INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nome VARCHAR (50) NOT NULL,     
    principioAtivo VARCHAR (50) NOT NULL,
    dataValidade DATE NOT NULL,
    preco DECIMAL (10,2) NOT NULL
);