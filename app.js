window.addEventListener('load', () => {
    let long;
    let lat;
    let timeZone = document.querySelector('.location-timezone');
    let tempDegree = document.querySelector('.temperature-degree');
    let tempDescrption = document.querySelector('.temperature-description')
    
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`;
            fetch(api)
                .then(response => {
                    return response.json();
            })
                .then(data => {
                    console.log(data);
                    const { temperature_2m, time } = data.hourly;
                    //Set DOM elements from API
                    tempDegree.textContent = temperature_2m;
            }); 
        });
    }
});