const displayWebsites = document.querySelector('.websites')

fetch('websites.json').then(function (response) {
    return response.json();
}).then(function (data) {
   //console.log(data)
    data.websites.forEach(function(websites) {
      displayWebsites.innerHTML += `
            <a href="http://www.activeconsideration.org" 
            target="_blank"> ${websites.website1}</a>`
    })
})