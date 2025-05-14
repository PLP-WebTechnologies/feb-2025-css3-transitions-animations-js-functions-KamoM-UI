function submitForm(event){
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = '<strong>Your Username is:</strong> ' + username + '<br>' +
                            '<strong>E-mail:</strong> ' + password + '<br>' +
                            '<strong> </strong> ' + message;
}

const bgAnimation = document.getElementById('bgAnimation');

const numberOfCxolorBoxes = 400 

for (let i = 0; i < numberOfCxolorBoxes; i++) {
    const colorBox = document.createElement('div');
    colorBox .classList.add('colorBox');
    bgAnimation.append(colorBox)
}


const UserPreferences = {
  set: function(key, value) {
    try {
      const jsonValue = JSON.stringify(value);
      localStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error saving preference:', error);
    }
  },

  get: function(key) {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Error reading preference:', error);
      return null;
    }
  },

  remove: function(key) {
    localStorage.removeItem(key);
  },

  clearAll: function() {
    localStorage.clear();
  }
};

