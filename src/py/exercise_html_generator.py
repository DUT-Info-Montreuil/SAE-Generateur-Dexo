# -*- coding: utf-8 -*-

class ExerciseHTMLGenerator:
    @staticmethod
    def generate_class_attribute(name_category) -> str:
        return f"class=\"categories exercises-{name_category}\""

    @staticmethod
    def generate_id_attribute(name_category: str, id_exercise: int) -> str:
        return f"id=\"{name_category}-{id_exercise}\""

    @staticmethod
    def generate_div(name_category: str, name_exercise: str, id_exercise: int) -> str:
        """
            generate_div(name_category, name_exercise, id_exercise) -> "<div id="name_category-id_exercise"
                                                                             class="categories exercises-name_category
                                                                             draggable="true">
                                                                                <!-- code -->
                                                                        </div>"
        :return: The div with id, class and draggable attribute
        """
        return f"""<div {ExerciseHTMLGenerator.generate_id_attribute(name_category, id_exercise)}
         {ExerciseHTMLGenerator.generate_class_attribute(name_category)} 
         draggable="true">
            <p>{name_exercise}</p>
        </div>"""
