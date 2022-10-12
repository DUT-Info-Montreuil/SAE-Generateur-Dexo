
RAISE NOTICE '- Check who is admins';
SELECT c.prenom, c.nom FROM public.compte c INNER JOIN public.role r ON c.idrole=r.idrole WHERE c.idrole=1;

RAISE NOTICE '- Check who is users';
SELECT c.prenom, c.nom FROM public.compte c INNER JOIN public.role r ON c.idrole=r.idrole WHERE c.idrole=2;
