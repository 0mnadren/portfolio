from django.db import models


class Project(models.Model):
    image = models.ImageField(upload_to='portfolio/images')
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=250)
    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)

    detail_description = models.TextField(blank=True)
    technologies = models.CharField(max_length=500, blank=True)

    def __str__(self):
        return self.title


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, on_delete=models.CASCADE)

    image = models.ImageField(upload_to='porfolio/carousel', null=True, blank=True)

    def __str__(self):
        return self.project.title


class Expertise(models.Model):
    icon = models.ImageField(upload_to='portfolio/images')
    language = models.CharField(max_length=100)

    def __str__(self):
        return self.language


