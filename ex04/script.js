function separateName(){
    let fullName = document.getElementById("full-name");
    let fullNameValue = document.getElementById("full-name").value.trim();
    let name = document.getElementById("name");
    let lastName = document.getElementById("last-name");
    const separateWords = fullNameValue.split(" ");
    name.value = separateWords[0];
    lastName.value = separateWords[1];
    fullName.value = "";
}