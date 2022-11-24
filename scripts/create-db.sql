-- TABLE ROLE
DROP TABLE IF EXISTS public.role CASCADE;
CREATE TABLE public.role
(
  idRole SERIAL PRIMARY KEY NOT NULL,
  nom TEXT NOT NULL
);

-- TABLE COMPTE
DROP TABLE IF EXISTS public.compte CASCADE;
CREATE TABLE public.compte 
(
  idCompte SERIAL PRIMARY KEY NOT NULL, 
  idRole INT NOT NULL,
  nom TEXT NOT NULL,
  prenom TEXT NOT NULL,
  login TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  
  CONSTRAINT fk_role FOREIGN KEY(idrole) REFERENCES public.role(idrole)
);

-- TABLE PHOTO
DROP TABLE IF EXISTS public.photo CASCADE;
CREATE TABLE public.photo 
(
  idPhoto SERIAL PRIMARY KEY NOT NULL,
  idCompte INT NOT NULL,
  nom TEXT NOT NULL,
  url TEXT NOT NULL,
  partager BOOLEAN NOT NULL,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte)
);

-- TABLE CATEGORIE
DROP TABLE IF EXISTS public.categorie CASCADE;
CREATE TABLE public.categorie
(
  idCategorie SERIAL PRIMARY KEY NOT NULL,
  nom TEXT NOT NULL
);

-- TABLE EXERCICE
DROP TABLE IF EXISTS public.exercices CASCADE;
CREATE TABLE public.exercices
(
  idExercice SERIAL PRIMARY KEY NOT NULL,
  idCompte INT NOT NULL,
  idCategorie SERIAL NOT NULL,
  nom TEXT NOT NULL,
  data TEXT NOT NULL,

  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_categorie FOREIGN KEY(idcategorie) REFERENCES public.categorie(idcategorie)
);

-- TABLE TEMPLATES
DROP TABLE IF EXISTS public.templates CASCADE;
CREATE TABLE public.templates
(
  idTemplate SERIAL PRIMARY KEY NOT NULL,
  idCompte INT NOT NULL,
  idExercice INT NOT NULL,
  nom TEXT NOT NULL,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_exercice FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);

-- TABLE HISTORIQUE
DROP TABLE IF EXISTS public.historique CASCADE;
CREATE TABLE public.historique
(
  idHistorique SERIAL PRIMARY KEY NOT NULL,
  idCompte INT NOT NULL,
  idTemplate INT NOT NULL,
  data TEXT NOT NULL,
  
  CONSTRAINT fk_compte FOREIGN KEY(idcompte) REFERENCES public.compte(idcompte),
  CONSTRAINT fk_template FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate)
);

-- RELATION HISTORIQUE COMPTE
DROP TABLE IF EXISTS public.templates_exercice CASCADE;
CREATE TABLE public.templates_exercice
(
  idTemplate INT NOT NULL,
  idExercice INT NOT NULL,
  
  PRIMARY KEY(idtemplate, idexercice),
  FOREIGN KEY(idtemplate) REFERENCES public.templates(idtemplate),
  FOREIGN KEY(idexercice) REFERENCES public.exercices(idexercice)
);
