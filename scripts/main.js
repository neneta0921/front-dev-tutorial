document.addEventListener('DOMContentLoaded', () => {
  const hero = new HeroSlider('.swiper-container')
  hero.start()

  const cb = (el, inview) => {
    if (inview) {
      const ta = new TweenTextAnimation(el)
      ta.animate()
    }
  }

  const so = new ScrollObserver('.tween-animate-title', cb)

  const _inviewAnimation = (el, inview) => {
    if (inview) {
      el.classList.add('inview')
    } else {
      el.classList.remove('inview')
    }
  }

  const so2 = new ScrollObserver('.cover-slide', _inviewAnimation)

  const _navAnimation = (el, inview) => {
    const header = document.querySelector('.header')
    if (inview) {
      header.classList.remove('triggered')
    } else {
      header.classList.add('triggered')
    }
  }

  const so3 = new ScrollObserver('.nav-trigger', _navAnimation, { once: false })

  new MobileMenu()
})
