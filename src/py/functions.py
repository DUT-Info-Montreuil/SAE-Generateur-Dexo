# -*- coding: utf-8 -*-
import datetime

import psycopg as pgsql
from psycopg import Connection
from psycopg.sql import SQL

from srv import Server


def connection_on_database() -> Connection:
    connection: Connection = None
    data_connection: str = f"""
        host={Server.get_host()} 
         dbname={Server.BDD.get_name()}
         user={Server.BDD.get_user_name()} 
         password={Server.BDD.get_password()}
    """

    print(f"[{datetime.datetime.now()}] Tentative de connection à la BDD sur {Server.get_host()}...")
    try:
        connection = pgsql.connect(data_connection)
        connection.autocommit = True
    except Exception as e:
        print(f"[{datetime.datetime.now()}] Erreur lors de la connection à la base de donnée.")
        print(e)

    return connection


def get_first_row_sql(connection, query: SQL, *args) -> None | tuple:
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

