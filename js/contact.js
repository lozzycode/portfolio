const displayContact = document.querySelector('.contact')

fetch('contact.json').then(function (response) {
    return response.json();
}).then(function (data) {
   console.log(data);
    data.contact.forEach(function(contact) {
      displayContact.innerHTML += `<ul>
            <li>${contact.email}</li>
            <li>${contact.github}</li>
            <li>${contact.tel}</li>
            </ul>`
    })
})

// const displayAbout = document.querySelector('.about')

// fetch('about.json').then(function (response) {
//     return response.json();
// }).then(function (data) {
//    //console.log(data)
//     data.about.forEach(function(about) {
//       displayAbout.innerHTML += `<ul>
//             <li>${about.name}</li>
//             <li>${about.occupation }</li>
//             <li>${about.previousitroles}</li>
//             <li>${about.qualifications}</li>
//             <li>${about.hobbies}</li>
//             </ul>`
//     })
// })