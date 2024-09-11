document.getElementById('convertBtn').addEventListener('click', () => {
    const inputValue = parseFloat(document.getElementById('inputValue').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;

    let valueInMeters;

    // Convert input value to meters
    switch (inputUnit) {
        case 'm':
            valueInMeters = inputValue;
            break;
        case 'cm':
            valueInMeters = inputValue / 100;
            break;
        case 'mm':
            valueInMeters = inputValue / 1000;
            break;
        case 'in':
            valueInMeters = inputValue * 0.0254;
            break;
        default:
            valueInMeters = 0;
    }

    let outputValue;

    // Convert meters to output unit
    switch (outputUnit) {
        case 'm':
            outputValue = valueInMeters;
            break;
        case 'cm':
            outputValue = valueInMeters * 100;
            break;
        case 'mm':
            outputValue = valueInMeters * 1000;
            break;
        case 'in':
            outputValue = valueInMeters / 0.0254;
            break;
        default:
            outputValue = 0;
    }

    document.getElementById('outputValue').value = outputValue.toFixed(2);
});
