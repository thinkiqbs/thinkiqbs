<template>
  <div class="container">
    <div class="col-3"></div>

    <div class="col-10">
      <div class="card" style="width: 88rem">
        <div class="card-body">
          <form class="row g-3" @submit.prevent="saveorg">
            <div class="form-group">
              <label>First Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.first_name"
                required
              />
            </div>

            <div class="form-group">
              <label>Last Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="user.last_name"
                required
              />
            </div>

            <div class="form-group">
              <label>Email address {{ this.errororg.company_email }}</label>
              <input
                type="email"
                class="form-control form-control-lg"
                v-model="Organization.company_email"
                required
              />
            </div>

            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                class="form-control form-control-lg"
                v-model="user.password"
                required
              />
            </div>

            <div class="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                class="form-control form-control-lg"
                v-model="user.phone_no"
              />
            </div>

            <div class="form-group">
              <label>Company Name</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="Organization.organization_name"
              />
            </div>

            <div class="form-group">
              <label>Business Address</label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="Organization.address"
              />
            </div>
            <div class="col-12">
              <label>Business Location </label>
              <input
                type="text"
                class="form-control form-control-lg"
                v-model="Organization.business_location"
              />
            </div>

            <div class="col-12">
              <label for="inputAddress2" class="form-label"
                >Business Registration #No</label
              >
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                required
                v-model="Organization.registration"
              />
            </div>

            <div class="col-12">
              <label for="inputAddress2" class="form-label">KRA PIN</label>
              <input
                type="text"
                class="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
                required
                v-model="Organization.tax_Number"
              />
            </div>

            <div class="col-md-6">
              <label for="inputCity" class="form-label">Industry</label>
              <input
                type="text"
                class="form-control"
                id="inputCity"
                v-model="Organization.industry"
              />
            </div>
            <div class="col-md-4">
              <label for="inputState" class="form-label">Entity</label>
              <select id="inputState" class="form-select">
                <option selected>Select Entity...</option>
                <option>Sacco</option>
                <option>MFI</option>
              </select>
            </div>
            <div class="col-md-2">
              <label for="inputZip" class="form-label">Zip</label>
              <input type="text" class="form-control" id="inputZip" />
            </div>
            <div class="col-12">
              <div class="form-group">
                <label>organization ID</label>
                <input
                  type="number"
                  class="form-control form-control-lg"
                  v-model="this.OrgID"
                  disabled
                />
              </div>

              <p class="forgot-password text-right">
                <button type="submit" class="btn btn-primary" @click="setorg">
                  create setorg
                </button>
                <button type="submit" class="">create organization</button>
                Already registered
                <router-link :to="{ name: 'login' }">sign in?</router-link>
              </p>
            </div>
            <div class="col-12">
              <div
                v-if="this.orgid != Null"
                class="alert alert-primary"
                role="alert"
              >
                {{ this.orgid }}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    return {
      errororg: [],
      Organization: {
        organization_name: "",
        company_email: "",
        address: "",
        business_location: "",
        registration: "",
        tax_Number: "",
        industry: "",
        entity_type: "",
      },

      orgid: [],

      user: [
        {
          first_name: "",
          last_name: "",
          phone_no: "",
          email: "",
          password: "",
          Organization: "",
          Address: "",
        },
      ],
    };
  },

  methods: {
    setorg() {
      axios.get("/sys_config/api/v1/OrganizationProfile/").then((res) => {
        this.orgid = res.data.count + 1;
      });
    },
    saveorg() {
      // const Organization = new Organization();
      Promise.all([
        axios.get("/sys_config/api/v1/OrganizationProfile/").then((res) => {
          this.orgid = res.data.count + 1;
        }),
        axios
          .post(`/sys_config/api/v1/OrganizationProfile/`, {
            organization_name: this.Organization.organization_name,
            company_email: this.Organization.company_email,
            business_address: this.Organization.address,
            Postal_address: this.Organization.address,
            business_location: this.Organization.business_location,
            Business_registration_no: this.Organization.registration,
            tax_Number: this.Organization.tax_Number,
            industry: this.Organization.industry,
            entity_type: "",
          })

          .then((response) => {
            response;
            this.orgid = this.orgid + 1;
            alert("New orgarnization created");
          })
          .catch((error) => {
            // console.log(JSON.stringify(error.response.data))
            this.errororg = error.response.data;
            alert(error.response.data);
          }),

        axios
          .post(`/users/user/`, {
            first_name: this.user.first_name,
            last_name: this.user.last_name,
            phone_no: this.user.phone_no,
            email: this.Organization.company_email,
            password: this.user.password,
            Organization: this.OrgID,
            Address: this.Organization.address,
          })

          .then((response) => {
            response;
            // confirm("New orgarnization created");
          })
          .catch((error) => {
            // console.log(JSON.stringify(error.response.data))
            this.errororg = error.response.data;
            // alert(error.response.data);
          }),
      ]);
    },
  },
  computed: {
    OrgID() {
      return this.orgid;
    },
  },
};
</script>
