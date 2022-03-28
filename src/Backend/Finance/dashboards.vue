<template>
  <div class="container-fluid">
    <!-- <headerDashboard></headerDashboard> -->
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="main-content" id="panel ">
          <div class="container-fluid pt-3">
            <div class="row removable">
              <div class="col-xl-3 col-sm-6">
                <div class="card mb-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p
                            class="text-sm mb-0 text-capitalize font-weight-bold"
                          >
                            Bank Balance
                          </p>
                          <h5 class="font-weight-bolder mb-0">
                            {{ this.sumofDeposits }}

                            <span
                              class="text-success text-sm font-weight-bolder"
                              >+55%</span
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div
                          class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                        >
                          <i
                            class="ni ni-money-coins text-lg opacity-10"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card mb-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p
                            class="text-sm mb-0 text-capitalize font-weight-bold"
                          >
                            Pending Cheques.
                          </p>
                          <h5 class="font-weight-bolder mb-0">
                            {{ this.sumofallpaymentsmadepostedisfalse }}
                            <span
                              class="text-success text-sm font-weight-bolder"
                              >+3%</span
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div
                          class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                        >
                          <i
                            class="ni ni-world text-lg opacity-10"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card mb-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p
                            class="text-sm mb-0 text-capitalize font-weight-bold"
                          >
                            Expected Cheques.
                          </p>
                          <h5 class="font-weight-bolder mb-0">
                            {{ this.expectedmonthlydeposits }}
                            <span class="text-danger text-sm font-weight-bolder"
                              >-2%</span
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div
                          class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                        >
                          <i
                            class="ni ni-paper-diploma text-lg opacity-10"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6">
                <div class="card mb-4">
                  <div class="card-body p-3">
                    <div class="row">
                      <div class="col-8">
                        <div class="numbers">
                          <p
                            class="text-sm mb-0 text-capitalize font-weight-bold"
                          >
                            New Loans
                          </p>
                          <h5 class="font-weight-bolder mb-0">
                            {{ this.sumofmonthloansnotapproved }}
                            <span
                              class="text-success text-sm font-weight-bolder"
                              >+5%</span
                            >
                          </h5>
                        </div>
                      </div>
                      <div class="col-4 text-end">
                        <div
                          class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                        >
                          <i
                            class="ni ni-cart text-lg opacity-10"
                            aria-hidden="true"
                          ></i>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="row mb-4 removable">
              <div class="col-lg-5">
                <div class="card mb-4">
                  <div class="card-body p-3">
                    <div
                      class="bg-gradient-dark border-radius-lg py-3 pe-1 mb-3"
                    >
                      <div class="chartjs-size-monitor">
                        <div class="chartjs-size-monitor-expand">
                          <div class=""></div>
                        </div>
                        <div class="chartjs-size-monitor-shrink">
                          <div class=""></div>
                        </div>
                      </div>
                      <canvas
                        id="chart-bars"
                        class="chart-canvas chartjs-render-monitor"
                        height="340"
                        style="display: block; height: 170px; width: 403px"
                        width="806"
                      ></canvas>
                    </div>
                    <h6 class="ms-2 mt-4 mb-0">Active Users</h6>
                    <p class="text-sm ms-2">
                      (<span class="font-weight-bolder">+23%</span>) than last
                      week
                    </p>
                    <div class="container border-radius-lg">
                      <div class="row">
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div
                              class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 40 44"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>document</title>
                                <g
                                  id="Basic-Elements"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Rounded-Icons"
                                    transform="translate(-1870.000000, -591.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g
                                      id="Icons-with-opacity"
                                      transform="translate(1716.000000, 291.000000)"
                                    >
                                      <g
                                        id="document"
                                        transform="translate(154.000000, 300.000000)"
                                      >
                                        <path
                                          class="color-background"
                                          d="M40,40 L36.3636364,40 L36.3636364,3.63636364 L5.45454545,3.63636364 L5.45454545,0 L38.1818182,0 C39.1854545,0 40,0.814545455 40,1.81818182 L40,40 Z"
                                          id="Path"
                                          opacity="0.603585379"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M30.9090909,7.27272727 L1.81818182,7.27272727 C0.814545455,7.27272727 0,8.08727273 0,9.09090909 L0,41.8181818 C0,42.8218182 0.814545455,43.6363636 1.81818182,43.6363636 L30.9090909,43.6363636 C31.9127273,43.6363636 32.7272727,42.8218182 32.7272727,41.8181818 L32.7272727,9.09090909 C32.7272727,8.08727273 31.9127273,7.27272727 30.9090909,7.27272727 Z M18.1818182,34.5454545 L7.27272727,34.5454545 L7.27272727,30.9090909 L18.1818182,30.9090909 L18.1818182,34.5454545 Z M25.4545455,27.2727273 L7.27272727,27.2727273 L7.27272727,23.6363636 L25.4545455,23.6363636 L25.4545455,27.2727273 Z M25.4545455,20 L7.27272727,20 L7.27272727,16.3636364 L25.4545455,16.3636364 L25.4545455,20 Z"
                                          id="Shape"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Members
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">
                            {{ lenghtofallMember }}
                          </h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-30"
                              role="progressbar"
                              aria-valuenow="60"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div
                              class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-info text-center me-2 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>spaceship</title>
                                <g
                                  id="Basic-Elements"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Rounded-Icons"
                                    transform="translate(-1720.000000, -592.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g
                                      id="Icons-with-opacity"
                                      transform="translate(1716.000000, 291.000000)"
                                    >
                                      <g
                                        id="spaceship"
                                        transform="translate(4.000000, 301.000000)"
                                      >
                                        <path
                                          class="color-background"
                                          d="M39.3,0.706666667 C38.9660984,0.370464027 38.5048767,0.192278529 38.0316667,0.216666667 C14.6516667,1.43666667 6.015,22.2633333 5.93166667,22.4733333 C5.68236407,23.0926189 5.82664679,23.8009159 6.29833333,24.2733333 L15.7266667,33.7016667 C16.2013871,34.1756798 16.9140329,34.3188658 17.535,34.065 C17.7433333,33.98 38.4583333,25.2466667 39.7816667,1.97666667 C39.8087196,1.50414529 39.6335979,1.04240574 39.3,0.706666667 Z M25.69,19.0233333 C24.7367525,19.9768687 23.3029475,20.2622391 22.0572426,19.7463614 C20.8115377,19.2304837 19.9992882,18.0149658 19.9992882,16.6666667 C19.9992882,15.3183676 20.8115377,14.1028496 22.0572426,13.5869719 C23.3029475,13.0710943 24.7367525,13.3564646 25.69,14.31 C26.9912731,15.6116662 26.9912731,17.7216672 25.69,19.0233333 L25.69,19.0233333 Z"
                                          id="Shape"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M1.855,31.4066667 C3.05106558,30.2024182 4.79973884,29.7296005 6.43969145,30.1670277 C8.07964407,30.6044549 9.36054508,31.8853559 9.7979723,33.5253085 C10.2353995,35.1652612 9.76258177,36.9139344 8.55833333,38.11 C6.70666667,39.9616667 0,40 0,40 C0,40 0,33.2566667 1.855,31.4066667 Z"
                                          id="Path"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M17.2616667,3.90166667 C12.4943643,3.07192755 7.62174065,4.61673894 4.20333333,8.04166667 C3.31200265,8.94126033 2.53706177,9.94913142 1.89666667,11.0416667 C1.5109569,11.6966059 1.61721591,12.5295394 2.155,13.0666667 L5.47,16.3833333 C8.55036617,11.4946947 12.5559074,7.25476565 17.2616667,3.90166667 L17.2616667,3.90166667 Z"
                                          id="color-2"
                                          opacity="0.598539807"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M36.0983333,22.7383333 C36.9280725,27.5056357 35.3832611,32.3782594 31.9583333,35.7966667 C31.0587397,36.6879974 30.0508686,37.4629382 28.9583333,38.1033333 C28.3033941,38.4890431 27.4704606,38.3827841 26.9333333,37.845 L23.6166667,34.53 C28.5053053,31.4496338 32.7452344,27.4440926 36.0983333,22.7383333 L36.0983333,22.7383333 Z"
                                          id="color-3"
                                          opacity="0.598539807"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Deposits
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">{{ totalSavings }}</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-90"
                              role="progressbar"
                              aria-valuenow="90"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div
                              class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-warning text-center me-2 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 43 36"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>credit-card</title>
                                <g
                                  id="Basic-Elements"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Rounded-Icons"
                                    transform="translate(-2169.000000, -745.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g
                                      id="Icons-with-opacity"
                                      transform="translate(1716.000000, 291.000000)"
                                    >
                                      <g
                                        id="credit-card"
                                        transform="translate(453.000000, 454.000000)"
                                      >
                                        <path
                                          class="color-background"
                                          d="M43,10.7482083 L43,3.58333333 C43,1.60354167 41.3964583,0 39.4166667,0 L3.58333333,0 C1.60354167,0 0,1.60354167 0,3.58333333 L0,10.7482083 L43,10.7482083 Z"
                                          id="Path"
                                          opacity="0.593633743"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M0,16.125 L0,32.25 C0,34.2297917 1.60354167,35.8333333 3.58333333,35.8333333 L39.4166667,35.8333333 C41.3964583,35.8333333 43,34.2297917 43,32.25 L43,16.125 L0,16.125 Z M19.7083333,26.875 L7.16666667,26.875 L7.16666667,23.2916667 L19.7083333,23.2916667 L19.7083333,26.875 Z M35.8333333,26.875 L28.6666667,26.875 L28.6666667,23.2916667 L35.8333333,23.2916667 L35.8333333,26.875 Z"
                                          id="Shape"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              Total Loans
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">{{ totalLoans }}</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-30"
                              role="progressbar"
                              aria-valuenow="30"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                        <div class="col-3 py-3 ps-0">
                          <div class="d-flex mb-2">
                            <div
                              class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-danger text-center me-2 d-flex align-items-center justify-content-center"
                            >
                              <svg
                                width="10px"
                                height="10px"
                                viewBox="0 0 40 40"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                              >
                                <title>settings</title>
                                <g
                                  id="Basic-Elements"
                                  stroke="none"
                                  stroke-width="1"
                                  fill="none"
                                  fill-rule="evenodd"
                                >
                                  <g
                                    id="Rounded-Icons"
                                    transform="translate(-2020.000000, -442.000000)"
                                    fill="#FFFFFF"
                                    fill-rule="nonzero"
                                  >
                                    <g
                                      id="Icons-with-opacity"
                                      transform="translate(1716.000000, 291.000000)"
                                    >
                                      <g
                                        id="settings"
                                        transform="translate(304.000000, 151.000000)"
                                      >
                                        <polygon
                                          class="color-background"
                                          id="Path"
                                          opacity="0.596981957"
                                          points="18.0883333 15.7316667 11.1783333 8.82166667 13.3333333 6.66666667 6.66666667 0 0 6.66666667 6.66666667 13.3333333 8.82166667 11.1783333 15.315 17.6716667"
                                        ></polygon>
                                        <path
                                          class="color-background"
                                          d="M31.5666667,23.2333333 C31.0516667,23.2933333 30.53,23.3333333 30,23.3333333 C29.4916667,23.3333333 28.9866667,23.3033333 28.48,23.245 L22.4116667,30.7433333 L29.9416667,38.2733333 C32.2433333,40.575 35.9733333,40.575 38.275,38.2733333 L38.275,38.2733333 C40.5766667,35.9716667 40.5766667,32.2416667 38.275,29.94 L31.5666667,23.2333333 Z"
                                          id="Path"
                                          opacity="0.596981957"
                                        ></path>
                                        <path
                                          class="color-background"
                                          d="M33.785,11.285 L28.715,6.215 L34.0616667,0.868333333 C32.82,0.315 31.4483333,0 30,0 C24.4766667,0 20,4.47666667 20,10 C20,10.99 20.1483333,11.9433333 20.4166667,12.8466667 L2.435,27.3966667 C0.95,28.7083333 0.0633333333,30.595 0.00333333333,32.5733333 C-0.0583333333,34.5533333 0.71,36.4916667 2.11,37.89 C3.47,39.2516667 5.27833333,40 7.20166667,40 C9.26666667,40 11.2366667,39.1133333 12.6033333,37.565 L27.1533333,19.5833333 C28.0566667,19.8516667 29.01,20 30,20 C35.5233333,20 40,15.5233333 40,10 C40,8.55166667 39.685,7.18 39.1316667,5.93666667 L33.785,11.285 Z"
                                          id="Path"
                                        ></path>
                                      </g>
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                            <p class="text-xs mt-1 mb-0 font-weight-bold">
                              FOSA BALANCE
                            </p>
                          </div>
                          <h4 class="font-weight-bolder">100000</h4>
                          <div class="progress w-75">
                            <div
                              class="progress-bar bg-dark w-50"
                              role="progressbar"
                              aria-valuenow="50"
                              aria-valuemin="0"
                              aria-valuemax="100"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="card mb-4">
                  <div class="card-header pb-0">
                    <h6>Monthly Income</h6>
                    <p class="text-sm">
                      <i
                        class="fa fa-arrow-up text-success"
                        aria-hidden="true"
                      ></i>
                      <span class="font-weight-bold">4% more</span> in 2021
                    </p>
                  </div>
                  <div class="card-body p-3">
                    <div class="">
                      <BarChart />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row removable mb-4">
            <div class="col-12">
              <div class="card mb-4">
                <div class="card-header pb-0 p-3"></div>
                <div class="card-body p-3">
                  <div class="row">
                    <div class="col">
                      <div class="card card-blog card-plain">
                        <div class="position-relative">
                          <PieChart />
                        </div>
                        <div class="card-body px-1 pb-0">
                          <p class="text-gradient text-dark mb-2 text-sm">
                            Products Uptake
                          </p>

                          <div
                            class="d-flex align-items-center justify-content-between"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm mb-0"
                            >
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card card-blog card-plain">
                        <div class="position-relative">
                          <LineChart />
                        </div>
                        <div class="card-body px-1 pb-0">
                          <p class="text-gradient text-dark mb-2 text-sm">
                            Monthly Loan Uptake
                          </p>

                          <div
                            class="d-flex align-items-center justify-content-between"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm mb-0"
                            >
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="card card-blog card-plain">
                        <div class="position-relative">
                          <PieChart />
                        </div>
                        <div class="card-body px-1 pb-0">
                          <p class="text-gradient text-dark mb-2 text-sm">
                            Loan Uptake by Type
                          </p>

                          <div
                            class="d-flex align-items-center justify-content-between"
                          >
                            <button
                              type="button"
                              class="btn btn-outline-primary btn-sm mb-0"
                            >
                              View Project
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import LineChart from "@/charts/Linechart.js";

import financeNav from "@/components/FinanceNav";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
import axios from "axios";
import BarChart from "@/components/BarChart.vue";
import PieChart from "@/components/PieChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  name: "DashBoard",
  components: {
    LineChart,
    financeNav,
    BarChart,
    PieChart,
  },

  data() {
    return {
      chartData: {
        Books: 24,
        Magazine: 30,
        Newspapers: 10,
      },

      show: false,
      right: false,
      hover: false,
      interactive: true,

      search: "",
      myapprovedloans: [],
      orgprofile: {},
      orgprofile1: {},
      companyid1: "",
      members: [],
      member: "",
      memberscount: [],
      path: "",
      selectedemployer: "",
      employer: [],
      selectedcounty: "",
      county: [],
      selected: "A",
      options: [],
      tableData: [],
      add_product: false,
      editing: false,
      loanschedule: [],
      loanscheduleMe: [],
      depositstotal: [],
      totaldeposits: [],
      totaldepositsMe: [],
      // totalSavings: [],
      Loans: {
        User_id:"",
        email: this.$store.state.email,
        Amount: this.Amount,
        loan_Type: "Development",
        interest: "",
        Interest_Monthly: "",
        Term: "",
        TotalLoans: "",
        Monthrepayment: "",
        Principle_Monthly: "",
        Total_Loan: "",
      },
      loan: [],
      applicount: [],
      product: [],
      loan_type: "",
      monthlyloan: [],
      // monthdeposits: [],
      monthdepositsme: [],

      role: [],
      roles: [],
      mymonthlydeposits: "",
      addmembers: [
        {
          first_name: "",
          last_name: "",
          phone_no: "",
          email: "",
          date_of_birth: "",
          Employer: "",
          Department: "",
          County: "",
        },
      ],
    };
  },

  created() {
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchBanktransactions();
    this.fetchPaymentsmade();
    this.fetchPaymentsreceived();
    this.fetchExpenses();
  },

  mounted() {
    this.fillData();

    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {
          organizationprofile: this.orgprofileid,
          Application_Status: "0",
        },
      })
      .then((res) => {
        this.applicount = res.data.count;
      });

    //count records based on axios filter  for MemberDetails
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {
          company_id: this.companyid3,
        },
      })
      .then((res) => {
        this.memberscount = res.data.count;
      });
  },

  methods: {
    ...mapActions([
      "fetchDeposits",
      "fetchDocuments",
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchBanktransactions",
      "fetchPaymentsmade",
      "fetchPaymentsreceived",
      "fetchExpenses",
    ]),

    fillData() {
      this.datacollection = {
        labels: [this.getRandomInt(), this.getRandomInt()],
        datasets: [
          {
            label: "Data One",
            backgroundColor: "#f87979",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
          {
            label: "Data two",
            backgroundColor: "#green",
            data: [this.getRandomInt(), this.getRandomInt()],
          },
        ],
      };
    },
    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },

    addnewmeber() {
      Promise.all([
        axios
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            // window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },
    invite(member) {
      // let random = Math.random();
      // item.label = random;

      this.member = member;

      Promise.all([
        axios
          .post(`dj-rest-auth/registration/`, {
            // names: '',
            username: this.member.email,
            email: this.member.email,
            is_staff: "False",
            // first
            // phone_no:this.member.phone_no,
            // County:this.member.County,
            // Employer:this.member.Employer,
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            company_id: this.companyid,
            password1: "Qwerty2021",
            password2: "Qwerty2021",
          })
          .then((response) => {
            response;
            this.$router.push({ name: "members" });
          })
          .catch((e) => {
            alert(JSON.stringify(e.response.data));
          }),

        axios
          .put("/members/update/" + this.member.id + "/", {
            Application_Status: "True",
            invited: "True",
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            phone_no: this.member.phone_no,
            bankname: this.member.bankname,
            email: this.member.email,
            username: this.member.email,
            date_of_birth: this.member.date_of_birth,
            Employer: this.member.Employer,
            Department: this.member.Department,
            County: this.member.County,
            Address: this.member.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid,
          })
          .then((response) => {
            response;
            // confirm("We have received your application");
            this.$router.push({ name: "operations" });
          })
          .catch((e) => {
            alert(e);
          }),
      ]);
    },

    approveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: "Development",
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
        })
        .then((response) => {
          response;
          window.location.reload();
          // confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    change(item) {
      this.loan = item;

      const memberfilter = this.loan.email;
      // alert(item.Total_Loan);

      Promise.all([
        axios
          .get("/loans/api/v1/loans/", {
            params: { email: memberfilter, Status: "4" },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;

            $("#walla").DataTable();
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdepositsme = res.data.results;
            $("#walla").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.depositstotal = res.data.results.filter((depositstotal) =>
              depositstotal.Account.includes("deposits")
            );

            $("#walla").DataTable();
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "loans" },
          })
          .then((res) => {
            this.loanscheduleMe = res.data.results;
            $("#walla").DataTable();
          }),
        axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
          this.employer = res.data.results;
          // $("#example").DataTable();
        }),
      ]);
    },

    onChange() {
      this.$router.push(this.path);
    },

    showModal() {
      $(".ApplyLoan").modal("show");
    },
    addrecords() {
      Promise.all([
        axios
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },

    saveloan() {
      axios
        .post(`/loans/api/v1/loans/`, {
          // names: '',
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.Loans.Amount,
          loan_Type: "Development",
          interest: this.Loans.interest,
          Interest_Monthly: this.interestmonthly,
          Term: this.Loans.Term,
          Status: "1",
          TotalLoans: this.tLoans,
          Monthrepayment: this.monthlyRepayment,
          Principle_Monthly: this.PrincipleMonthly,
          Total_Loan: this.tLoans,
          organizationprofile: this.orgprofileid,
          gl_account: this.Loans.gl_account,
          EmployerProfile: this.loan.Employer,
          company_id: this.loan.company_id,
        })
        .then((response) => {
          response;
          window.location.reload();
          confirm("We have received your application");
          this.$router.push({ name: "operations" });
        })
        .catch((e) => {
          alert(e);
        });
    },

    deleteProduct(id) {
      axios
        .delete(`products/${id}`)
        .then((res) => {
          for (let i = 0; i < this.tableData.length; i++) {
            if (this.tableData[i].id == res.data.results) {
              this.tableData.splice(i, 1);
            }
          }
        })
        .catch((error) => console.log(error.response));
    },
    initDatatable() {
      setTimeout(() => {
        $(".walla").DataTable({
          pagingType: "full_numbers",
          lengthMenu: [
            [10, 25, 50, -1],
            [10, 25, 50, "All"],
          ],
          order: [
            [0, "asc"],
            [3, "desc"],
          ],
          responsive: true,
          destroy: true,
          retrieve: true,
          autoFill: true,
          colReorder: true,
        });
      }, 300);
    },

    editMode(product) {
      this.$store.dispatch("updateProduct", product).then(() => {
        this.editing = true;
        this.add_product = true;
      });
    },
    loantypechange() {
      const opt = this.options.find((o) => o.loan_type === this.selected);

      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
    },
  },

  computed: {
    ...mapGetters([
      "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allExpenses",
      "",
    ]),
    token() {
      return this.$store.state.accessToken;
    },
    email() {
      return this.$store.state.email;
    },
    user_id() {
      return this.$store.state.id;
    },
    firstname() {
      return this.$store.state.firstname;
    },
    tInterest() {
      // let tloans = this.Loans.Amount;
      // let tinterest = this.Loans.interest;
      // // let tTerm = this.Term;
      // return Math.round((tloans * tinterest) / 100);
      return Number(this.PaymentAmount - this.tLoans);
    },

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    monthdeposits: function () {
      return this.$store.getters.allDeposits.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    monthloans: function () {
      return this.$store.getters.allLoans.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    monthloansnotapproved: function () {
      return this.$store.getters.allLoans.filter(
        (member) => member.company_id == this.companyid3 && member.Status != 4
      );
    },

    allmembers: function () {
      return this.$store.getters.allMembers.filter(
        (member) => member.company_id == this.companyid3
      );
    },

    MonthlyLoan: function () {
      var sum = 0;
      this.monthloans.forEach((e) => {
        sum += e.Monthrepayment;
      });
      return sum;
    },

    tLoans() {
      let tl = Math.round(this.emi * this.Loans.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    currentDate() {
      const current = new Date();
      // const date = `${current.getDate()}/${current.getMonth() +
      // 	1}/${current.getFullYear()}`;
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },

    interestRate() {
      return this.Loans.interest / 100 / 12;
    },

    emi() {
      var x = Math.pow(1 + this.interestRate, this.Loans.Term);
      var emiMonthly = (this.Loans.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    interestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.tLoans - this.Loans.Amount) / this.Loans.Term);

      if (isNaN(int)) {
        int = 0;
      }
      return int;
    },

    totalLoans: function () {
      var sum = 0;
      this.allloans.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loanbalance: function () {
      return this.totalLoansMe;
    },

    totalSavings: function () {
      var sum = 0;
      this.alldeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    alldeposits: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Document == "deposits"
      );
    },

    allloans: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3 && item.Document == "loans"
      );
    },

    currentdeposits: function () {
      return this.totalSavingsMe;
    },

    exposure: function () {
      return this.totalSavings - this.totalLoans - this.loan.Amount;
    },

    monthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.Loans.Term;
      let tLoans = this.Loans.Amount;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },
    PrincipleMonthly() {
      // let tinterest = this.interest;

      return this.monthlyRepayment - this.interestmonthly;
    },

    // Compute for make paymennt
    PaymentAmount() {
      return Number(
        this.Payments.deposit * 1 +
          this.Payments.interest * 1 +
          this.Payments.loan * 1
      );
    },
    depositdate() {
      return this.withdrawal.Deposit_date;
    },

    withdrawalamount() {
      return Number(this.withdrawal.Deposit_Amount * -1);
    },
    loantypeinterest() {
      return this.loan.interest_rate;
    },
    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    allDocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allloansapproved() {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3 && item.Status == "4"
      );
    },

    allloansdisbursed() {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3 && item.Status == "4"
      );
    },

    sumofallloansapproved() {
      var sum = 0;
      this.allloansapproved.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    lenghtofallMember() {
      return this.allMembers.length;
    },

    sumofmonthloansnotapproved() {
      var sum = 0;
      this.monthloansnotapproved.forEach((e) => {
        sum += e.Amount;
      });
      return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },

    allpaymentsmade() {
      return this.$store.getters.allPaymentsmade.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allpaymentsmadepostedisfalse() {
      return this.$store.getters.allPaymentsmade.filter(
        (item) => item.company_id == this.companyid3 && item.posted == false
      );
    },

    sumofallpaymentsmade() {
      var sum = 0;
      this.allpaymentsmade.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    sumofallpaymentsmadepostedisfalse() {
      var sum = 0;
      this.allpaymentsmadepostedisfalse.forEach((e) => {
        sum += e.amount;
      });
      return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },

    // expected monthly Deposits

    allmemberdeposits() {
      return this.$store.getters.allDeposits.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    sumofalldeposits() {
      var sum = 0;
      this.allmemberdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    monthloansdisbursed() {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3 && item.Disbursed == true
      );
    },

    sumofallmonthlyloans() {
      var sum = 0;
      this.monthloansdisbursed.forEach((e) => {
        sum += e.Monthrepayment;
      });
      return sum;
    },

    expectedmonthlydeposits() {
      return (this.sumofalldeposits + this.sumofallmonthlyloans)
        .toString()
        .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },

    allbanktransactions() {
      return this.$store.getters.allBanktransactions.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    sumofDeposits() {
      let sum = 0;
      this.allbanktransactions.forEach((e) => {
        sum += e.Amount;
      });
      return sum.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    },

    companyid() {
      return this.companyid3;
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },
  },
};
</script>

<style></style>
