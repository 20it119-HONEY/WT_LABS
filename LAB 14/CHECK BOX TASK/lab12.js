function validate(forms){
    checkbox=""
    for(i=0;i<document.forms.hobbies.length;i++){
        if(document.forms.hobbies[i].checked)
        checkbox+=document.forms.hobbies[i].value+'\n'
    }
    if(checkbox=="")
    alert("Please select Min Two option")
    else
    alert(checkbox)
    return false; 
}