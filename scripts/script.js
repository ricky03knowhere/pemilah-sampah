// Home Section
$('.home .start').on('click', () => {
  $('.home').addClass('slide-up')
})

// Trash Type Section
$('.trash-type .back').on('click', () => {
  $('.home').removeClass('slide-up')
})

$('.trash-type .next').on('click', () => {
  $('.trash-type').addClass('slide-up')
})
$('.organic .back').on('click', () => {
  $('.trash-type').removeClass('slide-up')
})


// Organic Trash Section
$('.organic .start').on('click', () => {
  loadingWrapper.fadeIn()
  run = true
  id = run ? setInterval(scanningHandler, 30) : false
})

$('.organic .rescan').on('click', () => {
  loadingWrapper.fadeIn()
  run = true
  id = run ? setInterval(scanningHandler, 30) : false

})

$('.organic .recycle').on('click', () => {
  $('.organic').addClass('slide-up')
  run = true
  id = run ? setInterval(recyclingHandler, 30) : false

  $('.trash-recycle .reused').html(`<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  `)

  imgReuse.prop('src', '/img/reuse.png')
  imgReuse.css('animation', 'rotate 1s infinite')
  $('.trash-recycle .btn-wrapper').hide()
})


// Trash Recycling Section
$('.trash-recycle .back').on('click', () => {
  $('.organic').removeClass('slide-up')
})

$('.trash-recycle .done').on('click', () => {
  notif('info', 'Terima tasih telah menggunakan aplikasi ini.', true)
})