# -*- coding: utf-8 -*-
import datetime


def get_first_row_sql(connection, query: str, *args) -> None | tuple:
    """ get_first_row_sql(connection: Connection[Any], query: str,  *args: tuple) -> None | str
            Fetch the first row if the query is executed correctly by the cursor
    :param connection: The connection on the database thanks to pgsql.connect
    :param query: The sql query (ex: SELECT * FROM public.table)
    :param args: Replace '?' char on sql query
    :return: None if not found else, return a tuple """

    result: tuple = None
    with connection.cursor() as c:
        try:
            result = c.execute(query, args).fetchone()
        except Exception as e:
            print(f"[{datetime.datetime.now()}] La requête {query} n'a pas pu êtres executé")
            print(e)
    return result

