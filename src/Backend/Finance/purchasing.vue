@
<template>
  <div class="column content-column">
    <div
      class="fill header grey-bg"
      style="padding-left: 12px; padding-right: 12px"
    >
      <div class="cursor-pointer float-right pt-5 mt-1 font-small">
        <span
          class="close-details close-details-right pt-1 separationline"
          data-ember-action=""
          data-ember-action-2754="2754"
        >
          ></span
        >
        <span
          class="px-3 float-right separationline linked-text"
          data-ember-action=""
          data-ember-action-2755="2755"
        >
          >&nbsp;Comments &amp; History</span
        >
        <!---->
        <span id="ember2756" class="tooltip-container ember-view">
          <!---->
          <span class="linked-text">
            <span class="pr-3 ml-n2">Attach File(s)</span></span
          ></span
        >
        <div id="ember2758" class="popover-container ember-view">
          <div
            id="ember2759"
            class="d-none popover bs-popover-bottom ember-view attachments-invoice pop-over-div"
          >
            <!---->
          </div>
        </div>
        <div></div>
      </div>
      <div class="btn-toolbar over-flow font-xlarge text-plain py-5">
        <!---->
        <div class="d-inline-block">
          <!---->
          <span class="page-header-title">LoanID#</span>
          <!---->
        </div>
      </div>
    </div>
    <div class="details-menu-bar font-small d-flex btn-group">
      <div
        class="details-menu-item text-center"
        data-ember-action=""
        data-ember-action-2760="2760"
      >
        <span></span><span class="pl-2">Edit</span>
      </div>
      <div id="ember2761" class="dropdown ember-view">
        <div
          id="ember2762"
          class="dropdown-toggle no-caret ember-view details-menu-item text-center"
        >
          <span class="pl-1">
            Mails
            <!----></span
          >
          <span class="pl-1"> ></span>
        </div>
        <div id="ember2763" class="dropdown-menu ember-view">
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2764="2764"
            >Send Mail</a
          >
        </div>
      </div>
      <div
        class="details-menu-item text-center"
        data-ember-action=""
        data-ember-action-2766="2766"
      >
        <span class="pl-1">Share</span>
      </div>
      <div id="ember2767" class="dropdown ember-view">
        <div
          id="ember2768"
          class="dropdown-toggle no-caret ember-view details-menu-item text-center"
        >
          <span> ></span>
          <span class="pl-1">Reminders</span>
          <span class="pl-1"></span>
        </div>
        <div id="ember2769" class="dropdown-menu ember-view">
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2770="2770"
            >Send Now</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2771="2771"
            >Stop Reminders</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2772="2772"
            >Expected Payment Date</a
          >
        </div>
      </div>
      <div id="ember2773" class="dropdown ember-view">
        <div
          id="ember2774"
          class="dropdown-toggle no-caret ember-view details-menu-item text-center p-12"
        >
          <span class="pl-1">PDF / Print</span>
          <span class="pl-1"></span>
        </div>
        <div id="ember2775" class="dropdown-menu ember-view">
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2776="2776"
            >PDF</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2777="2777"
            >Print</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2778="2778"
            >Print Delivery Note</a
          >
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2779="2779"
            >Print Packing Slip</a
          >
        </div>
      </div>
      <div id="ember2780" class="dropdown ember-view">
        <div
          id="ember2781"
          class="dropdown-toggle no-caret ember-view details-menu-item text-center"
        >
          <span class="pl-1">Record Payment</span>
          <span class="pl-1"></span>
        </div>
        <div id="ember2782" class="dropdown-menu ember-view">
          <a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2783="2783"
          >
            Record Payment
          </a>
          <!----><a
            class="dropdown-item"
            href="#"
            data-ember-action=""
            data-ember-action-2784="2784"
            >Write Off</a
          >
        </div>
      </div>
      <!---->
      <!---->

      <div id="ember2810" class="ember-view">
        <div id="ember2811" class="ember-view"></div>
      </div>
      <!---->
    </div>
    <div id="ember2812" class="ember-view">
      <!---->
      <div
        id="ember2813"
        class="ember-view scroll-y noscroll-x fill body scrollbox txn-details-with-menubar"
      >
        <div class="mx-n5 mt-5">
          <!----><!---->
          <div
            class="border rounded-lg m-5 p-4"
            style="border-left-width: 4px !important"
          >
            <!---->
            <!---->
          </div>
        </div>
        <!---->
        <!---->
        <!---->
        <!---->
        <div class="details-page mt-7">
          <!---->
          <!---->
          <!---->
          <div id="ember2818" class="ember-view"><!----></div>
          <!----><!----><!----><!---->
          <!---->
          <div
            class="details-container clearfix"
            style="max-width: 8.27in; margin-left: auto; margin-right: auto"
          >
            <div
              id="ember2820"
              class="tooltip-container ember-view ribbon text-ellipsis"
            >
              <div class="ribbon-inner ribbon-overdue">Overdue<!----></div>
            </div>
            <div id="ember2821" class="ember-view">
              <div class="orgdetails-update-frmtxndetails">
                <div id="ember2822" class="dropdown ember-view btn-group">
                  <button
                    id="ember2823"
                    class="dropdown-toggle ember-view btn btn-primary"
                  >
                    <span class="font-xs">Customize</span>
                  </button>
                  <div
                    id="ember2824"
                    class="dropdown-menu dropdown-menu-right ember-view"
                  >
                    <div
                      class="fltheader"
                      style="text-transform: none; font-size: 13px"
                    >
                      Standard Template
                    </div>
                    <div
                      id="ember2825"
                      class="ember-view dropdown-item cursor-pointer"
                    >
                      <div data-ember-action="" data-ember-action-2826="2826">
                        Change Template
                      </div>
                      <!---->
                    </div>
                    <div
                      class="dropdown-item cursor-pointer"
                      data-ember-action=""
                      data-ember-action-2827="2827"
                    >
                      Edit Template
                    </div>
                    <div class="dropdown-divider"></div>
                    <div
                      class="dropdown-item cursor-pointer"
                      data-ember-action=""
                      data-ember-action-2828="2828"
                    >
                      Update Logo &amp; Address
                    </div>
                    <div
                      class="dropdown-item cursor-pointer"
                      data-ember-action=""
                      data-ember-action-2829="2829"
                    >
                      Manage Custom Fields
                    </div>
                    <div
                      class="dropdown-item cursor-pointer"
                      data-ember-action=""
                      data-ember-action-2830="2830"
                    >
                      Terms &amp; Conditions
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>
            <div id="ember2831" class="ember-view">
              <div class="pcs-template">
                <div class="pcs-template-header pcs-header-content" id="header">
                  <div class="pcs-template-fill-emptydiv"></div>
                </div>

                <div class="pcs-template-body">
                  <table style="width: 100%; table-layout: fixed">
                    <tbody>
                      <tr>
                        <td style="vertical-align: top; width: 50%">
                          <div>
                            <img
                              src="https://books.zoho.com/ZFInvoiceLogo.zbfs?logo_id=a5efb9ef7be8a98e48bf2deb26f7ad42"
                              style="width: 240px; height: 143.8px"
                              id="logo_content"
                            />
                          </div>
                          <span class="pcs-orgname"
                            ><b>BITZ IT Consulting </b></span
                          ><br />
                          <span class="pcs-label">
                            <span
                              style="
                                white-space: pre-wrap;
                                word-wrap: break-word;
                              "
                              id="tmp_org_address"
                              >Trio Center Garden City Thika Road Nairobi
                              Nairobi 00502 Kenya P051896428V</span
                            >
                          </span>
                        </td>
                        <td style="width: 50%" class="text-align-right v-top">
                          <span class="pcs-entity-title">INVOICE</span><br />
                          <span
                            id="tmp_entity_number"
                            style="font-size: 10pt"
                            class="pcs-label"
                            ><b># INV-000514</b></span
                          >

                          <div style="clear: both; margin-top: 20px">
                            <span style="font-size: 8pt"
                              ><b>Balance Due</b></span
                            ><br />
                            <span style="font-size: 12pt"
                              ><b>KES68,401.00</b></span
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    style="
                      clear: both;
                      width: 100%;
                      margin-top: 30px;
                      table-layout: fixed;
                    "
                  >
                    <tbody>
                      <tr>
                        <td
                          style="
                            width: 60%;
                            vertical-align: bottom;
                            word-wrap: break-word;
                          "
                        >
                          <div class="billto-section">
                            <label
                              style="font-size: 10pt"
                              class="pcs-label"
                              id="tmp_billing_address_label"
                              >Bill To</label
                            >
                            <br />
                            <span
                              style="white-space: pre-wrap"
                              id="tmp_billing_address"
                              ><strong
                                ><span
                                  class="pcs-customer-name"
                                  id="zb-pdf-customer-detail"
                                  ><a href="#/contacts/1952913000000243001"
                                    >Childline Kenya</a
                                  ></span
                                ></strong
                              ></span
                            >
                          </div>
                        </td>
                        <td
                          align="right"
                          style="vertical-align: bottom; width: 40%"
                        >
                          <table
                            style="
                              float: right;
                              width: 100%;
                              table-layout: fixed;
                              word-wrap: break-word;
                            "
                            border="0"
                            cellspacing="0"
                            cellpadding="0"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style="
                                    padding: 5px 10px 5px 0px;
                                    font-size: 10pt;
                                  "
                                  class="text-align-right"
                                >
                                  <span class="pcs-label">Invoice Date :</span>
                                </td>
                                <td class="text-align-right">
                                  <span id="tmp_entity_date">25 Aug 2021</span>
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="
                                    padding: 5px 10px 5px 0px;
                                    font-size: 10pt;
                                  "
                                  class="text-align-right"
                                >
                                  <span class="pcs-label">Terms :</span>
                                </td>
                                <td class="text-align-right">
                                  <span id="tmp_payment_terms"
                                    >Due on Receipt</span
                                  >
                                </td>
                              </tr>
                              <tr>
                                <td
                                  style="
                                    padding: 5px 10px 5px 0px;
                                    font-size: 10pt;
                                  "
                                  class="text-align-right"
                                >
                                  <span class="pcs-label">Due Date :</span>
                                </td>
                                <td class="text-align-right">
                                  <span id="tmp_due_date">25 Aug 2021</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    style="width: 100%; margin-top: 20px; table-layout: fixed"
                    class="pcs-itemtable"
                    border="0"
                    cellspacing="0"
                    cellpadding="0"
                  >
                    <thead>
                      <tr style="height: 32px">
                        <td
                          style="
                            padding: 5px 0px 5px 5px;
                            width: 5%;
                            text-align: center;
                          "
                          id=""
                          class="pcs-itemtable-header pcs-itemtable-breakword"
                        >
                          #
                        </td>
                        <td
                          style="
                            padding: 5px 10px 5px 20px;
                            width: ;
                            text-align: left;
                          "
                          id=""
                          class="pcs-itemtable-header pcs-itemtable-breakword"
                        >
                          Item &amp; Description
                        </td>
                        <td
                          style="
                            padding: 5px 10px 5px 5px;
                            width: 11%;
                            text-align: right;
                          "
                          id=""
                          class="pcs-itemtable-header pcs-itemtable-breakword"
                        >
                          Qty
                        </td>
                        <td
                          style="
                            padding: 5px 10px 5px 5px;
                            width: 11%;
                            text-align: right;
                          "
                          id=""
                          class="pcs-itemtable-header pcs-itemtable-breakword"
                        >
                          Rate
                        </td>
                        <td
                          style="
                            padding: 5px 10px 5px 5px;
                            width: 15%;
                            text-align: right;
                          "
                          id=""
                          class="pcs-itemtable-header pcs-itemtable-breakword"
                        >
                          Amount
                        </td>
                      </tr>
                    </thead>
                    <tbody class="itemBody">
                      <tr class="breakrow-inside breakrow-after">
                        <td
                          rowspan="1"
                          valign="top"
                          style="
                            padding: 10px 0 10px 5px;
                            text-align: center;
                            word-wrap: break-word;
                          "
                          class="pcs-item-row"
                        >
                          1
                        </td>
                        <td
                          rowspan="1"
                          valign="top"
                          style="padding: 10px 0px 10px 20px"
                          class="pcs-item-row"
                        >
                          <div>
                            <div>
                              <span
                                style="
                                  white-space: pre-wrap;
                                  word-wrap: break-word;
                                "
                                class="pcs-item-desc"
                                id="tmp_item_description"
                                >Annual Support &amp; Maintenance -
                              </span>
                            </div>
                          </div>
                        </td>

                        <td
                          rowspan="1"
                          class="pcs-item-row lineitem-column text-align-right"
                        >
                          <span id="tmp_item_qty">1.00</span>
                        </td>
                        <td
                          rowspan="1"
                          class="pcs-item-row lineitem-column text-align-right"
                        >
                          <span id="tmp_item_rate">58,966.00</span>
                        </td>
                        <td
                          rowspan="1"
                          class="pcs-item-row lineitem-column lineitem-content-right text-align-right"
                        >
                          <span id="tmp_item_amount">58,966.00</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div style="width: 100%; margin-top: 1px">
                    <div class="v-top total-number-section">
                      <div style="white-space: pre-wrap"></div>
                    </div>
                    <div class="v-top total-section">
                      <table
                        class="pcs-totals"
                        cellspacing="0"
                        border="0"
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td class="total-section-label text-align-right">
                              Sub Total
                            </td>
                            <td
                              id="tmp_subtotal"
                              class="total-section-value text-align-right"
                            >
                              58,966.00
                            </td>
                          </tr>

                          <tr style="height: 10px">
                            <td class="total-section-label text-align-right">
                              VAT 16% (16%)
                            </td>
                            <td class="total-section-value text-align-right">
                              9,434.56
                            </td>
                          </tr>

                          <tr style="height: 10px">
                            <td class="total-section-label text-align-right">
                              Rounding
                            </td>
                            <td class="total-section-value text-align-right">
                              0.44
                            </td>
                          </tr>
                          <tr>
                            <td class="total-section-label text-align-right">
                              <b>Total</b>
                            </td>
                            <td
                              id="tmp_total"
                              class="total-section-value text-align-right"
                            >
                              <b>KES68,401.00</b>
                            </td>
                          </tr>

                          <tr style="height: 40px" class="pcs-balance">
                            <td class="total-section-label text-align-right">
                              <b>Balance Due</b>
                            </td>
                            <td
                              id="tmp_balance_due"
                              class="total-section-value text-align-right"
                            >
                              <b>KES68,401.00</b>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div style="clear: both"></div>
                  </div>

                  <div style="clear: both; margin-top: 50px; width: 100%">
                    <label
                      style="font-size: 10pt"
                      id="tmp_notes_label"
                      class="pcs-label"
                      >Notes</label
                    ><br />
                    <p
                      style="
                        margin-top: 7px;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                      "
                      class="pcs-notes"
                    >
                      Thanks for your business.
                    </p>
                  </div>

                  <div style="clear: both; margin-top: 30px; width: 100%">
                    <label
                      style="font-size: 10pt"
                      id="tmp_terms_label"
                      class="pcs-label"
                      >Terms &amp; Conditions</label
                    ><br />
                    <p
                      style="
                        margin-top: 7px;
                        white-space: pre-wrap;
                        word-wrap: break-word;
                      "
                      class="pcs-terms"
                    >
                      Bank Payment details. Payment to be done in favour of: A/C
                      Name: Bitz IT Consulting Ltd A/C Number: 0170292028328
                      Branch: Donholm Bank: Equity Bank Swift Code: EQBLKENA
                    </p>
                  </div>

                  <div style="page-break-inside: avoid"></div>
                </div>

                <div class="pcs-template-footer">
                  <div></div>
                </div>
              </div>
            </div>
            <!---->
          </div>
          <div class="row"></div>
          <!---->
          <!---->
          <!---->
        </div>
        <!---->
        <!---->
        <!----><!----><!---->
      </div>
    </div>
    <div class="sidebar sidebar-xlg">
      <div class="sidebar-header">
        <div
          class="cursor-pointer"
          data-ember-action=""
          data-ember-action-2843="2843"
        >
          &nbsp;&nbsp; CRM Details
          <small class="close-details">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              x="0"
              y="0"
              viewBox="0 0 512 512"
              xml:space="preserve"
              class="icon icon-sm align-text-top"
            >
              <path
                d="M455.2 9.2L256 208.4 56.8 9.2C44.5-3.1 24.6-3.1 12.2 9.2l-2.9 2.9C-3 24.4-3 44.4 9.3 56.7L208.4 256 9.2 455.2c-12.3 12.3-12.3 32.3 0 44.6l2.9 2.9c12.3 12.3 32.3 12.3 44.6 0L256 303.6l199.2 199.2c12.3 12.3 32.3 12.3 44.6 0l2.9-2.9c12.3-12.3 12.3-32.3 0-44.6L303.6 256 502.8 56.8c12.3-12.3 12.3-32.3 0-44.6l-2.9-2.9c-12.5-12.4-32.4-12.4-44.7-.1z"
              ></path>
            </svg>
          </small>
        </div>
      </div>
      <!---->
    </div>
  </div>
</template>

<script>
export default {
  name: 'pcs-invoice-template',
}
</script>

<style>
@font-face {
  font-family: "WebFont-Open Sans";
  src: local(Open Sans),
    url(https://fonts.gstatic.com/s/opensans/v14/K88pR3goAWT7BTt32Z01m4X0hVgzZQUfRDuZrPvH3D8.woff2);
}

.pcs-template {
  font-family: Open Sans, "WebFont-Open Sans";
  font-size: 9pt;
  color: #333333;
  background: #ffffff;
}

.pcs-header-content {
  font-size: 9pt;
  color: #333333;
  background-color: #ffffff;
}
.pcs-template-body {
  padding: 0 0.4in 0 0.55in;
}
.pcs-template-footer {
  height: 0.7in;
  font-size: 6pt;
  color: #aaaaaa;
  padding: 0 0.4in 0 0.55in;
  background-color: #ffffff;
}
.pcs-footer-content {
  word-wrap: break-word;
  color: #aaaaaa;
  border-top: 1px solid #adadad;
}

.pcs-label {
  color: #333333;
}
.pcs-entity-title {
  font-size: 28pt;
  color: #000000;
}
.pcs-orgname {
  font-size: 10pt;
  color: #333333;
}
.pcs-customer-name {
  font-size: 9pt;
  color: #333333;
}
.pcs-eori-number {
  color: #333;
  margin: 0;
  padding-top: 10px;
}
.pcs-itemtable-header {
  font-size: 9pt;
  color: #ffffff;
  background-color: #3c3d3a;
}
.pcs-itemtable-breakword {
  word-wrap: break-word;
}
.pcs-taxtable-header {
  font-size: 9pt;
  color: #ffffff;
  background-color: #3c3d3a;
}
.breakrow-inside {
  page-break-inside: avoid;
}
.breakrow-after {
  page-break-after: auto;
}
.pcs-item-row {
  font-size: 9pt;
  border-bottom: 1px solid #adadad;
  background-color: #ffffff;
  color: #000000;
}
.pcs-item-sku {
  margin-top: 2px;
  font-size: 10px;
  color: #444444;
}
.pcs-item-desc {
  color: #727272;
  font-size: 9pt;
}
.pcs-balance {
  background-color: #f5f4f3;
  font-size: 9pt;
  color: #000000;
}
.pcs-savings {
  text-transform: uppercase;
  font-size: 0pt;
  color: ;
  background-color: ;
}
.pcs-totals {
  font-size: 9pt;
  color: #000000;
  background-color: #ffffff;
}
.pcs-notes {
  font-size: 8pt;
}
.pcs-terms {
  font-size: 8pt;
}
.pcs-header-first {
  background-color: #ffffff;
  font-size: 9pt;
  color: #333333;
  height: auto;
}

.pcs-status {
  color: ;
  font-size: 15pt;
  border: 3px solid;
  padding: 3px 8px;
}
.billto-section {
  padding-top: 0mm;
  padding-left: 0mm;
}
.shipto-section {
  padding-top: 0mm;
  padding-left: 0mm;
}

@page :first {
  @top-center {
    content: element(header);
  }
  margin-top: 0.7in;
}

.pcs-template-header {
  padding: 0 0.4in 0 0.55in;
  height: 0.7in;
}

.pcs-template-fill-emptydiv {
  display: table-cell;
  content: " ";
  width: 100%;
}

/* Additional styles for RTL compat */

/* Helper Classes */

.inline {
  display: inline-block;
}
.v-top {
  vertical-align: top;
}
.text-align-right {
  text-align: right;
}
.rtl .text-align-right {
  text-align: left;
}
.text-align-left {
  text-align: left;
}
.rtl .text-align-left {
  text-align: right;
}
.float-section-right {
  float: right;
}
.rtl .float-section-right {
  float: left;
}
.float-section-left {
  float: left;
}
.rtl .float-section-left {
  float: right;
}

/* Helper Classes End */

.item-details-inline {
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
  max-width: 70%;
}

.total-in-words-container {
  width: 100%;
  margin-top: 10px;
}
.total-in-words-label {
  vertical-align: top;
  padding: 0 10px;
}
.total-in-words-value {
  width: 170px;
}
.total-section-label {
  padding: 5px 10px 5px 0;
  vertical-align: middle;
}
.total-section-value {
  width: 120px;
  vertical-align: middle;
  padding: 10px 10px 10px 5px;
}
.rtl .total-section-value {
  padding: 10px 5px 10px 10px;
}

.tax-summary-description {
  color: #727272;
  font-size: 8pt;
}

.bharatqr-bg {
  background-color: #f4f3f8;
}

/* Overrides/Patches for RTL compat */
.rtl th {
  text-align: inherit; /* Specifically setting th as inherit for supporting RTL */
}
/* Overrides/Patches End */

/* Subject field styles */
.subject-block {
  margin-top: 20px;
}
.subject-block-value {
  word-wrap: break-word;
  white-space: pre-wrap;
  line-height: 14pt;
  margin-top: 5px;
}
/* Subject field styles End*/

.lineitem-header {
  padding: 5px 10px 5px 5px;
  word-wrap: break-word;
}
.rtl .lineitem-header {
  padding: 5px 5px 5px 10px;
}
.lineitem-column {
  padding: 10px 10px 5px 10px;
  word-wrap: break-word;
  vertical-align: top;
}
.lineitem-content-right {
  padding: 10px 10px 10px 5px;
}
.rtl .lineitem-content-right {
  padding: 10px 5px 10px 10px;
}
.total-number-section {
  width: 45%;
  padding: 10px 10px 3px 3px;
  font-size: 9pt;
  float: left;
}
.rtl .total-number-section {
  float: right;
}
.total-section {
  width: 50%;
  float: right;
}
.rtl .total-section {
  float: left;
}
</style>
