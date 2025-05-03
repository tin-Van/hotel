import React from "react";
import CustomSelect from "../hook/selectStyles";
import { useState } from "react";
import DatePicker from "../components/DatePicker";
import LocationSelect from "../components/Select";
function Sreach() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [selectedLocation2, setSelectedLocation2] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div class="sreach-form">
      <div class="card p-3">
        <div class="card-body row ">
          <div class="col-md-3 text-start">
            <label class="form-label" for="departureLocation">
              Điểm đi:
            </label>
            <LocationSelect
              selectedValue={selectedLocation}
              setSelectedValue={setSelectedLocation}
            />
          </div>
          <div class="col-md-3">
            <label class="form-label"></label> &ensp;
            <img
              src="../assets/img/logo.svg"
              alt="switch location"
              class="my-auto switch-location"
              onclick="swapLocations()"
            />
          </div>
          <div class="col-md-3 text-start">
            <div class="single-model-search">
              <label class="form-label" for="destinationLocation">
                Đến đến:
              </label>{" "}
              <LocationSelect
                selectedValue={selectedLocation2}
                setSelectedValue={setSelectedLocation2}
              />
            </div>
          </div>
          <div class="col-md-3">
            <div class="single-model-search text-start">
              <label class="form-label " for="departureDate">
                Ngày đi:
              </label>{" "}
              <DatePicker
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </div>
          </div>
          <div class="text-center mt-3">
            <button class="h-100 btn btn-primary" type="submit">
              Tìm chuyến xe
            </button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Sreach;
