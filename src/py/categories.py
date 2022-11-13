# -*- coding: utf-8 -*-
import datetime
import json
from html.parser import HTMLParser

from const import *
from exercise_element_generator import ExerciseElementGenerator
from functions import get_first_row_sql


class Categories:

    connection = None
    categories_html_path: dict[HTMLParser] = {
        'categorie1': Const.CAT1_HTML_PATH,
        'categorie2': Const.CAT2_HTML_PATH,
        'categorie3': Const.CAT3_HTML_PATH,
        'categorie4': Const.CAT4_HTML_PATH
    }

    def __init__(self, connection) -> None:
        self.connection = connection

    def refresh(self, payload: str) -> None:
        """ refresh(self, payload: str) -> None
                It allows to append into a html file when the exercise recently added.

        :param payload: json format output from postgresql trigger
        :return: Nothing """

        json_data = json.loads(payload)
        id_exercise: str = None
        try:
            id_exercise = str(json_data["idexercice"])
        except Exception as e:
            print(f"[{datetime.datetime.now()}] L'attribue idexercice n'a pas été trouvé dans le retour de la fonction du trigger")
            print(f"\n{e}")

        # if 'idexercise' getted on payload
        if id_exercise is not None:
            name_exercise: str = get_first_row_sql(self.connection, Const.GET_NAME_EXO_QUERY, id_exercise)[0]
            name_category: str = get_first_row_sql(self.connection, Const.GET_NAME_CAT_QUERY, id_exercise)[0]

            # if the name_exercise and name_exercise found on postgresql database
            if name_category and name_exercise is not None:
                print(f"[{datetime.datetime.now()}] Creation de l'exercice -> {name_exercise} dans la catégorie -> {name_category} en cours...")

                content_html: str
                div = ExerciseElementGenerator.generate_div(name_category, name_exercise, id_exercise)
                with open(self.categories_html_path[name_category], 'r') as html_file:
                    content_html = html_file.read()

                with open(self.categories_html_path[name_category], 'w') as html_file:
                    i = 0
                    final_data_html = ""
                    len_content_without_end_tags = (len(content_html)-1) - (len(Const.END_TAGS)-1)
                    # Need to rewrite the content of file, because we need to delete end tags of 'body' and 'html'
                    while i < len_content_without_end_tags:
                        final_data_html = final_data_html + content_html[i]
                        i += 1

                    final_data_html = final_data_html + div + Const.END_TAGS
                    html_file.write(final_data_html)
                    print(f"[{datetime.datetime.now()}] L'exercice {name_exercise} a bien etais ecris dans {self.categories_html_path[name_category]}")
                    print(f"[{datetime.datetime.now()}] Taille ddu fichier ecrit: {html_file.__sizeof__()}B")
                # On success
                return None
        # On failure
        print(f"[{datetime.datetime.now()}] Le code ne peut continue, arrêt de la fonction")
