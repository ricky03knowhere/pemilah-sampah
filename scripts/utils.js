// Notiofication Handler
function notif(icon, title, isRefresh = false) {
  let refresh
  Swal.fire({
    icon: icon,
    title: title,
    confirmButtonColor: '#198754'
  }).then((result) => {
    if (result.isConfirmed) {
      refresh = isRefresh ? window.location.reload() : false
    }
  })
}

// Trash Handler Properties
let run = false
let width = 0
let id, random, type

let loadingWrapper = $('.non-organic .loader-wrapper')
let scanningProgressBar = $('.non-organic .progress-bar')
let recyclingProgressBar = $('.trash-recycle .progress-bar')
let imgReuse = $('.trash-recycle .img-reuse')

// Trash Scanning Handler
function scanningHandler() {
  random = Math.floor((Math.random() * 4) + 1)
  type = (random === 1) ? 'Metal' : (random === 2) ? 'Kertas' : (random === 3) ? 'Kaca' : 'Plastik'

  $('.non-organic .img-type').fadeIn()
  $('.non-organic .back, .non-organic .rescan, .non-organic .recycle, .non-organic .start').attr('disabled', 'disabled')

  $('.non-organic h2').html('')
  $('.non-organic .img-type').attr('src', `/img/${type}.png`)

  if (width === 100) {
    run = false
    width = 0
    $('.non-organic .back, .non-organic .rescan, .non-organic .recycle').removeAttr('disabled')

    loadingWrapper.fadeOut()
    scanningProgressBar.css('width', '0%')

    clearInterval(id);

    $('.non-organic .btn-non-organic').hide()
    $('.non-organic .btn-type').show()
    $('.non-organic h2').html(`Sampah berjenis ${type}`)

    notif('success', 'Berhasil Dipindai.')
  } else {
    width++;
    scanningProgressBar.css('width', `${width*1.4}%`)
    scanningProgressBar.html(`${width}%`)

  }

}

// Trash Recycling Handler
function recyclingHandler() {
  $('.trash-recycle h1').html(`Daur Ulang Sampah ${type}`)
  $('.trash-recycle h5').html('Mendaur ulang...')

  $('.trash-recycle .img-type').prop('src', `/img/${type}.png`)
  $('.trash-recycle .loader-wrapper').fadeIn()

  if (width === 100) {
    run = false
    width = 0

    $('.trash-recycle .reused').html('<img src="/img/garbage.png" alt="trash-type" width="200px">')
    imgReuse.prop('src', '/img/check2.gif')
    imgReuse.css('animation', 'none')

    $('.trash-recycle .loader-wrapper').fadeOut()
    $('.trash-recycle .btn-wrapper').show()

    recyclingProgressBar.css('width', '0%')
    $('.trash-recycle h5').html(`Sampah berjenis ${type} berhasil didaur ulang.`)
    clearInterval(id);

    notif('success', 'Berhasil Didaur Ulang.')

  } else {
    width++;
    recyclingProgressBar.css('width', `${width*1.4}%`)
    recyclingProgressBar.html(`${width}%`)
  }
}

// Trash Recycling Function
function trashRecycling() {
  run = true
  id = run ? setInterval(recyclingHandler, 30) : false

  $('.trash-recycle .reused').html(`<span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
  `)

  imgReuse.prop('src', '/img/reuse.png')
  imgReuse.css('animation', 'rotate 1s infinite')
  $('.trash-recycle .btn-wrapper').hide()
}