-- CREATE DATABASE
CREATE DATABASE sae_ge;


-- TABLE ROLE
DROP TABLE sae_ge.role IF EXIST;
CREATE TABLE sae_ge.role
(
  'idRole' SERIAL PRIMARY KEY,
  'nom' TEXT
);

-- TABLE COMPTE
DROP TABLE sae_ge.compte IF EXIST;
CREATE TABLE sae_ge.compte 
(
  'idCompte' SERIAL PRIMARY KEY, 
  'idRole' SERIAL,
  'nom' TEXT,
  'prenom' TEXT,
  'login' TEXT,
  'password' TEXT,
  'email' TEXT,
  
  CONSTRAINT fk_role FOREIGN KEY(idrole) REFERENCES sae_ge.role(idrole)
);

-- TABLE PHOTO
DROP TABLE sae_ge.photo IF EXIST;
CREATE TABLE sae_ge.photo 
(
  'idPhoto' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'nom' TEXT,
  'url' TEXT,
  'partager' BOOLEAN,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES sae_ge.compte(idcompte)
);

-- TABLE TEMPLATES
DROP TABLE sae_ge.templates IF EXIST;
CREATE TABLE sae_ge.templates
(
  'idTemplate' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  /* TODO: add other attr */
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES sae_ge.compte(idcompte)
);

-- TABLE HISTORIQUE
DROP TABLE sae_ge.historique IF EXIST;
CREATE TABLE sae_ge.historique
(
  'idHistorique' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'idTemplate' SERIAL,
  /* TODO: add other attr */
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES sae_ge.compte(idcompte),
  CONSTRAINT fk_template FOREIGN KEY(idtemplate) REFERENCES sae_ge.compte(idtemplate)
);

-- TABLE CATEGORIE
DROP TABLE sae_ge.categorie IF EXIST;
CREATE TABLE sae_ge.categorie
(
  'idCategorie' SERIAL PRIMARY KEY,
  'nom' TEXT
);

-- TABLE EXERCICE
DROP TABLE sae_ge.exercices IF EXIST;
CREATE TABLE sae_ge.exercices
(
  'idExercice' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'idCategorie' SERIAL,
  'nom' TEXT,
  'data' TEXT,

  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES sae_ge.compte(idcompte),
  CONSTRAINT fk_categorie FOREIGN KEY(idcategorie) REFERENCES sae_ge.categorie(idcategorie)
);
