@
<template>
  <div class="container-w-responsive row">
    <div class="row mt-5">
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <form id="createorg" @submit.prevent="createorg">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Sacco or MFI name"
                  data-sb-validations="required"
                  v-model="org1.name"
                />
                <label for="name">Organization Name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="Registration-Number"
                  type="text"
                  placeholder="PVT-XXXXXXXX"
                  data-sb-validations="required"
                  v-model="org1.Business_registration_no"
                />
                <label for="name">Company Registration Number</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Company Registration Number is required.
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="Tax_PIN_Number"
                  type="text"
                  placeholder="Tax Authority Number"
                  data-sb-validations="required"
                  v-model="org1.tax_id"
                />
                <label for="name">TAX/PIN NO</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  TAX/PIN NO is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="input-address"
                  type="text"
                  placeholder="Address"
                  data-sb-validations="required"
                  v-model="org1.business_address"
                />
                <label for="name">Address</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Address is required.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                  v-model="this.email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="row">
                <div class="col form-floating mb-3">
                  <input
                    type="text"
                    id="input-city"
                    class="form-control"
                    placeholder="City"
                    v-model="org1.business_city"
                  />
                  <label for="input-city">Business City</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Address is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <input
                    type="text"
                    id="input-country"
                    class="form-control"
                    placeholder="Country"
                    v-model="org1.business_location"
                  />
                  <label for="input-country">Country</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Country is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <input
                    type="number"
                    id="input-postal-code"
                    class="form-control"
                    placeholder="Postal code"
                    v-model="org1.Postal_address"
                  />
                  <label class="form-control-label" for="input-country"
                    >Postal code</label
                  >
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Postal Code is required.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col form-floating mb-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="Entity-Type"
                    v-model="org1.deposittaking"
                  />
                  <label for="Entity-Type">Check if deposit Taking</label>
                </div>
                <div class="col form-floating mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="org1.industry"
                  >
                    <option selected>Financial</option>
                    <option>Manufacturing</option>
                    <option>Telecomunication</option>
                    <option>Banking</option>
                    <option>Retail</option>
                    <option>Education</option>
                    <option>Security</option>
                  </select>
                  <label class="form-control-label" for="input-country"
                    >Industry</label
                  >
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Industry is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <select
                    id="industry1"
                    class="form-select"
                    v-model="org1.base_currency"
                  >
                    <option selected>Select Currency...</option>
                    <option>KES</option>
                    <option>UGX</option>
                    <option>RWF</option>
                    <option>TZS</option>
                    <option>ETB</option>
                  </select>
                  <label class="form-control-label" for="input-country"
                    >Currency
                  </label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Address is required.
                  </div>
                </div>
              </div>
              <!-- Phone number input-->
              <!-- <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div> -->
              <!-- Message input-->
              <!-- <div class="col-lg-5 font-xs">
                <div class="text-muted">
                  This logo will appear on transactions and email notifications.
                </div>
                <input type="file" @change="onfileSelected" />
                <button class="btn btn-success" @click="uploadLogo">
                  Upload Logo
                </button>
                {{ this.logo }}
                <small class="form-text"
                  >Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of
                  1MB.</small
                >
                <a
                  class="d-block"
                  href="#"
                  data-ember-action=""
                  data-ember-action-1043="1043"
                  >Remove Logo</a
                >
              </div> -->
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  To activate this form, sign up at
                  <br />
                  <a href="https://startbootstrap.com/solution/contact-forms"
                    >https://startbootstrap.com/solution/contact-forms</a
                  >
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button
                  class="btn btn-primary rounded-pill btn-lg"
                  id="submitButton"
                  type="submit"
                  @click="createorg"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-sm-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Company Informations Details</h5>
            <form id="createorgnization" v-if="this.orglenght!= 0">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="name"
                  type="text"
                  placeholder="Sacco or MFI name"
                  data-sb-validations="required"
                  v-model="this.org.name"
                  disabled="True"
                />
                <label for="name">Organization Name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  A name is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="Registration-Number"
                  type="text"
                  placeholder="PVT-XXXXXXXX"
                  data-sb-validations="required"
                  v-model="org.Business_registration_no"
                  disabled="True"
                />
                <label for="name">Company Registration Number</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Company Registration Number is required.
                </div>
              </div>

              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="Tax_PIN_Number"
                  type="text"
                  placeholder="Tax Authority Number"
                  data-sb-validations="required"
                  v-model="org.tax_id"
                  disabled="True"
                />
                <label for="name">TAX/PIN NO</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  TAX/PIN NO is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="input-address"
                  type="text"
                  placeholder="Address"
                  data-sb-validations="required"
                  v-model="org.business_address"
                  disabled="True"
                />
                <label for="name">Address</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Address is required.
                </div>
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  data-sb-validations="required,email"
                  v-model="this.email"
                  disabled="True"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <div class="row">
                <div class="col form-floating mb-3">
                  <input
                    type="text"
                    id="input-city"
                    class="form-control"
                    placeholder="City"
                    v-model="org.business_city"
                    disabled="True"
                  />
                  <label for="input-city">Business City</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Address is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <input
                    type="text"
                    id="input-country"
                    class="form-control"
                    placeholder="Country"
                    v-model="org.business_location"
                    disabled="True"
                  />
                  <label for="input-country">Country</label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Country is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <input
                    type="number"
                    id="input-postal-code"
                    class="form-control"
                    placeholder="Postal code"
                    v-model="org.Postal_address"
                    disabled="True"
                  />
                  <label class="form-control-label" for="input-country"
                    >Postal code</label
                  >
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Postal Code is required.
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col form-floating mb-3">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="Entity-Type"
                    v-model="org.deposittaking"
                    disabled="True"
                  />
                  <label for="Entity-Type">Check if deposit Taking</label>
                </div>
                <div class="col form-floating mb-3">
                  <select
                    class="form-select"
                    aria-label="Default select example"
                    v-model="org.industry"
                    disabled="True"
                  >
                    <option selected>Financial</option>
                    <option>Manufacturing</option>
                    <option>Telecomunication</option>
                    <option>Banking</option>
                    <option>Retail</option>
                    <option>Education</option>
                    <option>Security</option>
                  </select>
                  <label class="form-control-label" for="input-country"
                    >Industry</label
                  >
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Industry is required.
                  </div>
                </div>
                <div class="col form-floating mb-3">
                  <select
                    id="industry1"
                    class="form-select"
                    v-model="org.base_currency"
                    disabled="True"
                  >
                    <option selected>Select Currency...</option>
                    <option>KES</option>
                    <option>UGX</option>
                    <option>RWF</option>
                    <option>TZS</option>
                    <option>ETB</option>
                  </select>
                  <label class="form-control-label" for="input-country"
                    >Currency
                  </label>
                  <div
                    class="invalid-feedback"
                    data-sb-feedback="name:required"
                  >
                    Address is required.
                  </div>
                </div>
              </div>
              <!-- Phone number input-->
              <!-- <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div> -->
              <!-- Message input-->
              <div class="font-xs">
                <div class="text-muted">
                  This logo will appear on transactions and email notifications.
                </div>
                <input type="file" @change="onfileSelected" />
                <button class="btn btn-success" @click="uploadLogo">
                  Upload Logo
                </button>
                {{ this.logo }}
                <small class="form-text"
                  >Preferred Image Size: 240px x 240px @ 72 DPI Maximum size of
                  1MB.</small
                >
                <a
                  class="d-block"
                  href="#"
                  data-ember-action=""
                  data-ember-action-1043="1043"
                  >Remove Logo</a
                >
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
                  <div class="text-muted">
                    Thank you for your submission. We will be in touch soon.
                  </div>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">
                  Error sending message!
                </div>
              </div>
              <!-- Submit Button-->
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!--  -->
</template>

<script>
import { getAPI } from "@/axios-api.js";

import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "CreateOrg",

  data() {
    return {
      checkedNames: [],
      logo: "",

      org1: {
        name: "",
        business_name: "",
        business_city: "",
        business_address: "",
        business_location: "",
        Business_registration_no: "",
        tax_id: "",
        entity_type: "",
        industry: "",
        base_currency: "",
        image: null,
      },
    };
  },
  methods: {
    ...mapActions(["fetchMembers", "fetchOrg", "fetchUserinfo"]),
    gohome() {
      this.$router.push("/");
    },
    onfileSelected(e) {
      this.selectedFile = e.target.files[0];
    },

    

    uploadLogo() {
      var xid = this.companyid3;
      const formData = new FormData();
      formData.append("logo", this.selectedFile, this.selectedFile.name);
      formData.append("company_id", xid);

      getAPI.post("/sys_config/api/v1/logoFile/", formData).then((response) => {
        console.log(response);
        console.log("companyid", xid);
      });
    },

    getstarted() {
      this.loadcoa();
    },

    loadcoa() {
      let payload = {
        product_id_list: ["pid1234", "pid1235"],
      };

      getAPI({
        url: "https://test.com/api/get_product",
        method: "post",
        data: payload,
      })
        .then(function (response) {
          // your action after success
          console.log(response);
        })
        .catch(function (error) {
          // your action on error success
          console.log(error);
        });
    },

    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) return;
      this.createImage(files[0]);
    },
    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage() {
      this.image = null;
    },

    createorg() {
      getAPI
        .post(`/sys_config/api/v1/OrganizationProfile/`, {
          // names: '',
          admin_id: this.user_id,
          admin_email: this.email,
          organization_name: this.org1.name,
          industry: this.org1.industry,
          business_location: this.org1.business_location,
          business_address: this.org1.business_address,
          Postal_address: this.org1.Postal_address,
          company_email: this.email,
          business_city: this.org1.business_city,
          base_currency: this.org1.base_currency,
          fiscal_year: this.org1.fiscal_year,
          reporting_basis: this.org1.reporting_basis,
          time_zone: this.org1.time_zone,
          date_format: this.org1.date_format,
          company_id: "",
          Business_registration_no: this.org1.Business_registration_no,
          tax_id: this.org1.tax_id,
          logo: this.org1.logo,
          deposittaking: this.org1.deposittaking,
          entity_type: this.org1.entity_type,
        })
        .then((response) => {
          response;
          this.$swal("success");
          // this.$router.push("/members");
          window.location.reload();
          window.location.replace("/members");
        })
        .catch((e) => {
          this.errors.push(e);
          console.log(this.notes);
        });
    },
  },
  computed: {
    ...mapState(["user_id", "email"]),
    ...mapGetters(["allOrg"]),

    user_id() {
      return this.$store.state.id;
    },

    token() {
      return this.$store.state.accessToken;
    },
    email() {
      return this.$store.state.email;
    },
    first_name() {
      return this.$store.state.first_name;
    },
    last_name() {
      return this.$store.state.last_name;
    },
    orglenght(){
      return this.allOrg.length;
    },
    org(){

      return this.allorg[0]

    },
    allorg() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      );
    },
  },
  mounted() {
    this.orginfo();
    this.fetchMembers();
    this.fetchOrg();
    this.fetchUserinfo();
  },
  created() {
    // this.countadmin();

    this.fetchOrg();
  },
};
</script>

<style></style>
