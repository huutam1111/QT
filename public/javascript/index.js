
var items = document.querySelectorAll('.slide-typical .item');

let active = 0;
function loadShow() {

    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
}


fetch("/getAll")
    .then((response) => response.json())
    .then((data) => {
        allDuAn = data
        initDuAn(data)
    });
const initDuAn = (data) => {
    var mainSlide = document.querySelector(".slide-typical")
    console.log(data);
    data.map((tmp,index) => {
        if (tmp.typical === 1) {
            console.log(tmp);
            let contentAll = ``
                    let count = 0

                    tmp.content.split('\n').map(tmp2=>{
                        if(count <3){
                            let title = tmp2.split(':')[0]
                        let content = tmp2.split(':')[1]
                        contentAll += `<p style="font-size:12px"><strong style="color:#00529b"> ${title.toUpperCase()} </strong>: <span class="">${content}</span> </p>`
                        }
                        count++
                    })
            mainSlide.innerHTML +=
                `<a href = "/chi-tiet.html?id=${index}"><div class="item">
        <div class="img_item" style="background-image: url('${tmp.image[0]}');
    background-size: cover;"></div>

        <div style = "padding: 20px">
          <p style="color:#00529b"><strong>${tmp.title.toUpperCase()}</strong></p>
          ${contentAll}
        </div>
      </div></a>`
        }
    })
    mainSlide.innerHTML += `
   <button id="next-typical">></button>
                  <button id="prev-typical"><</button>
   `
    let next = document.getElementById('next-typical');
    let prev = document.getElementById('prev-typical');
    items = document.querySelectorAll('.slide-typical .item');
    active = Math.floor(items.length/2)
    next.onclick = function () {
        active = active + 1 < items.length ? active + 1 : active;
        loadShow();
    }
    prev.onclick = function () {
        active = active - 1 >= 0 ? active - 1 : active;
        loadShow();
    }
    loadShow();

}