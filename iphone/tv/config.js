document.title = 'Mercado Livre Ofertas'

const config = {
  title: 'Smart TV 50 Polegadas 4K LG UHD ThinQ AI2',
  buyUrl: 'https://pagarseupedido.online/checkouts/endereco_tv/',
  // buyUrl: 'https://checkout.pagarsuacobranca.online/checkout/?checkoutName=televisao',
  images: [
    'https://cdn.discordapp.com/attachments/707344457598500967/1200572881743130624/tv1.webp?ex=65c6aba0&is=65b436a0&hm=a9470b2db9b73b749084d1cb75dc50d463aa4a0775ec71b41f24d3ca5d25d43a&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1200572882225471628/tv2.webp?ex=65c6aba0&is=65b436a0&hm=c489e9be61f026b6cd715c2a06b7213feb3d2317fb89f1ba8a869734202cadfa&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1200572882602967070/tv3.webp?ex=65c6aba0&is=65b436a0&hm=f2ad73460e1594fdf695eeb0a26fcd8081c3d8770c960579f8f2c1066129f6f7&',
    'https://cdn.discordapp.com/attachments/707344457598500967/1200572883194355802/tv4.webp?ex=65c6aba0&is=65b436a0&hm=b316d255e4c96a691184f5d3ff0f4b188993ef9a4dfc9b199dc4855fb0fc3d89&'
  ],
  originalPrice: 'R$ 2499,90',
  newPrice: 'R$ 247,00',
  discount: '90%',
  portion: '6x R$ 39,98 sem juros',
  banner: 'https://cdn.discordapp.com/attachments/677934587070119946/1200637715658588170/tvvvvv.png?ex=65c6e802&is=65b47302&hm=a672cd5395a073a4e829a101b3d6f1117acc20fabb8b094fa9c544cc3f1df71d&',
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
