# -*- coding: utf-8 -*-
import datetime
from time import sleep

from categories import Categories
from const import Const
from functions import connection_on_database
from srv import *


def loop():
    listen_query = f"LISTEN {Const.INSERT_NOTIFY_NAME};LISTEN {Const.DELETED_NOTIFY_NAME};LISTEN {Const.UPDATED_NOTIFY_NAME}"
    # LISTEN on TRIGGERS Notify
    with connection.cursor() as c:
        c.execute(listen_query)

    while True:
        for notify in connection.notifies():
            cat.refresh(notify.channel, notify.payload)
        sleep(Const.AMOUNT_THREAD_TIME_SLEEP)


connection = connection_on_database()
if connection is None:
    print(f"[{datetime.datetime.now()}] Connection à la BDD {Server.BDD.get_name()} a echoué en tant que {Server.BDD.get_user_name()} !")
    quit()

cat: Categories = Categories(connection)
print(f"[{datetime.datetime.now()}] Connection à la BDD {Server.BDD.get_name()} reussie en tant que {Server.BDD.get_user_name()} !")

loop()
