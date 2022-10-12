-- CREATE DATABASE
/* CREATE DATABASE sae_ge
  WITH
  ENCODING = 'UTF8';
COMMENT ON DATABASE sae_ge IS 'Base de donnée de la SAE sur le site du générateur dexercice';

USE sae_ge; */
-- TABLE ROLE
DROP TABLE IF EXISTS public.role CASCADE;
CREATE TABLE public.role
(
  idRole SERIAL PRIMARY KEY,
  nom TEXT
);

-- TABLE COMPTE
DROP TABLE IF EXISTS public.compte CASCADE;
CREATE TABLE public.compte 
(
  idCompte SERIAL PRIMARY KEY, 
  idRole INT,
  nom TEXT,
  prenom TEXT,
  login TEXT,
  password TEXT,
  email TEXT,
  
  CONSTRAINT fk_role FOREIGN KEY(idrole) REFERENCES public.role(idrole)
);

-- TABLE PHOTO
DROP TABLE IF EXISTS public.photo CASCADE;
CREATE TABLE public.photo 
(
  idPhoto SERIAL PRIMARY KEY,
  idCompte INT,
  nom TEXT,
  url TEXT,
  partager BOOLEAN,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte)
);

-- TABLE CATEGORIE
DROP TABLE IF EXISTS public.categorie CASCADE;
CREATE TABLE public.categorie
(
  idCategorie SERIAL PRIMARY KEY,
  nom TEXT
);

-- TABLE EXERCICE
DROP TABLE IF EXISTS public.exercices CASCADE;
CREATE TABLE public.exercices
(
  idExercice SERIAL PRIMARY KEY,
  idCompte INT,
  idCategorie SERIAL,
  nom TEXT,
  data TEXT,

  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_categorie FOREIGN KEY(idcategorie) REFERENCES public.categorie(idcategorie)
);

-- TABLE TEMPLATES
DROP TABLE IF EXISTS public.templates CASCADE;
CREATE TABLE public.templates
(
  idTemplate SERIAL PRIMARY KEY,
  idCompte INT,
  idExercice INT,
  nom TEXT,
  data JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_exercice FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);

-- TABLE HISTORIQUE
DROP TABLE IF EXISTS public.historique CASCADE;
CREATE TABLE public.historique
(
  idHistorique SERIAL PRIMARY KEY,
  idCompte INT,
  idTemplate INT,
  data JSON,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_template FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate)
);

-- RELATION HISTORIQUE COMPTE
DROP TABLE IF EXISTS public.templates_exercice CASCADE;
CREATE TABLE public.templates_exercice
(
  idTemplate INT,
  idExercice INT,
  
  PRIMARY KEY(idtemplate, idexercice),
  FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate),
  FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);
