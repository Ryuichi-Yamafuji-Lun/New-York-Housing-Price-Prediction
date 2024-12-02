from fastapi import FastAPI
from fastapi.responses import JSONResponse
import util

app = FastAPI()

# load location, columns, and model on start up
@app.get("startup")
async def load_data():
    util.load_artifacts()

