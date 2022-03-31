@
<template>
  <div class="row">
    <div class="col-2">
      <financeNav></financeNav>
    </div>

    <div class="col-10">
      <div class="row">
        <div class="card">
          <div class="card-header">
            <div class="form-group row">
              <div class="col-form-label col-lg-2">Get Started </div>
              <div class="col-lg-10">
                <div class="row">
                  <div class="text-center col-lg-3">
                    <div class="imgDIV">
                      <button class="btn btn-success" @click="getstarted">Load Inital Data </button>
                    </div>
                  </div>
                  <div class="col-lg-5 font-xs">
                    <div class="text-muted">
                      This logo will appear on transactions and email
                      notifications.
                    </div>
                    <small class="form-text"
                      >Preferred Image Size: 240px x 240px @ 72 DPI Maximum size
                      of 1MB.</small
                    >
                    <a
                      class="d-block"
                      href="#"
                      data-ember-action=""
                      data-ember-action-1043="1043"
                      >Remove Logo</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-lg-2">Your Logo</div>
              <div class="col-lg-10">
                <div class="row">
                  <div class="text-center col-lg-3">
                    <div class="imgDIV">
                      <img
                        class="logo-display img-fluid"
                        src="/InvoiceLogo.zbfs"
                        title="Your organization's logo"
                      />
                    </div>
                  </div>
                  <div class="col-lg-5 font-xs">
                    <div class="text-muted">
                      This logo will appear on transactions and email
                      notifications.
                    </div>
                    <small class="form-text"
                      >Preferred Image Size: 240px x 240px @ 72 DPI Maximum size
                      of 1MB.</small
                    >
                    <a
                      class="d-block"
                      href="#"
                      data-ember-action=""
                      data-ember-action-1043="1043"
                      >Remove Logo</a
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-lg-2 required">
                Organization Name
              </div>
              <div class="col-lg-4">
                <input
                  id="ember1044"
                  class="ember-text-field ember-view form-control"
                  type="text"
                  v-model="currentorg.organization_name"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-lg-2 required">
                <span
                  id="ember1045"
                  class="tooltip-container text-dashed-underline ember-view"
                >
                  Industry
                </span>
              </div>
              <div class="col-lg-4">
                <div id="ember1046" class="type-ahead ember-view">
                  <div
                    id="ember1047"
                    class="dropdown show ac-dropdown ember-view"
                  >
                    <div class="auto-select ac-selected" tabindex="-1">
                      <input
                        autocomplete="off"
                        spellcheck="false"
                        placeholder=""
                        autocorrect="off"
                        autocapitalize="off"
                        id="ember1048"
                        class="ember-text-field form-control ac-search-txt ember-view"
                        type="text"
                        v-model="currentorg.industry"
                      />
                      
                    </div>
                    <!---->
                  </div>
                </div>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-lg-2 required">
                Business Location
              </div>
              <div class="col-lg-4">
                <div id="ember1049" class="ember-view">
                  <div class="ac-box">
                    <span class="ac-selected form-control" tabindex="0">
                      <span data-integrity-label="">{{
                        currentorg.business_location
                      }}</span
                      ><!---->
                      <div>
                        
                      </div>
                    </span>
                  </div>

                  <!---->
                </div>
              </div>
            </div>

            <div class="form-group row">
              <div class="col-form-label col-lg-2">
                <span
                  id="ember1050"
                  class="tooltip-container text-dashed-underline ember-view"
                >
                  Company Address
                </span>
              </div>
              <div class="col-lg-8">
                <input
                  placeholder="Street 1"
                  id="ember1051"
                  class="ember-text-field ember-view form-control"
                  type="text"
                  v-model="currentorg.business_address"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-lg-8 offset-lg-2">
                <input
                  placeholder="Street 2"
                  id="ember1052"
                  class="ember-text-field ember-view form-control"
                  type="text"
                  v-model="currentorg.Postal_address"
                />
              </div>
            </div>

            <div class="form-group row">
              <div class="col-lg-8 offset-lg-2">
                <input
                  placeholder="Street 2"
                  id="ember1052"
                  class="ember-text-field ember-view form-control"
                  type="text"
                />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-lg-8 offset-lg-2">
                <div class="row">
                  <div class="col-lg-4">
                    <input
                      placeholder="Phone"
                      id="ember1058"
                      class="ember-text-field ember-view form-control"
                      type="text"
                    />
                  </div>
                  <div class="col-lg-4">
                    <input
                      placeholder="Fax"
                      id="ember1059"
                      class="ember-text-field ember-view form-control"
                      type="text"
                    />
                  </div>
                  <div class="col-lg-4">
                    <input
                      placeholder="Website"
                      id="ember1060"
                      class="ember-text-field ember-view form-control"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="form-group seperator-col row">
              <label class="col-lg-2 col-form-label">Primary Contact</label>
              <div class="col-lg-3 coll">
                <p class="font-xs text-muted text-uppercase">Sender</p>
                <label class="font-medium mb-0"><b>accounts </b></label>
                <div class="font-small mb-0">{{ currentorg.admin_email }}</div>
              </div>
              <div class="col-lg-5 coll">
                <p class="font-xs text-muted text-uppercase">
                  Emails Are Sent Through
                </p>
                <label class="font-medium mb-0"
                  ><b
                    >Email address of {{ currentorg.organization_name }}</b
                  ></label
                >
                <div class="font-small">
                  {{ currentorg.company_email }}
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="offset-lg-2 col-lg-6 preference mb-3 font-small">
                <div class="gmail-ms-integ-note py-5 pl-0">
                  <div class="row"></div>
                  <div class="clearfix"></div>
                </div>
              </div>
            </div>
            <div class="form-group row">
              <div class="offset-lg-2 col-lg-6 preference mb-3 font-small">
                <div class="gmail-ms-integ-note py-5 pl-0">
                  <!-- <div class="row">
										<div class="col-lg-1 ml-3">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												viewBox="0 0 512 512"
												class="icon icon-md align-text-bottom fill-orange"
											>
												<path
													d="M437.2 74.8C388.8 26.4 324.4-.2 256-.2c-68.4 0-132.8 26.7-181.2 75.1C26.4 123.2-.2 187.6-.2 256c0 68.4 26.7 132.8 75.1 181.2 48.4 48.4 112.7 75.1 181.2 75.1 68.4 0 132.8-26.7 181.2-75.1s75.1-112.7 75.1-181.2c-.2-68.4-26.8-132.8-75.2-181.2z"
												></path>
												<path
													fill="#FFF"
													d="M256.5 348.9c-17.7 0-32 14.1-32 31.6s14.3 31.6 32 31.6 32-14.2 32-31.6c.1-17.4-14.3-31.6-32-31.6zm-.8-246.2c-25.8 0-45.7 22.6-42.5 47.9 2.7 20.9 22.5 125.3 29.2 159.9 1.3 6.5 7 12.3 13.7 12.3h.3c6.5 0 12.1-5.7 13.3-12 6.5-34.1 26.5-138.9 29.1-160.2 3.3-25.6-17-47.9-43.1-47.9z"
												></path>
											</svg>
										</div>
										<div class="col-lg-11" style="margin-left: -18px;">
											Your primary contact's email address belongs to an
											unauthenticated domain. So, emails will be sent from
											<b>message-service@sender.zohobooks.com</b> to prevent
											them from landing in the Spam folder. Authenticate the
											domain to send emails from your primary contact's email
											address.
											<a
												href="#"
												data-ember-action=""
												data-ember-action-1061="1061"
												>&nbsp;Authenticate Now</a
											>
										</div>
									</div> -->
                  <!-- <div class="clearfix"></div> -->
                </div>
              </div>
              <!-- <div class="offset-lg-2 col-lg-6">
								<a href="#" data-ember-action="" data-ember-action-1062="1062"
									><b>Configure Email Preferences</b>&nbsp;<svg
										xmlns="http://www.w3.org/2000/svg"
										version="1.1"
										id="Layer_1"
										x="0"
										y="0"
										viewBox="0 0 512 512"
										xml:space="preserve"
										class="icon icon-sm icon-trigger"
									>
										<path
											d="M485.8 230.6L326.7 71.5c-6.9-6.9-16.1-10.7-25.8-10.7s-18.9 3.8-25.8 10.7c-6.9 6.9-10.7 16.1-10.7 25.8s3.8 18.9 10.7 25.8l96.8 96.8H46c-20.1 0-36.5 16.4-36.5 36.5s16.4 36.5 36.5 36.5h325.8L275 389.6c-6.9 6.9-10.7 16.1-10.7 25.8s3.8 18.9 10.7 25.8c6.9 6.9 16.1 10.7 25.8 10.7 9.8 0 19-3.8 25.8-10.7l159.1-159c6.9-6.9 10.7-16.1 10.7-25.8s-3.7-19-10.6-25.8z"
										></path></svg
								></a>
							</div> -->
            </div>
            <div id="reg-settings" class="highlight-section">
              <div class="form-group row">
                <div class="col-form-label col-lg-2">Fiscal Year</div>
                <div class="col-lg-4">
                  <div id="ember1066" class="ember-view">
                    <div class="ac-box">
                      <span class="ac-selected form-control" tabindex="0">
                        <span data-integrity-label="">January - December</span
                        ><!---->
                        <div>
                          
                        </div>
                      </span>
                    </div>

                    <!---->
                  </div>
                </div>
                <div class="col-lg-1" style="padding-top: 5px">Start Date</div>
                <div class="col-lg-1">
                  <div id="ember1067" class="ember-view">
                    <div class="ac-box">
                      <span class="ac-selected form-control" tabindex="0">
                        <span data-integrity-label="">1</span
                        ><!---->
                        <div>
                          
                        </div>
                      </span>
                    </div>

                    <!---->
                  </div>
                </div>
                <span class="form-text col-lg-8 offset-lg-2">
                  Period: 1 January - 31 December
                </span>
              </div>
              <div class="form-group row">
                <label class="col-form-label col-lg-2">Report Basis</label>
                <div class="col-lg-8">
                  <div class="form-check">
                    <input
                      name="Tax Basis"
                      id="a458b8521"
                      class="ember-view form-check-input"
                      type="radio"
                      value="accrual"
                    />
                    <label class="form-check-label" for="a458b8521"
                      >Accrual
                      <span class="muted"
                        >(you owe tax as of invoice date)</span
                      ></label
                    >
                  </div>
                  <div class="form-check">
                    <input
                      name="Tax Basis"
                      id="a13139ee8"
                      class="ember-view form-check-input"
                      type="radio"
                      value="cash"
                    />
                    <label class="form-check-label" for="a13139ee8"
                      >Cash
                      <span class="muted"
                        >(you owe tax upon payment receipt)</span
                      ></label
                    >
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-form-label col-lg-2">Language</div>
                <div class="col-lg-4">
                  <div id="ember1070" class="ember-view">
                    <div class="ac-box">
                      <span class="ac-selected form-control" tabindex="0">
                        <span data-integrity-label="">English</span
                        ><!---->
                        <div>
                          <i class="zf-ac-toggler">
                            
                          </i>
                        </div>
                      </span>
                    </div>

                    <!---->
                  </div>
                </div>
              </div>
              <!---->
              <div class="form-group row">
                <div class="col-form-label col-lg-2">Time Zone</div>
                <div class="col-lg-4">
                  <div id="ember1071" class="ember-view">
                    <div class="ac-box">
                      <span class="ac-selected form-control" tabindex="0">
                        <span data-integrity-label=""
                          >(GMT 3:00) Eastern African Time
                          (Africa/Nairobi)</span
                        ><!---->
                        <div>
                          
                        </div>
                      </span>
                    </div>

                    <!---->
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-form-label col-lg-2">Date Format</div>
                <div class="col-lg-4">
                  <div id="ember1072" class="ember-view">
                    <div class="ac-box">
                      <span class="ac-selected form-control" tabindex="0">
                        <span data-integrity-label=""
                          >dd MMM yyyy [ 06 Nov 2021 ]</span
                        ><!---->
                        
                      </span>
                    </div>

                    <!---->
                  </div>
                </div>
                <div class="col-lg-1"><!----></div>
              </div>
              <br /><br />
              <div class="form-group row cb">
                <div class="float-left col-lg-6">
                  <div class="form-group row">
                    <div class="col-form-label col-lg-4">Company ID</div>
                    <div class="col-lg-8">
                      <div class="row">
                        <div class="col-lg-5">
                          <div id="ember1073" class="type-ahead ember-view">
                            <div
                              id="ember1074"
                              class="dropdown show ac-dropdown ember-view"
                            >
                              <div
                                class="auto-select ac-selected"
                                tabindex="-1"
                              >
                                <input
                                  autocomplete="off"
                                  spellcheck="false"
                                  placeholder=""
                                  autocorrect="off"
                                  autocapitalize="off"
                                  id="ember1075"
                                  class="ember-text-field form-control ac-search-txt ember-view"
                                  type="text"
                                  v-model="currentorg.Business_registration_no"
                                />
                                
                              </div>
                              <!---->
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <input
                            id="ember1076"
                            class="ember-text-field ember-view form-control"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="form-group row">
                    <div class="col-form-label col-lg-4">Tax ID</div>
                    <div class="col-lg-8">
                      <div class="row">
                        <div class="col-lg-5">
                          <div id="ember1077" class="type-ahead ember-view">
                            <div
                              id="ember1078"
                              class="dropdown show ac-dropdown ember-view"
                            >
                              <div
                                class="auto-select ac-selected"
                                tabindex="-1"
                              >
                                <input
                                  autocomplete="off"
                                  spellcheck="false"
                                  placeholder=""
                                  autocorrect="off"
                                  autocapitalize="off"
                                  id="ember1079"
                                  class="ember-text-field form-control ac-search-txt ember-view"
                                  type="text"
                                  v-model="currentorg.tax_id"
                                />
                               
                              </div>
                              <!---->
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-7">
                          <input
                            id="ember1080"
                            class="ember-text-field ember-view form-control"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="well well-sm col-lg-4 well-flat"
                  style="margin-left: 10"
                >
                  <!-- <span class="text-muted"
										>You can have Company ID, Tax ID and Additional Fields show
										up on your PDF by inserting the required placeholders in
										your 'Address Format' under</span
									>
									<a
										href="#"
										data-ember-action=""
										data-ember-action-1081="1081"
									>
										Settings -&gt; Preferences -&gt; General</a
									> -->
                </div>
              </div>
              <!-- <div class="form-group row">
								<label class="col-form-label col-lg-2">
									Additional Fields<br
								/></label>
								<div class="col-lg-8">
									<div class="row form-group w-50">
										<div class="col-lg-5">
											<input
												placeholder="Label"
												id="ember1083"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
										<div class="col-lg-7">
											<input
												placeholder="Value"
												id="ember1084"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
									</div>
									<div class="row form-group w-50">
										<div class="col-lg-5">
											<input
												placeholder="Label"
												id="ember1086"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
										<div class="col-lg-7">
											<input
												placeholder="Value"
												id="ember1087"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
									</div>
									<div class="row form-group w-50">
										<div class="col-lg-5">
											<input
												placeholder="Label"
												id="ember1089"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
										<div class="col-lg-7">
											<input
												placeholder="Value"
												id="ember1090"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
									</div>
								</div>
							</div> -->
              <!-- <div class="form-group row">
								<div class="col-lg-8 offset-lg-2">
									<a href="#" data-ember-action="" data-ember-action-1091="1091"
										>Add Additional Field</a
									>
								</div>
							</div> -->
              <hr />
              <div class="form-group row">
                <div class="col-lg-2">&nbsp;</div>
                <div class="col-lg-2">
                  <button
                    id="ember1092"
                    class="btn btn-primary ember-view"
                    type="submit"
                  >
                    <!---->
                    Save
                  </button>
                  {{ this.user_id }} {{ this.path }}
                </div>
                <div class="col-lg-6 text-right">
                  <a
                    href="https://thinkiqbs.com/privacy"
                    target="_blank"
                    rel="noreferrer noopener"
                    style="text-decoration: underline; color: #5c5c5c"
                  >
                    Privacy Policy
                  </a>
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
import axios from "axios";
import financeNav from "@/components/SysAdminNav";

export default {
  name: "CustomizeOrg",
  components: {
    financeNav,
  },
  data() {
    return {
      pathid: "",
      loading: false,
      currentorg: {},
      organizations: [],
      updateorganization: [
        {
          id: "",
          saving_type: "",
          saving_description: "",
          minimum_contribution: "",
          interest_rate: "",
          interest_calc_mode: "",
          maximum_saving_term: "",
        },
      ],
    };
  },

  mounted() {
    axios
      .get("/sys_config/api/v1/OrganizationProfile/", {
        params: {
          admin_id: this.user_id,
        },
      })
      .then((response) => {
        this.organizations = response.data.results;
        this.currentorg = this.organizations[0];
        this.pathid = this.organizations[0].id;
        this.updateorganization = this.currentorg;
      });
  },

  computed: {
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

    path() {
      const p = "/sys_config/api/v1/OrganizationProfile/";
      return p + this.pathid + "/";
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
  },

  created() {
    this.getorg();
  },

  methods: {

    getstarted(){

      this.loadcoa();

    },
    loadcoa(){

      console.log("working")

    },
    getorg(organization) {
      this.loading = true;
      axios
        .get(this.path)
        .then((res) => {
          this.currentorg = res.data;
          this.loading = false;
          this.organizations = organization;
        })
        .catch((error) => {
          console.error(error);
        });
    },
    change(item) {
      // let random = Math.random();
      // item.label = random;

      console.log(item);
      this.loanstype = item;
      // console.log(this.loanstype.loan_type);
    },

    updateorg(item) {
      this.loading = true;
      axios
        .put(this.path, item)
        .then(() => {
          this.loading = false;
          this.getorg();
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style></style>
