function toast({title='Success',message='',type='success',duration=3000}){
    const main=$('.toast__message-custom')
    if(main){
        const toast=document.createElement('div')
        const icons={
            success:'fa fa-check-circle',
            error:'fa fa-times-circle'
        }
        // auto close
        const autoClose=setTimeout(function(){
            main.removeChild(toast)
        },duration + 1000)
        //click close
       toast.onclick = function(e){
            if(e.target.closest('.message__close')){
                 main.removeChild(toast)
                clearTimeout(autoClose)
            }
       }
        const icon=icons[type]
        toast.classList.add('message',`toast--message-${type}`)
        const delay= (duration / 1000).toFixed(2)
        toast.style.animation=`animation ease 0.3s,animationFadeout linear 1s ${delay}s forwards`;
        toast.innerHTML=   ` 
                            <div class="message__icon">
                                <i class="${icon}" aria-hidden="true"></i>
                            </div>
                            <div class="message__body">
                                <h4 class="message__title">
                                    ${title}
                                </h4>
                                <p class="message__message">
                                    ${message}
                                </p>
                            </div>
                            <div class="message__close">
                                <i class="fa fa-times" aria-hidden="true"></i>
                            </div>`;
        main.appendChild(toast);
       
    }
}
function showMessage(title,message,type,duration){
    toast({
        title:title,
        message:message,
        type:type,
        duration: duration
    })
}