from django.contrib import admin
from .models import Project, ProjectImage, Expertise


class ProjectImagesInLine(admin.StackedInline):
    model = ProjectImage
    extra = 3


class ProjectAdmin(admin.ModelAdmin):
    fieldsets = [
        (None,              {'fields': ['image', 'title', 'description', 'github_url', 'live_url']}),
        ('Data for Modal',  {'fields': ['detail_description', 'technologies'], 'classes': ['collapse']}),
    ]
    inlines = [ProjectImagesInLine]


admin.site.register(Project, ProjectAdmin)
admin.site.register(Expertise)

