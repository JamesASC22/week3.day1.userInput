function submitForm(event) {
    event.preventDefault();

    let nounElem = document.querySelector("#noun");
    let verbElem = document.querySelector("#verb");
    let adjectiveElem = document.querySelector("#adjective");

    let noun = nounElem.value;
    let verb = verbElem.value;
    let adjective = adjectiveElem.value;

    let message = `Last night I ate a ${noun}, and today I just had to ${verb}. What a ${adjective} day!`;
    alert(message);
}