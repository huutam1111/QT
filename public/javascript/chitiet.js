const item = window.location.search.split("=")[1]
const divContent = document.querySelector(".text-about-info")


const activeImg = (tmp)=>{
  console.log(tmp);
  document.querySelector("#imgActive").classList.add("activeImg") 
  setTimeout(()=>{
  document.querySelector("#imgActive").classList.remove("activeImg")

  },1000)
  document.querySelector("#imgActive").setAttribute("src", tmp)
 
}
fetch("/getAll" )
  .then((response) => response.json())
  .then((data) => {
    data = data[Number(item)]
    document.querySelector("#hdtitle").textContent = data.title
    document.querySelector(".title_detail").innerText = data.title
    console.log(data);
    data.content.split('\n').map(tmp=>{
        let title = tmp.split(':')[0]
        let content = tmp.split(':')[1]
        divContent.innerHTML += `<p><strong>${title.toUpperCase()}:</strong> <span class=""> ${content}</span> </p>`
        
    })
    document.querySelector(".slide-current").style.backgroundImage = `url('${data.image[0]}')`;
    const listImg = document.querySelector(".listImg")
    activeImg(data.image[0])

    data.image.map((tmp,index)=>{
      if(tmp !== null){
        listImg.innerHTML += `
        <div class="kimg kimgwidth" ><img onclick = "activeImg('${tmp}')" data-kitem="${index}"
                                          src="${tmp}">
                                  </div>
        `
      }
     
    })
  
  });

  