function convertToUppercase() {
    // Get the input text
    const inputText = document.getElementById('inputText').value;
    
    // Convert to uppercase
    const uppercaseText = inputText.toUpperCase();
    
    // Display the converted text
    document.getElementById('outputText').textContent = uppercaseText;
}