@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="mb-11" style="max-width: 98rem">
          <div class="row">
            <accountingHeader></accountingHeader>

            <div class="col-sm-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">All Expenses</h4>
                  <span>Org:{{ companyid3 }}</span>
                  <!-- {{this.maincodeid}} -->
                  <!-- {{glid}} -->
                  <!-- {{this.expense}} -->

                  <div class="btn-toolbar float-right align-items-center">
                    <!---->

                    <button
                      class="btn btn-success"
                      style="float: right"
                      type="button"
                      data-bs-toggle="modal"
                      data-bsitarget="#Newexpense"
                    >
                      <i class="fa fa-plus-circle" aria-hidden="true"></i>

                      Create a New Expense
                    </button>

                    <!--  -->

                    <!--  -->
                  </div>
                </div>

                <div class="card-body">
                  <!--  -->

                  <table
                    class="table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr class="line-item-header">
                        <th>#</th>

                        <!---->
                        <th class="text-left">Date of Transaction</th>
                        <th class="text-left">Company ID</th>
                        <th class="text-left">Description</th>
                        <th class="text-left">Account</th>
                        <th class="text-left">Account Description</th>

                        <th class="text-left">Amount</th>
                        <th class="text-left">Action</th>
                        <th>Reverse</th>

                        <!----><!---->
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in allExpenses1" :key="item.id">
                        <th scope="row">{{ index + 1 }}</th>

                        <td>{{ item.transactiondate }}</td>
                        <td>{{ item.company_id }}</td>
                        <td>{{ item.description }}</td>
                        <td>{{ item.gl_account }}</td>
                        <td>{{ item.gl_account_description }}</td>
                        <td>{{ item.amount }}</td>

                        <td>
                          <div v-if="item.posted == false" style="color: red">
                            <button
                              type="button"
                              class="btn btn-warning"
                              @click="Postexpense(item)"
                            >
                              <i class="fas fa-exclamation-circle"></i>Post
                            </button>
                          </div>
                          <div v-else style="color: green">
                            <button
                              type="button"
                              class="btn btn-primary"
                              @click="updategl(item)"
                            >
                              update Gl
                            </button>
                            <i class="fas fa-check-circle"></i>
                          </div>
                        </td>

                        <td>
                          <button
                            type="button"
                            class="btn btn-danger"
                            @click="deleteexpense(item)"
                          >
                            <i class="fas fa-trash-alt"></i>
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

        <div
          class="modal fade                                                                                                             "
          id="Newexpense"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title" id="exampleModalLabel">Expense Form</h3>
                <button
                  type="button"
                  class="close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Date</label>
                      <input
                        type="date"
                        v-model="payment.transactiondate"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Employee/Reason</label>
                      <input
                        type="text"
                        v-model="payment.expensebye"
                        class="form-control"
                        id="inputEmail4"
                      />
                    </div>
                    <div class="form-group col-md-12">
                      <label for="inputEmail4"> Notes</label>
                      <textarea
                        v-model="payment.description"
                        class="form-control"
                        id="inputEmail4"
                        rows="3"
                      />
                    </div>
                  </div>

                  <div class="form-group row">
                    <!-- <label class="col-form-label col-lg-1 required"
											>Details
										</label> -->
                    <div class="col-lg-10">
                      <div class="row"></div>
                    </div>
                  </div>

                  <div class="form-group row">
                    <!-- <label class="col-form-label col-lg-1 required"
											>Amount
										</label> -->
                    <div class="col-lg-12">
                      <div class="row">
                        <div class="col-lg-4">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">GL Account </span>
                            </div>
                            <select
                              v-model="selectedgl"
                              class="selectpicker form-control"
                            >
                              <option
                                v-for="option in allGl1Expense"
                                :value="option.maincode"
                                :key="option.id"
                              >
                                {{ option.accountname }}
                              </option>
                            </select>
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                          <div
                            id="ember1180"
                            class="popover-container ember-view"
                          >
                            <div
                              id="ember1181"
                              class="d-none popover bs-popover-bottom ember-view pop-over-div"
                            >
                              <!---->
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text"> Chq/Ref </span>
                            </div>
                            <input
                              id="ember1179"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="text"
                              v-model="payment.chequeNo"
                            />
                          </div>
                          <!---->
                        </div>

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Amount </span>
                            </div>
                            <input
                              id="ember1179"
                              class="ember-text-field text-left ember-view form-control text-left"
                              type="text"
                              v-model="payment.amount"
                            />
                          </div>
                          <!---->
                          <div
                            id="ember1180"
                            class="popover-container ember-view"
                          >
                            <div
                              id="ember1181"
                              class="d-none popover bs-popover-bottom ember-view pop-over-div"
                            >
                              <!---->
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-1">
                          <div class="input-group">
                            <!-- <div class="input-group-prepend">
															<span class="input-group-text">Tax </span>
														</div> -->
                            <select
                              v-model="selectedtax"
                              class="selectpicker form-control"
                            >
                              <option
                                v-for="option in taxes"
                                :value="option.value"
                                :key="option.value"
                              >
                                {{ option.text }}
                              </option>
                            </select>
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                          <div
                            id="ember1180"
                            class="popover-container ember-view"
                          >
                            <div
                              id="ember1181"
                              class="d-none popover bs-popover-bottom ember-view pop-over-div"
                            >
                              <!---->
                            </div>
                          </div>
                        </div>

                        <!---->

                        <div class="col-lg-2">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <span class="input-group-text">Tax</span>
                            </div>
                            <input
                              id="ember1182"
                              class="ember-text-field text-left ember-view form-control"
                              type="text"
                              v-model="payment.tax_Amount"
                            />
                            <!-- <span>Selected: {{ selectedgl }}</span> -->
                          </div>
                          <!---->
                          <div
                            id="ember1180"
                            class="popover-container ember-view"
                          >
                            <div
                              id="ember1181"
                              class="d-none popover bs-popover-bottom ember-view pop-over-div"
                            >
                              <!---->
                            </div>
                          </div>
                        </div>

                        <div class="form-check mt-1 cursor-pointer col-lg-1">
                          <input
                            id="ae3fdcc3a"
                            class="ember-checkbox ember-view form-check-input"
                            type="checkbox"
                          />
                          <label for="ae3fdcc3a" class="form-check-label">
                            Tax Inc {{ this.payment.amount }}
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
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
                  @click="saveExpense(loan)"
                  type="button"
                  class="btn btn-primary"
                >
                  make payment
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Modal -->
        <!-- Button trigger modal -->

        //create modal button

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
          id="incomestatement"
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
                  <h3>Income Statement</h3>
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
                <div class="container">
                  <form @submit.prevent="submit">
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

                        />
                        <!---->
                      </div>
                    </div>

                    <div class="block block-rounded">
                      <div class="block-header block-header-default">
                        <h3 class="block-title">#INV0625</h3>
                        <div class="block-options">
                          <button
                            type="button"
                            class="btn-block-option"
                            onclick="One.helpers('one-print');"
                          >
                            <i class="si si-printer me-1"></i> Print Invoice
                          </button>
                        </div>
                      </div>
                      <div class="block-content">
                        <div class="p-sm-4 p-xl-7">
                          <div class="row mb-4">
                            <div class="col-6 fs-sm">
                              <p class="h3">Company</p>
                              <address>
                                Street Address<br />
                                State, City<br />
                                Region, Postal Code<br />
                                ltd@example.com
                              </address>
                            </div>
                            <div class="col-6 text-end fs-sm">
                              <p class="h3">Client</p>
                              <address>
                                Street Address<br />
                                State, City<br />
                                Region, Postal Code<br />
                                ctr@example.com
                              </address>
                            </div>
                          </div>
                          <div class="table-responsive push">
                            <table class="table table-borderless">
                              <thead>
                                <th class="text-left">Revenue</th>
                              </thead>
                              <thead>
                                <tr class="line-item-header">
                                  <!-- <th>#</th> -->

                                  <th>Account</th>
                                  <!---->
                                  <th class="text-left">Revenue</th>
                                  <th class="text-left">year 2022</th>

                                  <!----><!---->
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(item) in allGl1revenue"
                                  :key="item.id"
                                >
                                  <!-- <th scope="row">{{ index + 1 }}</th> -->

                                  <td>{{ item.maincode }}</td>
                                  <td>{{ item.accountname }}</td>
                                  <td>{{ item.balance }}</td>
                                </tr>
                                <tr>
                                  <td colspan="2" style="padding-top: 0px">
                                    <small class="text-muted"
                                      >**List contains only Approved All Revenue
                                      Acounts</small
                                    >
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td colspan="1" class="text-right">
                                    <b>Total Revenue</b>
                                  </td>
                                  <!---->
                                  <td class="text-right">
                                    <b>{{ this.totalLoans }}</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>

                            <table class="table table-borderless">
                              <thead>
                                <th class="text-left">Operating Expenses</th>
                              </thead>
                              <thead>
                                <tr class="line-item-header">
                                  <!-- <th>#</th> -->

                                  <th>Account</th>
                                  <!---->
                                  <th class="text-left">Expense</th>
                                  <th class="text-left">year 2022</th>

                                  <!----><!---->
                                </tr>
                              </thead>
                              <tbody>
                                <tr
                                  v-for="(item) in allGl1Expense"
                                  :key="item.id"
                                >
                                  <!-- <th scope="row">{{ index + 1 }}</th> -->

                                  <td>{{ item.maincode }}</td>
                                  <td>{{ item.accountname }}</td>
                                  <td>{{ item.balance }}</td>
                                </tr>
                                <tr>
                                  <td colspan="2" style="padding-top: 0px">
                                    <small class="text-muted"
                                      >**List contains only Approved All
                                      Expenses Acounts</small
                                    >
                                  </td>
                                  <td></td>
                                  <td></td>
                                  <td colspan="1" class="text-right">
                                    <b>Total Expenses</b>
                                  </td>
                                  <!---->
                                  <td class="text-right">
                                    <b>{{ this.totalLoans }}</b>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <p class="fs-sm text-muted text-center"></p>
                        </div>
                      </div>
                    </div>
                  </form>
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



export default {
  name: "Journal-Area",
  components: {
    financeNav,
    accountingHeader,
  },

  data() {
    return {
      selected: "A",
      glchanged: [],
      options: [],
      picked: "",

      taxes: [
        { text: "VAT", value: "1" },
        { text: "WHT", value: "2" },
        { text: "Three", value: "C" },
      ],
      expense: [],

      loan_id: "",
      loan: [],
      all_loans: [],
      selectedbank: [],
      bankglchange: [],
      banks: [],
      bank: [],
      // options: "",
      guarantors: [],
      orgprofile: [],
      selectedamountG: "",
      search: "",
      selectedemail: "",
      selectedgl: "",
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
      gldocs: [],

      loan_type: "",
      role: [],
      roles: [],

      loanschedule: [],
      selectedtax: "",
      payment: [
        {
          transactiondate: "",
          organizationprofile: "",
          company_id: "",
          description: "",
          gl_account: "",
          gl_account_description: "",
          amount: "",
          tax_Amount: "",
          Tax_code: "",

          tax_gl_account: "",
          tax_gl_account_description: "",
          expensebye: "",
          ref: "",
          chequeNo: "",
        },
      ],

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

  mounted() {},

  created() {
    this.fetchExpenses();
    this.updategllist();
    this.fetchExpenses();
    this.initDatatable();

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
      "fetchGl",
      "fetchExpenses",
    ]),

    updategllist(allGl1) {
      this.options = allGl1;
    },

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

    // Save the Expense

    saveExpense() {
      axios
        .post(`/finance/api/v1/Expenses/`, {
          // names: '',
          transactiondate: this.payment.transactiondate,
          organizationprofile: this.orgprof,
          company_id: this.companyid3,
          expensebye: this.payment.expensebye,
          description: this.payment.description,
          gl_account: this.selectedgl,
          gl_account_description: "",
          amount: this.payment.amount,
          tax_Amount: this.payment.amount * 0.16,
          tax_percentage: "16%",
          tax_gl_account: this.tax_gl_account,
          tax_gl_account_description: "",
          chequeNo: this.payment.chequeNo,
        })
        .then((response) => {
          response;
          this.fetchExpenses();

          // confirm("We have received your application");
        })
        .catch((e) => {
          alert(e);
        });
    },

    //update GL

    Postexpense(item) {
      this.expense = item;

      const opt = this.allGls1.find(
        (o) => o.maincode == this.expense.gl_account
      );
      console.log(opt);

      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;

      Promise.all([
        axios
          .post(`/finance/api/v1/documents/`, {
            // names: '',
            user_Id: this.user_id,
            memberemail: "expense@email.com",
            DocumentID: this.expense.id + "CR",
            SourcedocID: "EXP" + this.expense.id,
            Account: this.expense.gl_account,
            Reporting: "P&L",
            Transaction_date: this.currentDate,
            Account_Code: this.expense.gl_account,
            Document: "expense",
            Credit: this.expense.amount,
            Debit: 0,
            Amount: this.expense.amount,
            ReferenceNo: this.expense.chequeNo + "CR",
            Transaction_type: "CR",
            Posting_Date: this.currentDate,

            organizationprofile: this.orgprof,
            company_id: this.companyid3,
            notes: this.expense.description,
            Account_type: this.glchanged.account_type,
            Accountcode_description: this.glchanged.accountname,
            accountype_description: this.glchanged.accountype_description,
            maincode: this.glchanged.maincode,
            maincode_description: this.glchanged.maincode_description,
          })
          .then((response) => {
            response;
            // confirm("Loan Schedule updated");
            // alert("transactions updated");

            // refresh current window
            // window.location.reload();
          })

          .catch((e) => {
            this.errors.push(e);
            alert(e);
          }),

        (this.gldocs = this.$store.getters.allDocuments.filter(
          (gldocs) => gldocs.Account == this.expense.gl_account
        )),
        axios
          .put("/finance/api/v1/Chartofaccounts/" + this.glid + "/", {
            account_type: this.glaccountype,
            maincode: this.glmaincode,
            parent_account: this.glparent_account,
            accountname: this.glaccountname,
            description: this.gladescription,
            financial_statement: this.glfinancial_statement,
            company_id: this.companyid3,
            key: this.glkey,
            debit: this.gldocsDebit,
            credit: this.gldocsCredit,
            balance: this.gldocsAmount,

            accounttype_description: this.glchanged.accountype_description,

            maincode_description: this.glchanged.maincode_description,
          })
          .then(function () {
            // window.location.reload();
          })
          .catch((e) => {
            alert(e);
          }),

        axios
          .put(`/finance/api/v1/Expenses/` + this.expense.id + "/", {
            // names: '',
            transactiondate: this.expense.transactiondate,
            organizationprofile: this.orgprof,
            company_id: this.companyid3,
            expensebye: this.expense.expensebye,
            description: this.expense.description,
            gl_account: this.expense.gl_account,
            gl_account_description: "",
            amount: this.expense.amount,
            tax_Amount: this.expense.amount * 0.16,
            tax_percentage: "16%",
            tax_gl_account: this.tax_gl_account,
            tax_gl_account_description: "",
            chequeNo: this.expense.chequeNo,
            posted: "true",
          })
          .then((response) => {
            response;
            // window.location.reload();
            this.fetchExpenses();
            // this.$router.push({ name: "operations" });
          })
          .catch((e) => {
            alert(e);
          }),
      ]);
    },

    refreshgl() {
      Promise.all([this.$store.dispatch("fetchGl")]).finally(() => {
        // using "finally" so even if there are errors, it stops "loading"
        this.loading = false;
      });
    },

    updategl(item) {
      this.expense = item;

      const opt = this.allGls1.find((o) => o.maincode == this.glmaincode);
      console.log(opt);

      this.glchanged.account_type = opt.account_type;
      this.glchanged.accountype_description = opt.accounttype_description;
      this.glchanged.maincode = opt.maincode;
      this.glchanged.maincode_description = opt.maincode_description;
      this.glchanged.parent_account = opt.parent_account;
      this.glchanged.accountname = opt.accountname;

      (this.gldocs = this.$store.getters.allDocuments.filter(
        (gldocs) => gldocs.Account == this.expense.gl_account
      )),
        axios
          .put("/finance/api/v1/Chartofaccounts/" + this.glid + "/", {
            account_type: this.glaccountype,
            maincode: this.glmaincode,
            parent_account: this.glparent_account,
            accountname: this.glaccountname,
            description: this.gladescription,
            financial_statement: this.glfinancial_statement,
            company_id: this.companyid3,
            key: this.glkey,
            debit: this.gldocsDebit,
            credit: this.gldocsCredit,
            balance: this.gldocsAmount,
            accounttype_description: this.glchanged.accountype_description,
            maincode_description: this.glchanged.maincode_description,
          })
          .then(function () {
            // window.location.reload();
          })

          .catch((e) => {
            alert(e);
          });

      this.allGl();
    },

    deleteexpense() {
      alert(" Not working at the moment");
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
     [ "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allGl",
      "allExpenses"]
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
      return this.allExpenses1.filter((item) =>
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

    orgprof() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].id;
    },

    all_loans1: function () {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allExpenses1: function () {
      return this.$store.getters.allExpenses.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    allGl1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    allGls1: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    // Income Statement Area

    allGl1revenue: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1cog: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1Expense: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "5000000"
      );
    },

    allGl1taxes: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    allGl1otherincome: function () {
      return this.$store.getters.allGl.filter(
        (item) =>
          item.company_id == this.companyid3 && item.account_type == "4000000"
      );
    },

    // GL Update fields

    glid: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].id;
    },

    glaccountype: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].account_type;
    },
    glmaincode: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].maincode;
    },

    glparent_account: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].parent_account;
    },

    glfinancial_statement: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].financial_statement;
    },

    glaccountname: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].accountname;
    },

    gladescription: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].description;
    },

    glkey: function () {
      return this.$store.getters.allGl.filter(
        (item) => item.maincode == this.maincodeid
      )[0].key;
    },

    // GLid document

    glidDocuments: function () {
      return this.$store.getters.allDocuments.filter(
        (item) => item.Account == this.maincodeid
      )[0].key;
    },

    //sum gldocs amount
    gldocsDebit: function () {
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Debit;
      });
      return sum;
    },

    gldocsCredit: function () {
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Credit;
      });
      return sum;
    },

    gldocsAmount: function () {
      var sum = 0;
      this.gldocs.forEach((e) => {
        sum += e.Credit;
      });
      return sum;
    },

    //

    maincodeid: function () {
      var x = this.expense.gl_account;
      return x;
    },
  },
};
</script>

<style></style>
The resource requested could not be found on this server!
