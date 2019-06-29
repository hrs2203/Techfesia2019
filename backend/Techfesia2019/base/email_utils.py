# will contain all email utils
import os
from django.core.mail import send_mail , EmailMultiAlternatives
from django.conf import settings
from django.template.loader import render_to_string
from django.utils.html import strip_tags

# from_email = settings.EMAIL_HOST_USER

# email_file_address = settings.BASE_DIR + '/base/email_templates'
# email_file_address = os.path.join( settings.BASE_DIR , 'base' , 'email_templates' )

def welcomeEmail( to_email , from_email = 'codehrs2203@gmail.com' ):
    _subject = "welcome email"
    _from = from_email
    _to = to_email

    # content will be a html file
    content_message = render_to_string( 'welcome.html' , {})
    text_message = strip_tags(content_message)

    # send_mail( _subject , content_message , _from, _to, fail_silently=True)
    send_mail = EmailMultiAlternatives( _subject , text_message , _from , _to )
    send_mail.attach_alternative(content_message,'text/html')
    send_mail.send()

def password_update_succesfull( to_email , from_email = 'codehrs2203@gmail.com' ):
    _subject = "password changed succesfully"
    _from = from_email
    _to = to_email

    # content will be a html file
    content_message = render_to_string( 'password_updated.html' , {})
    text_message = strip_tags(content_message)

    # send_mail( _subject , content_message , _from, _to, fail_silently=True)
    send_mail = EmailMultiAlternatives( _subject , text_message , _from , _to )
    send_mail.attach_alternative(content_message,'text/html')
    send_mail.send()