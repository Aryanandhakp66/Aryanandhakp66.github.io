document.addEventListener('DOMContentLoaded', function () {
    const learnMoreLinks = document.querySelectorAll('.learn-more');

    learnMoreLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            alert('Development in progress.More information will be provided soon!');
        });
    });
});