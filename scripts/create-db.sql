-- CREATE DATABASE
CREATE DATABASE sae_ge;
USE sae_ge;


-- TABLE ROLE
DROP TABLE public.role IF EXIST;
CREATE TABLE public.role
(
  'idRole' SERIAL PRIMARY KEY,
  'nom' TEXT
);

-- TABLE COMPTE
DROP TABLE public.compte IF EXIST;
CREATE TABLE public.compte 
(
  'idCompte' SERIAL PRIMARY KEY, 
  'idRole' SERIAL,
  'nom' TEXT,
  'prenom' TEXT,
  'login' TEXT,
  'password' TEXT,
  'email' TEXT,
  
  CONSTRAINT fk_role FOREIGN KEY(idrole) REFERENCES public.role(idrole)
);

-- TABLE PHOTO
DROP TABLE public.photo IF EXIST;
CREATE TABLE public.photo 
(
  'idPhoto' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'nom' TEXT,
  'url' TEXT,
  'partager' BOOLEAN,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte)
);

-- TABLE CATEGORIE
DROP TABLE public.categorie IF EXIST;
CREATE TABLE public.categorie
(
  'idCategorie' SERIAL PRIMARY KEY,
  'nom' TEXT
);

-- TABLE EXERCICE
DROP TABLE public.exercices IF EXIST;
CREATE TABLE public.exercices
(
  'idExercice' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'idCategorie' SERIAL,
  'nom' TEXT,
  'data' JSON,

  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_categorie FOREIGN KEY(idcategorie) REFERENCES public.categorie(idcategorie)
);

-- TABLE TEMPLATES
DROP TABLE public.templates IF EXIST;
CREATE TABLE public.templates
(
  'idTemplate' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'idExercice' SERIAL,
  'nom' TEXT,
  'data' JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_exercice FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);

-- TABLE HISTORIQUE
DROP TABLE public.historique IF EXIST;
CREATE TABLE public.historique
(
  'idHistorique' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'idTemplate' SERIAL,
  'data' JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_template FOREIGN KEY(idtemplate) REFERENCES public.compte(idtemplate)
);

-- RELATION HISTORIQUE COMPTE
DROP TABLE public.templates_exercice IF EXIST;
CREATE TABLE public.templates_exercice
(
  'idTemplate' SERIAL,
  'idExercice' SERIAL,
  
  PRIMARY KEY(idtemplate, idexercice),
  FOREIGN KEY(idtemplate) REFERENCES public.template(idtemplate),
  FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);

