#!/usr/bin/env bash

#conda deactivate && conda env remove -n qrcode && conda create -n qrcode python=3.10 #python=3.9.5
source ~/.enable_conda.sh && conda activate qrcode

python3 -m pip install --upgrade pip
python3 -m pip install --upgrade Pillow
python3 -m pip install --upgrade qrcode