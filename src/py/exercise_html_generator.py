# -*- coding: utf-8 -*-

class ExerciseHTMLGenerator:
    @staticmethod
    def generate_class_attribute(name_category):
        return f"class=\"categories exercises-{name_category}\""

    @staticmethod
    def generate_id_attribute(name_category: str, id_exercise: int):
        return f"id=\"{name_category}-{id_exercise}\""

    @staticmethod
    def generate_div(name_category: str, name_exercise: str, id_exercise: int):
        return f"""<div {ExerciseHTMLGenerator.generate_id_attribute(name_category, id_exercise)}
         {ExerciseHTMLGenerator.generate_class_attribute(name_category)} 
         draggable=\"true\">
            <p>{name_exercise}</p>
        </div>"""
