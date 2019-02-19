# -*- coding: utf-8 -*-
"""
Created on Fri Jan 11 16:43:04 2019

@author: Haile
"""

def run(server_class=HTTPServer, handler_class=BaseHTTPRequestHandler):
    server_address = ('', 8000)
    httpd = server_class(server_address, handler_class)
    httpd.serve_forever()