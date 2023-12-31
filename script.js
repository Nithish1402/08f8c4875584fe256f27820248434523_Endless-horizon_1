function submitFIR() {
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    const mobile = document.getElementById('mobile').value;
    const incident = document.getElementById('incident').value;
    const complaintType = document.getElementById('complaintType').value;
    const referenceId = generateReferenceId();

    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = `
        <p>Thank you, ${name}!</p>
        <p>Your FIR has been submitted with the following details:</p>
        <ul>
            <li>Reference ID: ${referenceId}</li>
            <li>Age: ${age}</li>
            <li>Gender: ${gender}</li>
            <li>Mobile Number: ${mobile}</li>
            <li>Incident Description: ${incident}</li>
            <li>Complaint Type: ${complaintType}</li>
        </ul>
    `;
}

function generateReferenceId() {
    return Math.random().toString(36).substring(7);
}
function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const locationResult = document.getElementById('locationResult');
    locationResult.innerHTML = `Your current location: Latitude ${latitude}, Longitude ${longitude}`;
}

function showError(error) {
    const locationResult = document.getElementById('locationResult');
    
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationResult.innerHTML = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationResult.innerHTML = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationResult.innerHTML = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationResult.innerHTML = "An unknown error occurred.";
            break;
    }
}
// Existing JavaScript code

function generatePDF() {
    const container = document.getElementById('container');

    html2pdf(container, {
        margin: 10,
        filename: 'FIR_Details.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}

