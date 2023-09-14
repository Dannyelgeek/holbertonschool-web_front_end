function welcome (firtsName, lastName) {
    let fullName = firtsName + ' ' + lastName;

    function displayFullName () {
        alert('Welcome ' + fullName + '!')
    };

    displayFullName();
}

welcome('Holberton', 'School');
