function convertText() {
    // Get the input text
    const inputText = document.getElementById('inputText').value;
    // Get the selected conversion type
    const conversionType = document.getElementById('conversionType').value;
    
    let convertedText;
    if (conversionType === 'uppercase') {
        // Convert to uppercase
        convertedText = inputText.toUpperCase();
    } else if (conversionType === 'lowercase') {
        // Convert to lowercase
        convertedText = inputText.toLowerCase();
    }
    
    // Display the converted text
    document.getElementById('outputText').textContent = convertedText;
}