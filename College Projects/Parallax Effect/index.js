document.addEventListener('mousemove', parallax);
function parallax(e){
    this.querySelectorAll('.mouse').forEach((shift) => {
        const pos = shift.getAttribute('value');   
        const x = (window.innerWidth - e.pageX   * pos) / 90;
        const y = (window.innerHeight - e.pageY * pos) / 90;
        shift.style.transform = `translateX(${x}px) translateY(${y}px)`
    });
}