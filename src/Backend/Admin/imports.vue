<template>
  <div class="row">
    <!-- <div class="col-2">
			<financeNav></financeNav>
		</div> -->

    <!-- Modal -->

    <div class="col-2">
      <SysAdminNav></SysAdminNav>
    </div>

    <div class="col-10">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Data Migration Section</h4>

            <div class="d-flex align-items-center">
              <div class="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  class="btn btn-sm btn-alt-secondary d-flex align-items-center"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    class="rounded-circle"
                    src="@/assets/images/faces/4.jpg"
                    alt="Header Avatar"
                    style="width: 21px"
                  />
                  <span class="d-none d-sm-inline-block ms-2"
                    >Import Files</span
                  >
                  <i
                    class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
                  ></i>
                </button>

                <div class="topnav-right"></div>
                <div
                  class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                  aria-labelledby="page-header-user-dropdown"
                  style=""
                >
                  <div class="p-2">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Accountypes"
                    >
                      <span class="fs-sm fw-medium">Account Types</span>
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                    </a>
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Mainaccounts"
                    >
                      <span class="fs-sm fw-medium">Main Accounts</span>
                      <span class="badge rounded-pill bg-primary ms-2">1</span>
                    </a>
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="javascript:void(0)"
                      data-bs-toggle="modal"
                      data-bs-target="#Subaccounts"
                    >
                      <span class="fs-sm fw-medium">Sub Accounts</span>
                    </a>
                  </div>

                  <div role="separator" class="dropdown-divider m-0"></div>

                  <div class="p-2">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Counties"
                    >
                      <span class="fs-sm fw-medium">Counties</span>
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                    </a>
                  </div>

                  <div role="separator" class="dropdown-divider m-0"></div>

                  <div class="p-2">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      href="#"
                      data-bs-toggle="modal"
                      data-bs-target="#Members"
                    >
                      <span class="fs-sm fw-medium">Member Details</span>
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                    </a>
                  </div>
                  <div role="separator" class="dropdown-divider m-0"></div>
                  <div class="p-2">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      data-bs-toggle="modal"
                      data-bs-target="#Pledges"
                    >
                      <span class="fs-sm fw-medium">Member Pledges</span>
                    </a>
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      data-bs-toggle="modal"
                      data-bs-target="#SharesOB"
                    >
                      <span class="fs-sm fw-medium">Member Shares</span>
                    </a>
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      data-bs-toggle="modal"
                      data-bs-target="#DepositsOB"
                    >
                      <span class="fs-sm fw-medium">Member Deposits</span>
                    </a>
                  </div>
                  <div role="separator" class="dropdown-divider m-0"></div>
                  <div class="p-2">
                    <a
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      data-bs-toggle="modal"
                      data-bs-target="#LoansOB"
                    >
                      <span class="fs-sm fw-medium">Loan Balances</span>
                    </a>
                  </div>
                </div>
              </div>

              <button
                type="button"
                class="btn btn-sm btn-alt-secondary ms-2"
                data-toggle="layout"
                data-action="side_overlay_toggle"
              >
                <i class="fa fa-fw fa-list-ul fa-flip-horizontal"></i>
              </button>
            </div>

            <div
              class="alert alert-warning alert-dismissible fade show"
              role="alert"
            >
              <strong>{{ this.email }}!</strong> Go back to Sacco {{ this.x }}
              <router-link :to="{ name: 'finance' }" exact
                >Finance Navigator
              </router-link>
            </div>

            <div class="card-body"></div>
          </div>
        </div>

        <!-- Modal Account Types -->
        <div
          class="modal fade modalbox"
          id="Accountypes"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Accounts Types
                </h5>
                <input type="file" @change="onFileChange" />

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- {{this.datatable.columns}} -->
                {{ this.accounttype1 }}
                <div class="table-responsive"></div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postacctypes"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal for  Subaccounts -->

        <div
          class="modal fade modalbox"
          id="Subaccounts"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="Mainaccounts"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Sub Accouts
                </h5>
                <input type="file" @change="onFileChange" />

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {{ this.subaccounts }}
                <div class="table-responsive"></div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postsubaccounts"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="modal fade modalbox"
          id="Counties"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="Mainaccounts"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Counties & Cities
                </h5>
                <input type="file" @change="onFileChange" />

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- {{ this.datatable }} -->
                <!-- {{this.datatable.columns}} -->
                <!-- {{ this.accounttypes }} -->
                <!-- {{ this.mainaccounts1 }} -->
                {{ this.counties }}
                <div class="table-responsive"></div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postcounties"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Member Pledges  -->

        <div
          class="modal fade modalbox"
          id="Pledges"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header row-cols-4">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Member Pledges
                </h5>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                {{ this.level }}

                <!-- {{this.datatable.columns}} -->
                {{ this.accounttype1 }}
                <div class="row">
                  <div class="col-4">
                    <div class="card">
                      <div class="card-body">
                        <ul>
                          <ol>
                            <h3>
                              Step 1:
                              <button
                                class="btn btn-primary"
                                @click="clearDataPledges"
                              >
                                Clear Import Data
                              </button>
                            </h3>
                          </ol>
                        </ul>
                      </div>
                    </div>
                    <hr />

                    <div class="card">
                      <div class="card-body">
                        Select your Pledge?
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="selected"
                          @change="savingtypechange"
                        >
                          <option
                            v-for="option in depositsPledges"
                            v-bind:value="option.saving_type"
                            :key="option.id"
                          >
                            {{ option.saving_type }}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div class="card">
                      <div class="card-body">
                        <ul>
                          <ol>
                            <h3>
                              Step 2:
                              <button
                                class="btn btn-primary"
                                @click="copyMembers"
                              >
                                process members
                              </button>
                            </h3>
                          </ol>
                        </ul>
                      </div>
                    </div>
                    <hr />

                    <div class="card">
                      <div class="card-body">
                        Export Excel Template?
                        <select
                          class="form-select form-select-sm"
                          aria-label=".form-select-sm example"
                          @change="pickdata"
                          v-model="selected"
                        >
                          <option selected>Open this select menu</option>
                          <option value="openingbalances">
                            Opening Balances
                          </option>
                          <option value="loanschedule">Loan Schedule</option>
                        </select>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        Download xlsx template
                        <vue-excel-xlsx
                          class="btn btn-success"
                          :data="data1"
                          :columns="columns"
                          :file-name="this.selected"
                          :file-type="'xlsx'"
                          :sheet-name="this.selected"
                          @click="pickdata"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-download"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                            />
                            <path
                              d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            fill="currentColor"
                            class="bi bi-file-excel"
                            viewBox="0 0 16 16"
                          >
                            <path
                              d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"
                            />
                            <path
                              d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                            />
                          </svg>
                        </vue-excel-xlsx>
                      </div>
                    </div>
                    <hr />
                    <div class="card">
                      <div class="card-body">
                        Select file to Import
                        <input type="file" @change="onFileChange" />
                      </div>
                    </div>
                    <hr />
                    <div class="card">
                      <div class="card-body">
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="postOpeningbalance"
                        >
                          Import
                        </button>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-body">
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="processLoans"
                        >
                          Process Loans
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- {{this.datatable.columns}} -->

                  <div class="table-responsive col">
                    <table
                      class="table-borderless table-hover table-striped walla"
                    >
                      <thead>
                        <tr class="line-item-header">
                          <th>#</th>

                          <th>Date Disbirsed</th>
                          <th>Loan ID</th>
                          <th>Member</th>

                          <!---->
                          <th class="text-left">Loan Type</th>
                          <th class="text-left">Loan Term</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in loansExportsStore"
                          :key="item.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ item.date_disbursed }}</td>
                          <td>{{ item.id }}</td>
                          <td>{{ item.email }}</td>
                          <td>{{ item.loan_Type }}</td>
                          <td>{{ item.Term }}</td>
                          <td>{{ item.Amount }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postacctypes"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Members Pledges ends  -->

        <!-- Member Deposits Opening Balances   -->

        <div
          class="modal fade modalbox"
          id="DepositsOB"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header row-cols-4">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Deposits Opening Balances
                </h5>
                <div class="col-sm-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="pledgetype"
                  >
                    <option
                      v-for="item in depositsPledges"
                      :value="item.val"
                      :Key="item.id"
                    >
                      {{ item.saving_type }}
                    </option>
                  </select>
                </div>

                <input type="file" @change="onFileChange" />

                <download-excel :data="deposits_data">
                  <button type="button" class="btn btn-success">
                    Download Template
                  </button>
                </download-excel>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <!-- {{this.datatable.columns}} -->
                {{ this.accounttype1 }}
                <div class="table-responsive">
                  <table class="table table-unbordered walla">
                    <thead>
                      <tr>
                        <th>#</th>

                        <th>Account Type</th>

                        <th>Account Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in accounttype1" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.accounttype }}</td>
                        <td>{{ product.accountcode }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postacctypes"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Members Deposits Opening Balances ends  -->

        <!-- Member Shares Opening Balances   -->

        <div
          class="modal fade modalbox"
          id="SharesOB"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
              <div class="modal-header col-12">
                <h5 class="modal-title" id="staticBackdropLabel">
                  Import Shares Opening Balances
                </h5>
                <div class="col-2">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="pledgetype"
                  >
                    <option
                      v-for="item in depositsPledges"
                      :value="item.val"
                      :Key="item.id"
                    >
                      {{ item.saving_type }}
                    </option>
                  </select>
                </div>

                <div class="col-2">
                  <input type="file" @change="onFileChange" />
                </div>

                <download-excel :data="shares_data" class="col-sm-">
                  <button type="button" class="btn btn-success">
                    Download Template
                  </button>
                </download-excel>

                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>

              <div class="modal-body">
                <div class="table-responsive">
                  <table class="table table-unbordered walla">
                    <thead>
                      <tr>
                        <th>#</th>

                        <th>Account Type</th>

                        <th>Account Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="product in accounttype1" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.accounttype }}</td>
                        <td>{{ product.accountcode }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postacctypes"
                >
                  Import
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Members Shares Opening Balances ends  -->

      <!-- Member Loans Opening Balances   -->

      <div
        class="modal fade modalbox"
        id="LoansOB"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header row-cols-4">
              <h5 class="modal-title" id="staticBackdropLabel">
                Import Loans Opening Balances
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-4">
                  <div class="card">
                    <div class="card-body">
                      <ul>
                        <ol>
                          <h3>
                            Step 1:
                            <button class="btn btn-primary" @click="clearData">
                              Clear Import Data
                            </button>
                          </h3>
                        </ol>
                      </ul>
                    </div>
                  </div>
                  <hr />

                  <div class="card">
                    <div class="card-body">
                      Select your Loan Type?
                      <select
                        class="form-select"
                        id="select-country"
                        data-live-search="true"
                        v-model="selectedloantype"
                        @change="loantypechange"
                        style="color=green"
                      >
                        <option
                          v-for="option in loantypes"
                          v-bind:value="option.loan_type"
                          :key="option.id"
                        >
                          {{ option.loan_type }}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div class="card">
                    <div class="card-body">
                      <ul>
                        <ol>
                          <h3>
                            Step 2:
                            <button
                              class="btn btn-primary"
                              @click="copyMembers"
                            >
                              process members
                            </button>
                          </h3>
                        </ol>
                      </ul>
                    </div>
                  </div>
                  <hr />

                  <div class="card">
                    <div class="card-body">
                      Export Excel Template?
                      <select
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        @change="pickdata"
                        v-model="selected"
                      >
                        <option selected>Open this select menu</option>
                        <option value="openingbalances">
                          Opening Balances
                        </option>
                        <option value="loanschedule">Loan Schedule</option>
                      </select>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      Download xlsx template
                      <vue-excel-xlsx
                        class="btn btn-success"
                        :data="data1"
                        :columns="columns"
                        :file-name="this.selected"
                        :file-type="'xlsx'"
                        :sheet-name="this.selected"
                        @click="pickdata"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-download"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"
                          />
                          <path
                            d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"
                          />
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          class="bi bi-file-excel"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M5.18 4.616a.5.5 0 0 1 .704.064L8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 0 1 .064-.704z"
                          />
                          <path
                            d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                          />
                        </svg>
                      </vue-excel-xlsx>
                    </div>
                  </div>
                  <hr />
                  <div class="card">
                    <div class="card-body">
                      Select file to Import
                      <input type="file" @change="onFileChange" />
                    </div>
                  </div>
                  <hr />
                  <div class="card">
                    <div class="card-body">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="postOpeningbalance"
                      >
                        Import
                      </button>
                    </div>
                  </div>
                  <div class="card">
                    <div class="card-body">
                      <button
                        type="button"
                        class="btn btn-primary"
                        @click="processLoans"
                      >
                        Process Loans
                      </button>
                    </div>
                  </div>
                </div>

                <!-- {{this.datatable.columns}} -->

                <div class="table-responsive col">
                  <table
                    class="table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Date Disbirsed</th>
                        <th>Loan ID</th>
                        <th>Member</th>

                        <!---->
                        <th class="text-left">Loan Type</th>
                        <th class="text-left">Loan Term</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="(item, index) in loansExportsStore"
                        :key="item.id"
                      >
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.date_disbursed }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.loan_Type }}</td>
                        <td>{{ item.Term }}</td>
                        <td>{{ item.Amount }}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="postacctypes"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Members Loans Opening Balances ends  -->

      <!-- Member Loans Schedule   -->

      <div
        class="modal fade modalbox"
        id="LoansActive"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header row-cols-4">
              <h5 class="modal-title" id="staticBackdropLabel">
                Import Loans schedule
              </h5>
              <div class="col-sm-2">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="pledgetype"
                >
                  <option
                    v-for="item in depositsPledges"
                    :value="item.val"
                    :Key="item.id"
                  >
                    {{ item.saving_type }}
                  </option>
                </select>
              </div>

              <input type="file" @change="onFileChange" />

              <download-excel :data="loan_data">
                <button type="button" class="btn btn-success">
                  Download Template
                </button>
              </download-excel>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              {{ this.level }}

              <!-- {{this.datatable.columns}} -->
              {{ this.accounttype1 }}
              <div class="table-responsive">
                <table class="table table-unbordered walla">
                  <thead>
                    <tr>
                      <th>#</th>

                      <th>Account Type</th>

                      <th>Account Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in accounttype1" :key="product.id">
                      <td>{{ product.id }}</td>
                      <td>{{ product.accounttype }}</td>
                      <td>{{ product.accountcode }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="postacctypes"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Members Loans Schedule ends  -->

      <!-- <-- Member Details  -->

      <div
        class="modal fade modalbox"
        id="Members"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-fullscreen">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">
                Import Member Details
              </h5>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div class="row">
                <div class="col-sm-3 my-1">
                  <label for="">Select Organization</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="pledgetype"
                  >
                    <option
                      v-for="item in organization"
                      :value="item.company_id"
                      :Key="item.id"
                    >
                      {{ item.organization_name }}
                    </option>
                  </select>
                </div>
                <div class="col-sm-3">
                  <label for="">Select Employer</label>
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="pledgetype"
                  >
                    <option
                      v-for="item in organization"
                      :value="item.company_id"
                      :Key="item.id"
                    >
                      {{ item.organization_name }}
                    </option>
                  </select>
                </div>

                <div class="col-sm-3">
                  <download-excel :data="json_data" class="col-sm-3">
                    <button type="button" class="btn btn-success">
                      Download File Format
                    </button>
                  </download-excel>
                </div>

                <div class="col-sm-3 my-1">
                  <input type="file" @change="onFileChange" />
                </div>

                <div class="col-sm-3 my-1">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="postmembers"
                  >
                    Import
                  </button>
                </div>

                <div class="col-sm-3 my-1">
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="processMembers"
                  >
                    Process All Records
                  </button>
                </div>
              </div>

              <!-- {{this.datatable.columns}} -->
              <!-- {{ this.accounttype1 }} -->
              <div class="table-responsive">
                <table class="table table-unbordered walla">
                  <thead>
                    <tr>
                      <th>#</th>

                      <th>first_name</th>

                      <th>last_name</th>
                      <th>phone_no</th>
                      <th>email</th>
                      <th>Department</th>
                      <th>Application_Status</th>
                      <th>Terms_of_Service</th>
                      <th>business</th>
                      <th>town</th>
                      <th>National</th>
                      <th>County</th>
                      <th>Ward</th>
                      <th>company_id</th>
                      <th>is_staff</th>
                      <th>is_Admin</th>
                      <th>Employer</th>
                      <th>organizationprofile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="product in accounttype1" :key="product.id">
                      <td>{{ product.MemberNo }}</td>
                      <td>{{ product.first_name }}</td>

                      <td>{{ product.last_name }}</td>
                      <td>{{ product.phone_no }}</td>
                      <td>{{ product.email }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                class="btn btn-primary"
                @click="postmembers"
              >
                Import
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Members Details ends  -->

    <div
      class="modal fade modalbox"
      id="Mainaccounts"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="Mainaccounts"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Import Main Accouts
            </h5>
            <input type="file" @change="onFileChange" />

            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <!-- {{this.datatable.columns}} -->
            {{ this.mainaccounts1 }}
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="postmainaccounts"
            >
              Import
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import SysAdminNav from "@/components/SysAdminNav";

import { getAPI } from "@/axios-api.js";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import Popper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
import readXlsxFile from "read-excel-file";
import { mapGetters, mapActions } from "vuex";
import writeXlsxFile from "write-excel-file";

export default {
  name: "ImportArea",
  components: {
    SysAdminNav,
  },

  data() {
    return {
      json_data: [],
      pledge_data: [],
      deposits_data: [],
      loan_data: [],
      shares_data: [],
      gldata_data: [],
      selectedloantype: [],
      data1: [],
      columns: [
        {
          label: "first_name",
          field: "first_name",
        },

        {
          label: "last_name",
          field: "last_name",
        },

        {
          label: "national_id",
          field: "national_id",
        },

        {
          label: "phone_no",
          field: "phone_no",
        },
        {
          label: "email",
          field: "email",
        },
        {
          label: "loan_Type",
          field: "loan_Type",
        },

        {
          label: "Amount",
          field: "Amount",
        },
        {
          label: "Term",
          field: "Term",
        },
        {
          label: "Monthrepayment",
          field: "Monthrepayment",
        },
        {
          label: "Total_Loan",
          field: "Total_Loan",
        },

        {
          label: "Principle_Monthly",
          field: "Principle_Monthly",
        },
        {
          label: "interest",
          field: "interest",
        },
        {
          label: "Interest_Monthly",
          field: "Interest_Monthly",
        },
        {
          label: "date_disbursed",
          field: "date_disbursed",
        },
        {
          label: "current_balance",
          field: "current_balance",
        },
        {
          label: "noofmonthspaid",
          field: "noofmonthspaid",
        },
        {
          label: "Disbursed",
          field: "Disbursed",
        },
        {
          label: "date_disbursed",
          field: "date_disbursed",
        },
        {
          label: "User_id(Dont Change)",
          field: "User_id",
        },
        {
          label: "gl_account(Dont Change)",
          field: "gl_account",
        },
        {
          label: "income_account(Dont Change)",
          field: "income_account",
        },

        {
          label: "company_id(Dont Change)",
          field: "company_id",
        },
      ],

      accounttypes: [],
      pledgetype: [],
      counties: [],
      subaccounts: [],
      mainaccounts1: [],
      accounttype1: [],
      importmembers: [],
      memberxp: [],
      allmembers: [],
      Loans: {
        User_id: "",
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
      contribution: {},

      approvalLevelsselect: [],
      tableData: [],
      approver: {},
      selectedemail: {},
      message: {},
      level: "",
      add_product: false,
      editing: false,
      selected: "",
      users: [],
      options: [
        { id: 0, code: 0, text: "Control" },
        { id: 1, code: 1, text: "Accounts Payables" },
        { id: 2, code: 2, text: "Accounts Receivables" },
        { id: 3, code: 3, text: "Bank" },
        { id: 4, code: 4, text: "Cash" },
        { id: 5, code: 5, text: "Cost of Goods" },
        { id: 6, code: 6, text: "Equity" },
        { id: 7, code: 2220000, text: "ACCRUED EXPENSES" },
        { id: 8, code: 2220000, text: "EMPLOYEE BENEFITS PAYABLE" },
        {
          id: 9,
          code: 2220000,
          text: "OTHER NON-INTEREST-BEARING LIABILITIES",
        },
        { id: 10, code: 3000000, text: "CAPITAL" },
        { id: 11, code: 4000000, text: "Income" },
        { id: 12, code: 1000000, text: "Asset" },
        { id: 13, code: 10, text: "Current Asset" },
        { id: 14, code: 2000000, text: "Liabilities" },
        { id: 12, code: 12, text: "Current Liability" },
      ],
      coa: [],

      //create a data object with data properties upto 3
      x: [],
    };
  },
  created() {
    this.getProducts();
    this.initDatatable();
    this.maxapp();
    this.approvalLevels();
    this.fetchOrg();
    this.fetchSavingtype();
    this.loadimport();
    this.updatemeberxp();
    this.fetchLoantype();
    this.fetchLoansExport();
    this.fetchLoansImport();
    this.fetchMemberPledgesImports();
  },

  mounted() {
    getAPI.get("/users/api/v1/CustomUser/").then((response) => {
      this.users = response.data.results;
    });
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
      "allLoantype",
      "allLoansExports",
      "allLoansImports",
      "allMemberPledgesImports",
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

    memberPledgesImportStore: function () {
      return this.$store.getters.allMemberPledgesImports.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    loansExportsStore: function () {
      return this.$store.getters.allLoansExports.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    loansImportsStore: function () {
      return this.$store.getters.allLoansImports.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    //create current date function
    currentDate() {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
      var yyyy = today.getFullYear();

      today = yyyy + "-" + mm + "-" + dd;
      return today;
    },

    companyid() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    depositsPledges() {
      return this.$store.getters.allSavinttype.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    organization() {
      return this.$store.getters.allOrg.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    memberson() {
      return this.$store.getters.allMembers.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    pledgeson() {
      return this.$store.getters.allDeposits.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    loanson() {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    depositson() {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    shareson() {
      return this.$store.getters.allDocuments.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    loantypes() {
      return this.$store.getters.allLoantype.filter(
        (item) => item.company_id == this.companyid3
      );
    },
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
      "fetchSavingtype",
      "fetchLoantype",
      "fetchLoansExport",
      "fetchLoansImport",
      "fetchMemberPledgesImports",
    ]),

    processLoans() {
      //Post a memberImports to Members
      this.fetchLoansImport();

      for (var i = 0; i < this.loansImportsStore.length; i++) {
        var loan = this.loansImportsStore[i];
        getAPI
          .post("/loans/api/v1/loans/", loan)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
            this.$swal({
              title: "Error",
              text: error,
              icon: "error",
              button: "Ok",
            });
          });
      }
    },

    postOpeningbalance() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/loans/api/v1/loansImport/", {
            email: acctype[4],
            national_id: acctype[2],

            loan_Type: acctype[5],
            phone_no: acctype[3],
            interest: acctype[11],
            Amount: acctype[6],
            Term: acctype[7],
            Monthrepayment: acctype[8],
            Total_Loan: acctype[9],
            Principle_Monthly: acctype[10],
            Interest_Monthly: acctype[12],
            date_disbursed: acctype[13],
            current_balance: acctype[14],
            noofmonthspaid: acctype[15],
            noofmonthspaidvar: acctype[8],
            Status: 4,
            Arreas_Status: acctype[10],
            Disbursed: true,
            User_id: acctype[18],
            gl_account: acctype[19],
            income_account: acctype[20],

            company_id: this.companyid3,

            organizationprofile: this.organizationprofile,
            keyvalue: acctype[4] + acctype[5],
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });

        console.log(i, acctype);
      }
      this.$swal({
        title: "Success",
        text: "Opening Balance added successfully",
        icon: "success",
        button: "Ok",
      });
    },

    pickdata() {
      //add properties to data1

      const loansOpeningBalance = [
        {
          id: 1,

          Account: "2111000",
          user_Id: "1",
          memberemail: "karash@gmail.com",
          Transaction_date: "2022-04-09",
          last_updated: "2022-04-09T09:50:47.002923Z",
          Account_Code: "2111000",
          accountype_description: "ASSETS",
          Accountcode_description: "Members Deposits - Bosa",
          Debit: 5000,
          Credit: 0,
          Amount: 5000,
          Document: "loans",
          Transaction_type: "CR",
          Posting_Date: this.currentDate,
          allocated: false,
          company_id: this.companyid3,
          notes: "Members Loans Opening Balances",
          updatedgl: false,
          organizationprofile: this.organizationprofile,
        },
      ];

      const loanSchedule = this.loansExportsStore;

      // if selected is deposits then
      if (this.selected == "loanschedule") {
        this.data1 = loanSchedule;
      }
      if (this.selected == "openingbalances") {
        this.data1 = loansOpeningBalance;
      }

      console.log(this.selected);
      console.log(this.data1);
    },

    clearData() {
      for (var i = 0; i < this.loansExportsStore.length; i++) {
        getAPI
          .delete(
            "loans/api/v1/loansExport/" + this.loansExportsStore[i].id + "/"
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    },

    clearDataPledges() {
      for (var i = 0; i < this.memberPledgesImportStore.length; i++) {
        getAPI
          .delete(
            "loans/api/v1/members/api/v1/ImportMonthDeposits/" +
              this.loansExportsStore[i].id +
              "/"
          )
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    },

    savingtypechange() {
      const opt = this.depositsPledges.find(
        (o) => o.saving_type === this.selected
      );
      console.log(opt);
      this.contribution.saving_type = opt.saving_type;
      this.contribution.minimum_contribution = opt.minimum_contribution;
      this.contribution.interest_rate = opt.interest_rate;
      this.contribution.maximum_saving_term = opt.maximum_saving_term;
      this.contribution.accountcode = opt.accountcode;
      this.contribution.Account_type = opt.Account_type;
      this.contribution.accountype_description = opt.accountype_description;
      this.contribution.maincode = opt.maincode;
      this.contribution.maincode_description = opt.maincode_description;
      this.contribution.accountname = opt.accountname;
      this.contribution.company_id = opt.company_id;
      this.contribution.security = opt.security;
      this.contribution.organizationprofile = opt.organizationprofile;
    },

    loantypechange() {
      const opt = this.loantypes.find(
        (o) => o.loan_type == this.selectedloantype
      );
      console.log(opt);

      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
      this.Loans.income_account = opt.income_account;
    },

    copyMembers() {
      this.allmembers = this.memberson;
      // console.log(allmembers);

      for (var i = 0; i < this.allmembers.length; i++) {
        var member = this.allmembers[i];
        getAPI
          .post("/loans/api/v1/loansExport/", {
            email: member.email,
            first_name: member.first_name,
            last_name: member.last_name,
            national_id: member.national_id,
            phone_no: member.phone_no,
            interest: this.Loans.interest,
            Term: this.Loans.Term,

            User_id: this.user_id,
            gl_account: this.Loans.gl_account,
            income_account: this.Loans.income_account,
            loan_Type: this.selectedloantype,

            company_id: this.companyid3,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    },

    copyMembersPledges() {
      this.allmembers = this.memberson;
      // console.log(allmembers);

      for (var i = 0; i < this.allmembers.length; i++) {
        var member = this.allmembers[i];
        getAPI
          .post("/loans/api/v1/loansExport/", {
            email: member.email,
            User_id: null,

            SavingsType: this.contribution.saving_type,
            accountcode: this.contribution.accountcode,
            uidsavintype: this.companyid3 + ,

            employer: null,
            organizationprofile: null,

            company_id: this.companyid3,
          })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      }
    },

    //get all members
    updatemeberxp() {
      //create a data object with an array response

      this.json_data = Array.from(this.memberson);
      this.pledge_data = Array.from(this.pledgeson);
      this.loan_data = Array.from(this.loanson);
      this.deposits_data = Array.from(this.depositson);
      this.shares_data = Array.from(this.shareson);
    },

    async exporttoxl() {
      // When passing `objects` and `schema`.

      const data = Array.from(
        this.memberson.map((item) => {
          return [
            {
              id: item.id,
              member_id: item.first_name,
              member_name: item.last_name,
              member_email: item.email,
              member_phone: item.phone_no,
              member_status: item.status,
            },
          ];
        })
      );

      // When passing `data` for each cell.
      await writeXlsxFile(data, {
        // columns, // optional
        fileName: "file.xlsx",
      });

      // await writeXlsxFile(objects, {
      // chema,
      // 	fileName: "file.xlsx",
      // });
    },

    loadimport() {
      getAPI.get("/members/api/v1/Import/").then((response) => {
        this.importmembers = response.data.results;
      });
    },

    processMembers() {
      for (var i = 0; i < this.importmembers.length; i++) {
        var member = this.importmembers[i];
        getAPI
          .post("/members/api/v1/MemberDetails/", member)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            this.$swal({
              title: "Error",
              text: "Member not added",
              icon: "error",
              button: "Ok",
            });
            console.log(error);
          });
      }
    },

    // 	console.log(this.importmembers.length);   //this.importmembers is an array of objects

    // },

    onFileChange(event) {
      let xlsxfile = event.target.files ? event.target.files[0] : null;
      readXlsxFile(xlsxfile).then((rows) => {
        this.accounttypes = rows;
        console.log("rows:", rows);
      });
    },

    postacctypes() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/finance/api/v1/Accounttypes/", {
            accountcode: acctype[0],
            accounttype: acctype[1],
            created_by: "admin",
            created_at: new Date(),
            updated_by: "admin",
            updated_at: new Date(),
          })
          .then((response) => {
            this.accounttype1.push(response.data);
            this.$swal({
              title: "Success",
              text: "Account type added successfully",
              icon: "success",
              button: "Ok",
            });
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
            this.$swal({
              title: "Error",
              text: "Account type not added",
              icon: "error",
              button: "Ok",
            });
          });

        console.log(i, acctype);

        // getAPI
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    postmembers() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/members/api/v1/Import/", {
            MemberNo: acctype[1],
            first_name: acctype[2],
            last_name: acctype[3],
            phone_no: acctype[4],
            email: acctype[5],
            company_id: this.companyid3,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
            this.$swal({
              title: "Success",
              text: "Member added successfully",
              icon: "success",
              button: "Ok",
            });
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
            this.$swal({
              title: "Error",
              text: "Member not added",
              icon: "error",
              button: "Ok",
            });
          });

        console.log(i, acctype);

        // getAPI
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    postmainaccounts() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/finance/api/v1/mainaccounts/", {
            accounttype: acctype[0],
            account_code: acctype[1],
            account_description: acctype[2],
            Notes: acctype[3],
          })
          .then((response) => {
            this.mainaccounts1.push(response.data);
            this.$swal({
              title: "Success",
              text: "Main account added successfully",
              icon: "success",
              button: "Ok",
            });
          })
          .catch((error) => {
            console.log(error);
            this.$swal({
              title: "Error",
              text: "Main account not added",
              icon: "error",
              button: "Ok",
            });
          });

        console.log(i, acctype);

        // getAPI
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    postsubaccounts() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/finance/api/v1/accountmaster/", {
            account_type: acctype[0],
            accountype_description: acctype[1],
            parent_account: acctype[2],
            maincode_description: acctype[3],
            maincode: acctype[4],
            accountname: acctype[5],
            description: acctype[6],
            currency: acctype[7],
            financial_statement: acctype[7],
          })
          .then((response) => {
            this.subaccounts.push(response.data);
            this.$swal({
              title: "Success",
              text: "Sub account added successfully",
              icon: "success",
              button: "Ok",
            });
          })
          .catch((error) => {
            this.$swal({
              title: "Error",
              text: "Sub account not added",
              icon: "error",
              button: "Ok",
            });
            console.log(error);
          });

        console.log(i, acctype);

        // getAPI
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    postcounties() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/sys_config/api/v1/county/", {
            code: acctype[0],
            county: acctype[1],
            Province: acctype[2],
            Capital: acctype[3],
          })
          .then((response) => {
            this.counties.push(response.data);
            this.$swal({
              title: "Success",
              text: "County added successfully",
              icon: "success",
              button: "Ok",
            });
          })
          .catch((error) => {
            console.log(error);
            this.$swal({
              title: "Error",
              text: "County not added",
              icon: "error",
              button: "Ok",
            });
          });

        console.log(i, acctype);

        // getAPI
        // 	.post("/finance/api/v1/accounttypes/", accounttypes)
        // 	.then(console.log)
        // 	.catch(console.log);
      }
    },

    maxapp() {
      for (let i = 0; i < 3; i++) {
        return (this.x = i);
      }
    },
    getProducts(Exception) {
      getAPI
        .get("sys_config/api/v1/Approvers/")
        .then((res) => {
          this.tableData = res.data.results;
          this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
    },

    deleteProduct(id) {
      getAPI
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
    postapprover() {
      getAPI
        .post("sys_config/api/v1/Approvers/", {
          email: this.selectedemail,
          level: this.level,
          datecreated: this.currentDate,
          company_id: this.companyid,
        })
        .then(function (response) {
          this.message = response;
        })
        .catch(function (error) {
          this.message = error;
          console.log(this.message);
        });
    },

    approvalLevels() {
      //create a for loop
      // alert("hey man ")
      var array = [];
      for (var i = 1; i < 4; i++) {
        array.push({ id: i, val: i, text: "level" });
        this.approvalLevelsselect = array;
        console.log(array);
      }
    },
  },
};
</script>
