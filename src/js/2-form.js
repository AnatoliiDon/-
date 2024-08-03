const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {};

const fillFormFields = () => {
    const formDataFromLs = JSON.parse(localStorage.getItem('local-form-data'));
    
    if (formDataFromLs === null) {
        return;
    }

    formData = formDataFromLs;

    for (const key in formDataFromLs) {
        if (formDataFromLs.hasOwnProperty(key)) {
            feedbackFormEl.elements[key].value = formDataFromLs[key];
        }
    }
};

fillFormFields();


const onFormFieldInput = event => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    formData[fieldName] = fieldValue;
    localStorage.setItem('local-form-data', JSON.stringify(formData));
}

const onFormSubmit = event => {
    event.preventDefault();
    event.target.reset();
    localStorage.removeItem('local-form-data');
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);