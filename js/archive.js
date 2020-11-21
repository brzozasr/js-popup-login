export let archive = {
    card: `
    <div class="arch-card">
        <img class="arch-unarchive" src="img/unarchive.png" alt="^">
    </div>
    `,

    mainDiv: document.getElementById('arch-main'),

    moveButton: document.getElementById('arch-move'),

    moveButtonAddListener: function () {
        archive.moveButton.addEventListener('click', this.hidSowArchive);
    },

    hidSowArchive: function () {
        let classMain = archive.mainDiv.className;
        if (classMain === 'arch-main-hide') {
            archive.moveButton.removeAttribute('src');
            archive.moveButton.setAttribute('src', 'img/right.png');
            archive.mainDiv.classList.remove('arch-main-hide');
            archive.mainDiv.classList.add('arch-main-show');
        } else if (classMain === 'arch-main-show') {
            archive.moveButton.removeAttribute('src');
            archive.moveButton.setAttribute('src', 'img/left.png');
            archive.mainDiv.classList.remove('arch-main-show');
            archive.mainDiv.classList.add('arch-main-hide')
        }
    },

    addArchiveEventListener: function () {
        archive.moveButtonAddListener();
    },
};