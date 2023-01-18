function logMsg(status, message) {
    alert = document.getElementById('alert-message');
    alert.innerHTML = message;

    alert.classList = "";
    if (status=="success"){
        alert.classList = "success";
    } else {
        alert.classList = "failure";
    }

    alert.classList.add('activated');
    setTimeout(function() {
        alert.classList.remove('activated');
    }, 5000);
    setTimeout(function() {
        alert.classList = "";
        alert.innerHTML = "Everything is all gucci";
    }, 10000);
}

$(document).ready(function() {
    $.CreditSense.Iframe({
        client: "BEEL002",
        elementSelector: "#creditSenseIFrame",
        enableDynamicHeight: true,
        params: {
            cssOverride: "tessamarylaura.github.io/cs-greenfinances/styles/flow-override.css",
            debugBanks: true
        },
        callback: function(response, data) {
            switch (response) {
                case "99": // Example status code (Bank status success)
                    logMsg('success', 'Bank details collected successfully');
                    break;
                case "100": // Example status code
                    logMsg('success', 'We were able to successfully log in, so this part of your application is complete!');
                    break;
                case "-99":
                    logMsg('failure', "We can't contact the Credit Sense server");
                    break;
            }
        }
    });
});