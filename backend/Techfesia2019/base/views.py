from django.shortcuts import render
from django.http import HttpResponse
from . import email_utils

def email_test(request):
    print("-------------sending mail---------------")
    # a representation of how this can be used in program.
    send_to_list = ['hrishabh2203@gmail.com']
    # email_utils.password_update_succesfull(send_to_list)
    email_utils.welcomeEmail(send_to_list)
    print("----------------done--------------------")
    return HttpResponse(status=200)
    