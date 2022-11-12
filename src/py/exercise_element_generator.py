# -*- coding: utf-8 -*-
from html.parser import HTMLParser


class ExerciseElementGenerator:

    @staticmethod
    def generate_class_attribute(name_category):
        return f"class=\"categories exercises-{name_category}\""

    @staticmethod
    def generate_id_attribute(name_category: str, id_exercise: int):
        return f"id=\"{name_category}-{id_exercise}\""

    @staticmethod
    def generate_div(name_category: str, name_exercise: str, id_exercise: int):
        html_parse = HTMLParser()
        html_parse.feed(f"<div {ExerciseElementGenerator.generate_id_attribute(name_category, id_exercise)} " +
                        f" {ExerciseElementGenerator.generate_class_attribute(name_category)} draggable=\"true\">" +
                        f"<p>{name_exercise}</p>" +
                        f"</div>")

        return html_parse
