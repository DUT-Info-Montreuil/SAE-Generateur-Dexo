import json

from dataclasses import dataclass


@dataclass
class Server:
    @staticmethod
    def get_host() -> str:
        """ :return: The host of server. """
        return "vps-db5011c7.vps.ovh.net"

    @dataclass
    class BDD:
        @staticmethod
        def __get_json() -> dict:
            f = open(Server.BDD.__get_key_path(), "r")
            json_file = json.load(f)
            f.close()

            return json_file

        @staticmethod
        def __get_key_path():
            return "../../res/key.json"

        @staticmethod
        def get_name() -> str:
            """ :return: The name of BDD. """
            return "sae_ge"

        @staticmethod
        def get_user_name() -> str:
            return Server.BDD.__get_json()["user"]

        @staticmethod
        def get_password() -> str:
            return Server.BDD.__get_json()["password"]
