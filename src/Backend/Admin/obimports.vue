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
            <h4 class="card-title">Opening Balances Import Section</h4>

            <div class="row">
              <div class="dropdown d-inline-block ms-2">
                <button
                  type="button"
                  class="btn btn-sm btn-alt-secondary d-flex align-items-center"
                  id="page-header-user-dropdown"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style="float: right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    class="bi bi-menu-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"
                    />
                  </svg>
                  <span class="d-none d-sm-inline-block ms-2"
                    >Export Template Xls</span
                  >
                  <i
                    class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
                  ></i>
                </button>
                <div
                  class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
                  aria-labelledby="page-header-user-dropdown"
                  style=""
                >
                  <div class="p-2">
                    <a class="" typr="button" @click="exportexpense">
                      Export Expenses
                    </a>

                    <vue-excel-xlsx
                      :data="data1"
                      :columns="columns"
                      :file-name="'expense'"
                      :file-type="'xlsx'"
                      :sheet-name="'sheetname'"
                      @click="pickdata"
                    >
                      Download
                    </vue-excel-xlsx>
                    <router-link
                      :to="{ path: 'purchasing' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Purchasing</router-link
                    >
                    <router-link
                      :to="{ path: 'sales' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Sales</router-link
                    >

                    <div role="separator" class="dropdown-divider m-0"></div>

                    <router-link
                      :to="{ path: 'journals' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Journals</router-link
                    >

                    <div role="separator" class="dropdown-divider m-0"></div>

                    <router-link
                      :to="{ path: 'documents' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Documents</router-link
                    >

                    <router-link
                      :to="{ path: 'shares' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Member Shares</router-link
                    >

                    <router-link
                      :to="{ path: 'openingbalances' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Opening Balances</router-link
                    >

                    <router-link
                      :to="{ path: 'budgets' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Budgets
                    </router-link>
                    <router-link
                      :to="{ path: 'taxes' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >Taxes</router-link
                    >

                    <div role="separator" class="dropdown-divider m-0"></div>

                    <router-link
                      :to="{ path: 'accounting' }"
                      class="dropdown-item d-flex align-items-center justify-content-between"
                      >General Ledger</router-link
                    >
                  </div>
                </div>
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
                <download-excel :data="pledge_data" type="link">
                  <button type="button" class="btn btn-success">
                    Download Expense Template
                  </button>
                </download-excel>
              </div>
            </div>

            <!-- {{this.datatable.columns}} -->
            <!-- {{ this.accounttype1 }} -->
            <div class="table-responsive">
              <table class="table-borderless table-hover table-striped walla">
                <thead>
                  <tr class="line-item-header">
                    <th>#</th>

                    <th>Posting Date</th>
                    <th>Account Code</th>
                    <th>Descriptions</th>
                    <th>Member</th>
                    <th>Document</th>
                    <th class="text-left">Credit</th>
                    <th class="text-left">Debit</th>
                    <th class="text-left">Amount</th>
                    <th class="text-left">Notes</th>
                    <th class="text-left">Status</th>

                    <!---->

                    <!----><!---->
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in allob" :key="item.id">
                    <th scope="row">{{ index + 1 }}</th>
                    <td></td>
                    <td>{{ item.maincode }}</td>
                    <td>{{ item.accountype_description }}</td>
                    <td>{{ item.memberemail }}</td>
                    <td>{{ item.Document }}</td>
                    <td>{{ item.Credit }}</td>
                    <td>{{ item.Debit }}</td>
                    <td>{{ item.Amount }}</td>
                    <td>{{ item.notes }}</td>

                    <td>
                      <button class="btn btn-success" @click="updategl(item)">
                        updategl
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
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

                <download-excel :data="pledge_data">
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
                    <tr v-for="product in obimports" :key="product.id">
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

      accounttypes: [],
      pledgetype: [],
      counties: [],
      subaccounts: [],
      mainaccounts1: [],
      accounttype1: [],
      obimports: [],

      importmembers: [],
      memberxp: [],
      data1: "",
      columns: [
        {
          label: "Product",
          field: "product",
        },
        {
          label: "Price",
          field: "price",
          dataFormat: this.priceFormat,
        },
        {
          label: "Quantity",
          field: "quantity",
        },
        {
          label: "Country",
          field: "address.country",
        },
        {
          label: "City",
          field: "address.city",
        },
      ],
      expense: [
        {
          product: "chabati",
          price: 10,
          quantity: 2,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Snack",
          price: 12,
          quantity: 6,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Beverage",
          price: 10,
          quantity: 5,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Snack",
          price: 12,
          quantity: 3,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
      ],

      data: [
        {
          product: "Beverage",
          price: 10,
          quantity: 2,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Snack",
          price: 12,
          quantity: 6,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Beverage",
          price: 10,
          quantity: 5,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
        {
          product: "Snack",
          price: 12,
          quantity: 3,
          address: {
            country: "Armenia",
            city: "Yerevan",
          },
        },
      ],

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
    ]),

    // When passing `data` for each cell.

    pickdata() {
      //map

      this.data1 = this.expense.map((item) => {
        return {
          id: item.id,
          name: item.name,
          amount: item.amount,
          date: item.date,
          description: item.description,
          category: item.category,
          company_id: item.company_id,
          user_id: item.user_id,
          created_at: item.created_at,
          updated_at: item.updated_at,
        };
      });
    },

    exportexpense() {
      this.$swal("Update Expense sheet and upload to import opening balance");
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
      // 	schema,
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
            this.$swal({
              title: "Success",
              text: "Member added successfully",
              icon: "success",
              button: "Ok",
            });
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
        this.obimports.push(rows);
      });
    },

    postExpenses() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/finance/api/v1/openingbalance/", {
            accountcode: acctype[0],
            accounttype: acctype[1],
            created_by: "admin",
            created_at: new Date(),
            updated_by: "admin",
            updated_at: new Date(),
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
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
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
