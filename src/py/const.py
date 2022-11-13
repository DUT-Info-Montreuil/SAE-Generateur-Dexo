from dataclasses import dataclass

from psycopg.sql import SQL


@dataclass
class Const:
    __slots__ = ()

    AMOUNT_THREAD_TIME_SLEEP: int = 30

    INSERT_NOTIFY_NAME: str = "new_item_added"
    DELETED_NOTIFY_NAME: str = "new_item_deleted"
    UPDATED_NOTIFY_NAME: str = "new_item_updated"
    CAT1_HTML_PATH: str = "../html/categories/cat1.html"
    CAT2_HTML_PATH: str = "../html/categories/cat2.html"
    CAT3_HTML_PATH: str = "../html/categories/cat3.html"
    CAT4_HTML_PATH: str = "../html/categories/cat4.html"
    END_TAGS: str = "</body></html>"

    LIST_CATEGORIES: tuple = (
        "categorie1",
        "categorie2",
        "categorie3",
        "categorie4"
    )

    GET_NAME_CAT_QUERY: SQL = SQL("SELECT c.nom FROM public.exercices e INNER JOIN public.categorie c ON e.idcategorie = c.idcategorie WHERE e.idexercice = %s;")
    GET_NAME_EXO_QUERY: SQL = SQL("SELECT nom FROM public.exercices WHERE idexercice = %s;")
