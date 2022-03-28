@
<template>
  <div class="content content-boxed">
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
            <form>
              <div class="align-center">
                <span
                  class="org-name"
                  id="organization-name"
                  role="textbox"
                  contenteditable=""
                ></span>
              </div>

              <h3 class="report-header">INCOME STATEMENT REPORT</h3>

              <div class="align-center">
                <span
                  class="org-address font-normal"
                  id="organization-address"
                  role="textbox"
                  contenteditable=""
                ></span>
              </div>
              <div class="mt-20 scroll-table">
                <table class="table w-100" id="generator-table">
                  <thead>
                    <tr>
                      <th class="table-account table-header">
                        <h3 class="font-normal">ACCOUNT</h3>
                      </th>
                      <th class="table-account table-header text-right">
                        <h3 class="font-normal">ACCOUNT CODE</h3>
                      </th>
                      <th class="text-right table-account table-header">
                        <h3 class="font-normal">TOTAL ($)</h3>
                      </th>
                    </tr>
                  </thead>
                  <tbody id="table-operatingIncome">
                    <tr>
                      <td class="table-account font-header font-weight-700">
                        OPERATING INCOME
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(1, 'operatingIncome')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="General Income"
                          onchange="setValue(this, 1, 'operatingIncome', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 1, 'operatingIncome', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 1, 'operatingIncome', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(1, 'operatingIncome', false)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(2, 'operatingIncome')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Sales"
                          onchange="setValue(this, 2, 'operatingIncome', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 2, 'operatingIncome', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 2, 'operatingIncome', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(2, 'operatingIncome', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(3, 'operatingIncome')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Gross Profit"
                          onchange="setValue(this, 3, 'operatingIncome', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 3, 'operatingIncome', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 3, 'operatingIncome', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(3, 'operatingIncome', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(4, 'operatingIncome')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Gross Margin"
                          onchange="setValue(this, 4, 'operatingIncome', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 4, 'operatingIncome', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 4, 'operatingIncome', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(4, 'operatingIncome', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account font-weight-600">Total</td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="total-operating-income"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                  <tbody id="table-nonoperatingIncome">
                    <tr>
                      <td class="table-account font-header font-weight-700">
                        NON-OPERATING INCOME
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(1, 'nonoperatingIncome')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Capital Gain"
                          onchange="setValue(this, 1, 'nonoperatingIncome', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 1, 'nonoperatingIncome', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 1, 'nonoperatingIncome', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(1, 'nonoperatingIncome', false)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account font-weight-600">Total</td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="total-non-operating-income"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                  <tbody id="table-operatingexpense">
                    <tr>
                      <td class="table-account font-header font-weight-700">
                        OPERATING EXPENSE
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(1, 'operatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Business Insurance"
                          onchange="setValue(this, 1, 'operatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 1, 'operatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 1, 'operatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(1, 'operatingexpense', false)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(2, 'operatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Telephone"
                          onchange="setValue(this, 2, 'operatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 2, 'operatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 2, 'operatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(2, 'operatingexpense', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(3, 'operatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Shipping"
                          onchange="setValue(this, 3, 'operatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 3, 'operatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 3, 'operatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(3, 'operatingexpense', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(4, 'operatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Travel expenses"
                          onchange="setValue(this, 4, 'operatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 4, 'operatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 4, 'operatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(4, 'operatingexpense', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account font-weight-600">Total</td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="total-operating-expense"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                  <tbody id="table-nonoperatingexpense">
                    <tr>
                      <td class="table-account font-header font-weight-700">
                        NON-OPERATING EXPENSE
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(1, 'nonoperatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Lawsuit Settlement"
                          onchange="setValue(this, 1, 'nonoperatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 1, 'nonoperatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 1, 'nonoperatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(1, 'nonoperatingexpense', false)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(2, 'nonoperatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Damages"
                          onchange="setValue(this, 2, 'nonoperatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 2, 'nonoperatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 2, 'nonoperatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(2, 'nonoperatingexpense', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(3, 'nonoperatingexpense')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Interest Expense"
                          onchange="setValue(this, 3, 'nonoperatingexpense', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 3, 'nonoperatingexpense', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 3, 'nonoperatingexpense', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(3, 'nonoperatingexpense', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account font-weight-600">Total</td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="total-non-operating-expense"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                  <tbody id="table-costofgoodssold">
                    <tr>
                      <td class="table-account font-header font-weight-700">
                        COST OF GOODS SOLD
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(1, 'costofgoodssold')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Manufacturing"
                          onchange="setValue(this, 1, 'costofgoodssold', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 1, 'costofgoodssold', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 1, 'costofgoodssold', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(1, 'costofgoodssold', false)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account">
                        <a
                          class="plus-icons no-print"
                          onclick="addRow(2, 'costofgoodssold')"
                          ><img src="/books/common-icons/plus.svg"
                        /></a>
                        <input
                          type="text"
                          value="Labor Payment"
                          onchange="setValue(this, 2, 'costofgoodssold', 'account_name')"
                        />
                      </td>
                      <td class="table-account text-right">
                        <input
                          type="text"
                          class="text-right"
                          value=""
                          onchange="setValue(this, 2, 'costofgoodssold', 'account_code')"
                        />
                      </td>
                      <td class="text-right">
                        <input
                          type="number"
                          class="text-right font-variant"
                          value="0"
                          placeholder="0.00"
                          onchange="setValue(this, 2, 'costofgoodssold', 'value')"
                        />
                        <a
                          class="delete-row no-print"
                          onclick="deleteTableRow(2, 'costofgoodssold', true)"
                          ><img src="/books/common-icons/delete.svg"
                        /></a>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-account font-weight-600">Total</td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="total-cost-of-goods-sold"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                  <tbody id="table-netprofit">
                    <tr>
                      <td class="table-account font-weight-600">
                        Net Profit/Loss
                      </td>
                      <td></td>
                      <td class="text-right">
                        <span>$</span>
                        <input
                          type="number"
                          class="text-right total font-variant"
                          id="net-profit"
                          value="0"
                          placeholder="0.00"
                          readonly=""
                        />
                      </td>
                    </tr>
                    <tr class="section-line">
                      <td colspan="3"><hr /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="no-print w-35 align-center">
                <button type="button" class="print-btn" onclick="printPage()">
                  Download Income Statement
                </button>
              </div>
            </form>
          </div>
          <p class="fs-sm text-muted text-center">
            Thank you very much for doing business with us. We look forward to
            working with you again!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'income-statement',
}
</script>

<style></style>
