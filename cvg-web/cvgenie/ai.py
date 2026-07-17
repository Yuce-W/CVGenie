import os
import json
import re
from dotenv import load_dotenv
from google import genai

from .prompts import PROMPT

load_dotenv()

client = genai.Client(
    api_key=os.getenv("GEMINI_API_KEY")
)
def analyze_resume(resume_text, job_description):

    prompt = PROMPT.replace(
        "<<JOB_DESCRIPTION>>",
        job_description
    )

    response = client.models.generate_content(
        model="gemini-3.5-flash",
        contents=f"{prompt}\n{resume_text}"
    )

    return parse_response(response.text)

def parse_response(response_text):

    match = re.search(r"\{.*\}", response_text, re.DOTALL)

    if not match:
        return {
            "error": "Gemini did not return valid JSON."
        }
    try:
        return json.loads(match.group())
    except json.JSONDecodeError:
        return {
            "error": "Failed to parse Gemini response."
        }