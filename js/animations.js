export function animations() {

  const heroSection = document.querySelector('.hero-section');
  const videoSection = document.querySelector('.video-section');

  const aboutSection = document.querySelector('#about');
  const stylesSection = document.querySelector('#styles');

  const artistsSection = document.querySelector('#artists');
  const artistItems = document.querySelectorAll('.artist-box');

  const studioSection = document.querySelector('#studio');
  const flashSection = document.querySelector('#flash');
  const contactMain = document.querySelector('#contact');

  function registerScrollPlugins() {
    gsap.registerPlugin(ScrollTrigger);
  }

  function createHeroScrollAnimation() {
    if (!heroSection) {
      return;
    }

    gsap.from(heroSection, {
      scrollTrigger: {
        trigger: heroSection,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createVideoScrollAnimation() {
    if (!videoSection) {
      return;
    }

    gsap.from(videoSection, {
      scrollTrigger: {
        trigger: videoSection,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createAboutScrollAnimation() {
    if (!aboutSection) {
      return;
    }

    gsap.from(aboutSection, {
      scrollTrigger: {
        trigger: aboutSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 80,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createStylesScrollAnimation() {
    if (!stylesSection) {
      return;
    }

    gsap.from(stylesSection, {
      scrollTrigger: {
        trigger: stylesSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 70,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createArtistsScrollAnimation() {
    if (!artistsSection || artistItems.length === 0) {
      return;
    }

    gsap.from(artistItems, {
      scrollTrigger: {
        trigger: artistsSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 50,
      duration: 0.9,
      ease: 'power2.out',
      stagger: 0.15
    });
  }

  function createStudioScrollAnimation() {
    if (!studioSection) {
      return;
    }

    gsap.from(studioSection, {
      scrollTrigger: {
        trigger: studioSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createFlashScrollAnimation() {
    if (!flashSection) {
      return;
    }

    gsap.from(flashSection, {
      scrollTrigger: {
        trigger: flashSection,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function createContactScrollAnimation() {
    if (!contactMain) {
      return;
    }

    gsap.from(contactMain, {
      scrollTrigger: {
        trigger: contactMain,
        start: 'top 80%',
        toggleActions: 'play none none none'
      },
      opacity: 0,
      y: 60,
      duration: 1,
      ease: 'power2.out'
    });
  }

  function initScrollAnimations() {
    registerScrollPlugins();
    createHeroScrollAnimation();
    createVideoScrollAnimation();
    createAboutScrollAnimation();
    createStylesScrollAnimation();
    createArtistsScrollAnimation();
    createStudioScrollAnimation();
    createFlashScrollAnimation();
    createContactScrollAnimation();
  }

  initScrollAnimations();

}