const steps_cont= document.querySelector('.steps-list')
const button_submit_card= document.querySelector('.card-front-submit-btn')
const card_reverse= document.querySelector('.card-inactive')

const card_front= document.querySelector('.card-front')
let arrayfake= Array.from({length:5},(v,i)=>i+1)
let steps_selected=0
let lastactive=null
let view_rating_data= document.querySelector('.card-rating-data')

view_rating_data.textContent=steps_selected
arrayfake.forEach((e)=>{
    let step= document.createElement('button')
    step.textContent=e
    step.className='step-icon'
    step.addEventListener('click',(event)=>{
        if(lastactive){
            lastactive.classList.remove('active-step')
        }
        lastactive= event.currentTarget
        steps_selected=Number(event.currentTarget.textContent)
        step.classList.add('active-step')
        view_rating_data.textContent=steps_selected
    })
    steps_cont.append(step)
})
button_submit_card.addEventListener('click',(e)=>{
    card_front.hidden=true
    card_reverse.hidden=false
    card_reverse.className='card-reverse'
})
