<template>
  <div>
    <div class="content">
      <div class="row">
        <div class="col-sm-12">
          <div class="card">
            <div class="card-header">
              <h4 class="card-title">Chart of Account</h4>
            </div>
            <div class="card-body">
              <table class="table table-striped walla">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Account Name</th>
                    <th>Category</th>
                    <th>Code</th>
                    <th>Account Type</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in tableData" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td>{{ product.accountname }}</td>
                    <td>{{ product.description }}</td>
                    <td>{{ product.accountcode }}</td>
                    <td>{{ product.accounttype }}</td>
                    <td>
                      <button
                        class="btn btn-success btn-sm"
                        @click="editMode(product)"
                      >
                        <i class="fa fa-edit"></i>
                      </button>
                      <button
                        class="btn btn-danger btn-sm"
                        @click="deleteProduct(product.id)"
                      >
                        <i class="fa fa-trash"></i>
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
  </div>
</template>
<script>
import axios from "axios";
// import financeNav from "@/components/FinanceNav";
// import financeNav from "@/components/FinanceNav";
// import axios from "axios";
//Bootstrap and jQuery libraries
import "jquery/dist/jquery.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";
// import Popper from "vue-popperjs";
// import Tab from "@/components/Tab.vue";
// import Tabs from "@/components/Tabs.vue";

export default {
  name: "allocationsList",
  data() {
    return {
      tableData: [],
      add_product: false,
      editing: false,
    };
  },
  created() {
    this.getProducts();
  },

  methods: {
    getProducts() {
      axios
        .get("http://127.0.0.1:8000/finance/api/v1/Chartofaccounts/")
        .then((res) => {
          this.tableData = res.data.results;
          this.initDatatable();
        })

    },

    deleteProduct(id) {
      axios
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

    editMode(product) {
      this.$store.dispatch("updateProduct", product).then(() => {
        this.editing = true;
        this.add_product = true;
      });
    },
  },
};
</script>
