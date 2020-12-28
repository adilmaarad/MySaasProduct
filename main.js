const form = document.querySelector('#contact-form');

function replace(){
    const img = document.querySelector('#contact-img');
    img.src = './image/undraw_Mail_sent_re_0ofv.svg';
}
//  saving data 
form.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('messages').add({
        name: form.name.value,
        Email: form.mail.value,
        message: form.message.value,
        created: firebase.firestore.FieldValue.serverTimestamp(),
    }).then(
        replace(),
       console.log('message sent !')
    );
     form.name.value = "",
     form.mail.value = "",
     form.message.value = ""
 });

