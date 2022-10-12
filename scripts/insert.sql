-- FILL ROLE TABLE
INSERT INTO public.role VALUES(1, 'admin');
INSERT INTO public.role VALUES(2, 'user');

-- FILL COMPTE TABLE
INSERT INTO public.compte VALUES(DEFAULT, 1, 'CHRZASZCZ', 'Naulan', 'nchrzaszcz', '5f4dcc3b5aa765d61d8327deb882cf99', 'nchrzaszcz.pro@gmail.com');
INSERT INTO public.compte VALUES(DEFAULT, 2, 'NARCISO', 'Tiago', 'tnarciso', '5f4dcc3b5aa765d61d8327deb882cf99', 'email@gmail.com');
INSERT INTO public.compte VALUES(DEFAULT, 2, 'TOURE', 'Mehedi', 'tmehedi', '5f4dcc3b5aa765d61d8327deb882cf99', 'email@gmail.com');
INSERT INTO public.compte VALUES(DEFAULT, 2, 'POITRE', 'Lingue', 'plingue', '5f4dcc3b5aa765d61d8327deb882cf99', 'email@gmail.com');

-- FILL PHOTO TABLE
INSERT INTO public.photo VALUES(DEFAULT, 1, 'picture-07-07-2020', 'https://blog-fr.orson.io/wp-content/uploads/2017/06/url-definition.jpg', 'f');
INSERT INTO public.photo VALUES(DEFAULT, 1, 'picture-02-08-2021', 'https://blog-fr.orson.io/wp-content/uploads/2017/06/url-definition.jpg', 't');
INSERT INTO public.photo VALUES(DEFAULT, 2, 'picture-14-05-2022', 'https://blog-fr.orson.io/wp-content/uploads/2017/06/url-definition.jpg', 'f');

-- FILL CATEGORIE TABLE
INSERT INTO public.categorie VALUES(DEFAULT, 'categorie1');
INSERT INTO public.categorie VALUES(DEFAULT, 'categorie2');
INSERT INTO public.categorie VALUES(DEFAULT, 'categorie3');
INSERT INTO public.categorie VALUES(DEFAULT, 'categorie4');

-- FILL EXERCICE TABLE
INSERT INTO public.exercices VALUES(DEFAULT, 1, 1, 'exo1', '<html><p>an exercice</p></html>');
INSERT INTO public.exercices VALUES(DEFAULT, 1, 2, 'exo2', '<html><p>an exercice</p></html>');
INSERT INTO public.exercices VALUES(DEFAULT, 3, 1, 'exo3', '<html><p>an exercice</p></html>');

-- FILL TEMPLATE TABLE
INSERT INTO public.templates VALUES(DEFAULT, 1, 1, 'template1');
INSERT INTO public.templates VALUES(DEFAULT, 1, 2, 'template2');

-- FILL TEMPLATE_EXERCICE TABLE
INSERT INTO public.templates_exercice VALUES(1, 1);
INSERT INTO public.templates_exercice VALUES(1, 2);

-- FILL HISTORIQUE TABLE
INSERT INTO public.historique VALUES(DEFAULT, 3, 1, '{}');
