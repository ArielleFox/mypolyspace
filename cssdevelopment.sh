echo "automation script for TailwindCSS development"
sleep .2
npx tailwindcss -i ./static/css/input.css -o ./static/output.css --watch
echo "the 🦈 says hello"
