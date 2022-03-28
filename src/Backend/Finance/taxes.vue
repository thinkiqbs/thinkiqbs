@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="topnav-right col-2">
            //Search by email.
            <input
              type="text"
              class="form-control"
              id="inlineFormInputGroupUsername"
              placeholder="Search"
              v-model="search"
              @keyup.enter="filterloans"
            />
          </div>

          <button @click="$store.dispatch('all_loans')">+</button>

          <div class="row">
            <accountingHeader></accountingHeader>

            {{ this.companyid3 }}

            //state

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Loans</h4>
                  <span>Org:{{ companyid3 }}</span>
                </div>

                <div class="card-body">
                  <!--  -->

                  <table class="table unbordered walla">
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <th>Date Disbirsed</th>
                        <th>Loan ID</th>
                        <th>Member</th>

                        <!---->
                        <th class="text-left">Loan Type</th>
                        <th class="text-left">Loan Term</th>
                        <th class="text-left">Loan Amount</th>
                        <th class="text-left">Amount Paid</th>
                        <th class="text-left">Current Balance</th>

                        <th class="text-left">Status</th>
                        <th class="text-left">Action</th>
                        <th></th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in filterloans" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>
                        <td>{{ item.date_disbursed }}</td>
                        <td>{{ item.id }}</td>
                        <td>{{ item.email }}</td>
                        <td>{{ item.loan_Type }}</td>
                        <td>{{ item.Term }}</td>
                        <td>{{ item.Amount }}</td>
                        <td>
                          <div
                            v-if="item.variation_amount <= 0"
                            style="color: red"
                          >
                            {{ item.variation_amount }}
                            <i class="fas fa-exclamation-circle"></i>
                          </div>
                          <div v-else style="color: green">
                            {{ item.variation_amount }}
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </td>
                        <td>{{ item.current_balance }}</td>

                        <td>
                          <div v-if="item.Disbursed == 1">
                            <button
                              type="button"
                              class="btn btn-success"
                              @click="updateloanschedule(item)"
                              Disabled
                            >
                              Disbursed
                            </button>
                          </div>
                          <div v-else>
                            <div v-if="item.Status == 4">
                              <button
                                type="button"
                                class="btn btn-success"
                                @click="updateloanschedule(item)"
                              >
                                Disburse
                              </button>
                            </div>

                            <div v-else>
                              <div v-if="item.Status == 0">
                                <button
                                  type="button"
                                  class="btn btn-primary btn-sm"
                                  data-toggle="modal"
                                  data-target="#guarantorAdd"
                                  @click="Getloanbyid(item)"
                                >
                                  Pending Gurantor
                                </button>
                              </div>
                              <div v-else>
                                <button
                                  type="button"
                                  class="btn btn-warning"
                                  data-toggle="modal"
                                  data-target="#ApprovalTemplate"
                                  @click="Getloanbyid(item)"
                                >
                                  Approval {{ item.Status }} needed
                                </button>
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <div v-if="item.Disbursed == 1">
                            <button
                              type="button"
                              class="btn btn-primary"
                              data-toggle="modal"
                              data-target="#topup"
                              @click="Getloanbyid(item)"
                            >
                              <i class="fas fa-shopping-basket"></i>
                            </button>
                          </div>
                        </td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-primary"
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                            @click="Getloanbyid(item)"
                          >
                            Launch demo modal
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal for Approvals  -->

        <!-- Modal -->
        <!-- Button trigger modal -->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <span>{{ this.memberLoancureentbalance }}</span>

                <!-- ...{{this.sourceiddoc}} -->
                //

                <!-- {{ this.memberloanrepayment }} -->
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <!-- For Topup only  -->
        <div
          class="modal fade"
          id="topup"
          data-backdrop="static"
          data-keyboard="false"
          tabindex="-1"
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <div class="row">
                  <h3>Loan Topup form</h3>
                </div>

                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <h5
                    class="modal-title"
                    id="staticBackdropLabel"
                    style="color: green"
                  >
                    Hello {{ loan.email }} you are appling for a loan Top-up for
                    #loanID {{ loan.id }}
                  </h5>
                </div>

                <div class="container">
                  <form @submit.prevent="submit">
                    <div class="form-group row">
                      <label for="" class="col-sm-2 form-control-label"
                        >Email</label
                      >

                      <div class="form-group col-md-3">
                        <input
                          type="email"
                          class="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                          v-model="this.loan.email"
                          disabled
                        />
                      </div>

                      <div class="form-group col-md-3">
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                            v-model="picked"
                            value="One"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Refinance Loan
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                            value="Two"
                            v-model="picked"
                          />
                          <label
                            class="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Reschedule Loan
                          </label>
                        </div>
                      </div>
                      >

                      <div id="v-model-radiobutton" class="form-group col-md-3">
                        <span>Picked: {{ picked }}</span>
                      </div>
                    </div>

                    <div class="form-group row">
                      <label for="" class="col-sm-4 form-control-label"
                        >Loan Product: &nbsp; {{ this.loan.loan_Type }}</label
                      >
                    </div>

                    <div class="form-group row">
                      <label class="col-form-label col-lg-2 required"
                        >Current Loan Amount
                      </label>
                      <div class="col-lg-10">
                        <div class="row">
                          <div class="col-lg-3">
                            <div class="input-group">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  {{ this.loan.Amount }}
                                </span>
                              </div>

                              <input
                                v-model="loan.Amount"
                                type="range"
                                class="form-range"
                                min="0"
                                :max="maxtopup"
                                id="customRange2"
                                Disabled
                              />
                            </div>
                          </div>

                          <label class="col-form-label col-lg-2 px-0"
                            >Loan Term {{ this.Loans.Term }}</label
                          >
                          <div class="col-lg-2">
                            <input
                              type="number"
                              class="form-control"
                              id="Term"

                              min="0"
                              :max="this.Loans.Term"
                              v-model="loan.Term"
                              disabled
                            />
                          </div>

                          <label class="col-form-label col-lg-2 px-0"
                            >Interest
                          </label>
                          <div class="col-lg-2">
                            <input
                              type="number"
                              class="form-control"
                              id="Interest"
                              v-model="this.loan.interest"
                              disabled
                            />
                          </div>

                          <!---->
                        </div>

                        <!---->
                      </div>
                    </div>

                    <div class="form-group row">
                      <label
                        class="col-form-label col-lg-2 required"
                        v-if="picked === 'One'"
                        >Maximum Refinancing Amount
                      </label>
                      <div class="col-lg-10">
                        <div class="row">
                          <div class="col-lg-3">
                            <div class="input-group" v-if="picked === 'One'">
                              <div class="input-group-prepend">
                                <span class="input-group-text">
                                  {{ loan.Topup_Amount }}
                                </span>
                              </div>

                              <input
                                v-model="loan.Topup_Amount"
                                type="range"
                                class="form-range"
                                min="0"
                                :max="maxtopup"
                                id="customRange2"
                              />
                            </div>
                            New Loan : {{ this.newloan }}
                          </div>

                          <label
                            class="col-form-label col-lg-2 px-0"
                            v-if="picked === 'Two'"
                            >Loan Term {{ this.loan.Term }}</label
                          >
                          <div class="col-lg-2" v-if="picked === 'Two'">
                            <input
                              type="range"
                              class="form-range"
                              id="Term"

                              min="0"
                              :max="this.TermY"
                              v-model="loan.Term"
                            />
                          </div>

                          <label class="col-form-label col-lg-2 px-0"
                            >Interest
                          </label>
                          <div class="col-lg-2">
                            <input
                              type="number"
                              class="form-control"
                              id="Interest"
                              v-model="this.loan.interest"
                              disabled
                            />
                          </div>

                          <!---->
                        </div>

                        <!---->
                      </div>
                    </div>

                    <!-- Loan Details  -->

                    <div class="form-group row">
                      <label class="col-form-label col-lg-2 required"
                        >Total Repayment (KES)
                      </label>
                      <div class="col-lg-10">
                        <div class="row">
                          <div class="col-lg-3">
                            <div class="input-group">
                              <div class="input-group-prepend"></div>

                              <input
                                type="number"
                                class="form-control"
                                v-model="this.NewtLoans"
                                Disabled
                              />
                            </div>
                            <!---->
                            <div
                              id="ember1178"
                              class="popover-container ember-view"
                            >
                              <div
                                id="ember1179"
                                class="d-none popover bs-popover-bottom ember-view pop-over-div"
                              >
                                <!---->
                              </div>
                            </div>
                          </div>
                          <label class="col-form-label col-lg-2 px-0"
                            >Monthly Repayment
                          </label>
                          <div class="col-lg-2">
                            <input
                              type="number "
                              class="form-control"
                              id="monthly"
                              v-model="this.newmonthlyRepayment"
                              disabled
                            />
                          </div>

                          <label class="col-form-label col-lg-2 px-0"
                            >Monthly Interest
                          </label>
                          <div class="col-lg-2">
                            <input
                              type="number"
                              class="form-control"
                              id="Interest"
                              v-model="this.newinterestmonthly"
                              disabled
                            />
                          </div>

                          <!---->
                        </div>
                        <!---->
                      </div>
                    </div>

                    <div class="form-group row">
                      <label class="col-form-label col-lg-2 required"
                        >Application Date</label
                      >
                      <div class="col-lg-5">
                        <input
                          placeholder="dd MMM yyyy"
                          id="ember1181"
                          class="ember-text-field zf-date-picker date-picker ember-view form-control"
                          type="date"
                          v-model="this.Loans.ApplicationDate"
                        />
                        <!---->
                      </div>
                    </div>

                    <div class="row mx-0">
                      <div
                        class="unused-amount-zero offset-lg-7 col-lg-5 clearfix"
                      >
                        <div class="row">
                          <p class="col-lg-8 text-right">
                            My Current Deposits :
                          </p>
                          <p class="col-lg-4 text-right">
                            {{ this.currentdeposits }}
                          </p>
                        </div>
                        <div class="row">
                          <p class="col-lg-8 text-right">My Loan Balance :</p>
                          <p class="col-lg-4 text-right">
                            {{ this.loanbalance }}
                          </p>
                        </div>
                        <div class="row">
                          <p class="col-lg-8 text-right">Available :</p>
                          <p class="col-lg-4 text-right">{{ maxtopup }}</p>
                        </div>
                        <div class="row">
                          <p class="col-lg-8 text-right">Guaranteed:</p>
                          <p class="col-lg-4 text-right">KES &nbsp; 0.00</p>
                        </div>
                      </div>
                    </div>
                  </form>

                  <div>
                    <table class="table line-item-table">
                      <thead>
                        <tr class="line-item-header">
                          <th>#</th>

                          <th>Date</th>
                          <th>Loan ID</th>
                          <!---->
                          <th class="text-left">Loan Type</th>
                          <th class="text-left">Loan Term</th>

                          <th class="text-left">Amount</th>
                          <th class="text-left" style="color: green">Paid</th>

                          <th class="text-left">Amount Due</th>

                          <!----><!---->
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="(item, index) in myapprovedloans"
                          :key="item.id"
                        >
                          <th scope="row">{{ index + 1 }}</th>
                          <td>{{ item.created }}</td>
                          <td>{{ item.id }}</td>
                          <td>{{ item.loan_Type }}</td>
                          <td>{{ item.Term }}</td>

                          <td>{{ item.Amount }}</td>
                          <td>{{ item.Amount }}</td>

                          <td>{{ item.Total_Loan }}</td>
                        </tr>
                        <tr>
                          <td colspan="2" style="padding-top: 0px">
                            <small class="text-muted"
                              >**List contains only Approved Loans</small
                            >
                          </td>
                          <td></td>
                          <td></td>
                          <td colspan="1" class="text-right">
                            <b>Total Loans</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{ this.totalLoans }}</b>
                          </td>
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
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  @click="submitTopup"
                  type="button"
                  class="btn btn-primary"
                >
                  Submit Top Up
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- End Modal  -->

        <!-- Modal for Adding Guarantors  -->

        <div
          class="modal fade"
          id="guarantorAdd"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Add Guarantors
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Guarantors</h4>
                      </div>

                      <div class="card-body">
                        <form @submit.prevent="submit">
                          <div class="form-group row">
                            <label for="" class="col-sm-2 form-control-label"
                              >Select Email</label
                            >

                            <div class="form-group col-md-6">
                              <select
                                class="form-select ."
                                id="select-country"
                                data-live-search="true"
                                v-model="this.loan.email"
                                @change="change"
                              >
                                <option
                                  v-for="option in optionloansemail"
                                  v-bind:value="option.email"
                                  :key="option.id"
                                >
                                  {{ option.email }}
                                </option>
                              </select>
                            </div>

                            <label for="" class="col-sm-2 form-control-label"
                              >Loan ID</label
                            >

                            <div class="form-group col-md-2">
                              <select
                                class="form-select ."
                                id="select-country"
                                data-live-search="true"
                                v-model="this.memberloan.id"
                              >
                                <option
                                  v-for="option in optionloans"
                                  v-bind:value="option.id"
                                  :key="option.id"
                                >
                                  {{ loan.id }}
                                </option>
                              </select>
                              <input v-model="loan.id" />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="" class="col-sm-2 form-control-label"
                              >Loan Product</label
                            >

                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="select-country"
                                data-live-search="true"
                                v-model="this.loan.loan_Type"
                              />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Amount Applied
                            </label>
                            <div class="col-lg-10">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text">
                                        {{ this.loan.Amount }}
                                      </span>
                                    </div>

                                    <input
                                      v-model="loan.Amount"
                                      type="number"
                                      class="form-range"
                                      min="0"
                                      :max="maxtopup"
                                      id="customRange2"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Loan Term {{ this.loan.Term }}</label
                                >
                                <div class="col-lg-2">
                                  <input
                                    type="number"
                                    id="Term"

                                    min="0"
                                    :max="this.Loans.Term"
                                    v-model="loan.Term"
                                    Disabled
                                  />
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Interest
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="Interest"
                                    v-model="loan.interest"
                                    disabled
                                  />
                                </div>

                                <!---->
                              </div>
                              <!---->
                            </div>
                          </div>

                          <!-- Loan Details  -->

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Total Repayment (KES)
                            </label>
                            <div class="col-lg-10">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="input-group">
                                    <div class="input-group-prepend"></div>

                                    <input
                                      type="number"
                                      class="form-control"
                                      v-model="this.loan.Total_Loan"
                                      Disabled
                                    />
                                  </div>
                                  <!---->
                                  <div
                                    id="ember1178"
                                    class="popover-container ember-view"
                                  >
                                    <div
                                      id="ember1179"
                                      class="d-none popover bs-popover-bottom ember-view pop-over-div"
                                    >
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <label class="col-form-label col-lg-2 px-0"
                                  >Monthly Repayment
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number "
                                    class="form-control"
                                    id="monthly"
                                    v-model="loan.Monthrepayment"
                                    disabled
                                  />
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Monthly Interest
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="Interest"
                                    v-model="this.loan.Interest_Monthly"
                                    disabled
                                  />
                                </div>

                                <!---->
                              </div>
                              <!---->
                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Application Date</label
                            >
                            <div class="col-lg-5">
                              <input
                                placeholder="dd MMM yyyy"
                                id="ember1181"
                                class="ember-text-field zf-date-picker date-picker ember-view form-control"
                                type="date"
                                v-model="this.loan.ApplicationDate"
                                disabled
                              />
                              <!---->
                            </div>
                          </div>

                          <div class="row mx-0">
                            <div
                              class="unused-amount-zero offset-lg-7 col-lg-5 clearfix"
                            >
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  My Current Deposits :
                                </p>
                                <p class="col-lg-4 text-right">
                                  {{ this.currentdeposits }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  My Loan Balance :
                                </p>
                                <p class="col-lg-4 text-right">
                                  {{ this.loanbalance }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">Available :</p>
                                <p class="col-lg-4 text-right">
                                  {{ maxtopup }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">Secured:</p>
                                <p class="col-lg-4 text-right">
                                  KES &nbsp; {{ this.secured }} //
                                  {{ this.totalGuaranteed }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  Unsecured:<a href="your link here">
                                    <i class="fa fa-plus" aria-hidden="true"></i
                                  ></a>
                                </p>
                                <p class="col-lg-4 text-right">
                                  KES &nbsp; {{ this.unsecured }}
                                </p>
                              </div>
                              <div class="row"></div>
                            </div>
                          </div>
                          <div class="row mx-o">
                            <div>
                              <table class="table line-item-table">
                                <thead>
                                  <tr class="line-item-header">
                                    <th>#</th>

                                    <th>Date</th>
                                    <th>Loan ID</th>
                                    <!---->
                                    <th class="text-left">Date Applied</th>
                                    <th class="text-left">Guarantor Email</th>

                                    <th class="text-left">Guaranteed Amount</th>

                                    <th class="text-left">Status</th>

                                    <!----><!---->
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in guarantors"
                                    :key="item.id"
                                  >
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.created }}</td>
                                    <td>{{ item.Loan_id }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.Amount_guaranteed }}</td>

                                    <td>
                                      <div v-if="item.Status === '1'">
                                        Pending Approval 1

                                        <a href="#" class="lin"
                                          >Add Guarantors</a
                                        >
                                      </div>
                                      <div v-else-if="item.Status === '2'">
                                        Pending Approval 2
                                      </div>
                                      <div v-else-if="item.Status === '3'">
                                        Pending Approval 3
                                      </div>
                                      <div v-else>Disbursed</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" style="padding-top: 0px">
                                      <small class="text-muted"
                                        >**List contains only Approved
                                        Loans</small
                                      >
                                    </td>
                                    <td></td>
                                    <td></td>
                                    <td colspan="1" class="text-right">
                                      <b>Total Loans</b>
                                    </td>
                                    <!---->
                                    <td class="text-right">
                                      <b>{{ this.totalLoans }}</b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </form>

                        <div v-if="this.unsecured <= 0">
                          <button
                            type="button"
                            class="btn btn-outline-secondary col-lg-4"
                            data-toggle="modal"
                            data-target="#loan"
                            @click="submitapproveloan"
                          >
                            Submit Loan for Approval
                          </button>
                          <a href="/loans">
                            <button
                              type="button"
                              class="btn btn-outline-secondary col-lg-20"
                            >
                              Back to Loans
                            </button>
                          </a>
                        </div>
                        <div v-else>
                          <div class="form-group col-md-10">
                            <div class="row">
                              <div class="col-3">
                                <select
                                  class="form-select ."
                                  id="select-country"
                                  data-live-search="true"
                                  v-model="selectedemailG"
                                  @change="changeGuarantor"
                                >
                                  <option
                                    v-for="option in optionloansemail"
                                    v-bind:value="option.email"
                                    :key="option.id"
                                  >
                                    {{ option.email }}
                                  </option>
                                </select>
                              </div>
                              <label class="col-1">{{
                                maximumtoguarantee
                              }}</label>
                              <div class="col-2">
                                {{ selectedamountG }}
                                <input
                                  type="range"
                                  class="form-range"
                                  id="Term"

                                  min="0"
                                  :max="this.maximumtoguarantee"
                                  v-model="selectedamountG"
                                />
                              </div>

                              <div class="col-2">
                                <button
                                  @click="AddGuarantor"
                                  type="button"
                                  class="btn btn-outline-secondary"
                                >
                                  Request for Guarantors
                                </button>
                              </div>

                              <div class="col-2">
                                <a href="/loans">
                                  <button
                                    type="button"
                                    class="btn btn-outline-secondary col-lg-20"
                                  >
                                    Back to Loans
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>

        <!-- End of Modal for guarntors  -->

        <!-- Approval Template  -->

        <div
          class="modal fade"
          id="ApprovalTemplate"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Loan Approval Form
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div class="row">
                  <div class="col-md-12">
                    <div class="card">
                      <div class="card-header">
                        <h4 class="card-title">Guarantors</h4>
                      </div>

                      <div class="card-body">
                        <form @submit.prevent="submit">
                          <div class="form-group row">
                            <label for="" class="col-sm-2 form-control-label"
                              >Select Email</label
                            >

                            <div class="form-group col-md-6">
                              <select
                                class="form-select ."
                                id="select-country"
                                data-live-search="true"
                                v-model="this.loan.email"
                                @change="change"
                              >
                                <option
                                  v-for="option in optionloansemail"
                                  v-bind:value="option.email"
                                  :key="option.id"
                                >
                                  {{ option.email }}
                                </option>
                              </select>
                            </div>

                            <label for="" class="col-sm-2 form-control-label"
                              >Loan ID</label
                            >

                            <div class="form-group col-md-2">
                              <select
                                class="form-select ."
                                id="select-country"
                                data-live-search="true"
                                v-model="this.loan.id"
                              >
                                <option
                                  v-for="option in optionloans"
                                  v-bind:value="option.id"
                                  :key="option.id"
                                >
                                  {{ option.id }}
                                </option>
                              </select>
                            </div>
                          </div>

                          <div class="form-group row">
                            <label for="" class="col-sm-2 form-control-label"
                              >Loan Product</label
                            >

                            <div class="col-sm-10">
                              <input
                                type="text"
                                id="select-country"
                                data-live-search="true"
                                v-model="this.loan.loan_Type"
                              />
                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Amount Applied
                            </label>
                            <div class="col-lg-10">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text">
                                        {{ this.loan.Amount }}
                                      </span>
                                    </div>

                                    <input
                                      v-model="loan.Amount"
                                      type="number"
                                      class="form-range"
                                      min="0"
                                      :max="maxtopup"
                                      id="customRange2"
                                      disabled
                                    />
                                  </div>
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Loan Term {{ this.loan.Term }}</label
                                >
                                <div class="col-lg-2">
                                  <input
                                    type="range"
                                    class="form-range"
                                    id="Term"

                                    min="0"
                                    :max="this.loan.Term"
                                    v-model="memberloan.Term"
                                    Disabled
                                  />
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Interest
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="Interest"
                                    v-model="this.loan.interest"
                                    disabled
                                  />
                                </div>

                                <!---->
                              </div>
                              <!---->
                            </div>
                          </div>

                          <!-- Loan Details  -->

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Total Repayment (KES)
                            </label>
                            <div class="col-lg-10">
                              <div class="row">
                                <div class="col-lg-3">
                                  <div class="input-group">
                                    <div class="input-group-prepend"></div>

                                    <input
                                      type="number"
                                      class="form-control"
                                      v-model="this.loan.Total_Loan"
                                      Disabled
                                    />
                                  </div>
                                  <!---->
                                  <div
                                    id="ember1178"
                                    class="popover-container ember-view"
                                  >
                                    <div
                                      id="ember1179"
                                      class="d-none popover bs-popover-bottom ember-view pop-over-div"
                                    >
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <label class="col-form-label col-lg-2 px-0"
                                  >Monthly Repayment
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number "
                                    class="form-control"
                                    id="monthly"
                                    v-model="this.loan.Monthrepayment"
                                    disabled
                                  />
                                </div>

                                <label class="col-form-label col-lg-2 px-0"
                                  >Monthly Interest
                                </label>
                                <div class="col-lg-2">
                                  <input
                                    type="number"
                                    class="form-control"
                                    id="Interest"
                                    v-model="this.loan.Interest_Monthly"
                                    disabled
                                  />
                                </div>

                                <!---->
                              </div>
                              <!---->
                            </div>
                          </div>

                          <div class="form-group row">
                            <label class="col-form-label col-lg-2 required"
                              >Application Date</label
                            >
                            <div class="col-lg-5">
                              <input
                                placeholder="dd MMM yyyy"
                                id="ember1181"
                                class="ember-text-field zf-date-picker date-picker ember-view form-control"
                                type="date"
                                v-model="this.loan.ApplicationDate"
                              />
                              <!---->
                            </div>
                          </div>

                          <div class="row mx-0">
                            <div
                              class="unused-amount-zero offset-lg-7 col-lg-5 clearfix"
                            >
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  My Current Deposits :
                                </p>
                                <p class="col-lg-4 text-right">
                                  {{ this.currentdeposits }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  My Loan Balance :
                                </p>
                                <p class="col-lg-4 text-right">
                                  {{ this.loanbalance }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">Available :</p>
                                <p class="col-lg-4 text-right">
                                  {{ maxtopup }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">Secured:</p>
                                <p class="col-lg-4 text-right">
                                  KES &nbsp; {{ this.secured }} //
                                  {{ this.totalGuaranteed }}
                                </p>
                              </div>
                              <div class="row">
                                <p class="col-lg-8 text-right">
                                  Unsecured:<a href="your link here">
                                    <i class="fa fa-plus" aria-hidden="true"></i
                                  ></a>
                                </p>
                                <p class="col-lg-4 text-right">
                                  KES &nbsp; {{ this.unsecured }}
                                </p>
                              </div>
                              <div class="row"></div>
                            </div>
                          </div>
                          <div class="row mx-o">
                            <div>
                              <table class="table line-item-table">
                                <thead>
                                  <tr class="line-item-header">
                                    <th>#</th>

                                    <th>Date Applied</th>
                                    <th>Loan ID</th>
                                    <!---->
                                    <th class="text-left">Guarantor Email</th>

                                    <th class="text-left">Guaranteed Amount</th>
                                    <th class="text-left">Status</th>

                                    <!----><!---->
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr
                                    v-for="(item, index) in guarantors"
                                    :key="item.id"
                                  >
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td>{{ item.created }}</td>
                                    <td>{{ item.Loan_id }}</td>
                                    <td>{{ item.email }}</td>
                                    <td>{{ item.Amount_guaranteed }}</td>

                                    <td>
                                      <div v-if="item.Status === '1'">
                                        Pending Approval 1

                                        <a href="#" class="lin"
                                          >Add Guarantors</a
                                        >
                                      </div>
                                      <div v-else-if="item.Status === '2'">
                                        Pending Approval 2
                                      </div>
                                      <div v-else-if="item.Status === '3'">
                                        Pending Approval 3
                                      </div>
                                      <div v-else>Disbursed</div>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td colspan="2" style="padding-top: 0px">
                                      <small class="text-muted"
                                        >**List contains only Approved
                                        Loans</small
                                      >
                                    </td>

                                    <td colspan="2" class="text-left">
                                      <b>Total Guaranteed </b>
                                    </td>
                                    <!---->
                                    <td class="text-left">
                                      <b>
                                        {{ this.totalGuaranteed }}
                                      </b>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </form>

                        <div v-if="this.unsecured <= 0">
                          <button
                            type="button"
                            class="btn btn-success"
                            @click="approveloan(item)"
                          >
                            Approve
                          </button>
                          <button type="button" class="btn btn-danger">
                            Reject
                          </button>
                          <a href="/loans">
                            <button
                              type="button"
                              class="btn btn-outline-secondary col-lg-20"
                            >
                              Back to Loans
                            </button>
                          </a>
                        </div>
                        <div v-else>
                          <div class="form-group col-md-10">
                            <div class="row">
                              <div class="col-3">
                                <select
                                  class="form-select ."
                                  id="select-country"
                                  data-live-search="true"
                                  v-model="selectedemailG"
                                  @change="changeGuarantor"
                                >
                                  <option
                                    v-for="option in optionloansemail"
                                    v-bind:value="option.email"
                                    :key="option.id"
                                  >
                                    {{ option.email }}
                                  </option>
                                </select>
                              </div>
                              <label class="col-1">{{
                                maximumtoguarantee
                              }}</label>
                              <div class="col-2">
                                {{ selectedamountG }}
                                <input
                                  type="range"
                                  class="form-range"
                                  id="Term"

                                  min="0"
                                  :max="this.maximumtoguarantee"
                                  v-model="selectedamountG"
                                />
                              </div>

                              <div class="col-2">
                                <button
                                  @click="AddGuarantor"
                                  type="button"
                                  class="btn btn-outline-secondary"
                                >
                                  Request for Guarantors
                                </button>
                              </div>

                              <div class="col-2">
                                <a href="/loans">
                                  <button
                                    type="button"
                                    class="btn btn-outline-secondary col-lg-20"
                                  >
                                    Back to Loans
                                  </button>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>

        <!-- End of Approval Template  -->

        <!-- Modal -->
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Role Name</label>
                      <input
                        type="text"
                        v-model="role.role_name"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                  </div>
                  <div class="form-group col-md-10">
                    <label for="inputEmail4">Role Description</label>
                    <textarea
                      type="text"
                      v-model="role.role_description"
                      class="form-control"
                      id="inputEmail4"
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">update</button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal to Add Members  -->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import financeNav from "@/components/FinanceNav";
import accountingHeader from "@/components/accountingHeader.vue";
// import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
// import axios from "axios";
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";

// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  name: "Tax-Details",
  components: {
    financeNav,
    accountingHeader,
  },

  data() {
    return {
      picked: "",

      loan_id: "",
      loan: [],
      all_loans: [],
      options: "",
      guarantors: [],
      orgprofile: [],
      selectedamountG: "",
      search: "",
      selectedemail: "",
      selected: "",
      selectedemailG: "",
      optionloansemail: [],
      optionloans: "",
      totaldepositsG: [],
      loanscheduleG: [],
      totaldepositsMe: [],
      loanscheduleMe: [],
      totaldeposits: [],
      monthlyloan: [],
      monthdeposits: [],
      memberscount: [],
      myapprovedloans: [],

      loading: false,
      memberloan: [],
      tableData: [],
      add_product: false,
      editing: false,

      loan_type: "",
      role: [],
      roles: [],
      path: "",
      loanschedule: [],

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

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: {
          admin_email: this.email,
        },
      })
      .then((response) => {
        this.orgprofile = response.data.results;
        this.orgprofileid = this.orgprofile[0].id;
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("/loans/api/v1/loans/", {
        params: { company_id: this.companyid3 },
      })
      .then((res) => {
        this.all_loans = res.data.results;
        // console.log("myloans:",this.all_loans)
        // $("#walla").DataTable();
      }),
      axios
        .get("/loans/api/v1/loans/", {
          params: { organizationprofile: this.orgprofileid, Status: 4 },
        })
        .then((res) => {
          this.monthlyloan = res.data.results;
          $("#walla").DataTable();
        }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      }),
      axios
        .get("/members/api/v1/MonthDeposits/", {
          params: { organizationprofile: this.orgprofileid },
        })
        .then((res) => {
          this.monthdeposits = res.data.results;
          $("#monthdeposits").DataTable();
        })
        .catch((error) => {
          console.error(error);
        }),
      axios
        .get("/finance/api/v1/documents/", {
          params: { Document: "deposits" },
        })
        .then((res) => {
          this.totaldeposits = res.data.results;
          $("#monthdeposits").DataTable();
        })
        .catch((error) => {
          console.error(error);
        }),
      axios
        .get("/finance/api/v1/documents/", {
          params: {
            organizationprofile: this.orgprofileid,
            Document: "loans",
          },
        })
        .then((res) => {
          this.loanschedule = res.data.results;
          $("#walla").DataTable();
        }),
      axios.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
        this.employer = res.data.results;
        // $("#example").DataTable();
      });

    axios
      .get("/members/api/v1/MemberDetails/", {
        params: { organizationprofile: this.orgprofileid },
      })
      .then((res) => {
        this.memberscount = res.data.count;
        // $("#members").DataTable();
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("/members/api/v1/MemberDetails/", {
        params: {},
      })
      .then((res) => {
        this.memberemail = res.data.results;
        //   console.log("loans", this.loans)
        $("#walla").DataTable();
      }),
      axios
        .get("/loans/api/v1/loans/", {
          params: {},
        })
        .then((res) => {
          this.optionloansemail = res.data.results;
          $("#walla").DataTable();
        });
  },

  created() {
    this.getProducts();
    this.initDatatable();
    this.initDatatable();
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchBanktransactions();
    this.fetchPaymentsmade();
    this.fetchPaymentsreceived();
  },

  methods: {
    ...mapActions([
      "fetchDocuments",
      "fetchDeposits",
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchBanktransactions",
      "fetchPaymentsmade",
      "fetchPaymentsreceived",
    ]),

    Getloanbyid(item) {
      this.loan = item;
      const x = this.loan.id;
      console.table(x);

      axios
        .get("/loans/api/v1/guarantors/", {
          params: { Loan_id: x },
        })
        .then((res) => {
          this.guarantors = res.data.results;
          $("#walla").DataTable();
        }),
        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: this.loan.email, Document: "loans" },
          })
          .then((res) => {
            this.loanscheduleMe = res.data.results;
            $("#walla").DataTable();
          }),
        axios
          .get("sys_config/api/v1/LoanType/", {
            params: {},
          })
          .then((res) => {
            this.Termx = res.data.results.filter(
              (loan) => loan.loan_type == this.loan.loan_Type
            );
            this.TermY = this.Termx[0].maximum_loan_term;
            //   console.log("loans", this.loans)
            $("#walla").DataTable();
          }),
        axios
          .get("/finance/api/v1/documents/", {
            params: { memberemail: this.loan.email, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          });
    },
    updateloanschedule(item) {
      this.loan = item;

      //if Topup is true
      if (this.loan.Topup == "1") {
        this.loan.Amount = this.newloan;
        this.Monthrepayment = this.newmonthlyRepayment;
        this.Interest_Monthly = this.newinterestmonthly;
      } else {
        this.loan.Amount;
      }

      Promise.all([
        axios
          .post(`/finance/api/v1/loanschedule/`, {
            // names: '',
            user_id: item.User_id,
            email: this.loan.email,
            date_disbursed: this.currentDate,
            loan_id: item.id,
            amountpaid: this.amounttopay,
            amount_disbursed: this.loan.Topup_Amount,
            monthlyrepayment: item.Total_Loan,
            loan_approved: "True",
            deficit: 0,
            Transactiontype: "DIS" + Math.random(),
            organizationprofile: this.orgprofileid,
            company_id: this.loan.company_id,
          })
          .then((response) => {
            response;
            confirm("Loan Schedule updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        axios
          .post(`http://127.0.0.1:8000/finance/api/v1/Payments/`, {
            // names: '',
            user_id: item.User_id,
            source_id: this.loan.id,
            email: this.loan.email,
            paymentNumber: "PYMT" + Math.random(),
            transactiondate: this.currentDate,
            account: this.loan.gl_account,
            paymentRef: item.id,
            amount: this.amounttopay,
            document: "loans",
            paid: "True",
            notes: "Loan Disbursment for " + this.currentDate,
            organizationprofile: this.orgprofileid,
            gl_account: this.loan.gl_account,
            company_id: this.loan.company_id,
          })
          .then((response) => {
            response;
            // window.location.reload();
            // confirm("Loan Schedule updated");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
        axios
          .put("/loans/api/v1/loans/" + this.loan.id + "/", {
            User_id: this.loan.id,
            email: this.loan.email,
            Amount: this.loan.Amount,
            loan_Type: this.loan.loan_Type,
            interest: this.loan.interest,
            Interest_Monthly: this.newinterestmonthly,
            Term: this.loan.Term,
            Status: this.loan.Status,
            TotalLoans: this.loan.TotalLoans,
            Disbursed: "True",
            Monthrepayment: this.newmonthlyRepayment,
            Principle_Monthly: this.loan.Principle_Monthly,
            Total_Loan: this.loan.Total_Loan,
            gl_account: this.loan.gl_account,
            organizationprofile: this.loan.organizationprofile,
            EmployerProfile: this.loan.EmployerProfile,
            company_id: this.loan.company_id,
            New_Term: 0,
            Topup_Amount: this.loan.Topup_Amount,
            NewMonthrepayment: this.newmonthlyRepayment,
            NewInterest_Monthly: this.newinterestmonthly,
            NewLoan: this.newloan,
            current_balance: this.loanbalance,
            noofmonthspaid: this.loan.noofmonthspaid,
            noofmonthspaidvar: this.loan.noofmonthspaidvar,
          })
          .then((response) => {
            response;
            this.fetchDocuments();
            this.fetchDeposits();
            this.fetchMembers();
            this.fetchLoans();
            this.fetchBanktransactions();
            this.fetchPaymentsmade();
            this.fetchPaymentsreceived();
            // window.location.reload();
            // confirm("We have received your application");
          })
          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),
      ]);
    },
    submitapproveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          current_balance: this.loanbalance,
          noofmonthspaid: this.loan.noofmonthspaid,
          noofmonthspaidvar: this.loan.noofmonthspaidvar,
        })
        .then((response) => {
          response;

          this.fetchDocuments();
          this.fetchDeposits();
          this.fetchMembers();
          this.fetchLoans();
          this.fetchBanktransactions();
          this.fetchPaymentsmade();
          this.fetchPaymentsreceived();

          // confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    submitTopup() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: 0,
          Disbursed: "False",
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          New_Term: 0,
          Topup_Amount: this.loan.Topup_Amount,
          NewMonthrepayment: this.newmonthlyRepayment,
          NewInterest_Monthly: this.newinterestmonthly,
          NewLoan: this.newloan,
          Topup: "True",
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
            params: { id: this.loan.id, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
            $("#monthdeposits").DataTable();
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: {
              company_id: this.companyid3,
            },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
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
          Status: "0",
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

    approveloan() {
      // let random = Math.random();
      // item.label = random;

      axios
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          gl_account: this.loan.gl_account,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
          company_id: this.loan.company_id,
          current_balance: this.loanbalance,
          noofmonthspaid: this.loan.noofmonthspaid,
          noofmonthspaidvar: this.loan.noofmonthspaidvar,
        })
        .then((response) => {
          response;
          this.fetchMembers(this.selected);

          this.fetchDocuments();
          this.fetchDeposits();
          this.fetchLoans();
          this.fetchBanktransactions();
          this.fetchPaymentsmade();
          this.fetchPaymentsreceived();

          confirm("We have received your application");
          //dismiss current modal
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    AddGuarantor() {
      axios
        .post("/loans/api/v1/guarantors/", {
          uuidguarantor: this.memberloan.id + this.memberloan.email,
          User_id: this.user_id,
          name: "",
          email: this.selectedemailG,
          ID_Number: "",
          Loan_id: this.loan.id,
          Mobile_Number: "",
          Amount_guaranteed: this.selectedamountG,
          Monthrepayment: this.loan.Monthrepayment,
          Term: this.loan.Term,
          Total_Loan: this.loan.Total_Loan,
          Amount: this.loan.Amount,
          loan_Type: this.loan.loan_Type,
          Amount_Approved: "",

          Approved_status: "",
          Approved_comment: "",
          Approved_by: "",
        })
        .then((response) => {
          response;

          //refresh modal
          // this.selectedemailG = "";
          // this.selectedamountG = "";

          window.location.reload();
          confirm("We have gurantor updates ");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    changeGuarantor() {
      axios
        .get("/finance/api/v1/documents/", {
          params: { Document: "deposits" },
        })
        .then((res) => {
          this.totaldepositsG = res.data.results.filter(
            (item) => item.memberemail == this.selectedemailG
          );
          $("#monthdeposits").DataTable();
          // console.log(res.data.results);
        })
        .catch((error) => {
          console.error(error);
        });
    },

    onChange() {
      this.$router.push(this.path);
    },

    gotoops() {
      this.$router.push("/operations");
    },

    changetoapprove(item) {
      this.memberloan = item;

      const memberfilter = this.loan.email;
      // alert(item.Total_Loan);

      Promise.all([
        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
            $("#walla").DataTable();
            // console.log(res.data.results);
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
          .get("/finance/api/v1/loanschedule/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.loanschedule = res.data.results;
            $("#walla").DataTable();
          }),
      ]);
    },

    changex(item) {
      // let random = Math.random();
      // item.label = random;

      this.memberloan = item;

      const memberfilter = this.memberloan.email;

      Promise.all([
        axios.get("/loans/api/v1/guarantors/").then((res) => {
          this.guarantors = res.data.results.filter(
            (item) => item.Loan_id == this.loan.id
          );
        }),
        axios
          .get("/loans/api/v1/loans/", {
            params: {
              email: memberfilter,
              Status: "1",
              organizationprofile: this.orgprofileid,
            },
          })
          .then((res) => {
            this.optionloans = res.data.results;
            $("#walla").DataTable();
          }),
        axios
          .get("/loans/api/v1/loans/", {
            params: { email: memberfilter, Status: "4" },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;
            //   console.log("loans", this.loans)
            $("#walla").DataTable();
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdepositsme = res.data.results;
            $("#walla").DataTable();
            // console.log(res.data.results);
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
            // console.log(res.data.results);
          })
          .catch((error) => {
            console.error(error);
          }),

        axios
          .get("/members/api/v1/MonthDeposits/", {
            params: { organizationprofile: this.orgprofileid },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
            $("#monthdeposits").DataTable();
            // console.log(res.data.results);
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

      // console.log(this.loanstype.loan_type);
    },
    addrecords() {
      axios
        .post(`/members/api/v1/MemberDetails/`, {
          // names: '',
          // User_id: this.user_id,
          first_name: this.addmembers.first_name,
          last_name: this.addmembers.last_name,
          phone_no: this.addmembers.phone_no,
          bankname: this.addmembers.bankname,
          email: this.addmembers.email,
          date_of_birth: this.addmembers.date_of_birth,
          Employer: this.addmembers.Employer,
          Department: this.addmembers.Department,
          county: this.addmembers.county,
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((error) => {
          // this.error = (e);
          alert(JSON.stringify(error.response.data));
        });
    },
    getProducts(Exception) {
      axios
        .get("/loans/api/v1/loans/", {
          params: { organizationprofile: this.orgprofileid },
        })
        .then((res) => {
          this.tableData = res.data.results.filter(
            (loan) => loan.company_id == this.companyid3
          );
          this.initDatatable();
        })
        .catch((error) => Exception.handle(error));
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
  },
  computed: {
    ...mapGetters(
      ["allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived"]
    ),

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

    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    sourceiddoc: function () {
      var x = "rcpt" + this.loan.id;

      return x;
    },

    interestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.tLoans - this.loan.Amount) / this.loan.Term);

      if (isNaN(int)) {
        int = 0;
        ``;
      }
      return int;
    },

    newinterestmonthly() {
      // let tTerm = this.Loans.Term;
      // let tinterest = this.Loans.interest;
      // let tamount = this.Loans.Amount;
      // return Math.round(((tinterest / 12 / 100) * tamount) / tTerm);
      let int = Math.round((this.NewtLoans - this.newloan) / this.loan.Term);

      if (isNaN(int)) {
        int = 0;
        ``;
      }
      return int;
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

    secured: function () {
      let x = this.currentdeposits - this.loanbalance + this.totalGuaranteed;
      return x;
    },

    unsecured: function () {
      let x = this.loan.Amount - this.currentdeposits - this.totalGuaranteed;
      return x;
    },

    monthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.loan.Term;
      let tLoans = this.loan.Amount;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },

    newmonthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.loan.Term;
      let tLoans = this.newloan;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },

    Riskacceptable() {
      const R = this.Gcurrentdeposits * 5; // 5 is the acceptable risk factor
      return R;
    },

    interestRate() {
      return this.loan.interest / 100 / 12;
    },

    emi() {
      var x = Math.pow(1 + this.interestRate, this.loan.Term);
      var emiMonthly = (this.loan.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    Newemi() {
      var x = Math.pow(1 + this.interestRate, this.loan.Term);
      var emiMonthly = (this.newloan * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    tLoans() {
      let tl = Math.round(this.emi * this.loan.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    NewtLoans() {
      let tl = Math.round(this.Newemi * this.loan.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
    },

    maximumtoguarantee() {
      const M2g = Math.round((this.Riskacceptable - this.Gcurrentloans) / 6); // 6 is the maximum number of people one can gurantee
      return M2g;
    },

    //created a computed function to sum column totals for Amount on Documents
    totalSavingsG: function () {
      var sum = 0;
      this.totaldepositsG.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalLoansG: function () {
      var sum = 0;
      this.loanscheduleG.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalGuaranteed: function () {
      var sum = 0;
      this.guarantors.forEach((e) => {
        sum += e.Amount_guaranteed;
      });
      return sum;
    },

    totalLoansMe: function () {
      var sum = 0;
      this.loanscheduleMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalSavingsMe: function () {
      var sum = 0;
      this.totaldepositsMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },
    MonthlyLoan: function () {
      var sum = 0;
      this.monthlyloan.forEach((e) => {
        sum += e.Monthrepayment;
      });
      return sum;
    },

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loanbalance: function () {
      return this.totalLoansMe;
    },

    Gcurrentloans: function () {
      return this.totalLoansG;
    },

    currentdeposits: function () {
      return this.totalSavingsMe;
    },

    Gcurrentdeposits: function () {
      return this.totalSavingsG;
    },

    totalSavings: function () {
      var sum = 0;
      this.totaldeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    totalLoans: function () {
      var sum = 0;
      this.loanschedule.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    //create a current date function with format yyyy/mm/dd
    currentDatex: function () {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      return date;
    },

    currentMonth: function () {
      const current = new Date();
      const date = `${current.getMonth() + 1}`;
      return date;
    },

    currentYear: function () {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    },

    monthsTogo: function () {
      const current = new Date();
      const date = `${current.getFullYear()}-${
        current.getMonth() + 1
      }-${current.getDate()}`;
      const date2 = `${this.memberloan.Loan_end_date}`;
      const date1 = new Date(date);
      const date3 = new Date(date2);
      const diffTime = Math.abs(date3 - date1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays;
    },

    filterloans: function () {
      return this.all_loans1.filter((item) =>
        item.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    newloan: function () {
      return this.loan.Amount + this.loan.Topup_Amount * 1;
    },

    amounttopay: function () {
      const x = this.loan.Amount;
      if (this.loan.Topup == "0") {
        return x;
      } else return this.loan.Topup_Amount;
    },
    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    all_loans1: function () {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    memberloanrepayment: function () {
      return this.$store.getters.allDocuments.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.SourcedocID == this.repaymentloanid
      );
    },
    memberLoancureentbalance: function () {
      var sum = 0;
      this.memberloanrepayment.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    repaymentloanid: function () {
      return "LOAN" + this.loan.id;
    },
  },
};
</script>

<style></style>
