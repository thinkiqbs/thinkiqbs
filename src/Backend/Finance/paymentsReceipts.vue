@
<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-1">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <div class="table-responsive">
            <div class="topnav-right">
              <button
                class="btn btn-success"
                style="float: right"
                type="button"
                data-toggle="modal"
                data-target="#Newpayments"
              >
                New
              </button>
            </div>

            <table class="table table-borderless">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Date</th>
                  <th scope="col">Customer</th>
                  <th scope="col">Account</th>
                  <th scope="col">Bank</th>
                  <th scope="col">Payment No#</th>
                  <th scope="col">Ref#</th>
                  <th scope="col">Amount#</th>
                  <th scope="col">Mode</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in paymentsreceived" :key="item.id">
                  <!-- <th scope="row">{{ item.id }}</th> -->
                  <td>{{ item.id }}</td>
                  <td>{{ item.transactiondate }}</td>
                  <td>{{ item.customer }}</td>
                  <td>{{ item.glaccounts }}</td>
                  <td>{{ item.bankaccount }}</td>
                  <td>{{ item.paymentNumber }}</td>
                  <td>{{ item.referenceNumber }}</td>
                  <td>{{ item.amount }}</td>
                  <td>{{ item.paymentmode }}</td>
                  <!-- <td>{{ item.notes }}</td> -->
                  <td>
                    <button
                      type="button"
                      @click="change(item)"
                      class="btn btn-secondary"
                      data-toggle="modal"
                      data-target="#Editpayment"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <div
          class="modal fade"
          id="Newpayments"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="Newpayments1">Receive payments</h5>
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
                      <label for="inputEmail4">customer </label>
                      <select
                        v-model="selected"
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                        required
                      >
                        <option
                          v-for="option in options"
                          :value="option.companyname"
                          :key="option.id"
                        >
                          {{ option.companyname }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Date </label>
                      <input
                        type="date"
                        class="form-control"
                        id="inputEmail4"
                        v-model="addpayment.transactiondate"
                        required
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="inputEmail4">Description </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        v-model="addpayment.loan_description"
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Gl Account </label>
                    <select
                      v-model="selectedgl"
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option
                        :key="coa.id"
                        v-for="coa in coa"
                        :value="coa.accountname"
                      >
                        {{ coa.accountname }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Bank Account </label>
                    <select
                      v-model="selectedbank"
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option
                        :key="option.id"
                        v-for="option in coa"
                        :value="option.accountname"
                      >
                        {{ option.accountname }}
                      </option>
                    </select>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="inputCity">payment number</label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputCity"
                        v-model="addpayment.paymentNumber"
                      />
                    </div>

                    <div class="form-group col-md-2">
                      <label for="inputZip">Ref#</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        v-model="addpayment.referenceNumber"
                      />
                    </div>
                    <div class="form-group col-md-3">
                      <label for="inputZip">Amount </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        v-model="addpayment.amount"
                      />
                    </div>

                    <!-- <div>
											<select
												class="form-select"
												aria-label="Default select example"
												v-model="addpayment.paymentmode"
												value="selected"
											>
												<option selected> select</option>
												<option value="1">cash</option>
												<option value="2">cheque</option>
												<option value="3">Bank Transfer</option>
												<option value="4">MPESA</option>
											</select>
										</div> -->

                    <div class="form-group col-md-6">
                      <label for="inputEmail4">payment mode </label>
                      <select
                        v-model="selectedpaymentmode"
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option
                          :key="option.id"
                          v-for="option in paymentmodes"
                          :value="option.mode"
                        >
                          {{ option.mode }}
                        </option>
                      </select>
                      <!-- <button class="btn btn-primary">add</button> -->
                    </div>
                    <!-- <div class="input-group">
											<input
												type="text"
												class="form-control"
												id="inputGroupFile04"
												aria-describedby="inputGroupFileAddon04"
												aria-label="Upload"
											/>
											<button
												class="btn btn-outline-secondary"
												type="button"
												id="inputGroupFileAddon04"
											>
												Button
											</button>
										</div> -->
                    <div class="form-group col-md-10">
                      <label for="inputZip">Notes#</label>
                      <input
                        type="textarea"
                        class="form-control"
                        id="inputZip"
                        v-model="addpayment.notes"
                      />
                    </div>
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="addrecords"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- Modal to Add new Roles  -->
        <div
          class="modal fade"
          id="Editpayment"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Edit payments
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
                <form>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">customer </label>
                      <select
                        v-model="payment.customer"
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option
                          v-for="option in options"
                          :value="option.companyname"
                          :key="option.id"
                        >
                          {{ option.companyname }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">Date </label>
                      <input
                        type="date"
                        class="form-control"
                        id="inputEmail4"
                        v-model="payment.transactiondate"
                      />
                    </div>
                    <div class="form-group col-md-9">
                      <label for="inputEmail4">Description </label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputEmail4"
                        v-model="payment.description"
                      />
                    </div>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Gl Account </label>
                    <select
                      v-model="payment.glaccounts"
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option
                        :key="option.id"
                        v-for="option in coa"
                        :value="option.accountname"
                      >
                        {{ option.accountname }}
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-md-6">
                    <label for="inputEmail4">Bank Account </label>
                    <select
                      v-model="payment.bankaccount"
                      class="form-select form-select-sm"
                      aria-label=".form-select-sm example"
                    >
                      <option
                        :key="option.id"
                        v-for="option in coa"
                        :value="option.accountname"
                      >
                        {{ option.accountname }}
                      </option>
                    </select>
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-4">
                      <label for="inputCity">payment number</label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputCity"
                        v-model="payment.paymentnumber"
                      />
                    </div>

                    <div class="form-group col-md-4">
                      <label for="inputZip">Ref#</label>
                      <input
                        type="text"
                        class="form-control"
                        id="inputZip"
                        v-model="payment.referenceNumber"
                      />
                    </div>
                    <div class="form-group col-md-4">
                      <label for="inputZip">Amount </label>
                      <input
                        type="number"
                        class="form-control"
                        id="inputZip"
                        v-model="payment.amount"
                      />
                    </div>
                    <div class="form-group col-md-6">
                      <label for="inputEmail4">payment mode </label>
                      <select
                        v-model="payment.paymentmode"
                        class="form-select form-select-sm"
                        aria-label=".form-select-sm example"
                      >
                        <option
                          :key="option.id"
                          v-for="option in paymentmodes"
                          :value="option.paymentmode"
                        >
                          {{ option.paymentmode }}
                        </option>
                      </select>
                    </div>
                    <div class="form-group col-md-10">
                      <label for="inputZip">Notes#</label>
                      <input
                        type="textarea"
                        class="form-control"
                        id="inputZip"
                        v-model="payment.notes"
                      />
                    </div>
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
                <button
                  type="button"
                  class="btn btn-primary"
                  @click="updaterecords"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import financeNav from "@/components/FinanceNav";

export default {
  components: {
    financeNav,
  },
  data() {
    return {
      selected: "",
      selectedgl: "",
      selectedbank: "",
      selectedpaymentmode: "",
      options: [],
      coa: [],
      paymentmodes: [],
      loan_type: "",
      loanstypes: [],
      payments: [],
      payment: [],
      role: [],
      roles: [],
      addpayment: [
        {
          id: "",
          transactiondate: "",
          customer: "",
          glaccounts: "",
          bankaccount: "",
          paymentNumber: "",
          referenceNumber: "",
          amount: "",
          paymentmode: "",
          notes: "",
        },
      ],
    };
  },

  computed: {
    loant() {
      return this.loan_type;
    },
    apiurls() {
      return (
        "http://127.0.0.1:8000/sys_config/api/v1/LoanType/" + this.loan_type
      );
    },
    loantypex() {
      return this.loantype.loan_type;
    },
    modalvalues() {
      return "";
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/finance/api/v1/PaymentsReceived/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.paymentsreceived = res.data.results;
        // $("#loantypes").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://127.0.0.1:8000/finance/api/v1/Customer/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.options = res.data.results;
        // $("#options").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });

    axios
      .get("http://127.0.0.1:8000/finance/api/v1/Chartofaccounts/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.coa = res.data.results;
        // $("#coa").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get("http://127.0.0.1:8000/finance/api/v1/paymentmodes/", {
        headers: {
          Authorization: `Bearer ${this.$store.state.accessToken}`,
        },
      })
      .then((res) => {
        this.paymentmodes = res.data.results;
        // $("#coa").DataTable();
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  methods: {
    change(item) {
      // console.log(item);
      this.payment = item;
    },

    addrecords() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/PaymentsReceived/`, {
          // names: '',
          // User_id: this.user_id,

          transactiondate: this.addpayment.transactiondate,
          customer: this.selected,
          glaccounts: this.selectedgl,
          bankaccount: this.selectedbank,
          paymentNumber: this.addpayment.paymentNumber,
          referenceNumber: this.addpayment.referenceNumber,
          amount: this.addpayment.amount,
          paymentmode: this.selectedpaymentmode,
          notes: this.addpayment.notes,
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },

    documentadd() {
      axios
        .post(`http://127.0.0.1:8000/finance/api/v1/documents/`, {
          // names: '',
          // User_id: this.user_id,

          Transaction_date: "",
          DocumentID: "",
          Reporting: "",
          Transaction_type: "",
          Document: "",
          user_Id: "",
          Account_type: "",
          Account_Code: "",
          Account: "",
          Posting_Date: "",
          AmountDr: "",
          AmountCr: "",
        })
        .then((response) => {
          response;
          confirm("We have received your application");
        })
        .catch((e) => {
          this.errors.push(e);
          alert(e);
        });
    },
    updaterecords() {
      alert("coming soon");
    },
  },
};
</script>

<style></style>
