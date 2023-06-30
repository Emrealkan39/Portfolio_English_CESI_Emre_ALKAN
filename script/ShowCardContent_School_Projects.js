let previewContainer = document.querySelector('.preview-school-project');
let previewBox = previewContainer.querySelectorAll('.preview');

document.querySelectorAll('.card-wrapper .card-project').forEach(skills =>(
    skills.onclick = () =>{
        previewContainer.style.display = 'flex';
        let name = skills.getAttribute('data-name');
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