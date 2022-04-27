const ratingBtns = document.querySelectorAll('.btn-rating');
const submitBtn = document.querySelector('.btn-submit');
const feedbackBox = document.getElementById('feedback');
const thankyouBox = document.getElementById('thankyou');
const selectedRating = document.querySelector('.result-star');

ratingBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let selectedBtn = e.currentTarget;
        for(let i=0; i<ratingBtns.length; i++){
            if(ratingBtns[i].getAttribute('aria-selected') == 'true'){
                ratingBtns[i].setAttribute('aria-selected',false);
                selectedBtn.setAttribute('aria-selected',true);
                selectedRating.textContent=selectedBtn.id;
            }else{
                selectedBtn.setAttribute('aria-selected', true);
                selectedRating.textContent=selectedBtn.id;
            }
        }
    });
});

submitBtn.addEventListener('click', () => {
    feedbackBox.setAttribute('hidden', true);
    thankyouBox.removeAttribute('hidden');
});