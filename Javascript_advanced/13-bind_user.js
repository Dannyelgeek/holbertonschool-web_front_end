const user = {
    hobby: 'Caligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer'
}

function logWelcomeUser(welcomeString) {
    console.log(welcomeString+ ', ' + user.firstName + '. ' + 'Your occupation is: ' + user.occupation)
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

logWelcomeUser('Welcome');