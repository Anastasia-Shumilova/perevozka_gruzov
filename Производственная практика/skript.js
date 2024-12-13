document.addEventListener('DOMContentLoaded', function() {
    const openFancybox = document.getElementById('open-fancybox');
    const openFancybox2 = document.getElementById('open-fancybox2');
    const openPolicy = document.getElementById('open-policy');


    openFancybox && openFancybox.addEventListener('click', function() {
        Fancybox.show([{ src: '#fancybox-content', type: 'inline' }]);
    });

    openFancybox2 && openFancybox2.addEventListener('click', function() {
        Fancybox.show([{ src: '#fancybox-content2', type: 'inline' }]);
    });

    openPolicy && openPolicy.addEventListener('click', function() {
        Fancybox.show([{ src: '#fancybox-content3', type: 'inline' }]);
    });
});
