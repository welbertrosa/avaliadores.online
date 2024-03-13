document.title = 'Mercado Livre Ofertas'

const config = {
  title: 'Mix 3 Ovos Lacta - Mais Sabor (COMPRE 1 LEVE 3)',
  buyUrl: 'https://vitrini-ofertas.finalizarcompra.com/r/G6m67yn89ks1zO64sFC',
  // buyUrl: 'https://checkout.pagarsuacobranca.online/checkout/?checkoutName=televisao',
  images: [
    'https://cdn.shopify.com/s/files/1/0840/3514/1930/files/CRS-1.png?v=1708982065',
    'https://cdn.shopify.com/s/files/1/0840/3514/1930/files/CRS-2_webp.png?v=1708982065',
    'https://cdn.shopify.com/s/files/1/0840/3514/1930/files/CRS-3_webp.png?v=1708982065',
    'https://cdn.shopify.com/s/files/1/0840/3514/1930/files/CRS-4_webp.png?v=1708982065'
  ],
  originalPrice: 'R$ 299,90',
  newPrice: 'R$ 99,90',
  discount: '90%',
  portion: '6x R$ 39,98 sem juros',
  banner: 'https://cdn.shopify.com/s/files/1/0791/7695/8225/files/SHOPEE_KIT_OVOS_DE_PASCOA_LP.png?v=1709085233',
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
