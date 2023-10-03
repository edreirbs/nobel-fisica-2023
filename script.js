
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    
    document.querySelector('#pulse-duration').addEventListener('input', (event) => {
        let pulseWidth = event.target.value;
        document.querySelector('#pulse').setAttribute('x2', 120 + parseInt(pulseWidth));
        document.querySelector('#explanation').innerText = 'La duración del pulso de luz femtosegundo se ajusta para ser ' + pulseWidth + ' fs.';
    });
    
    document.querySelector('#pulse-compression').addEventListener('input', (event) => {
        let compression = event.target.value;
        document.querySelector('#pulse').setAttribute('stroke-width', (compression/10));
        document.querySelector('#explanation').innerText = 'La compresión del pulso de luz se establece en ' + compression + '%.';
    });
    
    document.querySelector('#sample-type').addEventListener('change', (event) => {
        let sampleType = event.target.value;
        let sampleColor = sampleType === 'atom' ? 'yellow' : 'lightpink';
        let sampleText = sampleType === 'atom' ? 'átomo' : 'molécula';
        document.querySelector('#sample').setAttribute('fill', sampleColor);
        document.querySelector('#explanation').innerText = 'La muestra seleccionada es un ' + sampleText + '.';
    });
    
    document.querySelector('#simulate-electron').addEventListener('click', (event) => {
        document.querySelector('#detector').setAttribute('fill', 'darkred');
        document.querySelector('#explanation').innerText = 'Simulando la emisión y detección de un electrón.';
        setTimeout(() => {
            document.querySelector('#detector').setAttribute('fill', 'lightcoral');
        }, 1000);
    });
    
    document.querySelector('#analyse-data').addEventListener('click', (event) => {
        alert('Analizando Datos... ¡Análisis de Muestra Completado!');
        document.querySelector('#explanation').innerText = 'Los datos de la muestra se han analizado y comparado con modelos teóricos.';
    });
});
