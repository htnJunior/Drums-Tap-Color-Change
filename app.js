window.addEventListener('load', () => {
    const sound = document.querySelectorAll('.sound')
    const pads = document.querySelectorAll('.pads div')
    const colors = [
        '#f26846',
        '#a9d922',
        '#a9d9f2',
        '#f9d9a2',
        '#61325b',
        '#2419b9'
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function(){
            sound[index].currentTime = 0
            sound[index].play()
            changeColor(index)
        })
    });

    const changeColor = (index) => {
        document.body.style.backgroundColor = colors[index]
    }
})