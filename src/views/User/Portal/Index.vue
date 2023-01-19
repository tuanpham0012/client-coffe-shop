<template>
  <div class="card">
    <div class="card p-5">
      <div class="table-responsive text-nowrap">
        <table class="table">
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
            v-if="portals != null && portals.data.length > 0"
          >
            <tr v-for="(item, index) in portals.data" :key="index">
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
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const searchValue = ref("");

const portals = computed(() => store.state.user.portals ?? null);

const getData = () =>
  store.dispatch("user/getListPortal", { search: searchValue.value });

onBeforeMount(async () => {
  await getData();
});
</script>
<style lang="">
</style>