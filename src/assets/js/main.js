function slideToggle (t, e, o) {
  t.clientHeight === 0 ? j(t, e, o, !0) : j(t, e, o)
}
function slideUp (t, e, o) {
  j(t, e, o)
}
function slideDown (t, e, o) {
  j(t, e, o, !0)
}
function j (t, e, o, i) {
  void 0 === e && (e = 400),
  void 0 === i && (i = !1),
  (t.style.overflow = 'hidden'),
  i && (t.style.display = 'block')
  let p
  const l = window.getComputedStyle(t)
  const n = parseFloat(l.getPropertyValue('height'))
  const a = parseFloat(l.getPropertyValue('padding-top'))
  const s = parseFloat(l.getPropertyValue('padding-bottom'))
  const r = parseFloat(l.getPropertyValue('margin-top'))
  const d = parseFloat(l.getPropertyValue('margin-bottom'))
  const g = n / e
  const y = a / e
  const m = s / e
  const u = r / e
  const h = d / e
  window.requestAnimationFrame(function l (x) {
    void 0 === p && (p = x)
    const f = x - p
    i
      ? ((t.style.height = g * f + 'px'),
        (t.style.paddingTop = y * f + 'px'),
        (t.style.paddingBottom = m * f + 'px'),
        (t.style.marginTop = u * f + 'px'),
        (t.style.marginBottom = h * f + 'px'))
      : ((t.style.height = n - g * f + 'px'),
        (t.style.paddingTop = a - y * f + 'px'),
        (t.style.paddingBottom = s - m * f + 'px'),
        (t.style.marginTop = r - u * f + 'px'),
        (t.style.marginBottom = d - h * f + 'px')),
    f >= e
      ? ((t.style.height = ''),
        (t.style.paddingTop = ''),
        (t.style.paddingBottom = ''),
        (t.style.marginTop = ''),
        (t.style.marginBottom = ''),
        (t.style.overflow = ''),
        i || (t.style.display = 'none'),
        typeof o === 'function' && o())
      : window.requestAnimationFrame(l)
  })
}

const sidebarItems = document.querySelectorAll('.sidebar-item.has-sub')
for (var i = 0; i < sidebarItems.length; i++) {
  const sidebarItem = sidebarItems[i]
  sidebarItems[i]
    .querySelector('.sidebar-link')
    .addEventListener('click', function (e) {
      e.preventDefault()

      const submenu = sidebarItem.querySelector('.submenu')
      if (submenu.classList.contains('active')) submenu.style.display = 'block'

      if (submenu.style.display == 'none') submenu.classList.add('active')
      else submenu.classList.remove('active')
      slideToggle(submenu, 300)
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
  const w = window.innerWidth
  if (w < 1200) {
    document.getElementById('sidebar').classList.remove('active')
  }
})
window.addEventListener('resize', (event) => {
  const w = window.innerWidth
  if (w < 1200) {
    document.getElementById('sidebar').classList.remove('active')
  } else {
    document.getElementById('sidebar').classList.add('active')
  }
})

document.querySelector('.burger-btn').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active')
})
document.querySelector('.sidebar-hide').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('active')
})

// Perfect Scrollbar Init
if (typeof PerfectScrollbar === 'function') {
  const container = document.querySelector('.sidebar-wrapper')
  const ps = new PerfectScrollbar(container, {
    wheelPropagation: false
  })
}

// Scroll into active sidebar
document.querySelector('.sidebar-item.active').scrollIntoView(false)
