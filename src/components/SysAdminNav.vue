@
<template>
  <div class="sidebar">
    <router-link :to="{ path: 'organization' }">organization </router-link>
    <router-link :to="{ path: 'coa' }">Chart of accounts </router-link>
    <router-link :to="{ path: 'savingstype' }">Saving Products </router-link>
    <router-link :to="{ path: 'loantype' }">Loan Product </router-link>
    <router-link :to="{ path: 'banksetup' }">Banks Setup </router-link>
    <router-link :to="{ path: 'employers' }">Employers </router-link>
    <router-link :to="{ path: 'userrole' }">User Roles </router-link>
    <router-link :to="{ path: 'users' }">Users </router-link>
    <router-link :to="{ path: 'approvers' }">Approvers </router-link>
    <router-link :to="{ path: 'imports' }">Import Data </router-link>

    <router-link :to="{ path: 'members' }"
      ><font-awesome-icon icon="fa-solid fa-circle-left" />Back to
      Operations</router-link
    >

    <!-- <dropdown title="Users" v-bind="users"></dropdown> -->
  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      tableData: [],
      add_product: false,
      editing: false,
      users: [
        {
          title: 'User Roles ',
          link: '/userrole'
        },
        {
          title: 'Users',
          link: '/Users'
        },
        {
          title: 'Operations',
          link: '/members'
        }
      ],
      members: [
        {
          title: 'Saving Types ',
          link: '/savingstype'
        },
        {
          title: 'Employers',
          link: '/employers'
        },
        {
          title: 'Operations',
          link: '#'
        }
      ],
      loans: [
        {
          title: 'Loan Products ',
          link: '/loantype'
        },

        {
          title: 'Operations',
          link: '#'
        }
      ],
      accounting: [
        {
          title: 'Chart of Accounts ',
          link: '/coa'
        },

        {
          title: 'Operations',
          link: '#'
        }
      ],
      banks: [
        {
          title: 'Banks ',
          link: '/bank setup'
        },

        {
          title: 'Operations',
          link: '#'
        }
      ],
      organization: [
        {
          title: 'Organization Details ',
          link: '/organization'
        },

        {
          title: 'Operations',
          link: '#'
        }
      ]
    }
  },
  method: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
    },

    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
    }
  }
}
</script>

<style>
/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04aa6d;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {
    float: left;
  }
  div.content {
    margin-left: 0;
  }
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
</style>
