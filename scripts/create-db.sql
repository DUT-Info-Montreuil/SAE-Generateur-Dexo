-- CREATE DATABASE
CREATE DATABASE sae_ge;


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

-- TABLE TEMPLATES
DROP TABLE public.templates IF EXIST;
CREATE TABLE public.templates
(
  'idTemplate' SERIAL PRIMARY KEY,
  'idCompte' SERIAL,
  'nom' TEXT,
  /* TODO: add other attr */
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte)
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
