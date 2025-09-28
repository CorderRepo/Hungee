#!/bin/bash
# create venv if missing and install Flask + Supabase
set -e  # Exit immediately if a command fails

VENV_DIR=".venv"

# Check if virtual environment exists
if [ ! -d "$VENV_DIR" ]; then
    echo "Creating virtual environment..."
    python3 -m venv $VENV_DIR
else
    echo "Virtual environment already exists."
fi

# Activate virtual environment
echo "Activating virtual environment..."
source $VENV_DIR/bin/activate

# Upgrade pip
echo "Upgrading pip..."
pip install --upgrade pip

# Install Flask and Supabase
echo "Installing Flask and Supabase..."
pip install flask supabase

echo "Setup complete! Virtual environment is active."
echo "You can verify with: which python"
