
'use strict';

function mask(o, f) {
    setTimeout(function () {
        var v = telephone(o.value);
        if (v != o.value) {
            o.value = v;
        }
    }, 1);
}
function telephone(v) {
    var r = v.replace(/\D/g, "");
    r = r.replace(/^0/, "");
    if (r.length > 10) {
        r = r.replace(/^(\d\d)(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (r.length > 5) {
        r = r.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (r.length > 2) {
        r = r.replace(/^(\d\d)(\d{0,5})/, "($1) $2");
    } else {
        r = r.replace(/^(\d*)/, "($1");
    }
    return r;
}



const birthday = document.querySelector('input[name="data_nascimento"]');
birthday.setAttribute('max', new Intl.DateTimeFormat('fr-ca').format(new Date()))


birthday.addEventListener("change", (event) => {
    const ageDate = new Date(Date.now() - new Date(event.target.value));
    const year = Math.abs(ageDate.getUTCFullYear() - 1970);
    document.querySelector(`input[name="idade"]`).value = year;
});



