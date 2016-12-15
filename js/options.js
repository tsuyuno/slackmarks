(function() {

    var restoreAll = function() {
        document.getElementById('request_url').value = localStorage.getItem('request_url');
        document.getElementById('channel').value = localStorage.getItem('channel');
        document.getElementById('botname').value = localStorage.getItem('botname');
    };
    
    var saveAll = function() {
        localStorage.setItem('request_url', document.getElementById('request_url').value);
        localStorage.setItem('channel', document.getElementById('channel').value);
        localStorage.setItem('botname', document.getElementById('botname').value);
    };

    var init = function() {
        restoreAll();
        document.getElementById('save').addEventListener('click', saveAll);
    };

    init();

})();