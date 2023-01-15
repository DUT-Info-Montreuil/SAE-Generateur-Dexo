-- Database: sae_ge
DROP DATABASE IF EXISTS sae_ge;
CREATE DATABASE sae_ge WITH OWNER = nchrzaszcz ENCODING = 'UTF8' LC_COLLATE = 'en_US.UTF-8' LC_CTYPE = 'en_US.UTF-8' TABLESPACE = pg_default CONNECTION
LIMIT = -1 IS_TEMPLATE = False;
COMMENT ON DATABASE sae_ge IS 'Base de donnée de la SAE sur le site du générateur dexercice';

-- Table: public.role
DROP TABLE IF EXISTS public.role;
CREATE TABLE IF NOT EXISTS public.role (
    idrole integer NOT NULL DEFAULT nextval('role_idrole_seq'::regclass),
    nom text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT role_pkey PRIMARY KEY (idrole)
);

-- Table: public.compte
DROP TABLE IF EXISTS public.compte;
CREATE TABLE IF NOT EXISTS public.compte (
    idcompte integer NOT NULL DEFAULT nextval('compte_idcompte_seq'::regclass),
    idrole integer NOT NULL DEFAULT 2,
    nom text COLLATE pg_catalog."default" NOT NULL,
    prenom text COLLATE pg_catalog."default" NOT NULL,
    login text COLLATE pg_catalog."default" NOT NULL,
    password text COLLATE pg_catalog."default" NOT NULL,
    email text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT compte_pkey PRIMARY KEY (idcompte),
    CONSTRAINT fk_role FOREIGN KEY (idrole) REFERENCES public.role (idrole) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Table: public.photo
DROP TABLE IF EXISTS public.photo;
CREATE TABLE IF NOT EXISTS public.photo (
    idphoto integer NOT NULL DEFAULT nextval('photo_idphoto_seq'::regclass),
    idcompte integer NOT NULL,
    nom text COLLATE pg_catalog."default" NOT NULL,
    partager boolean NOT NULL,
    bin bytea,
    CONSTRAINT photo_pkey PRIMARY KEY (idphoto),
    CONSTRAINT fk_compte FOREIGN KEY (idcompte) REFERENCES public.compte (idcompte) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Table: public.categorie
DROP TABLE IF EXISTS public.categorie;
CREATE TABLE IF NOT EXISTS public.categorie (
    idcategorie integer NOT NULL DEFAULT nextval('categorie_idcategorie_seq'::regclass),
    nom text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT categorie_pkey PRIMARY KEY (idcategorie)
);

-- Table: public.exercices
DROP TABLE IF EXISTS public.exercices;
CREATE TABLE IF NOT EXISTS public.exercices (
    idexercice integer NOT NULL DEFAULT nextval('exercices_idexercice_seq'::regclass),
    idcompte integer NOT NULL,
    idcategorie integer NOT NULL DEFAULT nextval('exercices_idcategorie_seq'::regclass),
    nom text COLLATE pg_catalog."default" NOT NULL,
    data text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT exercices_pkey PRIMARY KEY (idexercice),
    CONSTRAINT fk_categorie FOREIGN KEY (idcategorie) REFERENCES public.categorie (idcategorie) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT fk_compte FOREIGN KEY (idcompte) REFERENCES public.compte (idcompte) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Table: public.templates
DROP TABLE IF EXISTS public.templates;
CREATE TABLE IF NOT EXISTS public.templates (
    idtemplate integer NOT NULL DEFAULT nextval('templates_idtemplate_seq'::regclass),
    idcompte integer NOT NULL,
    idexercice integer NOT NULL,
    nom text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT templates_pkey PRIMARY KEY (idtemplate),
    CONSTRAINT fk_compte FOREIGN KEY (idcompte) REFERENCES public.compte (idcompte) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT fk_exercice FOREIGN KEY (idexercice) REFERENCES public.exercices (idexercice) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- Table: public.historique
DROP TABLE IF EXISTS public.historique;
CREATE TABLE IF NOT EXISTS public.historique (
    idhistorique integer NOT NULL DEFAULT nextval('historique_idhistorique_seq'::regclass),
    idcompte integer NOT NULL,
    idtemplate integer NOT NULL,
    data json NOT NULL,
    CONSTRAINT historique_pkey PRIMARY KEY (idhistorique),
    CONSTRAINT fk_compte FOREIGN KEY (idcompte) REFERENCES public.compte (idcompte) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT fk_template FOREIGN KEY (idtemplate) REFERENCES public.templates (idtemplate) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);

-- RELATION HISTORIQUE COMPTE
DROP TABLE IF EXISTS public.templates_exercice;
CREATE TABLE IF NOT EXISTS public.templates_exercice (
    idtemplate integer NOT NULL,
    idexercice integer NOT NULL,
    CONSTRAINT templates_exercice_pkey PRIMARY KEY (idtemplate, idexercice),
    CONSTRAINT templates_exercice_idexercice_fkey FOREIGN KEY (idexercice) REFERENCES public.exercices (idexercice) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION,
    CONSTRAINT templates_exercice_idtemplate_fkey FOREIGN KEY (idtemplate) REFERENCES public.templates (idtemplate) MATCH SIMPLE ON UPDATE NO ACTION ON DELETE NO ACTION
);
