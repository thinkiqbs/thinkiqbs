<template>
  <div>
    <body data-new-gr-c-s-check-loaded="14.1052.0" data-gr-ext-installed="">
      <!-- loader -->
      <div id="loader" style="display: none">
        <img src="assets/img/logo-icon.png" alt="icon" class="loading-icon" />
      </div>
      <!-- * loader -->

      <!-- App Header -->
      <!-- <div class="appHeader">
				<div class="left">
					<a href="#" class="headerButton goBack">
						<ion-icon name="chevron-back-outline"></ion-icon>
					</a>
				</div>
				<div class="pageTitle">
					Contact
				</div>
				<div class="right">
					<a href="#" class="headerButton">
						<ion-icon name="call-outline"></ion-icon>
					</a>
				</div>
			</div> -->
      <!-- * App Header -->

      <!-- App Capsule -->
      <div id="appCapsule">
        <div class="section mt-2">
          <div class="card">
            <div class="card-body">
              <div class="p-1">
                <div class="text-center">
                  <h2 class="text-primary">Get in Touch</h2>
                  <p>Fill the form to contact us</p>
                  <!-- <vue-whatsapp-widget phoneNumber="254723457189"/> -->
                </div>

                <form>
                  <div class="form-group basic animated">
                    <div class="input-wrapper">
                      <label class="label" for="name2">Your name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="name2"
                        placeholder="Your name"
                      />
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="form-group basic animated">
                    <div class="input-wrapper">
                      <label class="label" for="email2">E-mail</label>
                      <input
                        type="text"
                        class="form-control"
                        id="email2"
                        placeholder="E-mail"
                      />
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="form-group basic animated">
                    <div class="input-wrapper">
                      <label class="label" for="textarea2">Message</label>
                      <textarea
                        id="textarea2"
                        rows="4"
                        class="form-control"
                        placeholder="Message"
                        data-gramm="false"
                        wt-ignore-input="true"
                      ></textarea>
                      <i class="clear-input">
                        <ion-icon name="close-circle"></ion-icon>
                      </i>
                    </div>
                  </div>

                  <div class="mt-2">
                    <button
                      type="submit"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="section mt-2">
          <div class="card">
            <div class="card-body">
              <div class="p-1">
                <div class="text-center">
                  <h2 class="text-primary">Our Address</h2>
                  <p class="card-text">
                    PO Box 16122 Collins Street West<br />
                    Victoria 8007 Australia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="section mt-2 mb-2">
          <div class="card">
            <div class="card-body">
              <div class="p-1">
                <div class="text-center">
                  <h2 class="text-primary mb-2">Social Profiles</h2>

                  <a href="#" class="btn btn-facebook btn-icon mr-05">
                    <ion-icon name="logo-facebook"></ion-icon>
                  </a>

                  <a href="#" class="btn btn-twitter btn-icon mr-05">
                    <ion-icon name="logo-twitter"></ion-icon>
                  </a>

                  <a href="#" class="btn btn-linkedin btn-icon mr-05">
                    <ion-icon name="logo-linkedin"></ion-icon>
                  </a>

                  <a href="#" class="btn btn-whatsapp btn-icon mr-05">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                  </a>

                  <a href="#" class="btn btn-instagram btn-icon mr-05">
                    <ion-icon name="logo-instagram"></ion-icon>
                  </a>

                  <a href="#" class="btn btn-twitch btn-icon mr-05">
                    <ion-icon name="logo-twitch"></ion-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- * App Capsule -->

      <!-- App Bottom Menu -->
      <div class="appBottomMenu">
        <a href="app-index.html" class="item">
          <div class="col">
            <ion-icon name="pie-chart-outline"></ion-icon>
            <strong>Overview</strong>
          </div>
        </a>
        <a href="app-pages.html" class="item">
          <div class="col">
            <ion-icon name="document-text-outline"></ion-icon>
            <strong>Pages</strong>
          </div>
        </a>
        <a href="app-components.html" class="item">
          <div class="col">
            <ion-icon name="apps-outline"></ion-icon>
            <strong>Components</strong>
          </div>
        </a>
        <a href="app-cards.html" class="item">
          <div class="col">
            <ion-icon name="card-outline"></ion-icon>
            <strong>My Cards</strong>
          </div>
        </a>
        <a
          href="javascript:;"
          class="item"
          data-toggle="modal"
          data-target="#sidebarPanel"
        >
          <div class="col">
            <ion-icon name="menu-outline"></ion-icon>
            <strong>Menu</strong>
          </div>
        </a>
      </div>
      <!-- * App Bottom Menu -->

      <!-- App Sidebar -->
      <div
        class="modal fade panelbox panelbox-left"
        id="sidebarPanel"
        tabindex="-1"
        role="dialog"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body p-0">
              <!-- profile box -->
              <div class="profileBox pt-2 pb-2">
                <div class="image-wrapper">
                  <img
                    src="assets/img/sample/avatar/avatar1.jpg"
                    alt="image"
                    class="imaged w36"
                  />
                </div>
                <div class="in">
                  <strong>Sebastian Doe</strong>
                  <div class="text-muted">4029209</div>
                </div>
                <a
                  href="#"
                  class="btn btn-link btn-icon sidebar-close"
                  data-dismiss="modal"
                >
                  <ion-icon name="close-outline"></ion-icon>
                </a>
              </div>
              <!-- * profile box -->
              <!-- balance -->
              <div class="sidebar-balance">
                <div class="listview-title">Balance</div>
                <div class="in">
                  <h1 class="amount">$ 2,562.50</h1>
                </div>
              </div>
              <!-- * balance -->

              <!-- action group -->
              <div class="action-group">
                <a href="app-index.html" class="action-button">
                  <div class="in">
                    <div class="iconbox">
                      <ion-icon name="add-outline"></ion-icon>
                    </div>
                    Deposit
                  </div>
                </a>
                <a href="app-index.html" class="action-button">
                  <div class="in">
                    <div class="iconbox">
                      <ion-icon name="arrow-down-outline"></ion-icon>
                    </div>
                    Withdraw
                  </div>
                </a>
                <a href="app-index.html" class="action-button">
                  <div class="in">
                    <div class="iconbox">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    Send
                  </div>
                </a>
                <a href="app-cards.html" class="action-button">
                  <div class="in">
                    <div class="iconbox">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>
                    My Cards
                  </div>
                </a>
              </div>
              <!-- * action group -->

              <!-- menu -->
              <div class="listview-title mt-1">Menu</div>
              <ul class="listview flush transparent no-line image-listview">
                <li>
                  <a href="app-index.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="pie-chart-outline"></ion-icon>
                    </div>
                    <div class="in">
                      Overview
                      <span class="badge badge-primary">10</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="app-pages.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="document-text-outline"></ion-icon>
                    </div>
                    <div class="in">Pages</div>
                  </a>
                </li>
                <li>
                  <a href="app-components.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="apps-outline"></ion-icon>
                    </div>
                    <div class="in">Components</div>
                  </a>
                </li>
                <li>
                  <a href="app-cards.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="card-outline"></ion-icon>
                    </div>
                    <div class="in">My Cards</div>
                  </a>
                </li>
              </ul>
              <!-- * menu -->

              <!-- others -->
              <div class="listview-title mt-1">Others</div>
              <ul class="listview flush transparent no-line image-listview">
                <li>
                  <a href="app-settings.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="settings-outline"></ion-icon>
                    </div>
                    <div class="in">Settings</div>
                  </a>
                </li>
                <li>
                  <a href="component-messages.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="chatbubble-outline"></ion-icon>
                    </div>
                    <div class="in">Support</div>
                  </a>
                </li>
                <li>
                  <a href="app-login.html" class="item">
                    <div class="icon-box bg-primary">
                      <ion-icon name="log-out-outline"></ion-icon>
                    </div>
                    <div class="in">Log out</div>
                  </a>
                </li>
              </ul>
              <!-- * others -->

              <!-- send money -->
              <div class="listview-title mt-1">Send Money</div>
              <ul class="listview image-listview flush transparent no-line">
                <li>
                  <a href="#" class="item">
                    <img
                      src="assets/img/sample/avatar/avatar2.jpg"
                      alt="image"
                      class="image"
                    />
                    <div class="in">
                      <div>Artem Sazonov</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item">
                    <img
                      src="assets/img/sample/avatar/avatar4.jpg"
                      alt="image"
                      class="image"
                    />
                    <div class="in">
                      <div>Sophie Asveld</div>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="#" class="item">
                    <img
                      src="assets/img/sample/avatar/avatar3.jpg"
                      alt="image"
                      class="image"
                    />
                    <div class="in">
                      <div>Kobus van de Vegte</div>
                    </div>
                  </a>
                </li>
              </ul>
              <!-- * send money -->
            </div>
          </div>
        </div>
      </div>

      <!-- Code injected by live-server -->

      <!-- Mirrored from egemem.com/theme/finapp/view/app-contact.html by HTTrack Website Copier/3.x [XR&CO'2014], Wed, 12 Feb 2020 06:38:14 GMT -->
      <iframe
        frameborder="0"
        scrolling="no"
        style="background-color: transparent; border: 0px; display: none"
      ></iframe>
      <div
        id="GOOGLE_INPUT_CHEXT_FLAG"
        input=""
        input_stat='{"tlang":true,"tsbc":true,"pun":true,"mk":true,"ss":true}'
        style="display: none"
      ></div>
      <span
        id="buffer-extension-hover-button"
        style="
          display: none;
          position: absolute;
          z-index: 8675309;
          width: 100px;
          height: 25px;
          background-image: url('chrome-extension://noojglkidnpfjbincgijbaiedldjfbhh/data/shared/img/buffer-hover-icon@2x.png');
          background-size: 100px 25px;
          opacity: 0.9;
          cursor: pointer;
        "
      ></span
      ><quillbot-extension-portal></quillbot-extension-portal>
    </body>
  </div>
</template>

<script>


export default {
  name: 'app-contact',
  components: {

  },

  data () {
    return {}
  }
}
</script>

<style>
/*! CSS Used from: http://127.0.0.1:5500/assets/css/style.css */
*,
::after,
::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
[tabindex="-1"]:focus {
  outline: 0 !important;
}
h1,
h2 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
ul {
  margin-top: 0;
  margin-bottom: 1rem;
}
strong {
  font-weight: bolder;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
img {
  vertical-align: middle;
  border-style: none;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
button,
input,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button {
  text-transform: none;
}
[type="submit"],
button {
  -webkit-appearance: button;
}
[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
textarea {
  overflow: auto;
  resize: vertical;
}
h1,
h2 {
  margin-bottom: 0.5rem;
  font-weight: 500;
  line-height: 1.2;
}
h1 {
  font-size: 2.5rem;
}
h2 {
  font-size: 2rem;
}
.col {
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}
.col {
  -ms-flex-preferred-size: 0;
  flex-basis: 0;
  -ms-flex-positive: 1;
  flex-grow: 1;
  max-width: 100%;
}
.form-control {
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.form-control::-webkit-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::-moz-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #6c757d;
  opacity: 1;
}
.form-control::-ms-input-placeholder {
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
textarea.form-control {
  height: auto;
}
.form-group {
  margin-bottom: 1rem;
}
.btn {
  display: inline-block;
  font-weight: 400;
  color: #212529;
  text-align: center;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
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
  color: #212529;
  text-decoration: none;
}
.btn:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}
.btn:disabled {
  opacity: 0.65;
}
.btn-primary {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-primary:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}
.btn-primary:focus {
  box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.5);
}
.btn-primary:disabled {
  color: #fff;
  background-color: #007bff;
  border-color: #007bff;
}
.btn-link {
  font-weight: 400;
  color: #007bff;
  text-decoration: none;
}
.btn-link:hover {
  color: #0056b3;
  text-decoration: underline;
}
.btn-link:focus {
  text-decoration: underline;
  box-shadow: none;
}
.btn-link:disabled {
  color: #6c757d;
  pointer-events: none;
}
.btn-lg {
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  line-height: 1.5;
  border-radius: 0.3rem;
}
.btn-block {
  display: block;
  width: 100%;
}
.fade {
  transition: opacity 0.15s linear;
}
@media (prefers-reduced-motion: reduce) {
  .fade {
    transition: none;
  }
}
.fade:not(.show) {
  opacity: 0;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1.25rem;
}
.card-text:last-child {
  margin-bottom: 0;
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .badge {
    transition: none;
  }
}
.badge:empty {
  display: none;
}
.badge-primary {
  color: #fff;
  background-color: #007bff;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  width: 100%;
  height: 100%;
  overflow: hidden;
  outline: 0;
}
.modal-dialog {
  position: relative;
  width: auto;
  margin: 0.5rem;
  pointer-events: none;
}
.modal.fade .modal-dialog {
  transition: -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out;
  transition: transform 0.3s ease-out, -webkit-transform 0.3s ease-out;
  -webkit-transform: translate(0, -50px);
  transform: translate(0, -50px);
}
@media (prefers-reduced-motion: reduce) {
  .modal.fade .modal-dialog {
    transition: none;
  }
}
.modal-content {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-body {
  position: relative;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 1rem;
}
@media (min-width: 576px) {
  .modal-dialog {
    max-width: 500px;
    margin: 1.75rem auto;
  }
}
.bg-primary {
  background-color: #007bff !important;
}
.mt-1 {
  margin-top: 0.25rem !important;
}
.mt-2 {
  margin-top: 0.5rem !important;
}
.mb-2 {
  margin-bottom: 0.5rem !important;
}
.p-0 {
  padding: 0 !important;
}
.p-1 {
  padding: 0.25rem !important;
}
.pt-2 {
  padding-top: 0.5rem !important;
}
.pb-2 {
  padding-bottom: 0.5rem !important;
}
.text-center {
  text-align: center !important;
}
.text-primary {
  color: #007bff !important;
}
.text-muted {
  color: #6c757d !important;
}
@media print {
  *,
  ::after,
  ::before {
    text-shadow: none !important;
    box-shadow: none !important;
  }
  a:not(.btn) {
    text-decoration: underline;
  }
  img {
    page-break-inside: avoid;
  }
  h2,
  p {
    orphans: 3;
    widows: 3;
  }
  h2 {
    page-break-after: avoid;
  }
  body {
    min-width: 992px !important;
  }
  .badge {
    border: 1px solid #000;
  }
}
body {
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  line-height: 1.6rem;
  letter-spacing: 0.004em;
  color: #958d9e;
  background: #ededf5;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
a {
  transition: 0.2s all;
  color: #6236ff;
}
a:hover,
a:active,
a:focus {
  color: #6236ff;
  text-decoration: none;
}
.appHeader {
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  background: #ffffff;
  color: #27173e;
  border-bottom: 1px solid #dcdce9;
}
.appHeader .left,
.appHeader .right {
  height: 56px;
  display: flex;
  align-items: center;
  position: absolute;
}
.appHeader .left ion-icon,
.appHeader .right ion-icon {
  font-size: 26px;
}
.appHeader .left .headerButton,
.appHeader .right .headerButton {
  min-width: 36px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: #6236ff;
  position: relative;
}
.appHeader .left .headerButton:active,
.appHeader .right .headerButton:active {
  opacity: 0.6;
}
.appHeader .left {
  left: 10px;
  top: 0;
}
.appHeader .right {
  right: 10px;
  top: 0;
}
.appHeader .pageTitle {
  font-size: 17px;
  font-weight: 500;
  padding: 0 10px;
}
.appBottomMenu {
  height: 56px;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #dcdce9;
  padding-left: 4px;
  padding-right: 4px;
}
.appBottomMenu .item {
  font-size: 9px;
  letter-spacing: 0;
  text-align: center;
  width: 100%;
  height: 56px;
  line-height: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.appBottomMenu .item:before {
  content: "";
  display: block;
  height: 2px;
  border-radius: 0 0 10px 10px;
  background: transparent;
  position: absolute;
  left: 4px;
  right: 4px;
  top: 0;
}
.appBottomMenu .item .col {
  width: 100%;
  padding: 0 4px;
  text-align: center;
}
.appBottomMenu .item ion-icon {
  display: inline-flex;
  margin: 1px auto 3px auto;
  font-size: 24px;
  line-height: 1em;
  color: #27173e;
  transition: 0.1s all;
  display: block;
  margin-top: 1px;
  margin-bottom: 3px;
}
.appBottomMenu .item strong {
  margin-top: 4px;
  display: block;
  color: #27173e;
  font-weight: 400;
  transition: 0.1s all;
}
.appBottomMenu .item:active {
  opacity: 0.8;
}
.appBottomMenu .item:hover ion-icon,
.appBottomMenu .item:hover strong {
  color: #27173e;
}
#appCapsule {
  padding: 56px 0;
}
.section {
  padding: 0 16px;
}
.profileBox {
  padding: 0 16px;
  display: flex;
  align-items: center;
}
.profileBox .image-wrapper {
  margin-right: 16px;
}
.profileBox .in {
  line-height: 1.4em;
  padding-right: 25px;
}
.profileBox .in strong {
  display: block;
  font-weight: 500;
  color: #27173e;
}
.profileBox .in .text-muted {
  font-size: 14px;
  color: #a9abad !important;
}
.sidebar-balance {
  padding: 6px 16px;
  background: #6236ff;
}
.sidebar-balance .listview-title {
  padding-right: 0;
  padding-left: 0;
  color: #fff;
  opacity: 0.6;
}
.sidebar-balance .amount {
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1em;
  font-weight: 32px;
  color: #fff;
  margin-bottom: 6px;
}
.action-group {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0px 16px 10px 16px;
  background: #6236ff;
}
.action-group .action-button {
  padding: 10px 2px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 11px;
  line-height: 1em;
  color: rgba(255, 255, 255, 0.7);
}
.action-group .action-button .iconbox {
  background: rgba(0, 0, 0, 0.3);
  width: 38px;
  height: 38px;
  margin: 0 auto 8px auto;
  border-radius: 100%;
  font-size: 18px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.action-group .action-button:last-child {
  border-right: 0;
}
#sidebarPanel .modal-body {
  margin-bottom: 16px;
}
.panelbox-left .listview > li {
  padding: 10px 16px;
}
.panelbox-left .image-listview > li {
  padding: 0;
}
.panelbox-left .image-listview > li .item {
  padding: 10px 16px;
}
.panelbox-left .image-listview > li a.item {
  padding-right: 36px;
}
.sidebar-close {
  position: absolute;
  right: 10px;
}
.mt-1 {
  margin-top: 8px !important;
}
.mt-2 {
  margin-top: 16px !important;
}
.mb-2 {
  margin-bottom: 16px !important;
}
.mr-05 {
  margin-right: 5px !important;
}
.p-0 {
  padding: 0 !important;
}
.p-1 {
  padding: 8px !important;
}
.pt-2 {
  padding-top: 16px !important;
}
.pb-2 {
  padding-bottom: 16px !important;
}
h1,
h2 {
  color: #27173e;
  margin: 0 0 10px 0;
}
.text-muted {
  font-size: 13px;
  color: #958d9e !important;
}
h1 {
  font-size: 32px;
  font-weight: 700;
}
h2 {
  font-size: 20px;
  font-weight: 700;
}
strong {
  font-weight: 500;
}
.imaged {
  height: auto;
  border-radius: 10px;
}
.imaged.w36 {
  width: 36px !important;
}
#loader {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 99999;
  background: #6236ff;
  display: flex;
  align-items: center;
  justify-content: center;
}
#loader .loading-icon {
  width: 42px;
  height: auto;
  animation: loadingAnimation 1s infinite;
}
.badge {
  font-size: 12px;
  line-height: 1em;
  border-radius: 100px;
  letter-spacing: 0;
  height: 22px;
  min-width: 22px;
  padding: 0 6px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
}
.badge-primary {
  background: #6236ff !important;
}
.listview-title {
  color: #958d9e;
  padding: 7px 16px;
  font-size: 13px;
  font-weight: 500;
}
.listview {
  display: block;
  padding: 0;
  margin: 0;
  color: #27173e;
  background: #fff;
  border-top: 1px solid #dcdce9;
  border-bottom: 1px solid #dcdce9;
  line-height: 1.3em;
}
.listview > li {
  padding: 11px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  min-height: 50px;
}
.listview > li:after {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 1px;
  background: #dcdce9;
}
.listview > li:last-child:after {
  display: none;
}
.listview.flush {
  border-top: 0;
  border-bottom: 0;
}
.listview.transparent {
  background: transparent;
}
.image-listview > li {
  padding: 0;
  min-height: auto;
}
.image-listview > li:after {
  left: 68px;
}
.image-listview > li .item {
  padding: 11px 16px;
  width: 100%;
  min-height: 50px;
  display: flex;
  align-items: center;
}
.image-listview > li .item .image {
  width: 36px;
  height: 36px;
  border-radius: 400px;
  margin-right: 16px;
}
.image-listview > li .item .icon-box {
  min-width: 36px;
  max-width: 36px;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1em;
  font-size: 22px;
  border-radius: 400px;
  margin-right: 16px;
}
.image-listview > li .item .in {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.image-listview > li a.item {
  color: #27173e !important;
  padding-right: 36px;
}
.image-listview > li a.item:active {
  background: rgba(220, 220, 233, 0.3);
}
.image-listview > li a.item:after {
  content: "\f3d1";
  font-family: "Ionicons";
  font-size: 18px;
  position: absolute;
  right: 16px;
  color: #a9abad;
  opacity: 0.6;
  line-height: 1em;
  height: 18px;
  top: 50%;
  margin-top: -9px;
}
.listview.no-line > li:after {
  display: none;
}
.card {
  background: #ffffff;
  border-radius: 10px;
  border: 0;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.09);
}
.card .card-body {
  padding: 16px;
}
.btn {
  height: 36px;
  padding: 3px 18px;
  font-size: 13px;
  line-height: 1.2em;
  font-weight: 500;
  box-shadow: none !important;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all;
  text-decoration: none !important;
  border-radius: 10px;
  border-width: 2px;
}
.btn ion-icon {
  font-size: 22px;
  margin-right: 7px;
  margin-top: -2px;
}
.btn-lg {
  height: 52px;
  padding: 3px 24px;
  font-size: 15px;
}
.btn-icon {
  width: 36px;
  height: 36px;
  padding: 0;
}
.btn-icon ion-icon {
  text-align: center;
  margin: 0 !important;
}
.btn-facebook {
  color: #fff !important;
  background: #39579b;
}
.btn-twitter {
  color: #fff !important;
  background: #049ff6;
}
.btn-instagram {
  color: #fff !important;
  background: #df237b;
}
.btn-linkedin {
  color: #fff !important;
  background: #0075aa;
}
.btn-twitch {
  color: #fff !important;
  background: #923cff;
}
.btn-whatsapp {
  color: #fff !important;
  background: #0ad561;
}
.btn-primary {
  background: #6236ff !important;
  border-color: #6236ff !important;
  color: #ffffff !important;
}
.btn-primary:hover,
.btn-primary:focus,
.btn-primary:active {
  background: #4e1dff !important;
  border-color: #4e1dff !important;
}
.btn-primary:disabled {
  background: #6236ff;
  border-color: #6236ff;
  opacity: 0.5;
}
.btn-link {
  color: #6236ff !important;
}
.panelbox .modal-dialog {
  margin: 0;
  position: absolute;
  left: 0;
  top: 0;
}
.panelbox .modal-dialog .modal-content {
  border: 0;
  border-radius: 0;
  width: 300px;
  height: 100vh;
  overflow: auto;
}
.panelbox .modal-dialog .modal-content .modal-body {
  padding: 10px 16px;
}
.panelbox-left .modal-dialog {
  transform: translate(-100%, 0) !important;
}
.bg-primary {
  background: #6236ff !important;
  color: #fff;
}
.text-primary {
  color: #6236ff !important;
}
.form-group {
  width: 100%;
}
.form-group .label {
  font-size: 11px;
  margin: 0;
  font-weight: 500;
  color: #27173e;
  display: block;
  line-height: 1.2em;
  text-align: left;
}
.form-group textarea {
  resize: none;
}
.form-group .clear-input {
  display: flex;
  align-items: center;
  justify-content: center;
  color: #958d9e;
  height: 38px;
  font-size: 22px;
  position: absolute;
  right: -10px;
  bottom: 0;
  width: 32px;
  opacity: 0.5;
  display: none;
}
.form-group .clear-input:hover,
.form-group .clear-input:active {
  opacity: 0.8;
}
.form-group .input-wrapper {
  position: relative;
}
.form-group.basic {
  padding: 8px 0;
  margin: 0;
}
.form-group.basic .form-control {
  background: transparent;
  border: none;
  border-bottom: 1px solid #dcdce9;
  padding: 0 30px 0 0;
  border-radius: 0;
  height: 40px;
  color: #27173e;
  font-size: 15px;
}
.form-group.basic .form-control:focus {
  border-bottom-color: #6236ff;
  box-shadow: inset 0 -1px 0 0 #6236ff;
}
.form-group.basic textarea.form-control {
  height: auto;
  padding: 7px 40px 7px 0;
}
.form-group.basic.animated .label {
  margin-top: 20px;
  opacity: 0;
  top: -3px;
  transition: 0.2s all;
  position: absolute;
}
.form-group.basic.animated .input-wrapper {
  padding-top: 5px;
}
/*! CSS Used keyframes */
@keyframes loadingAnimation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
/*! CSS Used fontfaces */
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2)
    format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2)
    format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2)
    format("woff2");
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8,
    U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2)
    format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
@font-face {
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  src: url(https://fonts.gstatic.com/s/poppins/v19/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2)
    format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
