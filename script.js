document.addEventListener('DOMContentLoaded', () => {
    const videoContainer = document.querySelector('.video-container');
    let position = 0;

    function floatAnimation() {
        position = Math.sin(Date.now() / 1000) * 10;
        videoContainer.style.transform = `translateY(${position}px)`;
        requestAnimationFrame(floatAnimation);
    }

    floatAnimation();

    // Add hover effect to artist info
    const artistInfo = document.querySelector('.artist-info');
    artistInfo.addEventListener('mouseenter', () => {
        artistInfo.style.transform = 'scale(1.05)';
        artistInfo.style.transition = 'transform 0.3s ease';
    });

    artistInfo.addEventListener('mouseleave', () => {
        artistInfo.style.transform = 'scale(1)';
    });
});