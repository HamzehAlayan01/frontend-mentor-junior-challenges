

let cardSection = document.querySelector("section");
let dailyTimeFrame = document.getElementById("daily");
let weeklyTimeFrame = document.getElementById("weekly");
let monthlyTimeFrame = document.getElementById("monthly");
let selectedTimeFrame = 'daily';
let data;

dailyTimeFrame.addEventListener('click', (e)=>{
    dailyTimeFrame.classList.add("selected");
    weeklyTimeFrame.classList.remove("selected");
    monthlyTimeFrame.classList.remove("selected");
    selectedTimeFrame = 'daily'
})

weeklyTimeFrame.addEventListener('click', (e)=>{
    dailyTimeFrame.classList.remove("selected");
    weeklyTimeFrame.classList.add("selected");
    monthlyTimeFrame.classList.remove("selected");
    selectedTimeFrame = 'weekly'
})

monthlyTimeFrame.addEventListener('click', (e)=>{
    dailyTimeFrame.classList.remove("selected");
    weeklyTimeFrame.classList.remove("selected");
    monthlyTimeFrame.classList.add("selected");
    selectedTimeFrame = 'monthly';
})

async function getDataAndPopulateDom(){
    let response = await fetch('/data.json');
    let data = await response.json();
    data = Object.entries(data);
    console.log(data);
    
    if(data){
        data.forEach((item)=>{
            let cardDiv = document.createElement('div');
            let cardImg = document.createElement('img');
            let cardTitleDiv = document.createElement('div');
            let cardTimeTracked = document.createElement('h1');
            let cardPreviousTimeTracked = document.createElement('p');
            cardDiv.classList.add("card");
            cardTitleDiv.classList.add("card__title")
        
        
            cardTitleDiv.innerHTML = `<p>${item[1].title}</p> <img src="images/icon-ellipsis.svg" alt="ellipsis"`;
            
            if(selectedTimeFrame === 'daily'){
                cardTimeTracked.innerHTML = `${item[1].timeframes.daily.current}hrs`;
                cardPreviousTimeTracked.innerHTML = `Yesterday - ${item[1].timeframes.daily.previous}hrs`;
            }
        
            else if(selectedTimeFrame === 'weekly'){
                cardTimeTracked.innerHTML = `${item[1].timeframes.weekly.current}hrs`;
                cardPreviousTimeTracked.innerHTML = `Last Week - ${item[1].timeframes.weekly.previous}hrs`;
            }
        
            else if(selectedTimeFrame === 'monthly'){
                cardTimeTracked.innerHTML = `${item[1].timeframes.monthly.current}hrs`;
                cardPreviousTimeTracked.innerHTML = `Last Month - ${item[1].timeframes.monthly.previous}hrs`;
            }
            cardDiv.appendChild(cardImg);
            cardDiv.appendChild(cardTitleDiv);
            cardDiv.appendChild(cardTimeTracked);
            cardDiv.appendChild(cardPreviousTimeTracked);
            cardSection.appendChild(cardDiv);
        })
}
}

document.addEventListener('DOMContentLoaded', getDataAndPopulateDom());



            

