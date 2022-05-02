1ª -parte
-Monte uma query que exiba seu nome na tela;

SELECT 'Arthur';

-Monte uma query que exiba seu nome, sobrenome, cidade natal e idade na tela;

SELECT 'Arthur', 'Victoriano', 'Rio de Janeiro', 27;

-Monte uma query que, além de exibir todas as informações já mencionadas, identifique cada coluna usando o AS , que é chamado de alias na linguagem SQL 

SELECT 'Arthur' AS Nome, 'Victoriano' AS Sobrenome, 'Rio de Janeiro' AS
'Cidade Natal', 27 AS Idade;

-Qual é o resultado de 13 * 8 ? Descubra usando apenas o SELECT

SELECT 13*8;

-Monte uma query que exiba a data e hora atuais. Dê a essa coluna o nome "Data Atual".

SELECT now() as 'Data Atual';



2ª -parte

- Escreva uma query que selecione todas as colunas da tabela city ;

SELECT * FROM sakila.city;

- Escreva uma query que exiba apenas as colunas first_name e last_name da tabela customer

SELECT first_name, last_name FROM sakila.customer;

- Escreva uma query que exiba todas as colunas da tabela rental

SELECT * FROM sakila.rental;

- Escreva uma query que exiba o título, a descrição e a data de lançamento dos filmes registrados na tabela film

SELECT title, description, release_year FROM sakila.film;

- Utilize o SELECT para explorar todas as tabelas do banco de dados

SELECT * FROM sakila.<tabelas>;



3ª -parte

- Na tabela sakila.film , monte uma query que exiba o título e o ano de lançamento dos 
filmes em uma coluna e dê a ela o nome Lançamento do Filme .

SELECT CONCAT(title, ' ', release_year) AS 'Lançamento do Filme' FROM sakila.film;

- Na tabela sakila.film , crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna.
 Dê a ela o nome Classificação 

 SELECT CONCAT(title, ' ', rating) AS Classificação FROM sakila.film;

 - Na tabela sakila.address , monte uma query que exiba a rua e distrito de cada registro 
 em uma coluna apenas, e dê a ela o nome Endereço


 SELECT CONCAT(address, ' ', district) AS Endereço FROM sakila.address;



 4ª -parte

 - Monte uma query para encontrar pares únicos de nomes e idades

 SELECT DISTINCT Nome, Idade FROM Escola.Estudantes;

 - Monte uma query para encontrar somente os nomes únicos.

 SELECT DISTINCT Nome FROM Escola.Estudantes;

 - Monte uma query para encontrar somente as idades únicas.

 SELECT DISTINCT Idade FROM Escola.Estudantes;



 5ª -parte

 - Quantas senhas temos cadastradas nessa tabela

 SELECT COUNT(password) FROM sakila.staff;

 - Quantas pessoas temos no total trabalhando para nossa empresa

 SELECT COUNT(*) FROM sakila.staff;

- Quantos emails temos cadastradas nessa tabela

SELECT COUNT(email) FROM sakila.staff;


