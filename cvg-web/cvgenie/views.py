from django.shortcuts import render
from .ai import analyze_resume
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .serializers import ResumeSerializer
from .resume_parser import extract_text

@api_view(["POST"])
def upload_resume(request):
    serializer = ResumeSerializer(data=request.data)
    if serializer.is_valid():
        resume = serializer.save()
        text = extract_text(resume.resume.path)
        analysis = analyze_resume(text,resume.job_description)
        return Response(analysis)
    return Response(serializer.errors, status=400)