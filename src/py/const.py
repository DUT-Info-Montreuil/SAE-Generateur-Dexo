from dataclasses import dataclass


@dataclass
class Const:
    __slots__ = ()

    AMOUNT_THREAD_TIME_SLEEP: int = 1
    INSERT_NOTIFY_NAME: str = "new_item_added"
    CAT1_HTML_PATH: str = "../html/categories/cat1.html"
    CAT2_HTML_PATH: str = "../html/categories/cat2.html"
    CAT3_HTML_PATH: str = "../html/categories/cat3.html"
    CAT4_HTML_PATH: str = "../html/categories/cat4.html"
    END_TAGS: str = "</body></html>"

    LISTEN_QUERY: str = f"LISTEN {INSERT_NOTIFY_NAME};"
    GET_NAME_CAT_QUERY: str = "SELECT c.nom FROM public.exercices e INNER JOIN public.categorie c ON e.idcategorie = c.idcategorie WHERE e.idexercice = %s;"
    GET_NAME_EXO_QUERY: str = "SELECT nom FROM public.exercices WHERE idexercice = %s;"
