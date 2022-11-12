# -*- coding: utf-8 -*-
from html.parser import HTMLParser


def open_html_file(path: str) -> HTMLParser:
    file = open(path, "r")
    html_parser = HTMLParser()
    html_parser.feed(file.read())
    file.close()

    return html_parser
