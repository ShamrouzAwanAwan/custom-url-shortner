try {

    function getUrlParams() {
        // Get the query string from the URL.
        var queryString = window.location.search.substring(1);

        // Split the query string into an array of key-value pairs.
        var params = queryString.split('&');
        if (queryString < 1) {
            window.location.href = "http://moviecraz.unaux.com";
        }
        // Create an object to store the parameters.
        var urlParams = {};

        // Loop through the parameters array and add each key-value pair to the object.
        for (var i = 0; i < params.length; i++) {
            var param = params[i].split('=');
            urlParams[param[0]] = param[1];
        }

        // Return the object.
        return urlParams;
    }
    var linkURL = getUrlParams()['zxr'] + getUrlParams()['debler'] + getUrlParams()['ext'];
    document.title = "Download " + getUrlParams()['toDownload'] + " || Movie Craz"

    document.querySelector('.download-name').textContent = getUrlParams()['toDownload'];
} catch (error) {
    alert(error);
}
const button1 = document.querySelector(".verify span");
const button2 = document.querySelector("#generatedLink span");




const timer = setInterval(() => {
    button1.textContent--;
    if (button1.textContent <= 0) {
        document.querySelector(".verify").href = "#generatedLink";
        document.querySelector(".verify").innerHTML = "Goto generate link";
        document.querySelector(".verify").title = "Click to generate the link for download";
        generatedLink.style.display = `unset`;
        document.querySelector(".verify").style.cursor = "pointer";

        button.onclick = scrollDown;


    }
}, 1000);

const button = document.querySelector('.verify');

function scrollDown() {
    const secondTimer = setInterval(() => {
        generatedLink.style.visibility = `visible`;
        button2.textContent--;
        if (button2.textContent <= 0) {
            generatedLink.innerHTML = "Download";
            generatedLink.title = "Click to download your content";
            generatedLink.href = linkURL;
            generatedLink.style.cursor = "pointer";
            clearInterval(secondTimer);
        }
    }, 1000);
    clearInterval(timer);
}