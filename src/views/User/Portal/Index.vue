<template>
  <div class="row">
    <div class="col-lg-5 mb-2 pe-1 order-0">
      <div class="card p-1">
        <div class="card-body fs-6">
          <div class="row">
            <div class="row col-lg-12">
              <label for="html5-text-input" class="col-md-3 col-form-label"
                >Tên</label
              >
              <div class="col-md-9">
                <input
                  class="form-control form-control-sm"
                  type="text"
                  value="Cyber Gaming"
                />
              </div>
            </div>
            <div class="row col-lg-6">
              <label for="html5-search-input" class="col-md-4 col-form-label"
                >Mã</label
              >
              <div class="col-md-8">
                <input
                  class="form-control form-control-sm"
                  type="search"
                  value="Search ..."
                />
              </div>
            </div>
            <div class="row col-lg-6">
              <label for="html5-email-input" class="col-md-5 col-form-label"
                >Mã thuế</label
              >
              <div class="col-md-7">
                <input
                  class="form-control form-control-sm"
                  type="email"
                  value="john@example.com"
                  id="html5-email-input"
                />
              </div>
            </div>
            <div class="row">
              <label for="smallSelect" class="col-md-3 form-label"
                >Small select 23 23</label
              >
              <div class="col-md-9">
                <select id="smallSelect" class="form-select form-select-sm">
                  <option>Small select</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
            </div>
            <div>
              <label for="smallSelect" class="form-label">Small select</label>
              <select id="smallSelect" class="form-select form-select-sm">
                <option>Small select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-2">
              <label for="smallSelect" class="form-label">Small select</label>
              <select id="smallSelect" class="form-select form-select-sm">
                <option>Small select</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </div>
            <div class="mb-3 row">
              <label for="html5-tel-input" class="col-md-2 col-form-label"
                >Hotline</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="tel"
                  value="90-(164)-188-556"
                  id="html5-tel-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label
                for="html5-datetime-local-input"
                class="col-md-2 col-form-label"
                >Datetime</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="datetime-local"
                  value="2021-06-18T12:30:00"
                  id="html5-datetime-local-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="html5-date-input" class="col-md-2 col-form-label"
                >Date</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="date"
                  value="2021-06-18"
                  id="html5-date-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="html5-month-input" class="col-md-2 col-form-label"
                >Month</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="month"
                  value="2021-06"
                  id="html5-month-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="html5-week-input" class="col-md-2 col-form-label"
                >Week</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="week"
                  value="2021-W25"
                  id="html5-week-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="html5-time-input" class="col-md-2 col-form-label"
                >Time</label
              >
              <div class="col-md-10">
                <input
                  class="form-control"
                  type="time"
                  value="12:30:00"
                  id="html5-time-input"
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="html5-color-input" class="col-md-2 col-form-label"
                >Color</label
              >
              <div class="col-md-2">
                <input
                  class="form-control"
                  type="color"
                  value="#666EE8"
                  id="html5-color-input"
                />
              </div>
            </div>
            <div class="row">
              <label for="html5-range" class="col-md-2 col-form-label"
                >Range</label
              >
              <div class="col-md-10">
                <input type="range" class="form-range mt-3" id="html5-range" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-7 mb-2 ps-1 order-1">
      <div class="card p-2">
        <div class="table-responsive text-nowrap">
          <table class="table table-hover table-sm table-data">
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