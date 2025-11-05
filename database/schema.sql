--Materiais Educativos
CREATE TABLE Materiais (
    id SERIAL PRIMARY KEY,                          
    nome VARCHAR(100) NOT NULL,                     
    cor_lixeira VARCHAR(50),                        
    exemplos_descarte TEXT,                         
    tempo_degradacao VARCHAR(100),                  
    curiosidade TEXT,                               
    imagem_url VARCHAR(255)                         
);

-- Estrutura da tabela de Ecopontos
CREATE TABLE Ecopontos (
    id SERIAL PRIMARY KEY,                          
    nome VARCHAR(255) NOT NULL,                     
    endereco TEXT NOT NULL,                         
    latitude DECIMAL(10, 8) NOT NULL,               
    longitude DECIMAL(11, 8) NOT NULL,              
    
    materiais_aceitos TEXT                          
);

--Dados de exemplo para testes futuros:
INSERT INTO Materiais (nome, cor_lixeira, tempo_degradacao, curiosidade) 
VALUES 
('Plástico PET', 'Vermelha', 'Até 400 anos', 'A primeira garrafa PET fabricada ainda não desapareceu da natureza.');

INSERT INTO Ecopontos (nome, endereco, latitude, longitude, materiais_aceitos) 
VALUES 
('Ecoponto Central', 'Rua das Flores, 123, Centro', -3.73186, -38.52179, 'Plástico, Papel, Metal');