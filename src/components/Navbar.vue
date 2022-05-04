<template>
  <nav
    class="navbar navbar-expand-lg navbar-light bg-light shadow-sm sticky-top"
    id="mainNav"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="/" v-if="token == null">
        <img
          src="../assets/images/logo/IQSACCO_Logo_Blue-PhotoRoom.png"
          width="250"
          height="250"
          alt="Sacco ERP Software"
          class="logo-display img-fluid"
        />
      </a>

      <a class="navbar-brand" href="#" v-if="token != null">
        <img class="logo-display img-fluid" :src="this.logo" :title="orgname" />
      </a>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        Menu
        <i class="bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#features" v-if="token == null"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="#download" v-if="token == null"
              >Download</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link me-lg-3" href="/contacts" v-if="token == null"
              >CONTACTS</a
            >
          </li>
        </ul>

        <button
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          @click="gotologin"
          v-if="token == null"
        >
          <span class="d-flex align-items-center">
            <b class="bold">Sign in </b>
            &nbsp; &nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-box-arrow-in-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z"
              />
              <path
                fill-rule="evenodd"
                d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
              />
            </svg>
          </span>
        </button>

        <button
          class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
          @click="gotoSignup"
          v-if="token == null"
        >
          <span class="d-flex align-items-center">
            <i class="bi-chat-text-fill me-2"></i>
            <span class="small">or Sign up</span>
          </span>
        </button>
        <div v-if="token != null">
          <div v-if="this.organizationdetails == 2 && this.memberdetails == 2">
            <button
              class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0"
              @click="gotocreateorganization"
            >
              <span class="d-flex align-items-center">
                <i class="bi-chat-text-fill me-2"></i>
                <span class="small">Start A New SACCO</span>
              </span>
            </button>
          </div>
        </div>

        <div v-if="token != null" class="dropdown d-inline-block ms-6">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span v-if="token != null" class="d-none d-sm-inline-block ms-2">{{
              this.orgname
            }}</span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="assets/media/avatars/avatar10.jpg"
                alt=""
              />
              <p class="mt-2 mb-0 fw-medium" v-if="this.allmembers != null">
                {{ this.memberfirstname }} {{ this.memberlastname }}
              </p>
              <p class="mb-0 text-muted fs-sm fw-medium">
                Member #ACC No:{{ this.memberaccounname }}
              </p>
              <p class="mb-0 text-muted fs-sm fw-medium">
                Company ID: {{ this.companyid3 }}
              </p>

              <a class="nav-link me-lg-3" href="/Profile" v-if="token != null"
                >My Account</a
              >
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="gotoDashboard"
                v-if="this.organizationdetails == 1"
              >
                <span class="fs-sm fw-medium">Back Office</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="gotoDashboard"
                v-if="this.organizationdetails == 1"
              >
                <span class="fs-sm fw-medium">Front Office</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>

              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/Customize"
              >
                <span class="fs-sm fw-medium">Settings</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_lock.html"
              >
                <span class="fs-sm fw-medium">Lock Account</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="logout"
                v-if="token != null"
              >
                <span class="fs-sm fw-medium">Log Out</span>
              </a>
            </div>
          </div>
        </div>

        <div v-if="token != null" class="dropdown d-inline-block ms-2">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary"
            id="page-header-notifications-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="fa fa-fw fa-bell"></i>
            <span class="text-primary"
              ><span class="badge rounded-pill bg-primary ms-2">{{
                this.totalNotifications
              }}</span></span
            >
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0 border-0 fs-sm"
            aria-labelledby="page-header-notifications-dropdown"
            style="width: 400px"
          >
            <div
              class="p-2 bg-body-light border-bottom text-center rounded-top"
            >
              <h5 class="dropdown-header text-uppercase">Notifications</h5>
            </div>
            <ul class="nav-items mb-0">
              <li v-if="this.newMemberApplications != 0">
                <a
                  class="text-dark d-flex py-2"
                  href="#"
                  @click="gotoMemberApplication"
                >
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      You have a
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newMemberApplications
                      }}</span>
                      new member Pending Approval
                    </div>
                    <span class="fw-medium text-muted">15 min ago</span>
                  </div>
                </a>
              </li>
              <li v-if="this.newLoanApplications != 0">
                <a
                  class="text-dark d-flex py-2"
                  href="#"
                  @click="gotoLoanApplication"
                >
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newLoanApplications
                      }}</span>
                      new loan applications
                    </div>
                    <span class="fw-medium text-muted">22 min ago</span>
                  </div>
                </a>
              </li>
              <li v-if="this.newPendingCheques != 0">
                <a class="text-dark d-flex py-2" href="#" @click="gotoPayments">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-times-circle text-danger"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newPendingCheques
                      }}</span>
                      Pending Cheques
                    </div>
                    <span class="fw-medium text-muted">26 min ago</span>
                  </div>
                </a>
              </li>
              <li v-if="this.newUnreconciled != 0">
                <a
                  class="text-dark d-flex py-2"
                  href="#"
                  @click="gotoBanktransactions"
                >
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-plus-circle text-primary"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newUnreconciled
                      }}</span>
                      Un-Reconciled Bank Transactions
                    </div>
                    <span class="fw-medium text-muted">33 min ago</span>
                  </div>
                </a>
              </li>
              <li v-if="this.newPendingReceiptsAllocations != 0">
                <a class="text-dark d-flex py-2" href="#" @click="gotoReceipts">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-user-plus text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      You have
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newPendingReceiptsAllocations
                      }}</span>
                      new Pending Receipts Allocations
                    </div>
                    <span class="fw-medium text-muted">41 min ago</span>
                  </div>
                </a>
              </li>
              <!-- <li>
                <a class="text-dark d-flex py-2" href="javascript:void(0)">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">3</span>
                      Journals Have not been posted to GL
                    </div>
                    <span class="fw-medium text-muted">42 min ago</span>
                  </div>
                </a>
              </li> -->
              <li v-if="this.newUnPostedExpenses != 0">
                <a class="text-dark d-flex py-2" href="#" @click="gotoExpenses">
                  <div class="flex-shrink-0 me-2 ms-3">
                    <i class="fa fa-fw fa-check-circle text-success"></i>
                  </div>
                  <div class="flex-grow-1 pe-2">
                    <div class="fw-semibold">
                      <span class="badge rounded-pill bg-primary ms-2">{{
                        this.newUnPostedExpenses
                      }}</span>
                      Expenses Have not been posted to GL
                    </div>
                    <span class="fw-medium text-muted">42 min ago</span>
                  </div>
                </a>
              </li>
            </ul>
            <div class="p-2 border-top text-center">
              <a class="d-inline-block fw-medium" href="javascript:void(0)">
                <i class="fa fa-fw fa-arrow-down me-1 opacity-50"></i> Load
                More..
              </a>
            </div>
          </div>
        </div>
        <div v-if="token != null" class="dropdown d-inline-block ms-2">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-gear"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"
              />
              <path
                d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"
              />
            </svg>
            <span class="d-none d-sm-inline-block ms-2"></span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <img
                class="img-avatar img-avatar48 img-avatar-thumb"
                src="assets/media/avatars/avatar10.jpg"
                alt=""
              />
              <div class="input-group input-group-sm">
                <input
                  type="text"
                  class="form-control form-control-alt"
                  placeholder="Search.."
                  id="page-header-search-input2"
                  name="page-header-search-input2"
                  autocomplete="off"
                />
                <span class="input-group-text border-0">
                  <i class="fa fa-fw fa-search"></i>
                </span>
              </div>
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/organization"
              >
                <span class="fs-sm fw-medium">Organization</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/imports"
              >
                <span class="fs-sm fw-medium">Import Data</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/users"
              >
                <span class="fs-sm fw-medium">Users</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/coa"
              >
                <span class="fs-sm fw-medium">Chart of Accounts </span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/savingstype"
              >
                <span class="fs-sm fw-medium">Saving Products</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/loantype"
              >
                <span class="fs-sm fw-medium">Loan Products</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/banksetup"
              >
                <span class="fs-sm fw-medium">Banks Setup</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/employers"
              >
                <span class="fs-sm fw-medium">Employers</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/approvers"
              >
                <span class="fs-sm fw-medium">Approvers</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="/users"
              >
                <span class="fs-sm fw-medium">Users & Staff</span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
          </div>
        </div>
        <div v-if="token != null" class="dropdown d-inline-block ms-2">
          <button
            type="button"
            class="btn btn-sm btn-alt-secondary d-flex align-items-center"
            id="page-header-user-dropdown"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-question-circle"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
              />
              <path
                d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"
              />
            </svg>
            <span class="d-none d-sm-inline-block ms-2"></span>
            <i
              class="fa fa-fw fa-angle-down d-none d-sm-inline-block opacity-50 ms-1 mt-1"
            ></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
            aria-labelledby="page-header-user-dropdown"
            style="width: 300px"
          >
            <div
              class="p-3 text-center bg-body-light border-bottom rounded-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-telephone-outbound"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511zM11 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V1.707l-4.146 4.147a.5.5 0 0 1-.708-.708L14.293 1H11.5a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <p class="mt-2 mb-0 fw-medium">Contact is</p>
              <p class="mb-0 text-muted fs-sm fw-medium">
                Your can reach to us through the following contacts
              </p>
            </div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="#"
                @click="gotoContacts"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"
                  />
                </svg>
                <span class="fs-sm fw-medium">Email us </span>
                <span class="badge rounded-pill bg-primary ms-2">3</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="be_pages_generic_profile.html"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-whatsapp"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                  />
                </svg>
                <span class="fs-sm fw-medium">Whatsapp</span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>
              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="javascript:void(0)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="green"
                  class="bi bi-messenger"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"
                  />
                </svg>
                <span class="fs-sm fw-medium">Messenger</span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>
              </a>
            </div>
            <div role="separator" class="dropdown-divider m-0"></div>
            <div class="p-2">
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_lock.html"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-bug-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M4.978.855a.5.5 0 1 0-.956.29l.41 1.352A4.985 4.985 0 0 0 3 6h10a4.985 4.985 0 0 0-1.432-3.503l.41-1.352a.5.5 0 1 0-.956-.29l-.291.956A4.978 4.978 0 0 0 8 1a4.979 4.979 0 0 0-2.731.811l-.29-.956z"
                  />
                  <path
                    d="M13 6v1H8.5v8.975A5 5 0 0 0 13 11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 1 0 1 0v-.5a1.5 1.5 0 0 0-1.5-1.5H13V9h1.5a.5.5 0 0 0 0-1H13V7h.5A1.5 1.5 0 0 0 15 5.5V5a.5.5 0 0 0-1 0v.5a.5.5 0 0 1-.5.5H13zm-5.5 9.975V7H3V6h-.5a.5.5 0 0 1-.5-.5V5a.5.5 0 0 0-1 0v.5A1.5 1.5 0 0 0 2.5 7H3v1H1.5a.5.5 0 0 0 0 1H3v1h-.5A1.5 1.5 0 0 0 1 11.5v.5a.5.5 0 1 0 1 0v-.5a.5.5 0 0 1 .5-.5H3a5 5 0 0 0 4.5 4.975z"
                  />
                </svg>
                <span class="fs-sm fw-medium">Report a Bug</span>
                <span class="badge rounded-pill bg-primary ms-2">1</span>

              </a>
              <a
                class="dropdown-item d-flex align-items-center justify-content-between"
                href="op_auth_signin.html"
              >
                <span class="fs-sm fw-medium">Log Out</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
// import AuthService from "@/auth/AuthService";

import { getAPI } from "@/axios-api.js";
import { mapGetters, mapActions } from "vuex";

// const auth = new AuthService();
// import { mapState } from "vuex";
// import Profile from '../views/Profile';
export default {
  name: "Nav-bar",
  components: {},
  data() {
    return {
      is_staff: "",
      logo: "",
      admincheck: [],
      is_member: 0,
      membercount: "",
      authenticated: false,
      message: "",
    };
  },
  created() {
    // this.countadmin();
    this.becomememberhide();
    this.fetchOrg();
    this.fetchMembers();
    this.fetchUserinfo();
    this.fetchLoans();
    this.fetchPayments();
    this.fetchBanktransactions();
    this.fetchReceipts();
    this.fetchExpenses();
  },
  mounted() {
    this.admincheck = this.allorg;

    getAPI
      .get("sys_config/api/v1/logoFile/", {
        params: {
          company_id: this.companyid3,
        },
      })
      .then((response) => {
        this.logoinfo = response.data.results;
        this.logo = this.logoinfo[0].logo;
      });
  },

  methods: {
    ...mapActions([
      "fetchMembers",
      "fetchOrg",
      "fetchUserinfo",
      "fetchLoans",
      "fetchPayments",
      "fetchBanktransactions",
      "fetchReceipts",
      "fetchExpenses",
    ]),

    gotocreateorganization() {
      this.$router.push("createorganization");
    },

    gotoMemberApplication() {
      this.$router.push("memberapplications");
    },

    gotoLoanApplication() {
      this.$router.push("loanapplications");
    },

    gotoPayments() {
      this.$router.push("payments");
    },

    gotoBanktransactions() {
      this.$router.push("BankingActivities");
    },

    gotoReceipts() {
      this.$router.push("receipts");
    },

    gotoExpenses() {
      this.$router.push("expenses");
    },

    gotoContacts() {
      this.$router.push("contacts");
    },

    gotoDashboard() {
      this.$router.push("/DashBoards");
    },

    gotologin() {
      window.location.replace("/login");
    },
    gotoSignup() {
      window.location.replace("/register");
    },

    countadmin: function () {
      if (this.organizationdetails === 1) {
        this.$router.push("/members");
        //disable button id checkadmin
      } else {
        document.getElementById("checkadmin").hidden = true;
        this.message = "You are not an admin";
      }
    },
    becomememberhide: function () {
      // async function to cont member from memberDetails
      getAPI
        .get("/members/api/v1/MemberDetails/", {
          params: { email: this.email },
        })
        .then((res) => {
          this.membercount = res.data.count;
        });
      if (this.membercount === 1) {
        this.message = "you are already a member";
      } else {
        this.message = "";
      }
    },
    logout: function () {
      this.$store.dispatch("userLogout").then(() => {
        window.localStorage.clear();

        window.location.replace("/");
      });
    },
  },
  computed: {
    // computed: mapState(["token"]),
    // ...mapState(["org1"]),
    ...mapGetters([
      "allMembers",
      "allOrg",
      "allUser",
      "allLoans",
      "allPayments",
      "allBanktransactions",
      "allReceipts",
      "allExpenses",
    ]),
    token() {
      return this.$store.state.accessToken;
    },
    email() {
      return this.$store.state.email;
    },
    username() {
      return this.$store.state.username;
    },

    id() {
      return this.$store.state.id;
    },
    first_name() {
      if (this.$store.state.first_name != null) {
        return this.$store.state.first_name;
      } else {
        return null;
      }
    },
    last_name() {
      if (this.$store.state.first_name != null) {
        return this.$store.state.last_name;
      } else {
        return null;
      }
    },

    memberfirstname() {
      if (this.allMembers.length > 0) {
        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].first_name;
      } else {
        return null;
      }
    },

    memberlastname() {
      if (this.allMembers.length > 0) {
        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].last_name;
      } else {
        return null;
      }
    },

    memberaccounname() {
      if (this.allorg.length > 0) {
        return null;
      } else {
        if (this.allmember.length > 0) {
          return this.$store.getters.allMembers.filter(
            (item) => item.email == this.email
          )[0].account_no;
        } else {
          return null;
        }
      }
    },

    usercompanyid() {
      if (this.allmember.length > 0) {
        return this.$store.getters.allMembers.filter(
          (item) => item.email == this.email
        )[0].company_id;
      } else {
        return null;
      }
    },
    staffcheck() {
      return this.$store.state.is_staff;
    },
    memberdetails() {
      var x = 1;
      var y = 2;
      if (this.allmember != "") {
        return x;
      } else {
        return y;
      }
    },
    organizationdetails() {
      var x = 1;
      var y = 2;
      if (this.allorg != "") {
        return x;
      } else {
        return y;
      }
    },

    orgname() {
      if (this.allorg.length > 0) {
        return this.allorg[0].organization_name;
      } else {
        return null;
      }
    },

    allorg() {
      return this.$store.getters.allOrg.filter(
        (item) => item.admin_email == this.email
      );
    },
    allmember() {
      return this.$store.getters.allMembers.filter(
        (item) => item.email == this.email
      );
    },

    allNewMembers() {
      return this.$store.getters.allMembers.filter(
        (item) =>
          item.company_id == this.companyid3 && item.Application_Status == false
      );
    },

    allNewLoans() {
      return this.$store.getters.allLoans.filter(
        (item) => item.company_id == this.companyid3 && item.Status == 0
      );
    },

    allPendingCheques() {
      return this.$store.getters.allPayments.filter(
        (item) => item.company_id == this.companyid3 && item.posted == false
      );
    },
    allPendingReconciliations() {
      return this.$store.getters.allBanktransactions.filter(
        (item) => item.company_id == this.companyid3 && item.Reconciled == false
      );
    },
    allPendingAllocations() {
      return this.$store.getters.allReceipts.filter(
        (item) => item.company_id == this.companyid3 && item.allocated == false
      );
    },
    allPendingExpenses() {
      return this.$store.getters.allExpenses.filter(
        (item) => item.company_id == this.companyid3 && item.posted == false
      );
    },

    companyid3() {
      if (this.allmember.length <= 0) {
        return this.$store.getters.allOrg.filter(
          (item) => item.admin_email == this.email
        )[0].company_id;
      } else {
        return this.usercompanyid;
      }
    },

    // notifications Metrics
    newMemberApplications() {
      return Number(this.allNewMembers.length);
    },
    newLoanApplications() {
      return Number(this.allNewLoans.length);
    },
    newPendingCheques() {
      return Number(this.allPendingCheques.length);
    },
    newUnreconciled() {
      return Number(this.allPendingReconciliations.length);
    },
    newPendingReceiptsAllocations() {
      return Number(this.allPendingAllocations.length);
    },
    newUnPostedJournals() {
      return Number(1);
    },
    newUnPostedExpenses() {
      return Number(this.allPendingExpenses.length);
    },

    totalNotifications() {
      return (
        this.newMemberApplications +
        this.newLoanApplications +
        this.newPendingCheques +
        this.newUnreconciled +
        this.newUnPostedExpenses
      );
    },
  },
};
</script>

<style>
.navbar {
  min-height: 20px;
}
.navbar-brand {
  padding: 0 20px;
  height: 20px;
  line-height: 60px;
}

.navbar-toggle {
  /* (80px - button height 34px) / 2 = 23px */
  margin-top: 23px;
  padding: 9px 10px !important;
}

@media (min-width: 768px) {
  .navbar-nav > li > a {
    /* (80px - line-height of 27px) / 2 = 26.5px */
    padding-top: 10.5px;
    padding-bottom: 10.5px;
    line-height: 10px;
  }
}
</style>