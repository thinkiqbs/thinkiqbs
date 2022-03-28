@
<template>
  <div class="container-responsive">
    <div class="content content-boxed">
      <div class="block block-rounded">
        <div class="block-header block-header-default">
          <h3 class="block-title">#BALANCE SHEET</h3>
          <div class="block-options">
            <button
              type="button"
              class="btn-block-option"
              id="printPageButton"
              @click="printdocument"
            >
              <i class="fa-solid fa-print">Print</i>
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
            </div>
            <div class="table-responsive push">
              <form>
                <div class="align-center">
                  <span
                    class="org-name"
                    id="organization-name"
                    role="textbox"
                    contenteditable=""
                  ></span>
                </div>

                <h3 class="report-header">BALANCE SHEET REPORT</h3>

                <div class="align-center">
                  <span
                    class="org-address font-normal"
                    id="organization-address"
                    role="textbox"
                    contenteditable=""
                  ></span>
                </div>
                <div class="mt-20 scroll-table">
                  <div class="table-responsive push">
                    <table class="table table-borderless">
                      <thead>
                        <th class="text-left">Assets</th>
                      </thead>
                      <thead>
                        <tr class="line-item-header">
                          <!-- <th>#</th> -->

                          <th>Account</th>
                          <!---->
                          <th class="text-left">Account Code</th>
                          <th class="text-left">Amount</th>

                          <!----><!---->
                        </tr>
                      </thead>

                      <tr>
                        <td class="table-account font-header font-weight-600">
                          Current Assets
                        </td>
                      </tr>
                      <tbody>
                        <tr v-for="item in allGl1revenue" :key="item.id">
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
                            <b>Total Assets</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{}}</b>
                          </td>
                        </tr>
                      </tbody>
                      <tr>
                        <td class="table-account font-header font-weight-600">
                          Fixed Assets
                        </td>
                      </tr>

                      <tbody>
                        <tr v-for="item in allGl1revenue" :key="item.id">
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
                            <b>Total Assets</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{}}</b>
                          </td>
                        </tr>
                      </tbody>

                      <td class="table-account font-weight-600">
                        TOTAL ASSETS
                      </td>
                    </table>
                  </div>

                  <div class="table-responsive push">
                    <table class="table table-borderless">
                      <thead>
                        <th class="text-left">Liabilities</th>
                      </thead>
                      <thead>
                        <tr class="line-item-header">
                          <!-- <th>#</th> -->

                          <th>Account</th>
                          <!---->
                          <th class="text-left">Account Code</th>
                          <th class="text-left">Amount</th>

                          <!----><!---->
                        </tr>
                      </thead>
                      <tr>
                        <td class="table-account font-header font-weight-600">
                          Current Liabilities
                        </td>
                      </tr>
                      <tbody>
                        <tr v-for="item in allGl1revenue" :key="item.id">
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
                            <b>Total Liabilities</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{}}</b>
                          </td>
                        </tr>
                      </tbody>
                      <tr>
                        <td class="table-account font-header font-weight-600">
                          Longterm Liabilities
                        </td>
                      </tr>
                      <tbody>
                        <tr v-for="item in allGl1revenue" :key="item.id">
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
                            <b>Total Liabilities</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{}}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div class="table-responsive push">
                    <table class="table table-borderless">
                      <tr>
                        <td class="table-account font-header font-weight-700">
                          EQUITIES
                        </td>
                      </tr>
                      <thead>
                        <tr class="line-item-header">
                          <!-- <th>#</th> -->

                          <th>Account</th>
                          <!---->
                          <th class="text-left">Account Code</th>
                          <th class="text-left">Amount</th>

                          <!----><!---->
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="item in allGl1revenue" :key="item.id">
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
                            <b>Total Equities</b>
                          </td>
                          <!---->
                          <td class="text-right">
                            <b>{{}}</b>
                          </td>
                        </tr>
                      </tbody>
                      <tr>
                        <td class="table-account font-weight-600">
                          TOTAL LIABILITIES &amp; EQUITIES
                        </td>
                        <td></td>
                        <td class="text-right"></td>
                      </tr>
                    </table>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "balance-sheet",
  methods: {
    printdocument () {
      window.print()
    }
  }
}
</script>

<style>
@media print {
  #printPageButton {
    display: none;
  }
}
</style>
