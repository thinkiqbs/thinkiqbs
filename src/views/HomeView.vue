@<template>
  <div
    id="page-container"
    class="container-fluid sidebar-dark side-scroll page-header-fixed page-header-dark main-content-boxed side-trans-enabled"
  >
    <div
      class="bg-image"
      style="background-image: url('assets/media/photos/photo36@2x.jpg')"
    >
      <div class="bg-primary-white-op py-9 overflow-hidden">
        <div class="content content-full text-center">
          <h1 class="display-4 fw-semibold text-danger mb-2">Hero Title</h1>
          <p class="fs-4 fw-normal text-black-50 mb-5">
            Lead paragraph containing a quick description of your product.
          </p>
          <div>
            <a class="btn btn-primary px-3 py-2 m-1" href="javascript:void(0)">
              <i class="fa fa-fw fa-link opacity-50 me-1"></i> Call to action
            </a>
            <a class="btn btn-dark px-3 py-2 m-1" href="javascript:void(0)">
              <i class="fa fa-fw fa-link opacity-50 me-1"></i> Call to action
            </a>
          </div>
        </div>
      </div>
    </div>

    <footer id="page-footer" class="bg-body-extra-light">
      <div class="content py-4">
        <div class="row items-push fs-sm border-bottom pt-4">
          <div class="col-sm-6 col-md-4">
            <h3>Category</h3>
            <ul class="list list-simple-mini">
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #1
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #2
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #3
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #4
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #5
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #6
                </a>
              </li>
            </ul>
          </div>
          <div class="col-sm-6 col-md-4">
            <h3>Category</h3>
            <ul class="list list-simple-mini">
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #1
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #2
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #3
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #4
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #5
                </a>
              </li>
              <li>
                <a class="fw-semibold" href="javascript:void(0)">
                  <i class="fa fa-fw fa-link text-primary-lighter me-1"></i>
                  Link #6
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h3>Company</h3>
            <div class="fs-sm mb-4">
              1080 Sunshine Valley, Suite 2563<br />
              San Francisco, CA 85214<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </div>
            <h3>Subscribe to our news</h3>
            <form class="push">
              <div class="input-group">
                <input
                  type="email"
                  class="form-control form-control-alt"
                  id="dm-gs-subscribe-email"
                  name="dm-gs-subscribe-email"
                  placeholder="Your email.."
                />
                <button type="submit" class="btn btn-alt-primary">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style>
*,
::after,
::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: var(--bs-body-font-family);
  font-size: var(--bs-body-font-size);
  font-weight: var(--bs-body-font-weight);
  line-height: var(--bs-body-line-height);
  color: var(--bs-body-color);
  text-align: var(--bs-body-text-align);
  background-color: var(--bs-body-bg);
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
}
.h1,
h1,
h2,
h3 {
  margin-top: 0;
  margin-bottom: 1.375rem;
  font-weight: 600;
  line-height: 1.25;
}
.h1,
h1 {
  font-size: calc(1.35rem + 1.2vw);
}
@media (min-width: 1200px) {
  .h1,
  h1 {
    font-size: 2.25rem;
  }
}
h2 {
  font-size: calc(1.3125rem + 0.75vw);
}
@media (min-width: 1200px) {
  h2 {
    font-size: 1.875rem;
  }
}
h3 {
  font-size: calc(1.275rem + 0.3vw);
}
@media (min-width: 1200px) {
  h3 {
    font-size: 1.5rem;
  }
}
p {
  margin-top: 0;
  margin-bottom: 1.875rem;
}
abbr[title] {
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  -webkit-text-decoration-skip-ink: none;
  text-decoration-skip-ink: none;
}
ul {
  padding-left: 2rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul ul {
  margin-bottom: 0;
}
a {
  color: #4c78dd;
  text-decoration: none;
}
a:hover {
  color: #1f47a4;
  text-decoration: none;
}
button {
  border-radius: 0;
}
button:focus:not(:focus-visible) {
  outline: 0;
}
button,
input {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button {
  text-transform: none;
}
[type="button"],
[type="submit"],
button {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
iframe {
  border: 0;
}
.display-4 {
  font-size: calc(1.475rem + 2.7vw);
  font-weight: 300;
  line-height: 1.25;
}
@media (min-width: 1200px) {
  .display-4 {
    font-size: 3.5rem;
  }
}
.row {
  --bs-gutter-x: 1.75rem;
  --bs-gutter-y: 0;
  display: flex;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--bs-gutter-y));
  margin-right: calc(-0.5 * var(--bs-gutter-x));
  margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
  flex-shrink: 0;
  width: 100%;
  max-width: 100%;
  padding-right: calc(var(--bs-gutter-x) * 0.5);
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  margin-top: var(--bs-gutter-y);
}
@media (min-width: 576px) {
  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }
}
@media (min-width: 768px) {
  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }
}
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #334155;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #dfe3ea;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control:focus {
  color: #334155;
  background-color: #fff;
  border-color: #a6bcee;
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(76, 120, 221, 0.25);
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:disabled {
  background-color: #e9ecef;
  opacity: 1;
}
.input-group {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
}
.input-group > .form-control {
  position: relative;
  flex: 1 1 auto;
  width: 1%;
  min-width: 0;
}
.input-group > .form-control:focus {
  z-index: 3;
}
.input-group .btn {
  position: relative;
  z-index: 2;
}
.input-group .btn:focus {
  z-index: 3;
}
.input-group-sm > .btn,
.input-group-sm > .form-control {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.input-group:not(.has-validation)
  > :not(:last-child):not(.dropdown-toggle):not(.dropdown-menu) {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}
.input-group
  > :not(:first-child):not(.dropdown-menu):not(.valid-tooltip):not(.valid-feedback):not(.invalid-tooltip):not(.invalid-feedback) {
  margin-left: -1px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}
.btn {
  display: inline-block;
  font-weight: 600;
  line-height: 1.5;
  color: #334155;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .btn {
    transition: none;
  }
}
.btn:hover {
  color: #334155;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(76, 120, 221, 0.25);
}
.btn:disabled {
  pointer-events: none;
  opacity: 0.65;
}
.btn-primary {
  color: #fff;
  background-color: #4c78dd;
  border-color: #4c78dd;
}
.btn-primary:hover {
  color: #fff;
  background-color: #3d60b1;
  border-color: #395aa6;
}
.btn-primary:focus {
  color: #fff;
  background-color: #3d60b1;
  border-color: #395aa6;
  box-shadow: 0 0 0 0.25rem rgba(103, 140, 226, 0.5);
}
.btn-primary:active {
  color: #fff;
  background-color: #3d60b1;
  border-color: #395aa6;
}
.btn-primary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(103, 140, 226, 0.5);
}
.btn-primary:disabled {
  color: #fff;
  background-color: #4c78dd;
  border-color: #4c78dd;
}
.btn-dark {
  color: #fff;
  background-color: #334155;
  border-color: #334155;
}
.btn-dark:hover {
  color: #fff;
  background-color: #293444;
  border-color: #263140;
}
.btn-dark:focus {
  color: #fff;
  background-color: #293444;
  border-color: #263140;
  box-shadow: 0 0 0 0.25rem rgba(82, 94, 111, 0.5);
}
.btn-dark:active {
  color: #fff;
  background-color: #293444;
  border-color: #263140;
}
.btn-dark:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(82, 94, 111, 0.5);
}
.btn-dark:disabled {
  color: #fff;
  background-color: #334155;
  border-color: #334155;
}
.btn-sm {
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
  border-radius: 0.2rem;
}
.dropdown {
  position: relative;
}
.dropdown-menu {
  position: absolute;
  z-index: 1000;
  display: none;
  min-width: 11.25rem;
  padding: 0.5rem 0;
  margin: 0;
  font-size: 1rem;
  color: #334155;
  text-align: left;
  list-style: none;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #d2d9e2;
  border-radius: 0.25rem;
}
.dropdown-menu-end {
  --bs-position: end;
}
.dropdown-item {
  display: block;
  width: 100%;
  padding: 0.5rem 0.75rem;
  clear: both;
  font-weight: 400;
  color: #334155;
  text-align: inherit;
  white-space: nowrap;
  background-color: transparent;
  border: 0;
}
.dropdown-item:focus,
.dropdown-item:hover {
  color: #334155;
  background-color: #ebeef2;
}
.dropdown-item.active,
.dropdown-item:active {
  color: #334155;
  text-decoration: none;
  background-color: #dde2e9;
}
.dropdown-item:disabled {
  color: #adb5bd;
  pointer-events: none;
  background-color: transparent;
}
.opacity-50 {
  opacity: 0.5 !important;
}
.overflow-hidden {
  overflow: hidden !important;
}
.d-inline-block {
  display: inline-block !important;
}
.d-flex {
  display: flex !important;
}
.d-none {
  display: none !important;
}
.border-0 {
  border: 0 !important;
}
.border-bottom {
  border-bottom: 1px solid #dfe3ea !important;
}
.w-100 {
  width: 100% !important;
}
.justify-content-between {
  justify-content: space-between !important;
}
.align-items-center {
  align-items: center !important;
}
.m-1 {
  margin: 0.25rem !important;
}
.me-1 {
  margin-right: 0.25rem !important;
}
.me-3 {
  margin-right: 1rem !important;
}
.mb-0 {
  margin-bottom: 0 !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.mb-4 {
  margin-bottom: 1.5rem !important;
}
.mb-5 {
  margin-bottom: 3rem !important;
}
.ms-1 {
  margin-left: 0.25rem !important;
}
.px-3 {
  padding-right: 1rem !important;
  padding-left: 1rem !important;
}
.py-1 {
  padding-top: 0.25rem !important;
  padding-bottom: 0.25rem !important;
}
.py-2 {
  padding-top: 0.5rem !important;
  padding-bottom: 0.5rem !important;
}
.py-4 {
  padding-top: 1.5rem !important;
  padding-bottom: 1.5rem !important;
}
.py-5 {
  padding-top: 3rem !important;
  padding-bottom: 3rem !important;
}
.py-9 {
  padding-top: 12rem !important;
  padding-bottom: 12rem !important;
}
.pt-4 {
  padding-top: 1.5rem !important;
}
.fs-4 {
  font-size: 1.25rem !important;
}
.fs-5 {
  font-size: 1.125rem !important;
}
.fs-sm {
  font-size: 0.875rem !important;
}
.fw-normal {
  font-weight: 400 !important;
}
.fw-medium {
  font-weight: 500 !important;
}
.fw-semibold {
  font-weight: 600 !important;
}
.text-center {
  text-align: center !important;
}
.text-primary {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-primary-rgb), var(--bs-text-opacity)) !important;
}
.text-danger {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-danger-rgb), var(--bs-text-opacity)) !important;
}
.text-white {
  --bs-text-opacity: 1;
  color: rgba(var(--bs-white-rgb), var(--bs-text-opacity)) !important;
}
.text-muted {
  --bs-text-opacity: 1;
  color: #6c757d !important;
}
.text-white-50 {
  --bs-text-opacity: 1;
  color: rgba(255, 255, 255, 0.5) !important;
}
.tracking-wider {
  letter-spacing: 0.05em !important;
}
@media (min-width: 576px) {
  .order-sm-1 {
    order: 1 !important;
  }
  .order-sm-2 {
    order: 2 !important;
  }
  .text-sm-start {
    text-align: left !important;
  }
  .text-sm-end {
    text-align: right !important;
  }
}
@media (min-width: 992px) {
  .d-lg-block {
    display: block !important;
  }
  .d-lg-none {
    display: none !important;
  }
}
a {
  transition: color 0.12s ease-out;
}
p {
  line-height: 1.6;
}
@media (max-width: 767.98px) {
  .row:not(.g-sm):not(.g-0) {
    --bs-gutter-x: 1rem;
  }
  .row:not(.g-sm):not(.g-0) > [class*="col-"] {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
}
.form-control {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.form-control.form-control-alt {
  border-color: #ebeef2;
  background-color: #ebeef2;
  transition: none;
}
.form-control.form-control-alt:focus {
  border-color: #dde2e9;
  background-color: #dde2e9;
  box-shadow: none;
}
.btn-alt-primary {
  color: #2e4885;
  background-color: #d2ddf7;
  border-color: #d2ddf7;
}
.btn-alt-primary:hover {
  color: #1e3058;
  background-color: #a6bcee;
  border-color: #a6bcee;
}
.btn-alt-primary:focus {
  color: #1e3058;
  background-color: #a6bcee;
  border-color: #a6bcee;
  box-shadow: 0 0 0 0.25rem rgba(185, 199, 230, 0.5);
}
.btn-alt-primary:active {
  color: #000;
  background-color: #dbe4f9;
  border-color: #d7e0f8;
}
.btn-alt-primary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(185, 199, 230, 0.5);
}
.btn-alt-primary:disabled {
  color: #000;
  background-color: #d2ddf7;
  border-color: #d2ddf7;
}
.btn-alt-secondary {
  color: #2f3c4e;
  background-color: #ebeef2;
  border-color: #ebeef2;
}
.btn-alt-secondary:hover {
  color: #283342;
  background-color: #d4d6da;
  border-color: #d4d6da;
}
.btn-alt-secondary:focus {
  color: #283342;
  background-color: #d4d6da;
  border-color: #d4d6da;
  box-shadow: 0 0 0 0.25rem rgba(207, 211, 217, 0.5);
}
.btn-alt-secondary:active {
  color: #000;
  background-color: #eff1f5;
  border-color: #edf0f3;
}
.btn-alt-secondary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(207, 211, 217, 0.5);
}
.btn-alt-secondary:disabled {
  color: #000;
  background-color: #ebeef2;
  border-color: #ebeef2;
}
.btn-alt-danger {
  color: #841717;
  background-color: #f6c9c9;
  border-color: #f6c9c9;
}
.btn-alt-danger:hover {
  color: #580f0f;
  background-color: #ee9393;
  border-color: #ee9393;
}
.btn-alt-danger:focus {
  color: #580f0f;
  background-color: #ee9393;
  border-color: #ee9393;
  box-shadow: 0 0 0 0.25rem rgba(229, 174, 174, 0.5);
}
.btn-alt-danger:active {
  color: #000;
  background-color: #f8d4d4;
  border-color: #f7cece;
}
.btn-alt-danger:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(229, 174, 174, 0.5);
}
.btn-alt-danger:disabled {
  color: #000;
  background-color: #f6c9c9;
  border-color: #f6c9c9;
}
.page-header-dark #page-header .btn-alt-secondary,
.sidebar-dark #sidebar .btn-alt-secondary {
  color: #fff;
  background-color: #283547;
  border-color: #283547;
}
.page-header-dark #page-header .btn-alt-secondary:hover,
.sidebar-dark #sidebar .btn-alt-secondary:hover {
  color: #fff;
  background-color: #161d27;
  border-color: #161d27;
}
.page-header-dark #page-header .btn-alt-secondary:focus,
.sidebar-dark #sidebar .btn-alt-secondary:focus {
  color: #fff;
  background-color: #161d27;
  border-color: #161d27;
  box-shadow: 0 0 0 0.25rem rgba(72, 83, 99, 0.5);
}
.page-header-dark #page-header .btn-alt-secondary:active,
.sidebar-dark #sidebar .btn-alt-secondary:active {
  color: #fff;
  background-color: #202a39;
  border-color: #1e2835;
}
.page-header-dark #page-header .btn-alt-secondary:active:focus,
.sidebar-dark #sidebar .btn-alt-secondary:active:focus {
  box-shadow: 0 0 0 0.25rem rgba(72, 83, 99, 0.5);
}
.page-header-dark #page-header .btn-alt-secondary:disabled,
.sidebar-dark #sidebar .btn-alt-secondary:disabled {
  color: #fff;
  background-color: #283547;
  border-color: #283547;
}
.dropdown-menu {
  box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.08);
}
.form-control {
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}
.form-control.form-control-alt {
  border-color: #ebeef2;
  background-color: #ebeef2;
  transition: none;
}
.form-control.form-control-alt:focus {
  border-color: #dde2e9;
  background-color: #dde2e9;
  box-shadow: none;
}
@media print {
  #main-container,
  #page-container {
    padding: 0 !important;
  }
  #page-footer,
  #page-header,
  #sidebar {
    display: none !important;
  }
}
#page-container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  min-width: 320px;
  min-height: 100vh;
}
#main-container {
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  max-width: 100%;
}
.content {
  width: 100%;
  margin: 0 auto;
  padding: 1rem 1rem 1px;
  overflow-x: visible;
}
.content.content-full {
  padding-bottom: 1rem;
}
.content .items-push > div,
.content .push,
.content p {
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .content {
    width: 100%;
    margin: 0 auto;
    padding: 1.875rem 1.875rem 1px;
    overflow-x: visible;
  }
  .content.content-full {
    padding-bottom: 1.875rem;
  }
  .content .items-push > div,
  .content .push,
  .content p {
    margin-bottom: 1.875rem;
  }
}
.content-side {
  width: 100%;
  margin: 0 auto;
  padding: 1.25rem 1.25rem 1px;
  overflow-x: hidden;
}
#page-header {
  position: relative;
  margin: 0 auto;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.75);
}
.overlay-header {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #fff;
  opacity: 0;
  transition: opacity 0.1s ease-in-out;
  transform: translateY(-100%);
  will-change: opacity;
  z-index: 1;
}
.content-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
}
#page-header .content-header {
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (min-width: 768px) {
  #page-header .content-header {
    padding-left: 1.875rem;
    padding-right: 1.875rem;
  }
}
#sidebar .content-header {
  padding-left: 1.25rem;
  padding-right: 1.25rem;
}
.smini-visible {
  display: none;
}
.smini-hide {
  transition: opacity 0.28s ease-out;
}
#sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1032;
  width: 100%;
  height: 100%;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  transform: translateX(-100%) translateY(0) translateZ(0);
  -webkit-overflow-scrolling: touch;
  will-change: transform;
}
.side-trans-enabled #sidebar {
  transition: transform 0.28s ease-out;
}
#sidebar .js-sidebar-scroll {
  height: calc(100% - 4rem);
  overflow-y: auto;
}
@media (min-width: 992px) {
  #sidebar {
    width: 240px;
  }
}
#page-container > #main-container .content,
#page-container > #page-footer .content,
#page-container > #page-header .content-header {
  max-width: 1920px;
}
#page-container.main-content-boxed > #main-container .content,
#page-container.main-content-boxed > #page-footer .content,
#page-container.main-content-boxed > #page-header .content-header {
  max-width: 1280px;
}
#page-container.page-header-dark #page-header {
  color: #d1d8de;
  background-color: rgba(31, 41, 55, 0.95);
}
#page-container.page-header-fixed #page-header {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
  min-width: 320px;
  max-width: 100%;
  width: auto;
  box-shadow: 0 0.125rem 0.375rem rgba(0, 0, 0, 0.02);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
}
#page-container.page-header-fixed.page-header-dark #page-header {
  box-shadow: none;
}
#page-container.page-header-fixed #main-container {
  padding-top: 4rem;
}
#page-container #sidebar > .content-header {
  background-color: #f6f7f9;
}
#page-container.sidebar-dark #sidebar {
  color: #e9ecef;
  background-color: #1f2937;
}
#page-container.sidebar-dark #sidebar > .content-header {
  background-color: #232e3e;
}
#page-container.side-scroll #sidebar .js-sidebar-scroll {
  overflow-y: visible;
}
@media (min-width: 992px) {
  #page-container.side-scroll #sidebar .content-header,
  #page-container.side-scroll #sidebar .content-side {
    width: 240px !important;
  }
}
.nav-main {
  padding-left: 0;
  list-style: none;
  margin-left: -1.25rem;
  margin-right: -1.25rem;
}
.nav-main-heading {
  padding: 1.375rem 1.25rem 0.375rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.0625rem;
  color: #657ea3;
}
.nav-main-link {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 1.25rem;
  min-height: 2.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.25rem;
  color: #334155;
}
.nav-main-link .nav-main-link-icon {
  flex: 0 0 auto;
  display: inline-block;
  margin-right: 0.625rem;
  min-width: 1rem;
  text-align: center;
  color: #8599b6;
}
.nav-main-link .nav-main-link-name {
  flex: 1 1 auto;
  display: inline-block;
  max-width: 100%;
}
.nav-main-link:focus,
.nav-main-link:hover {
  color: #334155;
  background-color: #f6f7f9;
  outline: 0 !important;
}
.nav-main-link:focus > .nav-main-link-icon,
.nav-main-link:hover > .nav-main-link-icon {
  color: #000;
}
.nav-main-link.active {
  color: #000;
}
.nav-main-link.active > .nav-main-link-icon {
  color: #000;
}
.nav-main-link.nav-main-link-submenu {
  padding-right: 2rem;
}
.nav-main-link.nav-main-link-submenu::before {
  position: absolute;
  top: 50%;
  right: 0.625rem;
  display: block;
  margin-top: -0.5rem;
  width: 1rem;
  height: 1rem;
  line-height: 1rem;
  text-align: center;
  font-family: "Font Awesome 6 Free", "Font Awesome 6 Pro";
  font-weight: 900;
  font-size: 0.75rem;
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
}
.nav-main-link.nav-main-link-submenu::before {
  content: "\f104";
  opacity: 0.4;
}
.nav-main-submenu {
  padding-left: 2.875rem;
  list-style: none;
  height: 0;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.02);
}
.nav-main-submenu .nav-main-item {
  opacity: 0;
  transition: opacity 0.25s ease-out, transform 0.25s ease-out;
  transform: translateX(-0.75rem);
}
.nav-main-submenu .nav-main-link {
  margin: 0;
  padding-left: 0;
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
  min-height: 2.125rem;
  font-size: 0.8125rem;
  color: #465975;
}
.nav-main-submenu .nav-main-link.active,
.nav-main-submenu .nav-main-link:focus,
.nav-main-submenu .nav-main-link:hover {
  color: #000;
  background-color: transparent;
}
.nav-main-horizontal {
  margin: 0;
}
@media (min-width: 992px) {
  .nav-main-horizontal {
    display: flex;
    flex-wrap: wrap;
  }
  .nav-main-horizontal .nav-main-heading {
    display: none;
  }
  .nav-main-horizontal > .nav-main-item {
    position: relative;
    display: inline-block;
  }
  .nav-main-horizontal > .nav-main-item:not(:last-child) {
    margin-right: 0.25rem;
  }
  .nav-main-horizontal .nav-main-link-submenu::before {
    content: "\f107";
  }
  .nav-main-horizontal .nav-main-submenu {
    position: absolute;
    left: 0;
    width: 230px;
    padding-left: 0;
    z-index: 995;
    background-color: #ebeef2;
    box-shadow: 0 0.25rem 2rem rgba(0, 0, 0, 0.08);
  }
  .nav-main-horizontal .nav-main-submenu.nav-main-submenu-right {
    left: auto;
    right: 0;
  }
  .nav-main-horizontal .nav-main-submenu .nav-main-link {
    padding-left: 1rem;
  }
  .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-link-submenu {
    opacity: 1;
    color: #000;
  }
  .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-link-submenu
    > .nav-main-link-icon {
    color: #000;
  }
  .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-link-submenu::before {
    transform: scaleY(-1);
  }
  .nav-main-horizontal.nav-main-hover .nav-main-item:hover > .nav-main-submenu {
    height: auto;
    margin-top: -1px;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    overflow: visible;
  }
  .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-submenu
    > .nav-main-item {
    opacity: 1;
    transform: translateX(0);
  }
}
.page-header-dark #page-header .nav-main-heading {
  color: #7186a3;
}
.page-header-dark #page-header .nav-main-link,
.sidebar-dark #sidebar .nav-main-link {
  color: #9faec1;
}
.page-header-dark #page-header .nav-main-link > .nav-main-link-icon,
.sidebar-dark #sidebar .nav-main-link > .nav-main-link-icon {
  color: rgba(159, 174, 193, 0.5);
}
.page-header-dark #page-header .nav-main-link:focus,
.page-header-dark #page-header .nav-main-link:hover,
.sidebar-dark #sidebar .nav-main-link:focus,
.sidebar-dark #sidebar .nav-main-link:hover {
  color: #90a0b7;
  background-color: rgba(0, 0, 0, 0.2);
}
.page-header-dark #page-header .nav-main-link:focus > .nav-main-link-icon,
.page-header-dark #page-header .nav-main-link:hover > .nav-main-link-icon,
.sidebar-dark #sidebar .nav-main-link:focus > .nav-main-link-icon,
.sidebar-dark #sidebar .nav-main-link:hover > .nav-main-link-icon {
  color: #fff;
}
.page-header-dark #page-header .nav-main-link.active,
.sidebar-dark #sidebar .nav-main-link.active {
  color: #fff;
}
.page-header-dark #page-header .nav-main-link.active > .nav-main-link-icon,
.sidebar-dark #sidebar .nav-main-link.active > .nav-main-link-icon {
  color: #fff;
}
.page-header-dark #page-header .nav-main-submenu {
  background-color: rgba(0, 0, 0, 0.15);
}
.page-header-dark #page-header .nav-main-submenu .nav-main-link {
  color: #8093ad;
}
.page-header-dark #page-header .nav-main-submenu .nav-main-link.active,
.page-header-dark #page-header .nav-main-submenu .nav-main-link:focus,
.page-header-dark #page-header .nav-main-submenu .nav-main-link:hover {
  color: #fff;
  background-color: transparent;
}
@media (min-width: 992px) {
  .page-header-dark #page-header .nav-main-horizontal .nav-main-submenu {
    background-color: #19222d !important;
    box-shadow: none;
  }
  .page-header-dark
    #page-header
    .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-link-submenu {
    color: #fff;
  }
  .page-header-dark
    #page-header
    .nav-main-horizontal.nav-main-hover
    .nav-main-item:hover
    > .nav-main-link-submenu
    > .nav-main-link-icon {
    color: #fff;
  }
  .page-header-dark
    #page-header
    .nav-main-horizontal.nav-main-hover
    .nav-main-submenu
    .nav-main-item:hover
    .nav-main-link {
    background-color: transparent;
  }
}
.list {
  padding-left: 0;
  list-style: none;
}
.list > li {
  position: relative;
}
.list.list-simple-mini > li {
  margin-bottom: 0.625rem;
}
.bg-white-5 {
  background-color: rgba(255, 255, 255, 0.05) !important;
}
.bg-image {
  background-position: 0 50%;
  background-size: cover;
}
.bg-primary-dark-op {
  background-color: rgba(75, 85, 99, 0.8) !important;
}
.bg-primary-lighter {
  background-color: #c0d0f3 !important;
}
.bg-body-light {
  background-color: #f6f7f9 !important;
}
.bg-body-extra-light {
  background-color: #fff !important;
}
.text-primary {
  color: #4c78dd !important;
}
.text-primary-lighter {
  color: #c0d0f3 !important;
}
.text-danger {
  color: #dc2626 !important;
}
.text-muted {
  color: #6c757d !important;
}
.text-white {
  color: #fff !important;
}
.text-white-50 {
  color: rgba(255, 255, 255, 0.5) !important;
}
.text-dual {
  color: #4b5563 !important;
}
a.text-dual:focus,
a.text-dual:hover {
  color: #353c46 !important;
}
.page-header-dark #page-header .text-dual,
.sidebar-dark #sidebar .text-dual {
  color: #e9ecef !important;
}
.page-header-dark #page-header a.text-dual:focus,
.page-header-dark #page-header a.text-dual:hover,
.sidebar-dark #sidebar a.text-dual:focus,
.sidebar-dark #sidebar a.text-dual:hover {
  color: #cbd3da !important;
}
.text-default {
  color: #4c78dd !important;
}
.text-amethyst {
  color: #6366f1 !important;
}
.text-city {
  color: #db3954 !important;
}
.text-flat {
  color: #069fba !important;
}
.text-modern {
  color: #0c91cf !important;
}
.text-smooth {
  color: #d4428b !important;
}
.fa {
  font-family: var(--fa-style-family, "Font Awesome 6 Free");
  font-weight: var(--fa-style, 900);
}
.fa,
.far {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: var(--fa-display, inline-block);
  font-style: normal;
  font-variant: normal;
  line-height: 1;
  text-rendering: auto;
}
.fa-fw {
  text-align: center;
  width: 1.25em;
}
.fa-spin {
  -webkit-animation-name: fa-spin;
  animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
  animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
  animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
  animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(
    --fa-animation-iteration-count,
    infinite
  );
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
  animation-timing-function: var(--fa-animation-timing, linear);
}
@media (prefers-reduced-motion: reduce) {
  .fa-spin {
    -webkit-animation-delay: -1ms;
    animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
    animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
.fa-bars::before {
  content: "\f0c9";
}
.fa-circle::before {
  content: "\f111";
}
.fa-circle-notch::before {
  content: "\f1ce";
}
.fa-times-circle::before {
  content: "\f057";
}
.fa-heart::before {
  content: "\f004";
}
.fa-link::before {
  content: "\f0c1";
}
.fa-square::before {
  content: "\f0c8";
}
.fa-times::before {
  content: "\f00d";
}
.far {
  font-family: "Font Awesome 6 Free";
  font-weight: 400;
}
.si {
  font-family: simple-line-icons;
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.si-wallet:before {
  content: "\e02a";
}
.si-rocket:before {
  content: "\e05c";
}
.si-home:before {
  content: "\e069";
}
.si-envelope:before {
  content: "\e086";
}
[data-simplebar] {
  position: relative;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: flex-start;
}
.simplebar-wrapper {
  overflow: hidden;
  width: inherit;
  height: inherit;
  max-width: inherit;
  max-height: inherit;
}
.simplebar-mask {
  direction: inherit;
  position: absolute;
  overflow: hidden;
  padding: 0;
  margin: 0;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: auto !important;
  height: auto !important;
  z-index: 0;
}
.simplebar-offset {
  direction: inherit !important;
  box-sizing: inherit !important;
  resize: none !important;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0;
  -webkit-overflow-scrolling: touch;
}
.simplebar-content-wrapper {
  direction: inherit;
  box-sizing: border-box !important;
  position: relative;
  display: block;
  height: 100%;
  width: auto;
  max-width: 100%;
  max-height: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.simplebar-content-wrapper::-webkit-scrollbar {
  width: 0;
  height: 0;
}
.simplebar-content:after,
.simplebar-content:before {
  content: " ";
  display: table;
}
.simplebar-placeholder {
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  pointer-events: none;
}
.simplebar-height-auto-observer-wrapper {
  box-sizing: inherit !important;
  height: 100%;
  width: 100%;
  max-width: 1px;
  position: relative;
  float: left;
  max-height: 1px;
  overflow: hidden;
  z-index: -1;
  padding: 0;
  margin: 0;
  pointer-events: none;
  flex-grow: inherit;
  flex-shrink: 0;
  flex-basis: 0;
}
.simplebar-height-auto-observer {
  box-sizing: inherit;
  display: block;
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 1000%;
  width: 1000%;
  min-height: 1px;
  min-width: 1px;
  overflow: hidden;
  pointer-events: none;
  z-index: -1;
}
.simplebar-track {
  z-index: 1;
  position: absolute;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
}
.simplebar-scrollbar {
  position: absolute;
  left: 0;
  right: 0;
  min-height: 10px;
}
.simplebar-scrollbar:before {
  position: absolute;
  content: "";
  background: #000;
  border-radius: 7px;
  left: 2px;
  right: 2px;
  opacity: 0;
  transition: opacity 0.2s linear;
}
.simplebar-track.simplebar-vertical {
  top: 0;
  width: 11px;
}
.simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
  top: 2px;
  bottom: 2px;
}
.simplebar-track.simplebar-horizontal {
  left: 0;
  height: 11px;
}
.simplebar-track.simplebar-horizontal .simplebar-scrollbar:before {
  height: 100%;
  left: 2px;
  right: 2px;
}
.simplebar-track.simplebar-horizontal .simplebar-scrollbar {
  right: auto;
  left: 0;
  top: 2px;
  height: 7px;
  min-height: 0;
  min-width: 10px;
  width: auto;
}
.simplebar-scrollbar {
  left: auto;
  right: 2px;
  width: 4px;
}
.simplebar-scrollbar::before {
  left: 0;
  right: 0;
  background: #1f2937;
}
.sidebar-dark #sidebar .simplebar-scrollbar::before {
  background: #fff;
}
/*! CSS Used keyframes */
@-webkit-keyframes fa-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa0ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2ZL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+1F00-1FFF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0370-03FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2pL7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa25L7W0Q5n-wU.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/inter/v8/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa1ZL7W0Q5nw.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 400;
  font-display: block;
  src: url(https://demo.pixelcave.com/oneui/assets/fonts/fontawesome/fa-regular-400.woff2)
      format("woff2"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/fontawesome/fa-regular-400.ttf)
      format("truetype");
}
@font-face {
  font-family: "Font Awesome 6 Free";
  font-style: normal;
  font-weight: 900;
  font-display: block;
  src: url(https://demo.pixelcave.com/oneui/assets/fonts/fontawesome/fa-solid-900.woff2)
      format("woff2"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/fontawesome/fa-solid-900.ttf)
      format("truetype");
}
@font-face {
  font-family: simple-line-icons;
  src: url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.eot?v=2.4.0);
  src: url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.eot?v=2.4.0#iefix)
      format("embedded-opentype"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.woff2?v=2.4.0)
      format("woff2"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.ttf?v=2.4.0)
      format("truetype"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.woff?v=2.4.0)
      format("woff"),
    url(https://demo.pixelcave.com/oneui/assets/fonts/simple-line-icons/Simple-Line-Icons.svg?v=2.4.0#simple-line-icons)
      format("svg");
  font-weight: 400;
  font-style: normal;
}
</style>