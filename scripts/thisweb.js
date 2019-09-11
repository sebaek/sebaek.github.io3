document.addEventListener('DOMContentLoaded', function () {
    // let options = {};
    // let elems = document.querySelectorAll('.sidenav');
    // let instances = M.Sidenav.init(elems, options);
    M.AutoInit();
    var toastHTML = '<span>I am toast content</span><button class="btn-flat toast-action">Undo</button>';
    // M.toast({html: toastHTML});
    let instance = M.toast({html: toastHTML});
    console.log(instance.timeRemaining);
});