This is a basic calculator with a simple UI. Users can click the buttons to input numbers and perform basic arithmetic operations.

# index.html
This HTML code creates a simple calculator web page, similar to the one you might use on your computer or phone. It has a title at the top saying "Calculator" and right below that, there's a name, "Mohammad Umar Farooq." The calculator itself is made up of a display screen where you see the numbers and some buttons you can click.
The display screen is like the part where you see the answer after doing math. You can't type directly into it, but the buttons below help you input numbers and symbols. For example, there are buttons for digits (0-9), plus and minus signs, multiplication and division symbols, and more.
The webpage uses a special type of code (HTML) to structure the information, a bit like how you organize a report. Additionally, there's another type of code (CSS) that adds style, like choosing colors and shapes. Lastly, there's a third type of code (JavaScript) that makes the buttons work. For example, when you click on the "C" button, it clears the display, and when you click on the "7" button, it adds the number 7 to the display. It's a bit like giving instructions to the calculator on how to respond when you press the buttons.

# style.css
This code is like a recipe for how the calculator webpage should look. The whole page is set to have a black background with yellow text, making it easy to read. The calculator itself is placed in the middle of the page, and it has a clean and organized design with white background and a bit of shadow to make it stand out. The numbers and results are shown in a special area called the display screen, which is at the top and looks like a small box. The buttons on the calculator are neatly arranged in rows of four, and each button is a good size with a light gray color. When you click a button, it changes color a little bit to let you know you pressed it. Overall, it's designed to be user-friendly and look nice while you use it.

# script.js
the JavaScript code acts as a set of instructions for the calculator to do different things when you press buttons.

1. let display = document.getElementById('display');

This line is like telling the calculator, "Hey, pay attention to the display screen so we can change what's shown there."

2. function appendToDisplay(value) { display.value += value; }

This function is saying, "If someone clicks on a button, add what's on the button to what's already on the display." So, if the display shows '2' and you press '3', it becomes '23'.

3. function calculateResult() { try { display.value = eval(display.value); } catch (error) { display.value = 'Error'; } }

This function is like asking the calculator to calculate the result of what's on the display. If it succeeds, it shows the result. If something goes wrong (like if you try to do something the calculator doesn't understand), it says 'Error' on the display.

4. function backspace() { display.value = display.value.slice(0, -1); }

This function is for the backspace button. When you press it, the calculator takes away the last number or symbol from the display. So, if the display is '123' and you press backspace, it becomes '12'.

5. function clearDisplay() { display.value = ''; }

This function is like saying, "If someone clicks on the 'C' button, just clear everything on the display. Start fresh with an empty screen."
