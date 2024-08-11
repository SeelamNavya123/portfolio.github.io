document.querySelectorAll('.collapsible-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = document.querySelector(`#${header.id.replace('-header', '-content')}`);
        content.style.display = content.style.display === 'none' ? 'block' : 'none';
    });
});

function toggleImage(imageId) {
    const image = document.getElementById(imageId);
    image.style.display = image.style.display === 'none' ? 'block' : 'none';
}

function viewResume() {
    const fileInput = document.getElementById('resume-file');
    const file = fileInput.files[0];

    if (file) {
        const fileUrl = URL.createObjectURL(file);
        const previewDiv = document.getElementById('resume-preview');
        previewDiv.innerHTML = `
            <iframe src="${fileUrl}" frameborder="0"></iframe>
            <p class="mt-2">Viewing: ${file.name}</p>
        `;
    } else {
        alert('Please upload a resume file first.');
    }
}



