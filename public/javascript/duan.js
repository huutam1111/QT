console.log("Du an");
var itemActive 
var allDuAn = [
    
]

  if( window.location.pathname.includes("chi-tiet")){
    if(itemActive === undefined){
        window.location = 'du-an.html'
    }
}else{
    fetch("/getAll")
  .then((response) => response.json())
  .then((data) => {
    allDuAn = data
    initDuAn(data)
  });
    
}
const type = Number(window.location.search.split('=')[1]) 


const initDuAn = (data)=>{
    console.log(data);
    let frameDuAn = document.querySelector(".wrap-project-list")
    if(type === 0 || type === 1 || type ===2){
        data.map((tmp,index)=>{
            if(tmp.type === type){
                let contentAll = ``
                let count = 0
        
                tmp.content.split('\n').map(tmp=>{
                    if(count <3){
                        let title = tmp.split(':')[0]
                    let content = tmp.split(':')[1]
                    contentAll += `<p><strong> ${title.toUpperCase()} </strong>: <span class="">${content}</span> </p>`
                    }
                    count++
                })
                let elmItem = `<div class="project-item ani-item"><a
                href="http://${window.location.host}/chi-tiet.html?id=${index}"
                class="link-load">
                <div class="project-pic">
                    <div class="pic-img lazy-img" style = "background-image: url('${tmp.image[0]}');"><img
                            data-src="${tmp.image[0]}"
                            alt="Vinhomes Central Park"></div>
                </div>
                <div class="project-text">
                    <div class="title-project text-ani-item blue">
                        <p class="title_du_an">${tmp.title}</p>
                    </div>
                    <div class="project-text-inside">
                        `+contentAll+`
                        
                    </div>
                </div><span class="view-project">Xem chi tiết</span>
            </a></div>`
                frameDuAn.innerHTML += elmItem
            }
            
        })
    }else{
        data.map((tmp,index)=>{
        
            let contentAll = ``
            let count = 0
    
            tmp.content.split('\n').map(tmp=>{
                if(count <3){
                    let title = tmp.split(':')[0]
                let content = tmp.split(':')[1]
                contentAll += `<p><strong> ${title.toUpperCase()} </strong>: <span class="">${content}</span> </p>`
                }
                count++
            })
            let elmItem = `<div class="project-item ani-item"><a
            href="http://${window.location.host}/chi-tiet.html?id=${index}"
            class="link-load">
            <div class="project-pic">
                <div class="pic-img lazy-img" style = "background-image: url('${tmp.image[0]}');"><img
                        data-src="${tmp.image[0]}"
                        alt="Vinhomes Central Park"></div>
            </div>
            <div class="project-text">
                <div class="title-project text-ani-item blue">
                    <p class="title_du_an">${tmp.title}</p>
                </div>
                <div class="project-text-inside">
                    `+contentAll+`
                    
                </div>
            </div><span class="view-project">Xem chi tiết</span>
        </a></div>`
            frameDuAn.innerHTML += elmItem
        })
    }
}


