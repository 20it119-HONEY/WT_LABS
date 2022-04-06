let selection = document.querySelector('select');
let container = document.getElementById('backgroung_Image')
console.log(container)

selection.addEventListener('change', ()=>{
    var city = selection.options[selection.selectedIndex].value
    if(city=="surat"){
        container.classList.remove("ahmedabad","nadiad","anand")
        container.classList.add("surat");
    }
    else if(city=="ahmedabad"){
        container.classList.remove("surat","nadiad","anand")
        container.classList.add("ahmedabad");
    }
    else if(city=="nadiad"){
        container.classList.remove("surat","ahmedabad","anand")
        container.classList.add("nadiad");
    }
    else{
        container.classList.remove("surat","nadiad","ahmedabad")
        container.classList.add("anand");
    }

})

