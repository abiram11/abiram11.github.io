const consoleMessage = "The special guest is a dragon. Close the console and prompt him in High Valyrian";

console.log(consoleMessage);

const targetPhrase = atob("ZHJhY2FyeXM=");
let typedPhrase = '';

document.addEventListener('keydown', function(event) {
    typedPhrase += event.key.toLowerCase();
    if (typedPhrase.length > targetPhrase.length) {
        typedPhrase = typedPhrase.substring(typedPhrase.length - targetPhrase.length);
    }
    if (typedPhrase === targetPhrase) {
        document.getElementById('landing-page').style.display = 'none';
        var content = document.createElement('div');
        content.id = 'content';
        content.style.display = 'flex';
        var imageContainer = document.createElement('div');
        imageContainer.id = 'image-container';
        var finalImage = document.createElement('img');
        finalImage.id = 'final-image';
        finalImage.src = 'final-image.jpg';
        finalImage.alt = 'Final Image';
        imageContainer.appendChild(finalImage);

        var gifContainer = document.createElement('div');
        gifContainer.id = 'gif-container';

        var gif = document.createElement('img');
        gif.src = 'the-gif.gif';
        gif.alt = 'Playing GIF';
        gifContainer.appendChild(gif);

        content.appendChild(imageContainer);
        content.appendChild(gifContainer);

        document.body.appendChild(content);

        // Start the fade-in immediately
        setTimeout(function() {
            imageContainer.style.opacity = 1;
        }, 0);
    }
});
