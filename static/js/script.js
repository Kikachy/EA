// Load courses from API
loadCourses = function() {
    let url = 'http://localhost:3009/epok/api/modules' // Web service
    let el = document.getElementById('select-course'); // select element

    // Get course codes
    let data = fetch(url).then(data => {
        return data.json()
    }).then(data => {
        // Loop results from web service
        for (let i = 0; i < data.length; i++) {
            // Create a new option
            let option = document.createElement('option');
            let kurs = data[i]
            option.value = kurs.kurskod;
            option.innerHTML = kurs.kurskod;
            el.appendChild(option)
        }
    }).catch(error => alert(error))
}