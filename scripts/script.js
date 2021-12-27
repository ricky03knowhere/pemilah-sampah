// Home Section
$('.home .start').on('click', () => {
  $('.home').addClass('slide-up')
})

// Trash Type Section
$('.trash-type .back').on('click', () => {
  $('.home').removeClass('slide-up')
})

$('.trash-type .next').on('click', () => {
  let isNonOrganic = $('.trash-type .toggler').is(':checked')

  if (isNonOrganic) {
    $('.non-organic').show()
    $('.organic').hide()
  } 
  else {
    $('.non-organic').hide()
    $('.organic').show()
  }

  $('.trash-type').addClass('slide-up')
})


// Non-Organic Trash Section
$('.non-organic .back').on('click', () => {
  $('.trash-type').removeClass('slide-up')
})

$('.non-organic .start').on('click', () => {
  loadingWrapper.fadeIn()
  run = true
  id = run ? setInterval(scanningHandler, 30) : false
})

$('.non-organic .rescan').on('click', () => {
  loadingWrapper.fadeIn()
  run = true
  id = run ? setInterval(scanningHandler, 30) : false

})

$('.non-organic .recycle').on('click', () => {
  $('.non-organic').addClass('slide-up')
  trashRecycling()
})


// Organic Trash Section
$('.organic .back').on('click', () => {
  $('.trash-type').removeClass('slide-up')
})

$('.organic .recycle').on('click', () => {
  $('.organic').addClass('slide-up')

  type = 'Organik'
  trashRecycling()
})



// Trash Recycling Section
$('.trash-recycle .back').on('click', () => {
  $('.non-organic').removeClass('slide-up')
  $('.organic').removeClass('slide-up')
})

$('.trash-recycle .done').on('click', () => {
  notif('info', 'Terima tasih telah menggunakan aplikasi ini.', true)
})