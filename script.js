
const box_game=document.querySelector('.box_game')
const end_game=document.querySelector('.end_game')

const typeCard=[
    {
    img:"/img/knight.svg",
    name:"KNIGHT",
    back:"#5391EF",
    color:'#233E66'
    },
    {
    img:"/img/dragon.svg",
    name:"DRAGON",
    back:"#5D5360",
    color:'#231F24'
    },
    {
    img:"/img/hat.svg",
    name:"MAGE",
    back:"#925CB4",
    color:'#533466'
    },
    {
    img:"/img/herbal.svg",
    name:"HEALER",
    back:"#3BCD92",
    color:'#1D6649'
    },
    {
    img:"/img/thor.svg",
    name:"HAMMER",
    back:"#B66140",
    color:'#662F19'
    },
    {
    img:"/img/sword.png",
    name:"SWORD",
    back:"#878787",
    color:'#565656'
    },
    {
    img:"/img/potion.png",
    name:"POTION",
    back:"#A60E0E",
    color:'#FF8181'
    },
    {
    img:"/img/ghost.png",
    name:"GHOST",
    back:"#F7EADF",
    color:'#BFBFBF'
    },
    {
    img:"/img/door.png",
    name:"DOOR",
    back:"#A6530E",
    color:'#FFB31A'
    },
    {
    img:"/img/dead.png",
    name:"DEAD",
    back:"#1A1A1A",
    color:'#B8B8B8'
    },
]

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
const nowObj={
    obj:"",
    name:""
}

let all_card=20;


const endGame=()=>{
    end_game.classList.add('end')

}




const generatorCard=(leng)=>{
    let array={0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
   for (let i = 0; i < leng;) {
   let randomType= randomInteger(0,9)
    if (array[randomType]<2) {
        /* Создание карточки */
        const card_new=document.createElement('div')
        card_new.classList.add('card')
        const front=document.createElement('div')
        front.classList.add('card__front')
        front.style.background=typeCard[randomType].back;
        const img=document.createElement('img')
        img.classList.add('image')
        img.src=typeCard[randomType].img
        const name=document.createElement('div')
        name.classList.add('name');
        name.style.color=typeCard[randomType].color
        name.innerHTML=typeCard[randomType].name
        const back=document.createElement('div')
        back.classList.add('card__back')
        const image_back=document.createElement('img')
        image_back.src='/img/star.png'
    
        /* Эвент нажатия по карточке */
        card_new.addEventListener('click',()=>{
           if (card_new.classList.contains('close')) {
            card_new.classList.remove('close')
            if (nowObj.name=="") {
                nowObj.obj=card_new;
                nowObj.name=name.innerHTML;
            }else{
                if (nowObj.obj==card_new) {
                }else if (nowObj.name==name.innerHTML) {
                    nowObj.obj="",
                    nowObj.name=""
                    all_card-=2
                    if (all_card==0) {
                       setTimeout(()=>{
                        endGame()
                       },1000)
                   }
                }else{
                    
                   
                   setTimeout(()=>{
                    card_new.classList.add('close')
                    nowObj.obj.classList.add('close')
                    nowObj.obj=""
                    
                    nowObj.name=""
                    
                   },500)
                  
                }
            }
           }
        })
    
        setTimeout(()=>{
            card_new.classList.add('close')
        },1000)
    
        front.appendChild(img)
        front.appendChild(name)
        back.appendChild(image_back)
        card_new.appendChild(front)
        card_new.appendChild(back)
        box_game.appendChild(card_new)
        i++;
        array[randomType]=array[randomType]+1;
    }
    
   }
}


generatorCard(all_card)



