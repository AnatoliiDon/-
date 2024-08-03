const feedbackFormEl = document.querySelector('.feedback-form');
let formData = {};

const fillFormFields = () => {
    const formDataFromLs = JSON.parse(localStorage.getItem('feedback-form-state'));
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
    const fieldName = event.target.name.trim();
    const fieldValue = event.target.value.trim();

    formData[fieldName] = fieldValue;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

const onFormSubmit = event => {
    event.preventDefault();
          if (feedbackFormEl.elements.email.value === '' || feedbackFormEl.elements.message.value === '') {
              alert('Заповніть всі поля');
              return;
    }
    event.target.reset();
    localStorage.removeItem('feedback-form-state');
    console.log(formData);
    formData = {};
}

feedbackFormEl.addEventListener('input', onFormFieldInput);
feedbackFormEl.addEventListener('submit', onFormSubmit);