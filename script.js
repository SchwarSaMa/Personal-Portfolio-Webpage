function decryptEmail(){
    const mail = document.querySelector('#contact1');
    const encryptedEmail = 'dGVzdE1haWxAdGVzdC5jb20=';
    mail.setAttribute('href', 'mailto:'.concat(atob(encryptedEmail)));
}

decryptEmail();