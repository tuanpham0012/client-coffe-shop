<template>
  <div class="card p-1">
    <div class="card-body fs-6 p-2">
      <form class="row g-3">
        <div class="col-12 mb-2">
          <label for="name" class="form-label">Tên</label>
          <input
            type="text"
            class="form-control form-control-sm"
            :class="{ 'is-invalid': error.name != null }"
            id="name"
            v-model="portal.name"
          />
          <div class="invalid-feedback" v-if="error.name != null">
            <span>{{ error.name }}</span>
          </div>
        </div>
        <div class="col-md-6 mt-0 mb-1">
          <label for="code" class="form-label">Mã</label>
          <input
            type="text"
            class="form-control form-control-sm"
            :class="{ 'is-invalid': error.code != null }"
            id="code"
            v-model="portal.code"
          />
        </div>
        <div class="col-md-6 mt-0 mb-1">
          <label for="tax-code" class="form-label">Mã Thuế</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="tax-code"
            v-model="portal.tax_code"
          />
        </div>
        <div class="col-md-6">
          <label for="city" class="form-label">Tỉnh/Thành Phố</label>
          <select
            id="city"
            class="form-select form-select-sm"
            v-model="portal.city_id"
            v-if="cities"
          >
            <option selected value="-1">---Chọn---</option>
            <option
              v-for="(item, index) in cities.data"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="district" class="form-label">Quận/Huyện</label>
          <select
            id="district"
            class="form-select form-select-sm"
            v-model="portal.district_id"
            v-if="districts"
            :disabled="portal.city_id == -1 || loading == true"
          >
            <option selected value="-1">---Chọn---</option>
            <option
              v-for="(item, index) in districts.data"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
        <div class="col-md-6">
          <label for="ward" class="form-label">Phường/Xã</label>
          <select
            id="ward"
            class="form-select form-select-sm"
            v-if="wards"
            v-model="portal.ward_id"
            :disabled="portal.district_id == -1 || loading == true"
          >
            <option selected value="-1">---Chọn---</option>
            <option
              v-for="(item, index) in wards.data"
              :key="index"
              :value="item.id"
            >
              {{ item.prefix + " " + item.name }}
            </option>
          </select>
        </div>
        <div class="col-md-12 m-1">
          <label for="address" class="form-label">Địa chỉ</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="address"
            v-model="portal.address"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="hotline" class="form-label">Hotline</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="hotline"
            v-model="portal.hotline"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="website" class="form-label">Website</label>
          <input
            type="text"
            class="form-control form-control-sm"
            id="website"
            v-model="portal.website"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="startTime" class="form-label">Giờ mở</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="startTime"
            v-model="portal.start_time"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="endTime" class="form-label">Giờ đóng</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="endTime"
            v-model="portal.end_time"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="morningStart" class="form-label">Ca sáng</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="morningStart"
            v-model="portal.morning_start"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="morningEnd" class="form-label">.</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="morningEnd"
            v-model="portal.morning_end"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="afternoonStart" class="form-label">Ca chiều</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="afternoonStart"
            v-model="portal.afternoon_start"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="afternoonEnd" class="form-label">.</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="afternoonEnd"
            v-model="portal.afternoon_end"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="night_start" class="form-label">Ca tối</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="night_start"
            v-model="portal.night_start"
          />
        </div>
        <div class="col-md-6 mb-1">
          <label for="nightEnd" class="form-label">.</label>
          <input
            type="time"
            class="form-control form-control-sm"
            id="nightEnd"
            v-model="portal.night_end"
          />
        </div>
        <div class="col-12">
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="save()"
            v-if="props.portalData == null"
          >
            Thêm
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm me-1"
            @click="save()"
            v-if="props.portalData != null"
          >
            Cập nhật
          </button>
          <button
            type="button"
            class="btn btn-primary btn-sm"
            v-if="props.portalData != null"
            @click="toggleCancel()"
          >
            Hủy
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script setup>
import { ref, onBeforeMount, computed, watch, reactive } from "vue";
import { useStore } from "vuex";
import axios from "../../../stores/axios-config";
import { url_portal } from "../../../stores/url-config";

const props = defineProps({
  portalData: {
    type: Object,
    default: function () {
      return null;
    },
  },
});

const emits = defineEmits(["cancel-data"], ["success"]);

const store = useStore();
const cities = computed(() => store.state.base.cities ?? []);
const districts = computed(() => store.state.base.districts ?? []);
const wards = computed(() => store.state.base.wards ?? []);
const loading = computed(() => store.state.base.loading ?? false);

const portal = reactive({
  id: -1,
  name: "",
  code: "",
  tax_code: "",
  city_id: -1,
  district_id: -1,
  ward_id: -1,
  address: "",
  phone_number: "",
  website: "",
  start_time: "08:00",
  end_time: "23:30",
  morning_start: "07:00",
  morning_end: "11:59",
  afternoon_start: "12:00",
  afternoon_end: "17:29",
  night_start: "17:30",
  night_end: "23:59",
  start_date: "2000-09-09",
});

const error = reactive({
  name: null,
  code: null,
  tax_code: null,
  city_id: null,
  district_id: null,
  ward_id: null,
  address: null,
  phone_number: null,
  website: null,
  start_time: null,
  end_time: null,
  morning_start: null,
  morning_end: null,
  afternoon_start: null,
  afternoon_end: null,
  night_start: null,
  night_end: null,
  start_date: null,
});

watch(
  () => ({ ...portal }),
  (newValue, oldValue) => {
    // console.log(oldValue);
    console.log(newValue);
    if (newValue.city_id != oldValue.city_id && newValue.city_id != -1) {
      //portal.district_id = -1;
      getListDistrict();
    }
    if (
      newValue.district_id != oldValue.district_id &&
      newValue.district_id != -1
    ) {
      //portal.ward_id = -1;
      getListWard();
    }
  }
);

watch(props, () => {
  if (props.portalData != null) {
    portal.id = props.portalData.id;
    portal.name = props.portalData.name;
    portal.code = props.portalData.code;
    portal.tax_code = props.portalData.tax_code;
    portal.city_id = props.portalData.city_id;
    portal.district_id = props.portalData.district_id;
    portal.ward_id = props.portalData.ward_id;
    portal.address = props.portalData.address;
    portal.phone_number = props.portalData.phone_number;
    portal.website = props.portalData.website;
    portal.start_time = props.portalData.start_time;
    portal.end_time = props.portalData.end_time;
    portal.morning_start = props.portalData.morning_start;
    portal.morning_end = props.portalData.morning_end;
    portal.afternoon_start = props.portalData.afternoon_start;
    portal.afternoon_end = props.portalData.afternoon_end;
    portal.night_start = props.portalData.night_start;
    portal.night_end = props.portalData.night_end;
    portal.start_date = props.portalData.start_date;
  } else {
    portal.id = -1;
    portal.name = "";
    portal.code = "";
    portal.tax_code = "";
    portal.city_id = -1;
    portal.district_id = -1;
    portal.ward_id = -1;
    portal.address = "";
    portal.phone_number = "";
    portal.website = "";
    portal.start_time = "08:00";
    portal.end_time = "23:30";
    portal.morning_start = "07:00";
    portal.morning_end = "11:59";
    portal.afternoon_start = "12:00";
    portal.afternoon_end = "17:29";
    portal.night_start = "17:30";
    portal.night_end = "23:59";
    portal.start_date = "2000-09-09";
  }
});

const toggleCancel = () => {
  emits("cancel-data");
};

const getListCity = () => {
  store.dispatch("base/getListCities", { country_id: 244 });
};
const getListDistrict = () => {
  store.dispatch("base/getListDistricts", { city_id: portal.city_id });
};
const getListWard = () => {
  store.dispatch("base/getListWards", { district_id: portal.district_id });
};

const save = () => {
  if (portal.id == -1) {
    axios({
      method: "POST",
      url: url_portal.RESOURCE,
      data: {
        id: portal.id,
        name: portal.name,
        code: portal.code,
        tax_code: portal.tax_code,
        city_id: portal.city_id == -1 ? null : portal.city_id,
        district_id: portal.district_id == -1 ? null : portal.district_id,
        ward_id: portal.ward_id == -1 ? null : portal.ward_id,
        address: portal.address,
        phone_number: portal.phone_number,
        website: portal.website,
        start_time: portal.start_time,
        end_time: portal.end_time,
        morning_start: portal.morning_start,
        morning_end: portal.morning_end,
        afternoon_start: portal.afternoon_start,
        afternoon_end: portal.afternoon_end,
        night_start: portal.night_start,
        night_end: portal.night_end,
        start_date: portal.start_date,
      },
    })
      .then((res) => {
        console.log(res.data);
        emits("success");
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    axios({
      method: "PUT",
      url: url_portal.RESOURCE + "/" + portal.id,
      data: {
        id: portal.id,
        name: portal.name,
        code: portal.code,
        tax_code: portal.tax_code,
        city_id: portal.city_id == -1 ? null : portal.city_id,
        district_id: portal.district_id == -1 ? null : portal.district_id,
        ward_id: portal.ward_id == -1 ? null : portal.ward_id,
        address: portal.address,
        phone_number: portal.phone_number,
        website: portal.website,
        start_time: portal.start_time,
        end_time: portal.end_time,
        morning_start: portal.morning_start,
        morning_end: portal.morning_end,
        afternoon_start: portal.afternoon_start,
        afternoon_end: portal.afternoon_end,
        night_start: portal.night_start,
        night_end: portal.night_end,
        start_date: portal.start_date,
      },
    })
      .then((res) => {
        console.log(res.data);
        emits("success");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

onBeforeMount(() => {
  getListCity();
});
</script>
<style lang=""></style>
