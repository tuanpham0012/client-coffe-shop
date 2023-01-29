<template>
  <div class="row">
    <div class="col-lg-4 mb-2 pe-1 order-0">
      <create-portal :portalData="portal" @cancel-data="unsetPortal()" @success="getData()"/>
    </div>
    <div class="col-lg-8 mb-2 ps-1 order-1">
      <div class="card p-2">
        <div class="table-responsive text-nowrap">
          <table class="table table-bordered table-hover table-sm table-data">
            <thead>
              <tr>
                <th>Tên</th>
                <th>Mã</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody
              class="table-border-bottom-0"
              v-if="portals != null && portals.data.length > 0 && loading == false"
            >
              <tr v-for="(item, index) in portals.data" :key="index" @click="toggleRow(index)" :class="{'active' : i == index}">
                <td>
                  <i class="fab fa-angular fa-lg text-danger me-3"></i>
                  <strong>{{ item.name }}</strong>
                </td>
                <td>{{ item.code }}</td>
                <td>{{ item.address }}</td>
                <td><span class="badge bg-label-primary me-1">Active</span></td>
                <td>
                  <div class="dropdown">
                    <button
                      type="button"
                      class="btn p-0 dropdown-toggle hide-arrow"
                      data-bs-toggle="dropdown"
                    >
                      <i class="bx bx-dots-vertical-rounded"></i>
                    </button>
                    <div class="dropdown-menu">
                      <a class="dropdown-item" href="javascript:void(0);"
                        ><i class="bx bx-edit-alt me-1"></i> Edit</a
                      >
                      <a class="dropdown-item" href="javascript:void(0);"
                        ><i class="bx bx-trash me-1"></i> Delete</a
                      >
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <Loading />
            </tbody>
          </table>
        </div>

        <div class="mt-2">
          <nav aria-label="Page navigation">
                          <ul class="pagination pagination-sm">
                            <li class="page-item prev">
                              <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevrons-left"></i></a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0);">1</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0);">2</a>
                            </li>
                            <li class="page-item active">
                              <a class="page-link" href="javascript:void(0);">3</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0);">4</a>
                            </li>
                            <li class="page-item">
                              <a class="page-link" href="javascript:void(0);">5</a>
                            </li>
                            <li class="page-item next">
                              <a class="page-link" href="javascript:void(0);"><i class="tf-icon bx bx-chevrons-right"></i></a>
                            </li>
                          </ul>
                        </nav>
        </div>
        

      </div>
    </div>
  </div>
</template>
<script setup>
import CreatePortal from './CreatePortal.vue'
import { ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchValue = ref("");

const i = ref();
const portal = ref(null);

const loading = computed(() => store.state.base.loading ?? false);

const toggleRow = (index) => {
  i.value = index;
  portal.value = portals.value.data[index];
  //console.log(portal.value);
}

const portals = computed(() => store.state.user.portals ?? null);

const unsetPortal = () => {
  portal.value = null;
}

const getData = () =>
  store.dispatch("user/getListPortal", { search: searchValue.value });

onBeforeMount(() => {
  getData();
});
</script>
<style lang="scss" scoped>
.form-label{
  margin-bottom: 0 !important;
  font-weight: 400 !important;
}
table tbody .active{
  background-color: #e9e9f1;
  color: rgb(39, 37, 37);
}

table thead tr {
  position: sticky; 
  top: 0; 
  background-color: rgb(36, 50, 255); 
  z-index: 10;
  th {
    color: rgb(255, 255, 255) !important;
  }
}
.table-responsive{
  height:80vh;
  overflow: auto;
}
</style>
