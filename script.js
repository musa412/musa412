function initloader() {
    const loader = document.querySelector(".loader");
    const loader_text = document.querySelector(".loader-text");
    const loader_progress = document.querySelector(".loader-progress");
    
    gsap.to(loader_text,
        {
            opacity: 1,
            duration: 0.7,
            ease: "power2.out",
        }
    )
    gsap.to(loader_progress,
        {
            width: "100%",
            duration: 2,
            ease: "power2.inOut",
            onComplete: () => {
                gsap.to(loader,
                    {
                        opacity:0,
                        duration:0.7,
                        onComplete: () => {
                            loader.style.display = "none";
                        }
                    }
                )
            }
        }
    )
}
window.addEventListener("load", initloader);