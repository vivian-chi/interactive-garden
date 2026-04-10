/**
 * Interactive Garden
 * Logic for hover-triggered 3D bloom animations
 */

document.addEventListener('DOMContentLoaded', () => {
    const hitAreas = document.querySelectorAll('.hit-area');
    const videos = document.querySelectorAll('.zone-video');
    const loader = document.querySelector('.loader');
    
    let loadedVideos = 0;
    const totalVideos = videos.length;

    // 1. Loading Management
    function checkAllLoaded() {
        loadedVideos++;
        if (loadedVideos >= totalVideos) {
            // Give it a tiny extra beat for smooth transition
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500);
        }
    }

    videos.forEach(video => {
        if (video.readyState >= 3) {
            checkAllLoaded();
        } else {
            video.addEventListener('canplaythrough', checkAllLoaded, { once: true });
        }
    });

    // Fallback: If videos take too long, reveal anyway after 5 seconds
    setTimeout(() => {
        if (!loader.classList.contains('hidden')) {
            loader.classList.add('hidden');
            console.warn('Loading timeout: Revealing garden anyway.');
        }
    }, 5000);

    // 2. Interaction Logic
    hitAreas.forEach(hit => {
        const videoId = hit.dataset.video;
        const video = document.getElementById(videoId);
        
        let isPlaying = false;
        let isHovering = false;

        function startInteraction() {
            if (isPlaying) return;
            
            isPlaying = true;
            video.currentTime = 0;
            video.classList.add('playing');
            
            const playPromise = video.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.error("Video play failed:", error);
                    isPlaying = false;
                    video.classList.remove('playing');
                });
            }
        }

        // Mouse Events
        hit.addEventListener('mouseenter', () => {
            isHovering = true;
            startInteraction();
        });

        hit.addEventListener('mouseleave', () => {
            isHovering = false;
        });

        // Touch Events
        hit.addEventListener('touchstart', (e) => {
            // Prevent default to avoid ghost clicks/scrolls if needed
            // but keep it passive if possible for performance
            startInteraction();
        }, { passive: true });

        // Loop / Reset logic
        video.addEventListener('ended', () => {
            video.classList.remove('playing');
            isPlaying = false;
            
            // If user is still hovering, trigger again after a brief pause
            if (isHovering) {
                setTimeout(startInteraction, 100);
            }
        });
    });
});
