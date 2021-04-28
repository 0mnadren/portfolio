from django.shortcuts import render
from django.http import HttpResponse
from django.core.mail import EmailMessage
from django.conf import settings
from django.template.loader import render_to_string
from .models import Project, Expertise


def home(request):
    projects = Project.objects.all()
    expertises = Expertise.objects.all()
    return render(request, 'portfolio/home.html', {'projects': projects, 'expertises': expertises})


def send_email(request):

    if request.method == 'POST':
        template = render_to_string('portfolio/email_template.html', {
            'name': request.POST['name'],
            'email': request.POST['email'],
            'message': request.POST['message'],
        })

        email = EmailMessage(
            request.POST['subject'],
            template,
            settings.EMAIL_HOST_USER,
            ['nemanja.n.davidovic@gmail.com']
        )

        email.fail_silently = False
        email.send()
    return render(request, 'portfolio/email_sent.html')
