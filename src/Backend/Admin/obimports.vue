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
              <div class="col">
                <!-- boostrap select  -->
                Select Export type?
                <select
                  class="form-select form-select-sm"
                  aria-label=".form-select-sm example"

                  v-model="selected"
                >
                  <option selected>Open this select menu</option>
                  <option value="deposits">deposits</option>
                  <option value="loans">loans</option>
                  <option value="shares">Member Shares</option>
                  <option value="expenses">expenses</option>
                </select>
              </div>
              <div class="col">
                <div v-if="this.selected == 'deposits'">
                  Select Pledge type?
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="selectedsavingtype"
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
                <div v-if="this.selected == 'loans'">
                  Select Loans type?
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
              <div class="col">
                <button
                  class="btn btn-primary"
                  @click="Prepdata"
                  v-if="this.selected != ''"
                >
                  Prepare Data
                </button>
              </div>

              <div class="col">
                <vue-excel-xlsx
                  class="btn btn-success"
                  :data="data1"
                  :columns="columns"
                  :file-name="this.selected"
                  :file-type="'xlsx'"
                  :sheet-name="this.selected"
                  @click = "dataassign"
                  

                >
                  Download xlsx template
                </vue-excel-xlsx>
              </div>
              <div class="col-sm-3 my-1">
                <input type="file" @change="onFileChange" />
              </div>

              <div class="col">
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="postOpeningbalance"
                >
                  Import
                </button>
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
                  <tr v-for="(item, index) in acctype" :key="item.id">
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
      glchanged: [],

      accounttypes: [],
      pledgetype: [],
      counties: [],
      subaccounts: [],
      mainaccounts1: [],
      accounttype1: [],
      obimports: [],
      Loantypes: [],

      importmembers: [],
      memberxp: [],
      data1: "",
      contribution: [],
      selectedsavingtype: "",
      selectedloantype: "",
      allmembers: [],
      loanob: [],
      columns: [
        {
          label: "Account",
          field: "Account",
        },

        {
          label: "Accountcode_description",
          field: "Accountcode_description",
        },

        {
          label: "accountype_description",
          field: "accountype_description",
        },

        {
          label: "user_Id(Dont Change)",
          field: "user_Id",
        },
        {
          label: "memberemail",
          field: "memberemail",
        },
        {
          label: "Transaction_date",
          field: "Transaction_date",
        },

        {
          label: "Debit",
          field: "Debit",
        },
        {
          label: "Credit",
          field: "Credit",
        },
        {
          label: "Amount",
          field: "Amount",
        },
        {
          label: "Document(Dont Change)",
          field: "Document",
        },

        {
          label: "Posting_Date",
          field: "Posting_Date",
        },
        {
          label: "allocated",
          field: "allocated",
        },
        {
          label: "company_id(Dont Change)",
          field: "company_id",
        },
        {
          label: "notes",
          field: "notes",
        },
        {
          label: "updatedgl(Dont Change)",
          field: "updatedgl",
        },

        {
          label: "organizationprofile(Dont Change)",
          field: "organizationprofile",
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

      datax: [
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
    this.fetchObdeposits();
    this.fetchLoantype();
    this.fetchObloans();
    this.fetchGl();
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
      "allSavinttype",
      "allObdeposits",
      "allLoantype",
      "allObloans",
      "allGl",
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

    depositsPledges() {
      return this.$store.getters.allSavinttype.filter(
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

    obdepositsexport() {
      return this.$store.getters.allObloans.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    obloansexport() {
      return this.$store.getters.allObloans.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    pledgeson() {
      return this.$store.getters.allDeposits.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    loantypes() {
      return this.$store.getters.allLoantype.filter(
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
    allGls1: function () {
      return this.$store.getters.allGl.filter(
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
      "fetchObdeposits",
      "fetchLoantype",
      "fetchObloans",
      "fetchGl",
    ]),

    // When passing `data` for each cell.

    pickdata() {
      //add properties to data1

      
      const expenses = [
        {
          id: 1,

          Account: "2111000",
          user_Id: "1",
          memberemail: "karash@gmail.com",
          Transaction_date: "2022-04-09",
          last_updated: "2022-04-09T09:50:47.002923Z",
          Account_Code: "2111000",
          accountype_description: "Expenses",
          Accountcode_description: "Members Deposits - Bosa",
          Debit: 1000,
          Credit: 0,
          Amount: 1000,
          Document: "expense",
          Transaction_type: "DR",
          Posting_Date: this.currentDate,
          allocated: false,
          company_id: this.companyid3,
          notes: "Expenses Opening Balances",
          updatedgl: false,
          organizationprofile: this.organizationprofile,
        },
      ];

      // if selected is deposits then

     
      if (this.selected == "expenses") {
        this.data1 = expenses;
      }
      console.log(this.selected);
      console.log(this.data1);
    },

    savingtypechange() {
      const opt = this.depositsPledges.find(
        (o) => o.saving_type === this.selectedsavingtype
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

      this.Loantypes.interest = opt.interest_rate;
      this.Loantypes.Term = opt.maximum_loan_term;
      this.Loantypes.gl_account = opt.gl_account;
      this.Loantypes.income_account = opt.income_account;

      const optgl = this.allGls1.find(
        (o) => o.maincode == this.Loantypes.gl_account
      );
      console.log("gl", optgl);

      console.log(optgl);
      this.glchanged.account_type = optgl.account_type;
      this.glchanged.accountype_description = optgl.accounttype_description;
      this.glchanged.maincode = optgl.maincode;
      this.glchanged.maincode_description = optgl.maincode_description;
      this.glchanged.parent_account = optgl.parent_account;
      this.glchanged.accountname = optgl.accountname;
    },

    Prepdata() {
      this.allmembers = this.memberson;
      if (this.selected == "deposits") {
        for (var i = 0; i < this.allmembers.length; i++) {
          var member = this.allmembers[i];
          console.log(member);
          getAPI
            .post("/finance/api/v1/depositsopentingbalance/", {
              email: member.email,
              User_id: member.id,

              id: 1,

              Account: "2111000",
              user_Id: member.id,
              memberemail: member.email,
              Transaction_date: "2022-04-09",
              last_updated: "",
              Account_Code: this.contribution.accountcode,
              accountype_description: "LIABILITIES",
              Accountcode_description: this.contribution.accountname,
              maincode: this.contribution.Account_type,
              Debit: 0,
              Credit: 1000,
              Amount: 1000,
              Document: "Deposits",
              Transaction_type: "CR",
              Posting_Date: this.currentDate,
              allocated: false,
              company_id: this.companyid3,
              notes: "Members Deposits Opening Balances",
              updatedgl: false,
              organizationprofile: this.contribution.organizationprofile,
              keyvalue:
                this.companyid3 + this.contribution.accountcode + member.id,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        this.data1 = this.obdepositsexport;
      }

      if (this.selected == "loans") {
        this.allmembers = this.memberson;

        for (var j = 0; j < this.allmembers.length; j++) {
          var loanob = this.allmembers[j];
          console.log("hello", this.loanob);
          getAPI
            .post("/finance/api/v1/loansopeningbalance/", {
              Account: this.glchanged.maincode,
              user_Id: this.user_id,
              memberemail: loanob.email,
              Transaction_date: "2022-04-09",
              last_updated: "",
              Account_Code: this.glchanged.maincode,
              accountype_description: this.glchanged.accountype_description,
              Accountcode_description: this.glchanged.maincode_description,
              maincode: this.glchanged.maincode,
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
              keyvalue:
                this.companyid3 + this.contribution.accountcode + loanob.id,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        this.data1 = this.obloansexport;
      }
      if (this.selected == "shares") {
        for (var k = 0; k < this.allmembers.length; k++) {
          var share = this.allmembers[i];
          console.log(share);
          getAPI
            .post("/finance/api/v1/expensesopentingbalance/", {
              email: share.email,
              User_id: share.id,

              id: 1,

              Account: "2111000",
              user_Id: member.id,
              memberemail: member.email,
              Transaction_date: "2022-04-09",
              last_updated: "",
              Account_Code: "2111000",
              accountype_description: "Expenses",
              Accountcode_description: "Members Deposits - Bosa",
              Debit: 1000,
              Credit: 0,
              Amount: 1000,
              Document: "expense",
              Transaction_type: "DR",
              Posting_Date: this.currentDate,
              allocated: false,
              company_id: this.companyid3,
              notes: "Expenses Opening Balances",
              updatedgl: false,
              organizationprofile: this.organizationprofile,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error.response.data);
            });
        }
        this.data1 = this.expenseson;
      }
    },


    dataassign(){
      if (this.selected == "deposits") {
        this.data1 = this.obdepositsexport;
      }
      if (this.selected == "loans") {
        this.data1 = this.obloansexport;
      }
      if (this.selected == "shares") {
        this.data1 = this.expenseson;
      }
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

    postOpeningbalance() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/finance/api/v1/openingbalance/", {
            Account: acctype[0],
            user_Id: acctype[3],
            memberemail: acctype[4],
            Transaction_date: acctype[5],
            Account_Code: acctype[0],
            maincode: acctype[0],
            Accountcode_description: acctype[1],
            accountype_description: acctype[2],
            Debit: acctype[6],
            Credit: acctype[7],
            Amount: acctype[8],
            Document: acctype[9],
            Transaction_type: "CR",
            Posting_Date: this.currentDate,
            allocated: false,
            company_id: this.companyid3,
            notes: "Expenses Opening Balances",
            updatedgl: false,
            organizationprofile: this.organizationprofile,
            keyvalue: acctype[4] + acctype[0],
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
