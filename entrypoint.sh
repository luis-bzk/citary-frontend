#!/bin/bash

export NODE_ENV=production

serve -s dist -l tcp://0.0.0.0:5173 --single