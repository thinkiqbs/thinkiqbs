@<template>
  <div id="app" class="container-fluid">
    <div class="row">
      <div class="col-2">
        <financeNav></financeNav>
      </div>

      <div class="col-10">
        <div class="row">
          <div class="table-responsive">
            <div class="topnav-right col-2"></div>

            <div class="card">
              <div class="card-header">
                <headerDashboard></headerDashboard>

                <h3 class="card-title">Members</h3>

                <div class="btn-toolbar float-right align-items-center">
                  <!---->

                  <button
                    class="btn btn-success"
                    style="float: right"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#Addnewbank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-plus-circle-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"
                      />
                    </svg>

                    New Member

                    <H3 class="badge badge-pill badge-info">
                      {{ applicount }}
                    </H3>
                  </button>

                  <!--  -->

                  <!--  -->

                  <!--  -->
                </div>
                <div class="btn-toolbar float-right align-items-center">
                  <!---->

                  <button
                    class="btn btn-success"
                    style="float: right"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#ImportMember"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-file-excel-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M12 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM5.884 4.68 8 7.219l2.116-2.54a.5.5 0 1 1 .768.641L8.651 8l2.233 2.68a.5.5 0 0 1-.768.64L8 8.781l-2.116 2.54a.5.5 0 0 1-.768-.641L7.349 8 5.116 5.32a.5.5 0 1 1 .768-.64z"
                      />
                    </svg>

                    Import

                    <H3 class="badge badge-pill badge-info"> </H3>
                  </button>

                  <!--  -->

                  <!--  -->

                  <!--  -->
                </div>

                <div class="card-body table-responsive">
                  <table
                    class="table-borderless table-hover table-striped walla"
                  >
                    <thead>
                      <tr lass="line-item-header">
                        <th>#</th>
                        <th>Member Names</th>
                        <th>National ID</th>
                        <th>Phone Number</th>
                        <th>email</th>
                        <th>Account Number</th>
                        <th>Approved</th>
                        <th>Invite</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="member in filterloans" :key="member.id">
                        <td>{{ member.id }}</td>
                        <td>{{ member.first_name }} {{ member.last_name }}</td>
                        <td>{{ member.national_id }}</td>
                        <td>{{ member.phone_no }}</td>
                        <td>{{ member.email }}</td>
                        <td>{{ member.account_no }}</td>
                        <!-- <td onClick="window.location.href='mailto:username@example.com?subject=Subject&body=message%20goes%20here;">click</td>  -->

                        <!-- createa clickable table detail -->

                        <td>
                          <span v-if="member.Application_Status">
                            <i class="fas fa-check-circle"></i
                          ></span>
                          <span v-if="!member.Application_Status"
                            ><i
                              class="fa fa-warning text-warning"
                              style="font-size: 24px"
                            ></i
                          ></span>
                        </td>

                        <td>
                          <h1 v-if="member.invited == false">
                            <input
                              type="checkbox"
                              id="checkbox"
                              v-model="member.invited"
                              @click="invite(member)"
                            />
                          </h1>
                          <h5 v-else><label for="checkbox"></label> 👍</h5>
                        </td>

                        <td>
                          <div
                            class="dropdown"
                            v-if="member.Application_Status"
                          >
                            <a
                              class="btn btn-secondary dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <i class="fas fa-ellipsis-h"></i>
                            </a>

                            <ul
                              class="dropdown-menu"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#Contribution"
                                  @click="newcontribution(member)"
                                  >Pledge</a
                                >
                              </li>
                              <li>
                                <a
                                  v-if="member.Application_Status"
                                  class="dropdown-item"
                                  href="#"
                                  @click="change(member)"
                                  type="button"
                                  data-bs-toggle="modal"
                                  data-bs-target="#loan"
                                  >Apply Loan</a
                                >
                              </li>
                              <li>
                                <a
                                  class="dropdown-item"
                                  href="#"
                                  data-bs-toggle="modal"
                                  data-bs-target="#MemberInfo"
                                  @click="change(member)"
                                  >View More</a
                                >
                              </li>
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header">
        <!-- <img src="..." class="rounded me-2" alt="..." /> -->
        <strong class="me-auto">Bootstrap</strong>
        <small>11 mins ago</small>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
      <div class="toast-body">Hello, world! This is a toast message.</div>
    </div>

    <!-- Modal for New Contribution  -->

    <div
      class="modal fade modalbox"
      id="Contribution"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body">
            <form onsubmit="return false;" class="modal-content">
              <div class="container">
                <h2>New Contribution</h2>
                <p>A member will contribute the amount you indicate below.</p>

                <hr />

                <div class="form-group row">
                  <div class="col-4-auto">
                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="name5">Member Email </label>
                        <input
                          class="form-select"
                          v-model="this.membersavings.email"
                          @change="employerchangechange"
                          @click="getmembers"
                          disabled
                        />
                        <i class="clear-input"
                          ><ion-icon name="close-circle"></ion-icon
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div class="col-8">
                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="name5"
                          >Select Saving Type
                        </label>
                        <select
                          class="form-select"
                          aria-label="Default select example"
                          v-model="selected"
                          @change="savingtypechange"
                        >
                          <option
                            v-for="option in savings"
                            v-bind:value="option.saving_type"
                            :key="option.id"
                          >
                            {{ option.saving_type }}
                          </option>
                        </select>
                        <span>Selected: {{ selected }}</span>
                        <i class="clear-input"
                          ><ion-icon name="close-circle"></ion-icon
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                <hr />

                <div class="form-group row">
                  <div class="col">
                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label for="inputAddress"
                          >Monthly Contribution Amount
                        </label>
                        <input
                          type="number"
                          class="form-control"
                          id="DepositsAmount"
                          placeholder=""
                          v-model="contribution.Amount"
                        />
                        <i class="clear-input"
                          ><ion-icon name="close-circle"></ion-icon
                        ></i>
                      </div>
                    </div>
                  </div>

                  <div class="col">
                    <div class="form-group boxed">
                      <div class="input-wrapper">
                        <label class="label" for="name5">GL accountCode</label>
                        <input
                          type="number"
                          class="form-control"
                          id="DepositsAmount"
                          placeholder=""
                          v-model="this.contribution.accountcode"
                          disabled
                        />
                        <i class="clear-input"
                          ><ion-icon name="close-circle"></ion-icon
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="form-row">
                  <div class="col">
                    <button
                      style="margin-right: 16px"
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Cancel
                    </button>

                    <button
                      style="margin-right: 16px"
                      type="submit"
                      class="btn btn-secondary"
                      @click="addsavings(member)"
                    >
                      Create New
                    </button>

                    <span style="color: green"
                      >{{ this.message }} <i class="fas fa-check"></i
                    ></span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- End of contribution -->

    <div
      class="modal fade"
      id="Addnewbank"
      tabindex="-1"
      aria-labelledby="feedbackModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header bg-gradient-primary-to-secondary p-4">
            <h5 class="modal-title font-alt text-white" id="feedbackModalLabel">
              Send feedback
            </h5>
            <button
              class="btn-close btn-close-white"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body border-0 p-4">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form id="New Member " >
              <!-- Name input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="National_Id"
                  type="number"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  v-model="addmembers.national_id"
                  autocomplete="off"
                />
                <label for="name">National ID</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  National_Id is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="first_name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  v-model="addmembers.first_name"
                />
                <label for="name">First name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  First Name is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="last_name"
                  type="text"
                  placeholder="Enter your name..."
                  data-sb-validations="required"
                  v-model="addmembers.last_name"
                />
                <label for="name">Last name</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Last Name is required.
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
                  v-model="addmembers.email"
                />
                <label for="email">Email address</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">
                  An email is required.
                </div>
                <div class="invalid-feedback" data-sb-feedback="email:email">
                  Email is not valid.
                </div>
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <input
                  class="form-control"
                  id="phone"
                  type="tel"
                  placeholder="(123) 456-7890"
                  data-sb-validations="required"
                  v-model="addmembers.phone_no"
                />
                <label for="phone">Phone number</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">
                  A phone number is required.
                </div>
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <select
                  class="form-control .choices"
                  v-model="selectedemployer"
                  data-sb-validations="required"
                >
                  <option
                    v-for="option in employers"
                    v-bind:value="option.id"
                    :key="option.id"
                  >
                    {{ option.employer_name }}
                  </option>
                </select>
                <label for="name">Employer </label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Employer is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <select class="form-control .choices" v-model="selectedcounty">
                  <option
                    v-for="option in county"
                    v-bind:value="option.county"
                    :key="option.id"
                  >
                    {{ option.county }}
                  </option>
                </select>
                <label for="name">County</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  County is required.
                </div>
              </div>
              <div class="form-floating mb-3">
                <select
                  class="form-select"
                  aria-label="Default select example"
                  v-model="addmembers.Department"
                  data-sb-validations="required"
                >
                  <option selected>Open this select menu</option>
                  <option value="1">Finance</option>
                  <option value="2">Sales</option>
                  <option value="3">Marketing</option>
                  <option value="3">HR</option>
                  <option value="3">Admin</option>
                  <option value="3">House Keeping</option>
                </select>
                <label for="name">Department</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">
                  Department is required.
                </div>
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>
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
                  @click="addnewmeber"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal to Add Members  -->

    <!-- Modal for Import  -->

    <div
      class="modal fade modalbox"
      id="ImportMember"
      tabindex="-1"
      role="dialog"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Import Members</h5>
            <a href="javascript:;" data-bs-dismiss="modal">Close</a>
          </div>
          <div class="row">
            <div class="col">
              <!-- boostrap select  -->
              <p>Step 2</p>

              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm example"
                @change="pickdata"
                v-model="selected"
              >
                <option selected>Open this select menu</option>
                <option value="Members">Members</option>
                <option value="Pledges">MemberP Ledges</option>
              </select>
            </div>

            <div class="col">
              <p>Step 2</p>

              <vue-excel-xlsx
                class="btn btn-success"
                :data="ExcelData"
                :columns="columns"
                :file-name="'member_details'"
                :file-type="'xlsx'"
                :sheet-name="'member_details'"
                @click="pickdata"
              >
                Download xlsx template
              </vue-excel-xlsx>
            </div>
            <div class="col">
              <p>Step 3</p>
              <input type="file" @change="onFileChange" />
            </div>

            <div class="col">
              <p>Step 4</p>
              <button
                type="button"
                class="btn btn-primary"
                @click="postMembers"
              >
                Import
              </button>
            </div>

            <div class="col">
              <p>Step 5</p>

              <button
                type="button"
                class="btn btn-primary"
                @click="processMembers"
              >
                Process Imports
              </button>
            </div>
          </div>
          <div class="modal-body">
            <div class="card-body table-responsive">
              <table class="table-borderless table-hover table-striped walla">
                <thead>
                  <tr lass="line-item-header">
                    <th>#</th>
                    <th>Member Names</th>
                    <th>Phone Number</th>
                    <th>email</th>
                    <th>Account Number</th>
                    <th>Approved</th>
                    <th>Invite</th>
                    <th>Action</th>
                    <th>View</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="member in tableData" :key="member.id">
                    <td>{{ member.id }}</td>
                    <td>{{ member.first_name }} {{ member.last_name }}</td>
                    <td>{{ member.phone_no }}</td>
                    <td>{{ member.email }}</td>
                    <td>{{ member.account_no }}</td>

                    <td>
                      <span v-if="member.Application_Status">
                        <i class="fas fa-check-circle"></i
                      ></span>
                      <span v-if="!member.Application_Status"
                        ><i
                          class="fa fa-warning text-warning"
                          style="font-size: 24px"
                        ></i
                      ></span>
                    </td>

                    <td>
                      <h1 v-if="member.invited == false">
                        <input
                          type="checkbox"
                          id="checkbox"
                          v-model="member.invited"
                          @click="invite(member)"
                        />
                      </h1>
                      <h5 v-else><label for="checkbox"></label> 👍</h5>
                    </td>

                    <td>
                      <div class="row">
                        <div class="col-4" v-if="member.Application_Status">
                          <a
                            href="#"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#Contribution"
                            @click="newcontribution(member)"
                          >
                            <i
                              class="fas fa-piggy-bank"
                              style="color: green"
                            ></i>
                          </a>
                        </div>
                        <div class="col-4" v-if="member.Application_Status">
                          <button
                            @click="change(member)"
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#loan"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-book"
                              viewBox="0 0 16 16"
                            >
                              <path
                                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
                              />
                            </svg>
                          </button>
                        </div>
                        <div v-else>
                          <button
                            @click="change(product)"
                            type="button"
                            class="btn btn-outline-secondary"
                            data-bs-toggle="modal"
                            data-bs-target="#"
                            disabled
                          >
                            Inactive
                          </button>
                        </div>
                      </div>
                    </td>
                    <td>
                      <button
                        type="button"
                        class="btn btn-outline-secondary"
                        data-bs-toggle="modal"
                        data-bs-target="#MemberInfo"
                        @click="change(member)"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-eye-fill"
                          viewBox="0 0 16 16"
                        >
                          <path
                            d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"
                          />
                          <path
                            d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"
                          />
                        </svg>
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

    <!--  -->

    <!-- Modal -->
    <div
      class="modal fade modalbox"
      id="loan"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-fullscreen">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Loan Application
            </h5>

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
            <div class="container">
              <form @submit.prevent="submit">
                <div class="form-group row">
                  <label for="" class="col-sm-2 form-control-label"
                    >Email</label
                  >

                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      v-model="this.loan.email"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-sm-2 form-control-label"
                    >Loan Product</label
                  >

                  <div class=".custom-select" style="width: 200px">
                    <select
                      class="form-select"
                      id="select-country"
                      data-live-search="true"
                      v-model="selected"
                      @change="loantypechange"
                      style="color=green"
                    >
                      <option
                        v-for="option in options"
                        v-bind:value="option.loan_type"
                        :key="option.id"
                      >
                        {{ option.loan_type }}
                      </option>
                    </select>
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
                              {{ this.Loans.Amount }}
                            </span>
                          </div>

                          <input
                            v-model="Loans.Amount"
                            type="range"
                            class="form-range"
                            min="0"
                            :max="maxtopup"
                            id="customRange2"
                          />
                        </div>
                      </div>

                      <label class="col-form-label col-lg-2 px-0"
                        >Loan Term {{ this.Loans.Term }}</label
                      >
                      <div class="col-lg-2">
                        <input
                          type="range"
                          class="form-range"
                          id="Term"
                          min="0"
                          :max="this.Loans.Term"
                          v-model="Loans.Term"
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
                          v-model="this.Loans.interest"
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
                            v-model="this.tLoans"
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
                          v-model="this.monthlyRepayment"
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
                          v-model="this.interestmonthly"
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
                  <div class="unused-amount-zero offset-lg-7 col-lg-5 clearfix">
                    <div class="row">
                      <p class="col-lg-8 text-right">My Current Deposits :</p>
                      <p class="col-lg-4 text-right">
                        {{ this.currentdeposits }}
                      </p>
                    </div>
                    <div class="row">
                      <p class="col-lg-8 text-right">My Loan Balance :</p>
                      <p class="col-lg-4 text-right">{{ this.loanbalance }}</p>
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
                <table
                  class="ttable line-item-table table-borderless table-hover table-striped walla"
                >
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
                    <tr v-for="(item, index) in myapprovedloans" :key="item.id">
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
                      <td colspan="1" class="text-right"><b>Total Loans</b></td>
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
            <button type="button" class="btn btn-secondary" bs-="modal">
              Close
            </button>
            <button @click="saveloan" type="button" class="btn btn-primary">
              Add Loan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Member Information  -->

    <div
      class="modal fade modalbox"
      id="MemberInfo"
      data-backdrop="static"
      data-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Loan Application
            </h5>
            // {{ this.loansStoreMe }}
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
            <div class="container">
              <form @submit.prevent="submit">
                <div class="form-group row">
                  <label for="" class="col-sm-2 form-control-label"
                    >Email</label
                  >

                  <div class="form-group col-md-6">
                    <input
                      type="email"
                      class="form-control"
                      id="inputEmail4"
                      placeholder="Email"
                      v-model="this.loan.email"
                      disabled
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <label for="" class="col-sm-2 form-control-label"
                    >Loan Product</label
                  >

                  <div class=".custom-select" style="width: 200px">
                    <select
                      class="form-select"
                      id="select-country"
                      data-live-search="true"
                      v-model="selected"
                      @change="loantypechange"
                      style="color=green"
                    >
                      <option
                        v-for="option in options"
                        v-bind:value="option.loan_type"
                        :key="option.id"
                      >
                        {{ option.loan_type }}
                      </option>
                    </select>
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
                              {{ this.Loans.Amount }}
                            </span>
                          </div>

                          <input
                            v-model="Loans.Amount"
                            type="range"
                            class="form-range"
                            min="0"
                            :max="maxtopup"
                            id="customRange2"
                          />
                        </div>
                      </div>

                      <label class="col-form-label col-lg-2 px-0"
                        >Loan Term {{ this.Loans.Term }}</label
                      >
                      <div class="col-lg-2">
                        <input
                          type="range"
                          class="form-range"
                          id="Term"
                          min="0"
                          :max="this.Loans.Term"
                          v-model="Loans.Term"
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
                          v-model="this.Loans.interest"
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
                            v-model="this.tLoans"
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
                          v-model="this.monthlyRepayment"
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
                          v-model="this.interestmonthly"
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
                  <div class="unused-amount-zero offset-lg-7 col-lg-5 clearfix">
                    <div class="row">
                      <p class="col-lg-8 text-right">My Current Deposits :</p>
                      <p class="col-lg-4 text-right">
                        {{ this.currentdeposits }}
                      </p>
                    </div>
                    <div class="row">
                      <p class="col-lg-8 text-right">My Loan Balance :</p>
                      <p class="col-lg-4 text-right">{{ this.loanbalance }}</p>
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
                <table
                  class="table line-item-table table-borderless table-hover table-striped walla"
                >
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
                    <tr v-for="(item, index) in myapprovedloans" :key="item.id">
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
                      <td colspan="1" class="text-right"><b>Total Loans</b></td>
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
            <button type="button" class="btn btn-secondary" bs-="modal">
              Close
            </button>
            <button @click="saveloan" type="button" class="btn btn-primary">
              Add Loan
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- End of Member information  -->

    <div
      class="modal fade modalbox"
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
            <button type="button" class="btn btn-secondary" bs-="modal">
              Close
            </button>
            <button type="button" class="btn btn-primary">update</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal to Add Members  -->
    <div
      class="modal fade modalbox"
      id="Addnewbank"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header"></div>
          <div class="modal-body">
            <form class="modal-content">
              <div class="container">
                <h2>New Member</h2>
                <p>Please fill in this form to create an new member account.</p>
                <hr />

                <!--  -->
                <label for="email"><b>Email</b></label>
                <input
                  type="text"
                  placeholder="Enter Email"
                  name="email"
                  required
                  v-model="addmembers.email"
                />

                <label for="psw"><b>First Name</b></label>
                <input
                  type="text"
                  placeholder="John"
                  name="firstname"
                  required
                  v-model="addmembers.first_name"
                />

                <label for="lastname"><b>Last Name</b></label>
                <input
                  type="text"
                  placeholder="Apopo"
                  name="lastname"
                  required
                  v-model="addmembers.last_name"
                />

                <label for="psw-repeat"><b>Mobile Number</b></label>
                <input
                  type="tel"
                  placeholder="254723456789"
                  name="mobilenumber"
                  required
                  v-model="addmembers.phone_no"
                />

                <label for="address"><b>Address</b></label>
                <input
                  type="tel"
                  placeholder="Address"
                  name="address"
                  required
                  v-model="addmembers.Address"
                />

                <div class="form-row">
                  <div class="col">
                    <label for="psw-repeat"><b>Select Employer</b></label>

                    <select class="form-control" v-model="selectedemployer">
                      <option
                        v-for="option in employers"
                        v-bind:value="option.id"
                        :key="option.id"
                      >
                        {{ option.employer_name }}
                      </option>
                    </select>
                    <span>selected: {{ selectedemployer }}</span>
                    {{ this.employers }}{{ this.companyid3 }}
                  </div>
                  <div class="col">
                    <label class="form-label" for="form6Example4"
                      ><b>Department</b></label
                    >
                    <input
                      type="text"
                      id="form6Example4"
                      class="form-control"
                      v-model="addmembers.Department"
                    />
                  </div>

                  <div class="col">
                    <label class="form-label" for="form6Example7"
                      ><b>County</b></label
                    >
                    <select class="form-control" v-model="selectedcounty">
                      <option
                        v-for="option in county"
                        v-bind:value="option.county"
                        :key="option.id"
                      >
                        {{ option.county }}
                      </option>
                    </select>
                    <span>selected: {{ selectedcounty }}</span>
                  </div>
                </div>

                <p>
                  By creating an account the user has agreed to become a member
                  <!-- <a href="#" style="color:dodgerblue">Terms & Privacy</a>. -->
                </p>

                <div class="form-row">
                  <div class="col">
                    <button
                      style="margin-right: 16px"
                      type="button"
                      class="btn btn-secondary"
                      bs-="modal"
                    >
                      Cancel
                    </button>

                    <button
                      style="margin-right: 16px"
                      type="submit"
                      class="btn btn-secondary"
                      @click="addrecords"
                    >
                      Add Member
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAPI } from "@/axios-api";
import readXlsxFile from "read-excel-file";
// import writeXlsxFile from "write-excel-file";

import financeNav from "@/components/FinanceNav";
import headerDashboard from "@/components/headerdashboard.vue";
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
//Datatable Modules
// import "datatables.net-dt/js/dataTables.dataTables";
// import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
import { mapGetters, mapActions } from "vuex";
// import PhoneMaskInput from "vue-phone-mask-input";
// import "vue-phone-mask-input/dist/vue-phone-mask-input.min.css";
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";


export default {
  name: "MemberDetails",
  components: {
    financeNav,
    headerDashboard,

    // PhoneMaskInput,
  },

  data() {
    return {
      message: "",
      contribution: [],
      memberdetails: [],

      search: "",
      myapprovedloans: [],
      orgprofile: [],

      selectedmember: [],
      ExcelData: [],
      accounttypes: [],
      orgprofile1: {},
      companyid1: "",
      companyid: "",
      members: [],
      member: "",
      memberscount: [],
      membersavings: {},
      path: "",
      selectedemployer: "",

      selectedcounty: "",
      selected: "A",

      tableData: [],
      add_product: false,
      editing: false,
      loanschedule: [],
      loanscheduleMe: [],
      Loanspaidme: [],
      depositstotal: [],
      totaldeposits: [],
      totaldepositsMe: [],
      // totalSavings: [],
      Loans: {
        User_id: "",
        email: this.$store.state.email,
        Amount: this.Amount,
        loan_Type: "Development",
        interest: "",
        Interest_Monthly: "",
        Term: "",
        TotalLoans: "",
        Monthrepayment: "",
        Principle_Monthly: "",
        Total_Loan: "",
      },
      loan: [],

      product: [],
      loan_type: "",
      monthlyloan: [],
      monthdeposits: [],
      monthdepositsme: [],

      role: [],
      roles: [],
      mymonthlydeposits: "",
      columns: [
        {
          label: "first_name",
          field: "first_name",
        },

        {
          label: "last_name",
          field: "last_name",
        },

        {
          label: "national_id",
          field: "national_id",
        },

        {
          label: "phone_no",
          field: "phone_no",
        },
        {
          label: "email",
          field: "email",
        },
        {
          label: "date_of_birth",
          field: "date_of_birth",
        },

        {
          label: "Bank_Account",
          field: "Bank_Account",
        },
        {
          label: "Bank_Branch",
          field: "Bank_Branch",
        },
        {
          label: "Department",
          field: "Department",
        },
        {
          label: "business",
          field: "business",
        },

        {
          label: "town",
          field: "town",
        },
        {
          label: "National",
          field: "National",
        },
        {
          label: "County",
          field: "County",
        },
        {
          label: "Ward",
          field: "Ward",
        },
        {
          label: "updatedgl(Dont Change)",
          field: "updatedgl",
        },

        {
          label: "company_id(Dont Change)",
          field: "company_id",
        },
        {
          label: "organizationprofile(Dont Change)",
          field: "organizationprofile",
        },
      ],
      addmembers: [
        {
          first_name: "",
          last_name: "",
          phone_no: "",
          national_id: "",
          email: "",
          date_of_birth: "",
          Employer: "",
          Department: "",
          County: "",
        },
      ],
    };
  },

  created() {
    this.initDatatable();
    this.fetchLoantype();
    this.fetchSavingtype();
    this.fetchDocuments();
    this.fetchDeposits();
    this.fetchMembers();
    this.fetchLoans();
    this.fetchEmployerinfo();
    this.fetchMemberImports();

  },

  mounted() {

    this.companyid = this.companyid3


      getAPI
        .get("/members/api/v1/MemberDetails/", {
          params: { organizationprofile: this.orgprofileid },
        })
        .then((res) => {
          this.tableData = res.data.results.filter(
            (loan) => loan.company_id == this.companyid3
          );
          this.initDatatable();
        })
        .catch((error)=> {
        console.log(error)
      });



  },

  methods: {
    ...mapActions([
      "fetchDeposits",
      "fetchDocuments",
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchBanktransactions",
      "fetchPaymentsmade",
      "fetchPaymentsreceived",
      "fetchEmployerinfo",
      "fetchMemberImports",
      "fetchSavingtype",
      "fetchLoantype",
    ]),

    onFileChange(event) {
      let xlsxfile = event.target.files ? event.target.files[0] : null;
      readXlsxFile(xlsxfile).then((rows) => {
        this.accounttypes = rows;
        console.log("rows:", rows);
      });
    },

    postMembers() {
      for (let i = 1; i < this.accounttypes.length; i++) {
        let acctype = this.accounttypes[i];
        getAPI
          .post("/members/api/v1/Import/", {
            first_name: acctype[0],
            last_name: acctype[1],
            national_id: acctype[2],
            phone_no: acctype[3],
            email: acctype[4],
            date_of_birth: acctype[5],

            Bank_Account: acctype[6],
            Bank_Branch: acctype[7],
            Department: acctype[8],

            business: acctype[9],
            town: acctype[10],
            National: false,
            County: acctype[12],
            Ward: acctype[13],

            created_by: this.user_id,
            company_id: this.companyid3,

            Employer: 1,
            organizationprofile: this.orgprofileid,
          })
          .then((response) => {
            this.accounttype1.push(response.data);
          })
          .catch((error) => {
            console.log(error);
            this.accounttype1.push("error", error.data);
          });

        console.log(i, acctype);
      }
      this.$swal({
        title: "Success",
        text: "Opening Balance added successfully",
        icon: "success",
        button: "Ok",
      });
    },

    pickdata() {
      //add properties to data1

      const members = [
        {
          //  id: 1,
          first_name: "Karash",
          last_name: "Karash",
          national_id: 14632337,
          phone_no: "+254723457182",
          email: "karash@gmail.com",
          date_of_birth: null,
          // account_no: "6687947570",
          // invited: true,
          Bank_Account: null,
          Bank_Branch: null,
          Department: "Finance",
          // Application_Status: true,
          // Terms_of_Service: null,
          business: null,
          town: null,
          National: false,
          County: "Nairobi (County)",
          Ward: null,
          // otp: null,
          // otp_expiry_date: null,
          // phone_imei: null,
          // phone_imeil: null,
          // login_count: 0,
          created_by: this.user_id,
          company_id: this.companyid3,
          // is_staff: false,
          // is_Admin: false,
          // deposits: 0,
          // loans: 0,
          // interest: 0,
          Employer: 1,
          organizationprofile: this.orgprofileid,
        },
      ];

      this.ExcelData = members;

      // if selected is deposits then

      console.log(this.selected);
      console.log(this.data1);
    },
    processMembers() {
      //Post a memberImports to Members
      this.fetchMemberImports();

      for (var i = 0; i < this.memberImports.length; i++) {
        var member = this.memberImports[i];
        getAPI
          .post("/members/api/v1/MemberDetails/", member)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error.response.data);
            this.$swal({
              title: "Error",
              text: error,
              icon: "error",
              button: "Ok",
            });
          });
      }
    },

    //create a dropdown menu trigger
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

    getmembers() {
      const x = this.companyid;
      getAPI
        .get("/members/api/v1/MemberDetails/", {
          params: { company_id: x },
        })
        .then((res) => {
          this.memberdetails = res.data.results;

          // $("#example").DataTable();
        });
    },

    employerchangechange() {
      const opt = this.memberdetails.find(
        (o) => o.email === this.selectedmember
      );
      // console.log(opt)
      this.selectedemployer = opt.Employer;
      this.selectedemployerid = opt.id;
      // this.Loans.Term = opt.maximum_loan_term;
      // this.Loans.gl_account = opt.gl_account;
    },

    newcontribution(member) {
      this.membersavings = member;
    },
    addsavings() {
      getAPI
        .post(`members/api/v1/MonthDeposits/`, {
          // names: ''
          User_id: this.membersavings.id,
          email: this.membersavings.email,
          Amount: this.contribution.Amount,
          accountcode: this.contribution.accountcode,
          uidsavintype: this.uidsavingtypekey,
          employer: this.membersavings.Employer,
          SavingsType: this.selected,
          company_id: this.membersavings.company_id,
          organizationprofile: this.orgprofileid,
        })
        .then((response) => {
          response;
          this.$swal("Good job!");
          this.$router.go(); // Refreshes page

          this.message = "Application Has Been saved";
          // this.$router.push({ name: "operations" });
        })
        .catch((e) => {
          this.errors.push(e);
          //pass error message to this.message
          this.$swal("Error!");
          this.message = JSON.stringify(e);
        });
    },

    addnewmeber() {
      Promise.all([
        getAPI
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            national_id: this.addmembers.national_id,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid3,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            this.fetchMembers();

            // this.$router.go(); // Refreshes page
            this.$swal({
              title: "Success",
              text: "Member Has Been Added",
              icon: "success",
              button: "OK",
            });
          })
          .catch((error) => {
            this.$swal({
              title: "Error",
              text: JSON.stringify(error.response.data),
              icon: "error",
              button: "OK",
            });
            // alert(JSON.stringify(error.response.data));
          }),
      ]);
    },
    invite(member) {
      // let random = Math.random();
      // item.label = random;

      this.member = member;

      Promise.all([
        getAPI
          .post("/dj-rest-auth/registration/", {
            // names: '',
            username: this.member.national_id,
            email: this.member.email,
            is_staff: "False",
            // first
            // phone_no:this.member.phone_no,
            // County:this.member.County,
            // Employer:this.member.Employer,
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            company_id: this.companyid3,
            password1: "Qwerty2021",
            password2: "Qwerty2021",
          })
          .then((response) => {
            response;
            this.fetchMembers(this.selected);
          })
          .catch((e) => {
            console.log(e);
            this.$swal("Member Is Already a user");
          }),

        getAPI
          .put("/members/update/" + this.member.id + "/", {
            Application_Status: "true",
            invited: "True",
            first_name: this.member.first_name,
            last_name: this.member.last_name,
            phone_no: this.member.phone_no,
            national_id: this.member.national_id,
            bankname: this.member.bankname,
            email: this.member.email,
            username: this.member.email,
            date_of_birth: this.member.date_of_birth,
            Employer: this.member.Employer,
            Department: this.member.Department,
            County: this.member.County,
            Address: this.member.Address,
            organizationprofile: this.orgprofileid,
            company_id: this.companyid3,
          })
          .then((response) => {
            response;
            this.$swal("Member is now Active");
            // confirm("We have received your application");
            // this.$router.push({ name: "members" });
          })
          .catch((e) => {
            alert(e);
          }),

        getAPI
          .put("users/api/v1/CustomUser/ " + this.member.id + "/", {
            // names: '',
            first_name: this.editprofile.first_name,
            last_name: this.editprofile.last_name,
            email: this.email,
            company_id: this.companyid3,
          })
          .then((response) => {
            response;
            // window.location.reload();
            // this.errors = "hey we got your record";
          })
          .catch((e) => {
            this.errors.push(e.errors);
          }),
      ]);
    },

    approveloan() {
      // let random = Math.random();
      // item.label = random;

      getAPI
        .put("/loans/api/v1/loans/" + this.loan.id + "/", {
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.loan.Amount,
          loan_Type: "Development",
          interest: this.loan.interest,
          Interest_Monthly: this.loan.Interest_Monthly,
          Term: this.loan.Term,
          Status: this.loan.Status * 1 + 1,
          TotalLoans: this.loan.TotalLoans,
          Monthrepayment: this.loan.Monthrepayment,
          Principle_Monthly: this.loan.Principle_Monthly,
          Total_Loan: this.loan.Total_Loan,
          organizationprofile: this.loan.organizationprofile,
          EmployerProfile: this.loan.EmployerProfile,
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

    savingtypechange() {
      const opt = this.savingType.find((o) => o.saving_type === this.selected);
      // console.log(opt)
      this.contribution.saving_type = opt.saving_type;
      this.contribution.minimum_contribution = opt.minimum_contribution;
      this.contribution.interest_rate = opt.interest_rate;
      this.contribution.maximum_saving_term = opt.maximum_saving_term;
      this.contribution.accountcode = opt.accountcode;
      this.contribution.Account_type = opt.Account_type;
      this.contribution.accountype_description = opt.accountype_description;
      this.contribution.maincode = opt.maincode;
      this.contribution.maincode_description = opt.maincode_description;
      this.contribution.accountname = opt.accountname;
      this.contribution.company_id = opt.company_id;
      this.contribution.security = opt.security;
      this.contribution.organizationprofile = opt.organizationprofile;
    },

    change(item) {
      this.loan = item;

      const memberfilter = this.loan.email;
      // alert(item.Total_Loan);

      Promise.all([
        getAPI
          .get("/loans/api/v1/loans/", {
            params: { email: memberfilter, Status: "4" },
          })
          .then((res) => {
            this.myapprovedloans = res.data.results;
          }),

        getAPI
          .get("/members/api/v1/MonthDeposits/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.monthdepositsme = res.data.results;
          })
          .catch((error) => {
            console.error(error);
          }),

        getAPI
          .get("/finance/api/v1/documents/", {
            params: { email: memberfilter },
          })
          .then((res) => {
            this.depositstotal = res.data.results.filter((depositstotal) =>
              depositstotal.Account.includes("deposits")
            );
          }),

        getAPI
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "deposits" },
          })
          .then((res) => {
            this.totaldepositsMe = res.data.results;
          })
          .catch((error) => {
            console.error(error);
          }),

        getAPI
          .get("/members/api/v1/MonthDeposits/", {
            params: {
              company_id: this.companyid,
            },
          })
          .then((res) => {
            this.monthdeposits = res.data.results;
          })
          .catch((error) => {
            console.error(error);
          }),

        getAPI
          .get("/finance/api/v1/documents/", {
            params: { memberemail: memberfilter, Document: "loans" },
          })
          .then((res) => {
            this.loanscheduleMe = res.data.results;
          }),
        getAPI.get("/sys_config/api/v1/EmployerProfile/").then((res) => {
          this.employer = res.data.results;
          // $("#example").DataTable();
        }),
      ]);
    },

    onChange() {
      this.$router.push(this.path);
    },

    addrecords() {
      Promise.all([
        getAPI
          .post(`/members/api/v1/MemberDetails/`, {
            // names: '',
            // User_id: this.user_id,
            first_name: this.addmembers.first_name,
            last_name: this.addmembers.last_name,
            phone_no: this.addmembers.phone_no,
            bankname: this.addmembers.bankname,
            email: this.addmembers.email,
            username: this.addmembers.email,
            date_of_birth: this.addmembers.date_of_birth,
            Employer: this.selectedemployer,
            Department: this.addmembers.Department,
            County: this.selectedcounty,
            Address: this.addmembers.Address,
            organizationprofile: this.orgprofileid,
            password1: "qxcv2010A",
            password2: "qxcv2010A",
          })
          .then((response) => {
            response;
            window.location.reload();
            confirm("We have received your application");
          })
          .catch((error) => {
            // this.error = (e);
            alert(JSON.stringify(error.response.data));
          }),
      ]);
    },

    saveloan() {
      getAPI
        .post(`/loans/api/v1/loans/`, {
          // names: '',
          User_id: this.loan.id,
          email: this.loan.email,
          Amount: this.Loans.Amount,
          loan_Type: this.selected,
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
          income_account: this.Loans.income_account,
          EmployerProfile: this.loan.Employer,
          company_id: this.loan.company_id,
          current_balance: this.loanbalance,
          noofmonthspaid: 0,
          noofmonthspaidvar: 0,
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
          // load the loans page
          this.$router.go();
        })
        .catch((e) => {
          alert(e);
        });
    },

    deleteProduct(id) {
      getAPI
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

    editMode(product) {
      this.$store.dispatch("updateProduct", product).then(() => {
        this.editing = true;
        this.add_product = true;
      });
    },
    loantypechange() {
      const opt = this.options.find((o) => o.loan_type === this.selected);

      this.Loans.interest = opt.interest_rate;
      this.Loans.Term = opt.maximum_loan_term;
      this.Loans.gl_account = opt.gl_account;
      this.Loans.income_account = opt.income_account;
    },
  },

  computed: {
    ...mapGetters([
      "allDocuments",
      "allDeposits",
      "allMembers",
      "allLoans",
      "allOrg",
      "allUser",
      "allBanktransactions",
      "allPaymentsmade",
      "allPaymentsreceived",
      "allEmployer",
      "allMemberImports",
      "allLoantype",
      "allSavinttype",
    ]),

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
    tInterest() {
      // let tloans = this.Loans.Amount;
      // let tinterest = this.Loans.interest;
      // // let tTerm = this.Term;
      // return Math.round((tloans * tinterest) / 100);
      return Number(this.PaymentAmount - this.tLoans);
    },

    uidsavingtypekey() {
      return (
        this.companyid3 + this.contribution.accountcode + this.membersavings.id
      );
    },

    mymonthlydepositsmember: function () {
      var sum = 0;
      this.monthdeposits.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    mymonthlydepositsMe: function () {
      var sum = 0;
      this.monthdepositsme.forEach((e) => {
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

    tLoans() {
      let tl = Math.round(this.emi * this.Loans.Term);

      if (isNaN(tl)) {
        tl = 0;
      }
      return tl;
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

    interestRate() {
      return this.Loans.interest / 100 / 12;
    },

    emi() {
      var x = Math.pow(1 + this.interestRate, this.Loans.Term);
      var emiMonthly = (this.Loans.Amount * x * this.interestRate) / (x - 1);
      return Number(emiMonthly);
    },

    interestmonthly() {
      let int = Math.round((this.tLoans - this.Loans.Amount) / this.Loans.Term);

      if (isNaN(int)) {
        int = 0;
      }
      return int;
    },

    totalLoans: function () {
      var sum = 0;
      this.loanschedule.forEach((e) => {
        sum += e.Amount;
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

    loanbalance: function () {
      return this.totalLoansMe;
    },

    totalSavings: function () {
      var sum = 0;
      this.totaldeposits.forEach((e) => {
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

    currentdeposits: function () {
      return this.totalSavingsMe;
    },

    totalSavingsmember: function () {
      var sum = 0;
      this.depositstotalMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    exposure: function () {
      return this.totalSavings - this.totalLoans - this.loan.Amount;
    },

    monthlyRepayment() {
      // let tinterest = this.interest/100;
      let tTerm = this.Loans.Term;
      let tLoans = this.Loans.Amount;
      let mr = Math.round(tLoans / tTerm + this.interestmonthly);

      if (isNaN(mr)) {
        mr = 0;
      }
      return mr;
    },
    PrincipleMonthly() {
      // let tinterest = this.interest;

      return this.monthlyRepayment - this.interestmonthly;
    },

    // Compute for make paymennt
    PaymentAmount() {
      return Number(
        this.Payments.deposit * 1 +
          this.Payments.interest * 1 +
          this.Payments.loan * 1
      );
    },
    depositdate() {
      return this.withdrawal.Deposit_date;
    },

    withdrawalamount() {
      return Number(this.withdrawal.Deposit_Amount * -1);
    },
    loantypeinterest() {
      return this.loan.interest_rate;
    },
    maxtopup: function () {
      return this.currentdeposits * 3 - this.loanbalance;
    },

    //create currentmonth function
    currentmonth() {
      const current = new Date();
      const date = `${current.getMonth()}`;
      return date;
    },

    //create current  year function
    currentyear() {
      const current = new Date();
      const date = `${current.getFullYear()}`;
      return date;
    },

    // create current date function
    currentdate() {
      const current = new Date();
      const date = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
      return date;
    },

    //get the difference between dates
    getDifference(date1, date2) {
      var diff = {}; // Initialisaloantion du retour
      var tmp = date2 - date1;

      tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
      diff.sec = tmp % 60; // Extraction du nombre de secondes

      tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
      diff.min = tmp % 60; // Extraction du nombre de minutes

      tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
      diff.hour = tmp % 24; // Extraction du nombre d'heures

      tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
      diff.day = tmp;

      return diff;
    },
    filterloans: function () {
      
      return this.members1;
    },

    filterimports: function () {
      return this.memberImports.filter((member) =>
        member.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },

    companyid3() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].company_id;
    },

    orgprofileid() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      )[0].id;
    },

    employerselect() {
      return this.employers;
    },

    employers() {
      return this.$store.getters.allEmployer.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    employer() {
      return this.$store.getters.allEmployer.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    members1: function () {
      return this.$store.getters.allMembers.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    savingType: function () {
      return this.$store.getters.allSavinttype.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    memberImports: function () {
      return this.$store.getters.allMemberImports.filter(
        (item) => item.company_id == this.companyid3
      );
    },

    loanBalance: function () {
      var sum = 0;
      this.loansStoreMe.forEach((e) => {
        sum += e.Amount;
      });
      return sum;
    },

    loansStoreMe: function () {
      return this.$store.getters.allLoans.filter(
        (item) =>
          item.company_id == this.companyid3 &&
          item.email == this.loan.email &&
          item.Document == "loans"
      );
    },

    applicount() {
      return this.newApplications.length;
    },

    newApplications() {
      return this.$store.getters.allMembers.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Application_Status == false
      );
    },

    loansStore: function () {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    options() {
      return this.$store.getters.allLoantype.filter(
        (item) => item.company_id == this.companyid3
      );
    },
    county() {
      return this.$store.getters.allCounty;
    },
    savings() {
      return this.$store.getters.allSavinttype.filter(
        (item) => item.company_id == this.companyid3
      );
    },
  },
};
</script>

<style>
/*the container must be positioned relative:*/
.custom-select {
  position: relative;
  font-family: Arial;
}

.custom-select select {
  display: none; /*hide original SELECT element:*/
}

.select-selected {
  background-color: DodgerBlue;
}

/*style the arrow inside the select element:*/
.select-selected:after {
  position: absolute;
  content: "";
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/*point the arrow upwards when the select box is open (active):*/
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/*style the items (options), including the selected item:*/
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
  user-select: none;
}

/*style items (options):*/
.select-items {
  position: absolute;
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/*hide the items when the select box is closed:*/
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
