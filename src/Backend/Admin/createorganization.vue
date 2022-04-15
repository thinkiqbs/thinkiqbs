@
<template>
  <div class="container-w-responsive row">
    <form>
      <hr class="horizontal dark my-4" />
      <!-- Address -->
      <h6 class="heading-large text-muted mb-4">Organization information</h6>
      <div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-city"
                >Organization Name
              </label>
              <input
                type="text"
                id="Organization_Name"
                class="form-control"
                placeholder="Sacco or MFI name"
                v-model="org.name"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >Company Registration Number</label
              >
              <input
                type="text"
                id="Registration-Number"
                class="form-control"
                placeholder="PVT-XXXXXXXX"
                v-model="org.Business_registration_no"
                autocomplete="off"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >TAX/PIN NO</label
              >
              <input
                type="text"
                id="Tax_PIN_Number"
                class="form-control"
                placeholder="Tax Authority Number"
                v-model="org.tax_id"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="form-group">
              <label class="form-control-label" for="input-address"
                >Address</label
              >
              <input
                id="input-address"
                class="form-control"
                placeholder=" Address"
                type="text"
                v-model="org.business_address"
              />
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-city"
                >Business City</label
              >
              <input
                type="text"
                id="input-city"
                class="form-control"
                placeholder="City"
                v-model="org.business_city"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >Country</label
              >
              <input
                type="text"
                id="input-country"
                class="form-control"
                placeholder="Country"
                v-model="org.business_location"
              />
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >Postal code</label
              >
              <input
                type="number"
                id="input-postal-code"
                class="form-control"
                placeholder="Postal code"
                v-model="org.Postal_address"
              />
            </div>
          </div>
        </div>
      </div>
      <hr class="horizontal dark my-4" />
      <h6 class="heading-small text-muted mb-4">Other Details</h6>

      <div>
        <div class="row">
          <div class="col-lg-4">
            <div class="form-check">
              <input
                type="checkbox"
                class="form-check-input"
                id="Entity-Type"
                v-model="org.deposittaking"
              />
              <label for="Entity-Type">Are you a deposit Taking Sacco </label>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >Industry</label
              >
              <select
                class="form-select"
                aria-label="Default select example"
                v-model="org.industry"
              >
                <option selected>Financial</option>
                <option>Manufacturing</option>
                <option>Telecomunication</option>
                <option>Banking</option>
                <option>Retail</option>
                <option>Education</option>
                <option>Security</option>
              </select>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="form-group">
              <label class="form-control-label" for="input-country"
                >Currency
              </label>
              <select
                id="industry1"
                class="form-select"
                v-model="org.base_currency"
              >
                <option selected>Select Currency...</option>
                <option>KES</option>
                <option>UGX</option>
                <option>RWF</option>
                <option>TZS</option>
                <option>ETB</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div id="app">
        <div v-if="!image">
          <h4>Upload Organization Logo</h4>
          <input type="file" @change="onFileChange" />
        </div>
        <div v-else>
          <img :src="image" />
          <button @click="removeImage">Remove image</button>
        </div>
      </div>
      <!-- Description -->
      <h6 class="heading-small text-muted mb-4">Website Information</h6>

      <div class="form-group">
        <label class="form-control-label">About The Organization</label>
        <textarea
          rows="4"
          class="form-control"
          placeholder="A few words about you ..."
          data-gramm="false"
          wt-ignore-input="true"
          disabled
        ></textarea>
      </div>

      <div class="form-group">
        <label class="form-control-label">Vision</label>
        <textarea
          rows="4"
          class="form-control"
          placeholder="A few words about you ..."
          data-gramm="false"
          wt-ignore-input="true"
          disabled
        ></textarea>
      </div>
      <div class="form-group">
        <label class="form-control-label">Mission</label>
        <textarea
          rows="4"
          class="form-control"
          placeholder="A few words about you ..."
          data-gramm="false"
          wt-ignore-input="true"
          disabled
        ></textarea>
      </div>
    </form>
  </div>

  <div class="col-2"></div>

  <!--  -->
  <div class="row">
    <div class="modal-footer">
      <button
        type="button"
        @click="gohome"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
      >
        Close
      </button>
      <button type="button" class="btn btn-primary" @click="createorg">
        Create Organization
      </button>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios-api.js";

import { mapGetters, mapActions, mapState } from "vuex";

export default {
  name: "CreateOrg",

  data() {
    return {
      checkedNames: [],

      org: {
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
          organization_name: this.org.name,
          industry: this.org.industry,
          business_location: this.org.business_location,
          business_address: this.org.business_address,
          Postal_address: this.org.Postal_address,
          company_email: this.email,
          business_city: this.org.business_city,
          base_currency: this.org.base_currency,
          fiscal_year: this.org.fiscal_year,
          reporting_basis: this.org.reporting_basis,
          time_zone: this.org.time_zone,
          date_format: this.org.date_format,
          company_id: "",
          Business_registration_no: this.org.Business_registration_no,
          tax_id: this.org.tax_id,
          logo: this.org.logo,
          deposittaking: this.org.deposittaking,
          entity_type: this.org.entity_type,
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
  },
  mounted() {
    this.fetchMembers();
    this.fetchOrg();
    this.fetchUserinfo();
  },
};
</script>

<style></style>
