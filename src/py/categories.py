# -*- coding: utf-8 -*-
import json
from html.parser import HTMLParser

from const import *
from exercise_element_generator import ExerciseElementGenerator
from functions import open_html_file


class Categories:

    connection = None
    categories_html: dict[HTMLParser] = {
        'categorie1': open_html_file(Const.CAT1_HTML_PATH),
        'categorie2': open_html_file(Const.CAT2_HTML_PATH),
        'categorie3': open_html_file(Const.CAT3_HTML_PATH),
        'categorie4': open_html_file(Const.CAT4_HTML_PATH)
    }
    categories_html_path: dict[HTMLParser] = {
        'categorie1': Const.CAT1_HTML_PATH,
        'categorie2': Const.CAT2_HTML_PATH,
        'categorie3': Const.CAT3_HTML_PATH,
        'categorie4': Const.CAT4_HTML_PATH
    }

    def __init__(self, connection):
        self.connection = connection

    def refresh(self, payload: str) -> None:
        json_data = json.loads(payload)
        id_exercise = str(json_data["idexercice"])

        with self.connection.cursor() as curs:
            name_exercise = curs.execute(Const.GET_NAME_EXO_QUERY, (id_exercise,)).fetchone()[0]
        with self.connection.cursor() as curs:
            name_category = curs.execute(Const.GET_NAME_CAT_QUERY, (id_exercise,)).fetchone()[0]

        div = ExerciseElementGenerator.generate_div(name_category, name_exercise, id_exercise)
        with open(self.categories_html_path[name_category], 'a+') as html_file:
            html_parser = HTMLParser()
            html_parser.feed(html_file.read())
            html_parser.updatepos(4, 6)
            html_parser.feed(div.rawdata)
            print(html_parser.rawdata)
            html_file.write(html_parser.rawdata)
