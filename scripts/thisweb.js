document.addEventListener('DOMContentLoaded', function () {
    // let options = {};
    // let elems = document.querySelectorAll('.sidenav');
    // let instances = M.Sidenav.init(elems, options);
    console.log('1processing...');
    M.AutoInit();
    console.log('1processing...');
    var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
    console.log('1processing...');
    // M.toast({html: toastHTML});
    let instance = M.toast({html: toastHTML});
    console.log('1processing...');
    console.log(instance.timeRemaining);
    console.log('1processing...');
});