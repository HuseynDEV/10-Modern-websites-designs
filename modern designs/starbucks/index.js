let images=document.querySelectorAll('.footer img')
let main_img=document.querySelector('.main_img')


let data;
images.forEach(data=>{

  data.addEventListener('click', (e)=>{

    data=e.target.src
    console.log(data)

    main_img.src=data


  })
})


