/*
  This function send a json when insert, delete or update events on exercices table.
*/
CREATE OR REPLACE FUNCTION public.update_insert_delete_event()
    RETURNS trigger AS
$$
BEGIN
    IF (tg_op = 'INSERT') THEN
        PERFORM pg_notify(
                'new_item_added',
                json_build_object(
                        'idexercice', NEW.idexercice,
                        'idcompte', NEW.idcompte,
                        'idcategorie', NEW.idcategorie,
                        'nom', NEW.nom,
                        'data', NEW.data
                    )::text
            );
        RETURN NEW;
    END IF;

    IF (tg_op = 'DELETE') THEN
        PERFORM pg_notify(
                'new_item_deleted',
                json_build_object(
                        'idexercice', OLD.idexercice,
                        'idcategorie', OLD.idcategorie
                    )::text
            );
        RETURN NEW;
    END IF;

    IF (tg_op = 'UPDATE') THEN
        PERFORM pg_notify(
                'new_item_updated',
                json_build_object(
                        'idexercice', NEW.idexercice,
                        'idcompte', NEW.idcompte,
                        'idcategorie', NEW.idcategorie,
                        'nom', NEW.nom,
                        'data', NEW.data
                    )::text
            );
        RETURN NEW;
    END IF;

    RETURN NULL;
END;
$$ LANGUAGE plpgsql;


CREATE TRIGGER check_update_insert_delete_to_python
    AFTER UPDATE OR INSERT OR DELETE
    ON public.exercices
    FOR EACH ROW
EXECUTE FUNCTION public.update_insert_delete_event();
	
