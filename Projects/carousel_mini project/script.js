const images = [
    'https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
];

const n = images.length;
const flexContainer = document.getElementById('flex-container');
const leftButton = document.getElementById('left-btn');
const rightButton = document.getElementById('right-btn');

const containerWidth = 80;


for(let i =0; i<n;i++){
    const newImg = document.createElement('img');
    newImg.src = images[i];
    newImg.classList.add('img-style')
    flexContainer.appendChild(newImg);
}

let curPosition = 0;
leftButton.addEventListener('click',()=>{
    if(curPosition > 0){
        curPosition--;
    }else{
        curPosition = n-1;
    }
    showImg();
})

rightButton.addEventListener('click',()=>{
    if(curPosition < n-1){
        curPosition++;
    }else{
        curPosition = 0;
    }
    showImg();
})

function showImg(){
    const translateXDistance = -curPosition * containerWidth;
    flexContainer.style.transform = `translateX(${translateXDistance}vw)`;
}

