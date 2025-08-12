/**
 * Máscaras de Input - Compatível com Electron
 */

function applyCNPJMask(input) {
    if (!input || !input.value) return;
    
    let value = input.value.replace(/[^0-9]/g, '');
    
    if (value.length > 14) {
        value = value.slice(0, 14);
    }
    
    if (value.length >= 2) {
        value = value.slice(0, 2) + '.' + value.slice(2);
    }
    if (value.length >= 6) {
        value = value.slice(0, 6) + '.' + value.slice(6);
    }
    if (value.length >= 10) {
        value = value.slice(0, 10) + '/' + value.slice(10);
    }
    if (value.length >= 15) {
        value = value.slice(0, 15) + '-' + value.slice(15);
    }
    
    input.value = value;
}

function applyWhatsAppMask(input) {
    if (!input || !input.value) return;
    
    let value = input.value.replace(/[^0-9]/g, '');
    
    if (value.length > 11) {
        value = value.slice(0, 11);
    }
    
    if (value.length >= 2) {
        value = '(' + value.slice(0, 2) + ') ' + value.slice(2);
    }
    if (value.length >= 10) {
        const phoneNumber = value.replace(/[^0-9]/g, '');
        if (phoneNumber.length === 11) {
            value = '(' + phoneNumber.slice(0, 2) + ') ' + phoneNumber.slice(2, 7) + '-' + phoneNumber.slice(7);
        } else if (phoneNumber.length === 10) {
            value = '(' + phoneNumber.slice(0, 2) + ') ' + phoneNumber.slice(2, 6) + '-' + phoneNumber.slice(6);
        }
    }
    
    input.value = value;
}

function applyCEPMask(input) {
    if (!input || !input.value) return;
    
    let value = input.value.replace(/[^0-9]/g, '');
    
    if (value.length > 8) {
        value = value.slice(0, 8);
    }
    
    if (value.length >= 5) {
        value = value.slice(0, 5) + '-' + value.slice(5);
    }
    
    input.value = value;
}

function blockNonNumericKeys(event) {
    const allowedKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'Home', 'End', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'
    ];
    
    if (allowedKeys.includes(event.key)) {
        return true;
    }
    
    if (event.ctrlKey || event.metaKey) {
        const ctrlKeys = ['a', 'c', 'v', 'x', 'z'];
        if (ctrlKeys.includes(event.key.toLowerCase())) {
            return true;
        }
    }
    
    if (event.key >= '0' && event.key <= '9') {
        return true;
    }
    
    event.preventDefault();
    return false;
}

function initializeMasks() {
    const cnpjInput = document.getElementById('cnpj');
    if (cnpjInput) {
        cnpjInput.removeEventListener('keydown', blockNonNumericKeys);
        cnpjInput.removeEventListener('input', handleCNPJInput);
        cnpjInput.removeEventListener('paste', handleCNPJPaste);
        
        cnpjInput.addEventListener('keydown', blockNonNumericKeys);
        cnpjInput.addEventListener('input', handleCNPJInput);
        cnpjInput.addEventListener('paste', handleCNPJPaste);
    }
    
    const whatsappInput = document.getElementById('whatsapp');
    if (whatsappInput) {
        whatsappInput.removeEventListener('keydown', blockNonNumericKeys);
        whatsappInput.removeEventListener('input', handleWhatsAppInput);
        whatsappInput.removeEventListener('paste', handleWhatsAppPaste);
        
        whatsappInput.addEventListener('keydown', blockNonNumericKeys);
        whatsappInput.addEventListener('input', handleWhatsAppInput);
        whatsappInput.addEventListener('paste', handleWhatsAppPaste);
    }
    
    const cepInput = document.getElementById('cep');
    if (cepInput) {
        cepInput.removeEventListener('keydown', blockNonNumericKeys);
        cepInput.removeEventListener('input', handleCEPInput);
        cepInput.removeEventListener('paste', handleCEPPaste);
        
        cepInput.addEventListener('keydown', blockNonNumericKeys);
        cepInput.addEventListener('input', handleCEPInput);
        cepInput.addEventListener('paste', handleCEPPaste);
    }
}

function handleCNPJInput(event) {
    applyCNPJMask(event.target);
}

function handleCNPJPaste(event) {
    setTimeout(function() {
        applyCNPJMask(event.target);
    }, 10);
}

function handleWhatsAppInput(event) {
    applyWhatsAppMask(event.target);
}

function handleWhatsAppPaste(event) {
    setTimeout(function() {
        applyWhatsAppMask(event.target);
    }, 10);
}

function handleCEPInput(event) {
    applyCEPMask(event.target);
}

function handleCEPPaste(event) {
    setTimeout(function() {
        applyCEPMask(event.target);
    }, 10);
}

window.initializeMasks = initializeMasks;

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeMasks);
} else {
    initializeMasks();
}