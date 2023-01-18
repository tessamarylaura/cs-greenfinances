function logMsg(message) {
    if (typeof console == "object") console.log(message);
    else alert(message);
}
$(document).ready(function() {
    $.CreditSense.Iframe({
        client: "BEEL002",
        elementSelector: "#creditSenseIFrame",
        enableDynamicHeight: true,
        params: {
            appRef: '<your unique app reference>', // Set this value to a unique reference for the application
            uniqueAppRef: true // indicates that the appRef provided is unique
            cssOverride: "styles/flow-override.css"
        },
        callback: function(response, data) {
            switch (response) {
                case "99": // Example status code (Bank status success)
                    logMsg('Bank details collected successfully');
                    break;
                case "100": // Example status code
                    onApplicationSuccess();
                    break;
            }
        }
    });
});