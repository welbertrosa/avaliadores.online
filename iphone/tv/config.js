document.title = 'Mercado Livre Ofertas'

const config = {
  title: 'Apple iPhone 11 (128 GB) - Preto',
  buyUrl: 'https://mercadopago-2.finalizarcompra.com/r/X21F7G714hJg28NAp6',
  // buyUrl: 'https://checkout.pagarsuacobranca.online/checkout/?checkoutName=televisao',
  images: [
    'https://http2.mlstatic.com/D_NQ_NP_656548-MLA46114829749_052021-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_863080-MLA74244307697_012024-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_971922-MLA46114829752_052021-O.webp',
    'https://http2.mlstatic.com/D_NQ_NP_990382-MLA46114990400_052021-O.webp'
  ],
  originalPrice: 'R$ 2499,90',
  newPrice: 'R$ 97,00',
  discount: '90%',
  portion: '6x R$ 39,98 sem juros',
  banner: '',
  anotherProduct: 'https://promoeofertasml.online/arcond'
}

function redirect(url) {
  window.open(url)
}

window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.attachment-full.size-full.wp-image-573').setAttribute('srcset', config.banner)
  document.querySelector('.discount').textContent = config.discount
  document.querySelector('.portion').textContent = config.portion
  document.querySelector('del').textContent = config.originalPrice
  document.querySelector('.realPrice').textContent = config.newPrice
  document.querySelector('.perfume').setAttribute('onclick', `redirect('${config.anotherProduct}')`)


  document.querySelectorAll('.elementor-button.elementor-button-link.elementor-size-sm').forEach((el) => el.href = config.buyUrl)

  document.querySelectorAll('.productName').forEach(el => el.innerHTML = config.title)

  const SwiperItems = document.querySelector('.swiper-wrapper').innerHTML = config.images.map((image, index) => {
    return `
    <div class="swiper-slide" role="group" aria-roledescription="slide" aria-label="${index + 1} of ${config.images.length}">
      <figure class="swiper-slide-inner"><img decoding="async" class="swiper-slide-image" src="${image}" alt="6a30ab766311bfba4edfb0d94d0c2575.webp" /></figure>
    </div>
    `
  }).join('')

  let items = document.querySelectorAll('.swiper-slide-inner')
  config.images.forEach((image, index) => {
    if (!SwiperItems[index]) return
    SwiperItems[index].querySelector('img').src = image
  })
  // document.querySelector('.elementor-image-carousel.swiper-wrapper').innerHTML = config.images.map((image, index) => {
  //   return `
  //     <div class="swiper-slide swiper-slide-duplicate swiper-slide-next swiper-slide-duplicate-prev" role="group" aria-roledescription="slide" aria-label="${index + 1} / ${config.images.length}" data-swiper-slide-index="${index + 1}" style="width: 373px;" aria-hidden="true" inert="">
  //     <figure class="swiper-slide-inner">
  //       <img decoding="async" class="swiper-slide-image" src="${image}" alt="4fe9b96b673c46b18b24af55b355cd9f.webp">
  //     </figure>
  //     </div>
  //   `
  // }).join(' ') 
})
