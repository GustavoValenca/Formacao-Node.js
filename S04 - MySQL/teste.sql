CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome, email, idade) VALUES(
    "Raquel",
    "raquel@gmail.com",
    29
);

INSERT INTO usuarios(idade, email, nome) VALUES(
    89,
    "raquel@gmail.com",
    "Pedro"
);

DELETE FROM usuarios WHERE idade = 89;

UPDATE usuarios SET idade = 25 WHERE nome = "Raquel";