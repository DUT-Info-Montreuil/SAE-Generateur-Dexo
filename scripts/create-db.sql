-- CREATE DATABASE
/* CREATE DATABASE sae_ge
  WITH
  ENCODING = 'UTF8';
COMMENT ON DATABASE sae_ge IS 'Base de donnée de la SAE sur le site du générateur dexercice';

USE sae_ge; */


-- TABLE ROLE
DROP TABLE IF EXISTS public.role;
CREATE TABLE public.role
(
  idRole SERIAL PRIMARY KEY,
  nom TEXT
);

-- TABLE COMPTE
DROP TABLE IF EXISTS public.compte;
CREATE TABLE public.compte 
(
  idCompte SERIAL PRIMARY KEY, 
  idRole SERIAL,
  nom TEXT,
  prenom TEXT,
  login TEXT,
  password TEXT,
  email TEXT,
  
  CONSTRAINT fk_role FOREIGN KEY(idrole) REFERENCES public.role(idrole)
);

-- TABLE PHOTO
DROP TABLE IF EXISTS public.photo;
CREATE TABLE public.photo 
(
  idPhoto SERIAL PRIMARY KEY,
  idCompte SERIAL,
  nom TEXT,
  url TEXT,
  partager BOOLEAN,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte)
);

-- TABLE CATEGORIE
DROP TABLE IF EXISTS public.categorie;
CREATE TABLE public.categorie
(
  idCategorie SERIAL PRIMARY KEY,
  nom TEXT
);

-- TABLE EXERCICE
DROP TABLE IF EXISTS public.exercices;
CREATE TABLE public.exercices
(
  idExercice SERIAL PRIMARY KEY,
  idCompte SERIAL,
  idCategorie SERIAL,
  nom TEXT,
  data JSON,

  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_categorie FOREIGN KEY(idcategorie) REFERENCES public.categorie(idcategorie)
);

-- TABLE TEMPLATES
DROP TABLE IF EXISTS public.templates;
CREATE TABLE public.templates
(
  idTemplate SERIAL PRIMARY KEY,
  idCompte SERIAL,
  idExercice SERIAL,
  nom TEXT,
  data JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_exercice FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);

-- TABLE HISTORIQUE
DROP TABLE IF EXISTS public.historique;
CREATE TABLE public.historique
(
  idHistorique SERIAL PRIMARY KEY,
  idCompte SERIAL,
  idTemplate SERIAL,
  data JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_template FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate)
);

-- RELATION HISTORIQUE COMPTE
DROP TABLE IF EXISTS public.templates_exercice;
CREATE TABLE public.templates_exercice
(
  idTemplate SERIAL,
  idExercice SERIAL,
  
  PRIMARY KEY(idtemplate, idexercice),
  FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate),
  FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);
