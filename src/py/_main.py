# -*- coding: utf-8 -*-
import datetime
from time import sleep

import psycopg as pgsql

from categories import Categories
from const import Const
from srv import *


connection = None
print(f"[{datetime.datetime.now()}] Tentative de connection à la BDD sur {Server.get_host()}...")
try:
    connection = pgsql.connect(f"host={Server.get_host()} dbname={Server.BDD.get_name()} user={Server.BDD.get_user_name()} password={Server.BDD.get_password()}")
    connection.autocommit = True
except Exception | pgsql.Error as e:
    print(f"[{datetime.datetime.now()}] Erreur lors de la connection à la base de donnée.")
    print(e)
    quit()

print(f"[{datetime.datetime.now()}] Connection à la BDD {Server.BDD.get_name()} reussie en tant que {Server.BDD.get_user_name()} !")
cat: Categories = Categories(connection)

with connection.cursor() as c:
    c.execute(f"LISTEN {Const.INSERT_NOTIFY_NAME};LISTEN {Const.DELETED_NOTIFY_NAME};LISTEN {Const.UPDATED_NOTIFY_NAME}")


while True:
    for notify in connection.notifies():
        cat.refresh(notify.channel, notify.payload)
    sleep(Const.AMOUNT_THREAD_TIME_SLEEP)
