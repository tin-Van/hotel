import React from "react";
function Sreach() {
    return (
        <div class="sreach-form">
            <form method="post">
			<div class="card p-3">
				<div class="card-body row ">
					<div class="col-md-3 text-start" >
						<label class="form-label" for="departureLocation">Điểm đi:</label>
						<select class="form-control js-example-basic-single" id="myInput"
							//  style="width: 250px; font-size: 16px"
							required>
							<option ></option>
						</select>
					</div>
					<div class="col-md-3">
							<label class="form-label"></label> &ensp; 
                            <img src="../assets/img/logo.svg" alt="switch location"
								class="my-auto switch-location" onclick="swapLocations()"/>
					</div>
					<div class="col-md-3 text-start">
						<div class="single-model-search">
							<label class="form-label" for="destinationLocation">Đến
								đến:</label> <select class="form-control js-example-basic-single"
								id="myInput2"
								// style="width: 250px; font-size: 16px;" 
                                required>
								<option></option>
							</select>
						</div>
					</div>
					<div class="col-md-3">
						<div class="single-model-search text-start">
							<label class="form-label " for="departureDate">Ngày đi:</label> <input
								type="text" id="departureDate"
								class="custom-input h-75"
                                //  style="width: 250px; font-size: 16px" 
                                />
						</div>
					</div>
					<div class="text-center mt-3">
						<button class="h-100 btn btn-primary" type="submit">Tìm
							chuyến xe</button>
					</div>
				</div>
			</div>
		</form>
        </div>

    );
}

export default Sreach;