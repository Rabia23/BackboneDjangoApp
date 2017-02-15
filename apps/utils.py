__author__ = 'rabia'


def response_json(success, data, message=None):
    data = {
        "response": data,
        "success": success,
        "message": message,
    }
    return data
