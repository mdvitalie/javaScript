
// document.write('Hello there');
console.log('script.js file loaded');

// step9. create a function


document.addEventListener("DOMContentLoaded", function (event) {
    var divTag = document.getElementById('secondDiv');
      console.log("DOM fully loaded and parsed");

      // Unobstrusive events with addEventListener
      document.getElementById("h1").addEventListener("click", toggleDisplay);

function toggleDisplay() {
      console.log('inside toggleDiplay function');
      if (divTag.style.display == 'none') {
            divTag.style.display = '';
      }
      else {
            divTag.style.display = 'none';
      }
}

});

