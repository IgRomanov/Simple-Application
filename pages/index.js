const option = document.querySelector('.form__selection');
const options = document.querySelector('.form__option');
const input = document.querySelector('.form__input');
const submitBtn = document.querySelector('.form__button');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const { value } = input;
    if (!!value) { 
        const currentOption = option.querySelector('[value="' + option.value + '"]');
        currentOption.text = value;
        currentOption.value = value;
    } else {
        input.classList.add('form_redline');
        submitBtn.classList.add('form_redline-btn');
    }
});

option.addEventListener('change', (e) => {
    input.value = e.target.value;
});

input.addEventListener('input', () => {
    input.classList.remove('form_redline');
    submitBtn.classList.remove('form_redline-btn');
});