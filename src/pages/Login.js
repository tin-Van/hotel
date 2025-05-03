import React from "react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, hoverEffect } from "../service/animationService";
function Login(){
    return(
         <motion.div {...fadeIn(1)}>
        <div class="container">
		<div class="row mt-5">
			<div class="col-md-6 text-center ">
				<h4 class="text-primary">Online Booking Mall</h4>
				<h2>Đặt vé nhanh, dễ dàng</h2>
			</div>
			<div class="col-md-6 card p-3 shadow-lg form-login">
				<form class="form form-control-sm"
					method="post">
					<div class="mb-3">
						<label class="form-label">Email của bạn</label>
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon1"><i
								class="fa-solid fa-user"></i></span> <input type="text"
								class="form-control" />
						</div>
					
					</div>
					<div class="mb-3">
						<label class="form-label">Password</label>
						<div class="input-group mb-3">
							<span class="input-group-text" id="basic-addon2"><i
								class="fa-solid fa-key"></i></span> <input type="password"
								class="form-control"  />
						</div>
					</div>

					
					<div class="mb-3">
						<a href="/forget"
							class="link-offset-2 link-underline link-underline-opacity-0">Forgot
							Password ?</a>
					</div>
					<button type="submit"
						class="mb-3 btn btn-primary d-grid gap-2 col-10 mx-auto">Login</button>

					<div class="mb-3">
						<p class="fs-6 text-center">
							Don't have an account ? <a href="/registration"
								class="link-offset-2 link-underline link-underline-opacity-0">Sign
								up</a>
						</p>
					</div>
				</form>

			</div>


		</div>
	</div>
    </motion.div>
    );
}
export default Login;