from time import sleep

import psycopg2


n = 0

while True:
    n += 1

    f = open("../html/banques-photos.html", "a")
    f.write(f"<p>{n}: something</p>\n")
    f.close()

    sleep(1)

