from django.db import models

# Create your models here.

class Resume(models.Model):
    resume = models.FileField(upload_to="resumes/")
    role = models.CharField(max_length=100)
    job_description = models.TextField(blank=True)
    uploaded_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.role