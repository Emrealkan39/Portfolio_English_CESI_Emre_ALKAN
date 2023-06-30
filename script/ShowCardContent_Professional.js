let previewContainer = document.querySelector('.preview-portfolio');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.work-list .work').forEach(works =>(
    works.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = works.getAttribute('data-name');
        previewBox.forEach(preview =>{
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    }
));

previewBox.forEach(close => {
    close.querySelector('.fa-arrow-rotate-left').onclick = () =>{
        close.classList.remove('active');
        previewContainer.style.display = 'none';
    }
});

