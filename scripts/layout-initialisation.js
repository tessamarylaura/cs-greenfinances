$(document).ready(function() {
    header = document.getElementsByTagName('header')[0];
    content = '' +
        '<h1>Green Finances</h1>' +
        '<p>Helping you grow your life.</p>' +
        '<nav><ul>' +
        '    <li><a href="index.html">Home</a></li>' +
        '    <li><a href="cs.html">Credit Sense</a></li>' +
        '    <li><a href="lmsell.html">LM Seller</a></li>' +
        '    <li><a href="lmbuy.html">LM Buyer</a></li>' +
        '</ul></nav>' +
        '<hr>';
    header.innerHTML = content;
});