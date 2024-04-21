document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita il comportamento predefinito di invio del modulo
    
    // Recupera i valori inseriti nel form
    var to = document.getElementById('to').value;
    var subject = document.getElementById('subject').value;
    var body = document.getElementById('body').value;
    
    // Esegui qui le azioni desiderate con i valori recuperati (ad esempio, invio di una richiesta AJAX)
    console.log('Email to:', to);
    console.log('Subject:', subject);
    console.log('Body:', body);
    
    // Aggiungi il messaggio inviato alla lista dei messaggi inviati (opzionale)
    var sentList = document.getElementById('sentList');
    var newMessage = document.createElement('li');
    newMessage.textContent = 'To: ' + to + ' | Subject: ' + subject;
    sentList.appendChild(newMessage);
    
    // Pulisci il form dopo l'invio
    document.getElementById('to').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('body').value = '';
});