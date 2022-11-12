# -*- coding: utf-8 -*-
import datetime
from time import sleep

import psycopg as pgsql

from categories import *
from srv import *


connection = None
print(f"[{datetime.datetime.now()}] Tentative de connection à la BDD sur {Server.get_host()}...")
try:
    connection = pgsql.connect(f"host={Server.get_host()} dbname={Server.BDD.get_name()} user={Server.BDD.get_user_name()} password={Server.BDD.get_password()}")
    connection.autocommit = True
except Exception | pgsql.Error as e:
    print(f"[{datetime.datetime.now()}] Erreur lors de la connection à la base de donnée.")
    print(f"\n{e}")
    quit()

print(f"[{datetime.datetime.now()}] Connection à la BDD {Server.BDD.get_name()} reussie en tant que {Server.BDD.get_user_name()} !")
cat: Categories = Categories(connection)

with connection.cursor() as c:
    c.execute(Const.LISTEN_QUERY)


def handle_notify():
    for notify in connection.notifies():
        cat.refresh(notify.payload)


while True:
    handle_notify()
    sleep(Const.AMOUNT_THREAD_TIME_SLEEP)
