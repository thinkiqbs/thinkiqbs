<template>
	<div id="app" class="container-fluid">
		<div class="row">
			<div class="col-2">
				<financeNav></financeNav>
			</div>

			<div class="col-10">
				<!-- <headerDashboard></headerDashboard> -->

				<!-- Body Arrea  -->


				<div class="mb-11" style="max-width: 98rem;">
					<div class="row">
						<accountingHeader></accountingHeader>

						<div class="col-sm-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">All Expenses</h4>
									<span>Org:{{ companyid3 }}</span>
									<!-- {{this.maincodeid}} -->
									<!-- {{glid}} -->
									<!-- {{this.expense}} -->

									<div class="btn-toolbar float-right align-items-center">
										<!---->

										<button
											class="btn btn-success"
											style="float: right;"
											type="button"
											data-toggle="modal"
											data-target="#Newexpense"
										>
											<i class="fa fa-plus-circle" aria-hidden="true"></i>

											Create a New Expense
										</button>

										<!--  -->

										<!--  -->
									</div>
								</div>



								<table class="table-hover table-borderless table-striped walla">
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">Email</th>
											<th scope="col">date</th>
											<th scope="col">REF#</th>
											<th scope="col">#No</th>
											<th scope="col">#notes</th>
											<th scope="col">#Account</th>
											<th scope="col">#Paid to</th>
											<th scope="col">#Amount</th>

											<th scope="col">#Action</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="loan in PaymentsStore" :key="loan.id">
											<td>{{ loan.id }}</td>
											<td>{{ loan.email }}</td>
											<td>{{ loan.transactiondate }}</td>
											<td>{{ loan.paymentRef }}</td>
											<td>{{ loan.paymentNumber }}</td>
											<td>{{ loan.notes }}</td>
											<td>{{ loan.account }}</td>
											<td>{{ loan.user_id }}</td>
											<td>{{ loan.amount }}</td>

											<td>
												<div v-if="loan.posted">
													<i class="fas fa-check"></i>
												</div>
												<div v-else>
													<button
														type="button"
														@click="change(loan)"
														class="btn btn-success"
														data-bs-dismiss="alert"
														aria-label="Close"
														data-toggle="modal"
														data-target="#postcheque"
													>
														Post Cheque
													</button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
								</div>
							</div>
						</div>
					</div>
				</div>



				<!-- end of body  -->



				
				<!-- Modal -->
				<div
					class="modal fade"
					id="exampleModal"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<div
											class="dropdown-menu dropdown-menu-md dropdown-menu-end p-0 border-0"
											aria-labelledby="page-header-user-dropdown"
											style=""
										>
											<div class="p-2">
												<router-link
													:to="{ path: 'expenses' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Expenses</router-link
												>
												<router-link
													:to="{ path: 'purchasing' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Purchasing</router-link
												>
												<router-link
													:to="{ path: 'sales' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Sales</router-link
												>

												<div
													role="separator"
													class="dropdown-divider m-0"
												></div>

												<router-link
													:to="{ path: 'journals' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Journals</router-link
												>

												<div
													role="separator"
													class="dropdown-divider m-0"
												></div>

												<router-link
													:to="{ path: 'documents' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Documents</router-link
												>
												<router-link
													:to="{ path: 'budgets' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Budgets
												</router-link>
												<router-link
													:to="{ path: 'taxes' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Taxes</router-link
												>

												<div
													role="separator"
													class="dropdown-divider m-0"
												></div>

												<router-link
													:to="{ path: 'accounting' }"
													class="dropdown-item d-flex align-items-center justify-content-between"
													>Genral Ledger</router-link
												>
											</div>
										</div>
								<h5 class="modal-title" id="exampleModalLabel">Modal title</h5>

								<button
									type="button"
									class="btn-close"
									data-bs-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<table class="table-hover table-borderless table-striped walla">
									<thead>
										<tr>
											<th scope="col">ID</th>
											<th scope="col">date</th>
											<th scope="col">REF#</th>
											<th scope="col">#Cheque No</th>
											<th scope="col">#notes</th>
											<th scope="col">#Bank</th>
											<th scope="col">#Paid to</th>
											<th scope="col">#Amount</th>
											<th scope="col">#Cleared</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="item in bankTrasactionStore" :key="item.id">
											<td>{{ item.id }}</td>
											<td>{{ item.Transaction_date }}</td>
											<td>{{ item.ReferenceNo }}</td>
											<td>{{ item.ChequeNo }}</td>
											<td>{{ item.notes }}</td>
											<td>{{ item.bank }}</td>
											<td>{{ item.Paid_to }}</td>
											<td>{{ item.Amount }}</td>
											<td>
												<div v-if="item.Reconciled == true">
													<i class="fa fa-check" aria-hidden="true"></i>
												</div>
												<div v-else>
													<button
														type="button"
														class="btn btn-success"
														@click="reconcileBanktransactions(item)"
													>
														<i class="fa fa-check" aria-hidden="true"></i>
													</button>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-bs-dismiss="modal"
								>
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save changes
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					class="modal fade"
					id="Editpayment"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Edit payments
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputEmail4">customer </label>
											<select
												v-model="paymentrcvd.customer"
												class="form-select form-select-sm"
												aria-label=".form-select-sm example"
											>
												<option
													v-for="option in options"
													:value="option.companyname"
													:key="option.id"
												>
													{{ option.companyname }}
												</option>
											</select>
										</div>
										<div class="form-group col-md-6">
											<label for="inputEmail4">Date </label>
											<input
												type="date"
												class="form-control"
												id="inputEmail4"
												v-model="paymentrcvd.transactiondate"
											/>
										</div>
										<div class="form-group col-md-9">
											<label for="inputEmail4">Description </label>
											<input
												type="text"
												class="form-control"
												id="inputEmail4"
												v-model="paymentrcvd.notes"
											/>
										</div>
									</div>

									<div class="form-group col-md-6">
										<label for="inputEmail4">Gl Account </label>
										<select
											v-model="paymentrcvd.glaccounts"
											class="form-select form-select-sm"
											aria-label=".form-select-sm example"
										>
											<option
												:key="option.id"
												v-for="option in coa"
												:value="option.accountname"
											>
												{{ option.accountname }}
											</option>
										</select>
									</div>

									<div class="form-group col-md-6">
										<label for="inputEmail4">Bank Account </label>
										<select
											v-model="paymentrcvd.bankaccount"
											class="form-select form-select-sm"
											aria-label=".form-select-sm example"
										>
											<option
												:key="option.id"
												v-for="option in coa"
												:value="option.accountname"
											>
												{{ option.accountname }}
											</option>
										</select>
									</div>

									<div class="form-row">
										<div class="form-group col-md-4">
											<label for="inputCity">payment number</label>
											<input
												type="number"
												class="form-control"
												id="inputCity"
												v-model="paymentrcvd.paymentNumber"
											/>
										</div>

										<div class="form-group col-md-4">
											<label for="inputZip">Ref#</label>
											<input
												type="text"
												class="form-control"
												id="inputZip"
												v-model="paymentrcvd.referenceNumber"
											/>
										</div>
										<div class="form-group col-md-4">
											<label for="inputZip">Amount </label>
											<input
												type="number"
												class="form-control"
												id="inputZip"
												v-model="paymentrcvd.amount"
											/>
										</div>
										<div class="form-group col-md-6">
											<label for="inputEmail4">payment mode </label>
											<select
												v-model="paymentrcvd.paymentmode"
												class="form-select form-select-sm"
												aria-label=".form-select-sm example"
											>
												<option
													:key="option.id"
													v-for="option in paymentmodes"
													:value="option.paymentmode"
												>
													{{ option.paymentmode }}
												</option>
											</select>
										</div>
										<div class="form-group col-md-10">
											<label for="inputZip">Notes#</label>
											<input
												type="textarea"
												class="form-control"
												id="inputZip"
												v-model="paymentrcvd.notes"
											/>
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									class="btn btn-primary"
									@click="updaterecords"
								>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>

				<div
					class="modal fade"
					id="AllocateReceipts"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Allocate Payments
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<!-- {{ this.myloansallocate }} -->
								<form>
									<div class="primary-info grey-bg">
										<div class="zb-txn-form">
											<div
												tabindex="-1"
												id="ember1177"
												class="no-outline ember-view"
											></div>

											<div class="form-group row">
												<label class="col-form-label col-lg-2 required"
													>Select Type
												</label>
												<div class="col-lg-5">
													<div
														id="ember1187"
														class="accounts-select ember-view"
													>
														<!-- {{this.NewSourceID}} -->
														{{ this.paymentrcvd.customer }}

														<!-- {{this.memberloanrepayment}} -->
													</div>
												</div>
											</div>

											<!---->
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Amount Received</label
										>
										<div class="col-lg-10">
											<div class="row">
												<div class="col-lg-3">
													<div class="input-group">
														<div class="input-group-prepend">
															<span class="input-group-text">KES </span>
														</div>
														<input
															id="ember1179"
															class="ember-text-field text-left ember-view form-control text-left"
															type="text"
															v-model="paymentrcvd.amount"
															disabled
														/>
													</div>
													<!---->
													<div
														id="ember1180"
														class="popover-container ember-view"
													>
														<div
															id="ember1181"
															class="d-none popover bs-popover-bottom ember-view pop-over-div"
														>
															<!---->
														</div>
													</div>
												</div>
												<label class="col-form-label col-lg-2 px-0"
													>Bank Charges (if any)</label
												>
												<!-- {{ this.paymentrcvd.transactiondate }} -->

												<div class="col-lg-2">
													<input
														id="ember1182"
														class="ember-text-field text-left ember-view form-control"
														type="text"
														disabled
													/>
												</div>
												<!---->
											</div>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Payment Date</label
										>
										<div class="col-lg-5">
											<input
												placeholder="dd MMM yyyy"
												id="ember1183"
												class="ember-text-field zf-date-picker date-picker ember-view form-control"
												type="date"
												v-model="paymentrcvd.transactiondate"
												disabled
											/>
											<!---->
										</div>
									</div>
								</form>

								<table class="table table-bordered responsive">
									<tbody>
										<tr>
											<td colspan="2">
												<small class="text-muted"
													><span></span>Total Received amount Bills
													<b style="color:Green;"
														>{{ paymentrcvd.amount }}
													</b></small
												>
												<div
													width="466"
													id="ember1743"
													class="zec-container ember-view"
												></div>
											</td>
										</tr>
										<tr>
											<td
												class="cursor-pointer"
												width="50%"
												data-ember-action=""
												data-ember-action-1744="1744"
											>
												<div class="legend over-flow" title=":this.totalAmount">
													<div class="card" style="responsive">
														<ul class="list-group list-group-flush">
															<li
																class="list-group-item"
																v-for="contribution in alldepositsmember"
																:key="contribution.id"
															>
																<div class="table-borderless">
																	<td>{{ contribution.SavingsType }}</td>
																	<td>{{ contribution.accountcode }}</td>
																	<td>
																		<input
																			type="text"
																			class="form-control"
																			placeholder="Recipient's username"
																			aria-label="Recipient's username with two button addons"
																			v-model="contribution.Amount"
																		/>
																	</td>
																	<td>
																		<button
																			class="btn btn-warning"
																			type="button"
																		>
																			<i
																				class="fa fa-pencil-square-o"
																				aria-hidden="true"
																			></i>
																		</button>
																		<button
																			class="btn btn-outline-secondary"
																			type="button"
																			@click="
																				postdepositsallocations(contribution)
																			"
																		>
																			<i
																				class="fa fa-check-square"
																				aria-hidden="true"
																			></i>
																		</button>
																	</td>
																</div>
															</li>
														</ul>
													</div>
												</div>
											</td>
											<td>
												<div
													id="ember1745"
													class="popover-container ember-view"
												>
													<div class="overdue-balance">
														<small class="text-overdue uppercase"
															>Overdue</small
														>
														<div title="KES0.00">
															<ul class="list-group list-group-flush">
																<li
																	class="list-group-item"
																	v-for="savedloans in Myloanscustomertype"
																	:key="savedloans.id"
																>
																	<div
																		class="table table-borderless responsive"
																	>
																		<td>{{ savedloans.id }}</td>
																		<td>{{ savedloans.loan_Type }}</td>
																		<td>{{ savedloans.gl_account }}</td>

																		<td>
																			<input
																				type="text"
																				class="form-control"
																				placeholder="Recipient's username"
																				aria-label="Recipient's username with two
																			button addons"
																				v-model="savedloans.Principle_Monthly"
																			/>
																		</td>
																		<td>
																			<input
																				type="text"
																				class="form-control"
																				placeholder="Recipient's username"
																				aria-label="Recipient's username with two button addons"
																				v-model="savedloans.Interest_Monthly"
																			/>
																		</td>
																		<td>
																			<i
																				class="fa fa-pencil-square-o"
																				aria-hidden="true"
																			></i>

																			<i
																				class="fa fa-check-square"
																				aria-hidden="true"
																				@click="
																					allocateloanspromise(savedloans)
																				"
																			></i>
																		</td>
																	</div>
																</li>
															</ul>
														</div>
													</div>
												</div>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>

				<!-- New Modal for employer allocations this will focus on control accounts -->

				<div
					class="modal fade"
					id="AllocateReceiptsEmployer"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">
									Distribute to Ledgers
								</h5>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="primary-info grey-bg">
										<div class="zb-txn-form">
											<div
												tabindex="-1"
												id="ember1177"
												class="no-outline ember-view"
											></div>

											<div class="form-group row">
												<label class="col-form-label col-lg-2 required"
													>Employer Email
												</label>
												<div class="col-lg-5">
													<div
														id="ember1187"
														class="accounts-select ember-view"
													>
														{{ this.paymentrcvd.customer }}
													</div>
												</div>
											</div>

											<!---->
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Amount Received</label
										>
										<div class="col-lg-10">
											<div class="row">
												<div class="col-lg-3">
													<div class="input-group">
														<div class="input-group-prepend">
															<span class="input-group-text">KES </span>
														</div>
														<input
															id="ember1179"
															class="ember-text-field text-left ember-view form-control text-left"
															type="text"
															v-model="paymentrcvd.amount"
														/>
													</div>
													<!---->
													<div
														id="ember1180"
														class="popover-container ember-view"
													>
														<div
															id="ember1181"
															class="d-none popover bs-popover-bottom ember-view pop-over-div"
														>
															<!---->
														</div>
													</div>
												</div>
												<label class="col-form-label col-lg-2 px-0"
													>Bank Charges (if any)</label
												>
												<div class="col-lg-2">
													<input
														id="ember1182"
														class="ember-text-field text-left ember-view form-control"
														type="text"
													/>
												</div>
												<!---->
											</div>
											<div class="form-check mt-3 cursor-pointer">
												<input
													id="ae3fdcc3a"
													class="ember-checkbox ember-view form-check-input"
													type="checkbox"
												/>
												<label for="ae3fdcc3a" class="form-check-label">
													Received full amount {{ this.PaymentAmount }}
												</label>
											</div>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Payment Date</label
										>
										<div class="col-lg-5">
											<input
												placeholder="dd MMM yyyy"
												id="ember1183"
												class="ember-text-field zf-date-picker date-picker ember-view form-control"
												type="date"
												v-model="paymentrcvd.transactiondate"
											/>
											<!---->
										</div>
									</div>
								</form>
								<hr />
								<div class="form-group row">
									<label class="col-form-label col-lg-2 required"
										>Deposits</label
									>
									<div class="col-lg-10">
										<div class="row">
											<div class="col-lg-3">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text">KES </span>
													</div>
													<input
														id="ember1179"
														class="ember-text-field text-left ember-view form-control text-left"
														type="text"
														v-model="this.totalEmployerDeposits"
													/>
												</div>
												<!---->
												<div
													id="ember1180"
													class="popover-container ember-view"
												>
													<div
														id="ember1181"
														class="d-none popover bs-popover-bottom ember-view pop-over-div"
													>
														<!---->
													</div>
												</div>
											</div>
											<label class="col-form-label col-lg-2 px-0"
												>Deposits Control Account
											</label>
											<div class="col-lg-2">
												<button
													class="btn btn-success"
													style="float: right;"
													@click="AllocateDepositsControls"
												>
													Distribute Deposits
												</button>
											</div>
											<!---->
										</div>
										<div class="form-check mt-3 cursor-pointer">
											<input
												id="ae3fdcc3a"
												class="ember-checkbox ember-view form-check-input"
												type="checkbox"
											/>
											<label for="ae3fdcc3a" class="form-check-label">
												Allocate full amount {{ this.totalEmployerDeposits }}
											</label>
										</div>
									</div>
								</div>
								<hr />
								<div class="form-group row">
									<label class="col-form-label col-lg-2 required">Loans</label>
									<div class="col-lg-10">
										<div class="row">
											<div class="col-lg-3">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text">KES </span>
													</div>
													<input
														id="ember1179"
														class="ember-text-field text-left ember-view form-control text-left"
														type="text"
														v-model="this.totalEmployerLoans"
													/>
												</div>
												<!---->
												<div
													id="ember1180"
													class="popover-container ember-view"
												>
													<div
														id="ember1181"
														class="d-none popover bs-popover-bottom ember-view pop-over-div"
													>
														<!---->
													</div>
												</div>
											</div>
											<label class="col-form-label col-lg-2 px-0"
												>Loan Control Account
											</label>
											<div class="col-lg-2">
												<button
													class="btn btn-success"
													style="float: right;"
													@click="AllocateLoansControls"
												>
													Distribute
												</button>
											</div>
											<!---->
										</div>
										<div class="form-check mt-3 cursor-pointer">
											<input
												id="ae3fdcc3a"
												class="ember-checkbox ember-view form-check-input"
												type="checkbox"
											/>
											<label for="ae3fdcc3a" class="form-check-label">
												Allocate full amount {{ this.totalEmployerLoans }}
											</label>
										</div>
									</div>
								</div>
								<hr />
								<div class="form-group row">
									<label class="col-form-label col-lg-2 required"
										>Interest</label
									>
									<div class="col-lg-10">
										<div class="row">
											<div class="col-lg-3">
												<div class="input-group">
													<div class="input-group-prepend">
														<span class="input-group-text">KES </span>
													</div>
													<input
														id="ember1179"
														class="ember-text-field text-left ember-view form-control text-left"
														type="text"
														v-model="this.totalEmployerInterest"
													/>
												</div>
												<!---->
												<div
													id="ember1180"
													class="popover-container ember-view"
												>
													<div
														id="ember1181"
														class="d-none popover bs-popover-bottom ember-view pop-over-div"
													>
														<!---->
													</div>
												</div>
											</div>
											<label class="col-form-label col-lg-2 px-0"
												>Interest Control Account
											</label>
											<div class="col-lg-2">
												<button
													class="btn btn-success"
													style="float: right;"
													@click="AllocateInterestControls"
												>
													Distribute
												</button>
											</div>
											<!---->
										</div>
										<div class="form-check mt-3 cursor-pointer">
											<input
												id="ae3fdcc3a"
												class="ember-checkbox ember-view form-check-input"
												type="checkbox"
											/>
											<label for="ae3fdcc3a" class="form-check-label">
												Allocate full amount {{ this.totalEmployerInterest }}
											</label>
										</div>
									</div>
								</div>
							</div>
							<div class="modal-footer">
								{{ this.message }}
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button type="button" class="btn btn-primary">
									Save
								</button>
							</div>
						</div>
					</div>
				</div>

				<!--  -->

				<div
					class="modal fade"
					id="Newpayments"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-xl">
						<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel"></h5>
								<div class="header">
									<!---->
									<h3 class="float-left">
										Record New Receipt
									</h3>
								</div>
								<button
									type="button"
									class="btn-close"
									data-dismiss="modal"
									aria-label="Close"
								></button>
							</div>
							<div class="modal-body">
								<form>
									<div class="primary-info grey-bg"></div>

									<div class="primary-info grey-bg">
										<div class="zb-txn-form">
											<div
												tabindex="-1"
												id="ember1177"
												class="no-outline ember-view"
											></div>

											<div class="form-group row">
												<label class="col-form-label col-lg-2 required"
													>Select Bank
												</label>

												<div class="col-lg-5">
													<div
														id="ember1187"
														class="accounts-select ember-view"
													>
														<div id="ember1188" class="ember-view">
															<div class="ac-box ">
																<div class="form-row">
																	<select
																		class="form-select"
																		aria-label="Default select example"
																		v-model="selectedbank"
																		value="Value"
																		@change="selectcustomertype"
																		placeholder="click to select customer type"
																		data-live-search="true"
																	>
																		<option
																			:key="option.id"
																			v-for="option in banks"
																			:value="option.id"
																		>
																			{{ option.bankname }}
																		</option>
																	</select>

																	{{ this.bankgl }}
																	{{ this.opt }}
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="form-group row">
												<label class="col-form-label col-lg-2 required"
													>Select Type
												</label>
												<div class="col-lg-5">
													<div
														id="ember1187"
														class="accounts-select ember-view"
													>
														<div id="ember1188" class="ember-view">
															<div class="ac-box ">
																<div class="form-row">
																	<select
																		class="form-select"
																		aria-label="Default select example"
																		v-model="checkpath"
																		value="Value"
																		@change="selectcustomertype"
																		placeholder="click to select customer type"
																		data-live-search="true"
																	>
																		<option
																			value="none"
																			selected
																			disabled
																			hidden
																		>
																			Select an Option
																		</option>
																		<option selected
																			>Open this select menu</option
																		>
																		<option value="1">Member</option>
																		<option value="2">Employer</option>
																		<option value="3">Customer</option>
																	</select>
																	<p>{{ this.checkpath }}</p>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>

											<div class="form-group row">
												<label class="col-lg-2 col-form-label required"
													>Customer Email {{ this.companyid3 }}</label
												>
												<div class="col-lg-5">
													<!-- customer area  -->

													<div class="form-row">
														<div class="form-group col-md-8">
															<div v-if="checkpath == '1'">
																<select
																	v-model="selectedemail"
																	class="form-select"
																	@change="paramfilter"
																>
																	<option
																		v-for="option in members1"
																		:value="option.email"
																		:key="option.id"
																	>
																		{{ option.email }}
																	</option>
																</select>
																<span style="color: green;">
																	You are receiving payment for x:
																	{{ this.selectedemail }}</span
																>
															</div>
															<div v-else-if="checkpath == 2">
																<select
																	v-model="employerid"
																	class="form-select"
																	@change="paramfilter2"
																>
																	<option
																		v-for="option in employer1"
																		:value="option.id"
																		:key="option.id"
																	>
																		{{ option.employer_name }}
																	</option>
																</select>
																<span style="color: green;"
																	>You are receiving payment for :
																	{{ this.employeremail }}</span
																>
															</div>
															<div v-else-if="checkpath == 3">
																<select v-model="selected" class="form-select">
																	<option
																		v-for="option in options"
																		:value="option.companyname"
																		:key="option.id"
																	>
																		{{ option.companyname }}
																	</option>
																</select>
																<span style="color: green;"
																	>You are receiving payment for :
																	{{ selected }}</span
																>
															</div>
															<div v-else>
																<H3 style="color: red;">
																	Nothing is selected !</H3
																>
															</div>
														</div>
													</div>

													<!--  -->

													<div class="clearfix">
														<div class="float-left">
															<div id="ember1227" class="ember-view">
																<div
																	class="info-item txn-salestax cursor-pointer"
																>
																	<!---->
																</div>
															</div>
														</div>
														<div
															id="ember1228"
															class="ember-view cursor-pointer mr-3 info-item"
														>
															<span class="btn-link">
																>&nbsp; View More Details
															</span>
															<!---->
															<div id="ember1229" class="ember-view">
																<div id="ember1230" class="ember-view"></div>
															</div>
														</div>
													</div>
												</div>
											</div>
											<!---->
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Amount Received {{ this.Payments.amount }}</label
										>
										<div class="col-lg-10">
											<div class="row">
												<div class="col-lg-3">
													<div class="input-group">
														<div class="input-group-prepend">
															<span class="input-group-text">KES </span>
														</div>
														<input
															id="ember1179"
															class="ember-text-field text-left ember-view form-control text-left"
															type="text"
															v-model="Payments.amount"
														/>
													</div>
													<!---->
													<div
														id="ember1180"
														class="popover-container ember-view"
													>
														<div
															id="ember1181"
															class="d-none popover bs-popover-bottom ember-view pop-over-div"
														>
															<!---->
														</div>
													</div>
												</div>
												<label class="col-form-label col-lg-2 px-0"
													>Bank Charges (if any)</label
												>
												<div class="col-lg-2">
													<input
														id="ember1182"
														class="ember-text-field text-left ember-view form-control"
														type="text"
													/>
												</div>
												<!---->
											</div>
											<div class="form-check mt-3 cursor-pointer">
												<input
													id="ae3fdcc3a"
													class="ember-checkbox ember-view form-check-input"
													type="checkbox"
													@change="receivefullamount"
												/>
												<label for="ae3fdcc3a" class="form-check-label">
													Received full amount {{ this.PaymentAmount }}
												</label>
											</div>
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Payment Date</label
										>
										<div class="col-lg-5">
											<input
												placeholder="dd MMM yyyy"
												id="ember1183"
												class="ember-text-field zf-date-picker date-picker ember-view form-control"
												type="date"
											/>
											<!---->
										</div>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Payment #</label
										>
										<!---->
										<div class="col-lg-5">
											<input
												disabled=""
												id="ember1184"
												class="ember-text-field ember-view form-control"
												type="text"
											/>
										</div>
										<i
											id="ember1185"
											class="tooltip-container form-control-help text-blue ember-view"
										>
										</i>
									</div>
									<div class="form-group row">
										<label class="col-form-label col-lg-2">Payment Mode</label>
										<div class="col-lg-5">
											<div id="ember1186" class="ember-view">
												<div class="ac-box ">
													<span class="ac-selected form-control " tabindex="0">
														<span data-integrity-label="">Cash</span
														><!---->
														<div><i class="zf-ac-toggler"> </i></div>
													</span>
												</div>

												<!---->
											</div>
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2 required"
											>Deposit To</label
										>
										<div class="col-lg-5">
											<div id="ember1187" class="accounts-select ember-view">
												<div id="ember1188" class="ember-view">
													<div class="ac-box ">
														<span
															class="ac-selected form-control "
															tabindex="0"
														>
															<span data-integrity-label="">Petty Cash</span
															><!---->
															<div>
																<i class="zf-ac-toggler"> </i>
															</div>
														</span>
													</div>

													<!---->
												</div>
											</div>
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2">Reference#</label>
										<div class="col-lg-5">
											<input
												maxlength="50"
												id="ember1189"
												class="ember-text-field ember-view form-control"
												type="text"
												v-model="Payments.paymentRef"
											/>
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2"
											>Notes# Describe the receipt & clearly indicate the period
											it will apply</label
										>
										<div class="col-lg-5">
											<input
												maxlength="50"
												id="ember1189"
												class="ember-text-field ember-view form-control"
												type="text"
												v-model="Payments.notes"
											/>
										</div>
									</div>

									<div class="form-group row">
										<label class="col-form-label col-lg-2">Tax deducted?</label>
										<div class="col-lg-10 align-self-center">
											<div class="form-check form-check-inline">
												<input
													id="ab8c5d324"
													class="ember-view form-check-input"
													type="radio"
													value="notds"
												/>
												<label for="ab8c5d324" class="form-check-label"
													>No Tax deducted</label
												>
											</div>
											<!---->
											<div class="form-check form-check-inline">
												<input
													id="a93299fd1"
													class="ember-view form-check-input"
													type="radio"
													value="incometds"
												/>
												<label for="a93299fd1" class="form-check-label">
													Yes, TDS
												</label>
											</div>
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<button
									type="button"
									class="btn btn-primary"
									@click="makepayments"
								>
									make payment
								</button>
								{{ this.message }}
							</div>
						</div>
					</div>
				</div>

				<!-- /form layouts -->

				<div
					class="modal fade"
					id="postcheque"
					tabindex="-1"
					aria-labelledby="exampleModalLabel"
					aria-hidden="true"
				>
					<div class="modal-dialog modal-lg">
						<div class="modal-content">
							<div class="modal-header">
								<h3 class="modal-title" id="exampleModalLabel">
									make cheque payment for
									{{ this.loan.email }}
								</h3>
								<button
									type="button"
									class="close"
									data-dismiss="modal"
									aria-label="Close"
								>
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div class="modal-body">
								<form>
									<div class="form-row">
										<div class="form-group col-md-6">
											<label for="inputEmail4">Date</label>
											<input
												type="date"
												v-model="payment.transactiondate"
												class="form-control"
												id="inputEmail4"
											/>
										</div>
										<div class="form-group col-md-6">
											<label for="inputEmail4">Payee</label>
											<input
												type="text"
												v-model="payment.user_id"
												class="form-control"
												id="inputEmail4"
											/>
										</div>
										<div class="form-group col-md-11">
											<label for="inputEmail4"> Notes</label>
											<input
												type="textarea"
												v-model="payment.notes"
												class="form-control"
												id="inputEmail4"
											/>
										</div>
									</div>
									<div class="form-row">
										<div id="v-model-select-dynamic" class="demo"></div>
										<div class="form-group col-md-6">
											<label for="selectedbank"> Select Bank</label>
											<select
												v-model="selectedbank"
												class="form-control"
												@change="bankglchange"
											>
												<option
													v-for="option in banks"
													:value="option.id"
													:key="option.id"
												>
													{{ option.bankname }}
												</option>
											</select>
											<!-- <span>Selected: {{ selectedbank }}</span> -->
											<span> Balance </span>{{ this.totalBank }}
											<!-- Bank Current Balance -->
										</div>
										<input
											type="text"
											v-model="this.bank.gl_account"
											class="form-control"
											id="glaccount"
										/>

										<div class="form-group col-md-3">
											<!-- <label for="inputEmail4" h>Reference No</label> -->
											<input
												type="text"
												interest_rate
												class="form-control"
												id="inputEmail4"
												v-model="payment.paymentNumber"
												hidden
											/>

											<label for="inputEmail4">#cheque No</label>
											<input
												type="text"
												interest_rate
												class="form-control"
												id="inputEmail4"
												v-model="payment.ChequeNo"
											/>
										</div>

										<div class="form-group col-md-3">
											<label for="inputCity">Amount</label>
											<input
												type="text"
												class="form-control"
												id="inputCity"
												v-model="payment.amount"
											/>
										</div>
										<div
											v-if="payment.amount > this.totalBank"
											class="form-group col-md-3"
										>
											Amount is larger then current bank balance
										</div>
									</div>
								</form>
							</div>
							<div class="modal-footer">
								<button
									type="button"
									class="btn btn-secondary"
									data-dismiss="modal"
								>
									Close
								</button>
								<div v-if="payment.amount < this.totalBank">
									<button
										@click="updateledgers(loan)"
										type="button"
										class="btn btn-primary"
									>
										make payment
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</template>

<script>

	import financeNav from "@/components/FinanceNav";
	// import headerDashboard from "@/components/headerdashboard.vue";
	import accountingHeader from "@/components/accountingHeader.vue";


	// import financeNav from "@/components/FinanceNav";
	import axios from "axios";
	//Bootstrap and jQuery libraries
	import "bootstrap/dist/css/bootstrap.min.css";
	import "jquery/dist/jquery.min.js";
	//Datatable Modules
	import "datatables.net-dt/js/dataTables.dataTables";
	import "datatables.net-dt/css/jquery.dataTables.min.css";
	import $ from "jquery";
	// import Popper from "vue-popperjs";
	import "vue-popperjs/dist/vue-popper.css";
	import { mapGetters, mapActions } from "vuex";

	export default {
		name: "Payment-Details",
		components: {
			financeNav,
			accountingHeader,


			
		},
		data() {
			return {
				glchanged: [],
				employeremail: "",
				employerid: "",
				selected_id: "",
				message: "",
				bankgl: "",
				start: "",
				end: "",
				errors: "",

				date1: "",
				date2: "",
				employer: "",
				employerID: "",

				checkedNames: [],
				path: "",
				gl_account: "",
				checkpath: "",
				tableData: [],
				add_product: false,
				editing: false,
				selected: "",
				selectedgl: "",
				selectedbank: "",
				selectedpaymentmode: "",
				selectedemail: "",
				options: [],
				optionsvar: "",
				invited: false,
				coa: [],
				banks: [],
				bank: [],
				employerprofile: [],
				selectedaccmaster: "",
				selecteloancontrol: "",
				selecteddepositscontrol: "",

				NewSourceID: 0,

				accmaster: [],
				loanscontrol: [],
				depositscontrol: [],

				paymentmodes: [],
				mode: "light",
				tabIndex: 0,
				modal: false,
				services: [
					{ title: "Make payment", link: "#" },
					{ title: "Make payment", link: "#" },
				],
				members: [],
				savings: [],
				loans: [],
				loan: [],
				// loan:'',
				loanschedule: [],
				documents: [],
				monthdeposits: [],

				payments: [],
				// myloans: [],
				payment: [],
				paymentsreceived: [],
				paymentrcvd: [],
				banktransactions: [],
				addvendors: [
					{
						id: "",
						companyname: "",
						companyemail: "",
						customerphone: "",
						primaryContact: "",
					},
				],
				Payments: {
					User_id: "",
					transactiondate: new Date().toISOString().slice(0, 10),
					paymentRef: "",
					Transaction_type: "pymt",
					amount: "",
					document: "MemP",
					paymentmode: this.selectedPaymentmode,
					paymentNumber: "",
					referenceNumber: "",
					notes: "",
					loan: "",
					interest: 0,
					deposits: "",
					Amount: "",
				},
				selectedPaymentmode: "",
				paymentmode: [],
				loantopay: {},

				addpayment: [
					{
						id: "",
						transactiondate: "",
						customer: "",
						glaccounts: "",
						bankaccount: "",
						paymentNumber: "",
						referenceNumber: "",
						amount: "",
						paymentmode: "",
						notes: "",
					},
				],
				isOpen: false, // Variable if the menu is open or closed
			};
		},

		created() {
			this.getProducts();
			// this.selectcustomertype();
			this.paramfilter();
			this.getProducts();
			this.initDatatable();
			this.initDatatable();
			this.fetchDocuments();
			this.fetchDeposits();
			this.fetchMembers();
			this.fetchLoans();
			this.fetchBanktransactions();
			this.fetchPaymentsmade();
			this.fetchPaymentsreceived();
			this.fetchBanks();
			this.fetchEmployerinfo();
			this.fetchGl();

			this.start = this.currentDate;
			// this.end = "2022-5-26";
		},

		mounted() {
			//API Call

			// axios
			// 	.get("/loans/api/v1/loans/", {
			// 		params: { email: this.email },
			// 	})
			// 	.then((res) => {
			// 		this.myloans = res.data.results.filter((l) => l.Status);
			// 		//   console.log("loans", this.loans)
			// 		$("#walla").DataTable();
			// 	});

			axios
				.get("/sys_config/api/v1/EmployerProfile/", {
					params: { employer_email: this.email },
				})
				.then((res) => {
					this.employerprofile = res.data.results.filter(
						(e) => e.company_id == this.companyid
					);
					this.initDatatable();
				});

			axios
				.get("/loans/api/v1/loans/", {
					params: { email: this.email },
				})
				.then((res) => {
					this.loansmonthly = res.data.results.filter(
						(l) => l.company_id == this.companyid
					);
					$("#walla").DataTable();
				});

			axios
				.get("/Savings/api/v1/Deposits/", { params: { email: this.email } })
				.then((res) => {
					this.mydeposits = res.data.results.filter(
						(d) => d.company_id == this.companyid
					);
					$("#mydeposits").DataTable();
				});

			axios
				.get("/loans/api/v1/loans/", {
					params: { email: this.email },
				})
				.then((res) => {
					this.loansmonthly = res.data.results.filter(
						(l) => l.company_id == this.companyid
					);
					$("#walla").DataTable();
				});

			axios
				.get("/loans/api/v1/loans/", {
					params: { organizationprofile: this.orgprofileid },
				})
				.then((res) => {
					this.loans = res.data.results.filter((l) => l.Status);
					//   console.log("loans", this.loans)
					$("#walla").DataTable();
				});

			axios
				.get("/finance/api/v1/loanschedule/", {
					params: { organizationprofile: this.orgprofileid },
				})
				.then((res) => {
					this.loanschedule = res.data.results.filter(
						(l) => l.company_id == this.companyid
					);
					$("#walla").DataTable();
				});

			axios
				.get("/finance/api/v1/documents/", {
					params: { organizationprofile: this.orgprofileid },
				})
				.then((res) => {
					this.documents = res.data.results.filter(
						(document) =>
							document.Document != document.Allocation &&
							document.company_id == this.companyid
					);
					$("#walla").DataTable();
				});
			axios
				.get("/finance/api/v1/Payments/", {
					params: { organizationprofile: this.orgprofileid },
				})
				.then((res) => {
					this.payments = res.data.results.filter(
						(p) => p.company_id == this.companyid
					);
					$("#walla").DataTable();
				});

			axios.get("/finance/api/v1/Bank_transactions/").then((res) => {
				this.banktransactions = res.data.results.filter(
					(banktransaction) => banktransaction.company_id == this.companyid
				);
				$("#walla").DataTable();
			});

			axios
				.get("/finance/api/v1/PaymentsReceived/", {
					params: { organizationprofile: this.orgprofileid },
				})
				.then((res) => {
					this.paymentsreceived = res.data.results.filter(
						(payment) => payment.company_id == this.companyid
					);
					$("#walla")
						.DataTable()
						.destroy();
				});
			axios
				.get("/finance/api/v1/Customer/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.options = res.data.results;
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});

			axios
				.get("/finance/api/v1/Chartofaccounts/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.coa = res.data.results.filter(
						(coa) => coa.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});
			axios
				.get("/finance/api/v1/paymentmodes/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.paymentmode = res.data.results;
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});

			axios
				.get("/members/api/v1/MemberDetails/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.members = res.data.results(
						(member) => member.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});
			axios
				.get("/members/api/v1/MonthDeposits/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.monthdeposits = res.data.results.filter(
						(monthdeposit) => monthdeposit.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});

			axios
				.get("/Savings/api/v1/Deposits/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.savings = res.data.results.filter(
						(saving) => saving.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});

			axios
				.get("/finance/api/v1/Chartofaccounts/", {
					params: {},
				})
				.then((res) => {
					this.coa = res.data.results.filter(
						(coa) => coa.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});

			axios
				.get("/finance/api/v1/Bank/", {
					params: { company_id: this.companyid3 },
				})
				.then((res) => {
					this.banks = res.data.results.filter(
						(item) => item.company_id == this.companyid3
					);
					$("#walla").DataTable();
					// console.log(res.data.results);
				})
				.catch((error) => {
					console.error(error);
				});
		},

		computed: {
			...mapGetters([
				"allDocuments",
				"allDeposits",
				"allMembers",
				"allLoans",
				"allOrg",
				"allUser",
				"allBanktransactions",
				"allPaymentsmade",
				"allPaymentsreceived",
				"allBanks",
				"allEmployer",
				"allGl",
			]),

			docidcheck() {
				return "deal" + this.paymentrcvd.paymentNumber + this.loan.id;
			},

			allDocumentsbank: function() {
				return this.$store.getters.allBanktransactions.filter(
					(item) =>
						item.company_id == this.companyid3 && item.bank == this.selectedbank
				);
			},

			totalBank: function() {
				var sum = 0;
				this.allDocumentsbank.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			//create a functions that gets the difference between two dates
			getDifference() {
				let today = new Date().toISOString().slice(0, 10);

				const startDate = this.end;
				const endDate = today;

				const diffInMs = new Date(endDate) - new Date(startDate);
				const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

				// alert(diffInDays);
				return Math.ceil(diffInDays / 30);
			},

			token() {
				return this.$store.state.accessToken;
			},
			email() {
				return this.$store.state.email;
			},
			user_id() {
				return this.$store.state.id;
			},
			firstname() {
				return this.$store.state.firstname;
			},
			currentDate() {
				const current = new Date();
				// const date = `${current.getDate()}/${current.getMonth() +
				// 	1}/${current.getFullYear()}`;
				const date = `${current.getFullYear()}-${current.getMonth() +
					1}-${current.getDate()}`;
				return date;
			},

			//create currentmonth function
			currentMonth() {
				const current = new Date();
				const month = current.getMonth() + 1;
				return month;
			},

			//create current  year function
			currentyear() {
				const current = new Date();
				const date = `${current.getFullYear()}`;
				return date;
			},

			// create current date function
			currentdate() {
				const current = new Date();
				const date = `${current.getDate()}/${current.getMonth() +
					1}/${current.getFullYear()}`;
				return date;
			},

			monthssince: function() {
				// const current = new Date();
				// const date = `${current.getFullYear()}-${current.getMonth() +
				// 	1}-${current.getDate()}`;
				// const date2 = `${this.memberloan.Loan_end_date}`;
				const date1 = "22/12/2021";
				const date3 = "22/12/2022";
				const diffTime = Math.abs(date3 - date1);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				return diffDays;
			},

			monthsTogo: function() {
				const current = new Date();
				const date = `${current.getFullYear()}-${current.getMonth() +
					1}-${current.getDate()}`;
				const date2 = `${this.memberloan.Loan_end_date}`;
				const date1 = new Date(date);
				const date3 = new Date(date2);
				const diffTime = Math.abs(date3 - date1);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				return diffDays;
			},

			//

			//get the difference between dates in days
			dayspassed: function() {
				const date1 = new Date("19/1/2021");
				const date2 = new Date(20 / 1 / 2021);
				const diffTime = Math.abs(date2 - date1);
				const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
				console.log(diffTime + " milliseconds");
				console.log(diffDays + " days");
				return diffDays + " days";
			},

			//create a date difference function

			totalAmount: function() {
				var sum = 0;
				this.monthdeposits.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},
			totalloan: function() {
				var sum = 0;
				this.all_loans1.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},
			totalinterest: function() {
				var sum = 0;
				this.all_loans1.forEach((e) => {
					sum += e.Interest_Monthly;
				});
				return sum;
			},
			totalcheques: function() {
				var sum = 0;
				this.payments.forEach((e) => {
					sum += e.amount;
				});
				return sum;
			},
			totalpaymentreceived: function() {
				var sum = 0;
				this.paymentsreceived.forEach((e) => {
					sum += e.amount;
				});
				return sum;
			},
			cashatbank: function() {
				var sum = 0;
				this.banktransactions.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			cashateachbank: function() {
				var sum = 0;
				this.banktransactions.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			PaymentAmount() {
				return Number(
					// this.Payments.deposit * 1 +
					// 	this.Payments.interest * 1 +
					// 	this.Payments.loan * 1

					this.monthlyloanvar + this.monthlydepositvar
				);
			},
			mymonthlydeposits: function() {
				var sum = 0;
				this.monthdeposits.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},
			monthlyloan: function() {
				var sum = 0;
				this.myloans.forEach((e) => {
					sum += e.Monthrepayment;
				});
				return sum;
			},

			monthlyloanvar: function() {
				var sum = 0;
				this.myloanvar.forEach((e) => {
					sum += e.Monthrepayment;
				});
				return sum;
			},

			monthlydepositvar: function() {
				var sum = 0;
				this.mydepositvar.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			companyid() {
				return this.companyid3;
			},

			companyid3() {
				return this.$store.getters.allOrg.filter(
					(item) => item.admin_email == this.email
				)[0].company_id;
			},

			orgprofileid() {
				return this.$store.getters.allOrg.filter(
					(item) => item.admin_email == this.email
				)[0].id;
			},

			PaymentsStore() {
				return this.$store.getters.allPaymentsmade.filter(
					(item) => item.company_id == this.companyid
				);
			},
			PaymentsReceivedStore() {
				return this.$store.getters.allPaymentsreceived.filter(
					(item) => item.company_id == this.companyid
				);
			},
			bankTrasactionStore() {
				return this.$store.getters.allBanktransactions.filter(
					(item) => item.company_id == this.companyid
				);
			},

			documentsStore() {
				return this.$store.getters.allDocuments.filter(
					(item) => item.company_id == this.companyid
				);
			},

			myloans: function() {
				return this.all_loans1.filter(
					(item) => item.email == this.selectedemail
				);
			},

			myloanvar: function() {
				if (this.checkpath == 1) {
					//will select only for members
					return this.all_loans1.filter(
						(item) => item.email == this.selectedemail
					);
				} else if (this.checkpath == 2) {
					return this.all_loans1.filter(
						(item) => item.EmployerProfile == this.employerid
					);
				} else {
					return this.all_loans1.filter(
						(item) => item.email == this.selectedemail
					);
				}
			},

			mydepositvar() {
				if (this.checkpath == 1) {
					//will select only for members
					return this.allDeposits.filter(
						(item) => item.email == this.selectedemail
					);
				} else if (this.checkpath == 2) {
					return this.allDeposits.filter(
						(item) => item.employer == this.employerid
					);
				} else {
					return this.all_loans1.filter(
						(item) => item.email == this.selectedemail
					);
				}
			},

			myloansallocate: function() {
				return this.all_loans1.filter(
					(item) =>
						item.email == this.selectedemail &&
						item.EmployerProfile == this.employerid
				);
			},

			// use for allocations

			myloans1: function() {
				return this.all_loans1.filter(
					(item) => item.email == this.paymentrcvd.customer
				);
			},

			Myloanscustomertype: function() {
				if (this.paymentrcvd.customertype == "1") {
					return this.all_loans1.filter(
						(item) => item.email == this.paymentrcvd.customer
					);
				} else {
					return this.all_loans1.filter(
						(item) => item.EmployerProfile == this.employerid
					);
				}
			},
			all_loans1: function() {
				return this.$store.getters.allLoans.filter(
					(item) => item.company_id == this.companyid3
				);
			},

			employeridno: function() {
				return this.$store.getters.allEmployer.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.employer_email == this.paymentrcvd.customer
				)[0].id;
			},

			alldeposits: function() {
				return this.$store.getters.allDeposits.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.employer == this.employerID
				);
			},

			alldepositsmember: function() {
				return this.$store.getters.allDeposits.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.email == this.paymentrcvd.customer
				);
			},

			allEmployerLoans: function() {
				return this.$store.getters.allLoans.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.EmployerProfile == this.employerID
				);
			},

			totalEmployerDeposits: function() {
				var sum = 0;
				this.alldeposits.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			totalEmployerLoans: function() {
				var sum = 0;
				this.allEmployerLoans.forEach((e) => {
					sum += e.Principle_Monthly;
				});
				return sum;
			},

			totalEmployerInterest: function() {
				var sum = 0;
				this.allEmployerLoans.forEach((e) => {
					sum += e.Interest_Monthly;
				});
				return sum;
			},

			//sum an array

			all_banks1: function() {
				return this.$store.getters.allBanks.filter(
					(item) => item.company_id == this.companyid3
				);
			},

			// loan for the person receving the cheque
			paymemtloan: function() {
				return this.$store.getters.allLoans.filter(
					(item) => item.id == this.payment.source_id
				);
			},

			memberloanrepayment: function() {
				return this.$store.getters.allDocuments.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.SourcedocID == this.NewSourceID &&
						item.Document == "loans" &&
						item.Transaction_type == "CR"
				);
			},

			memberLoancureentbalance: function() {
				var sum = 0;
				this.memberloanrepayment.forEach((e) => {
					sum += e.Amount;
				});
				return sum;
			},

			allGls1: function() {
				return this.$store.getters.allGl.filter(
					(item) => item.company_id == this.companyid3
				);
			},

			allbanks: function() {
				return this.$store.getters.allBanks.filter(
					(item) => item.company_id == this.companyid3
				);
			},
			members1: function() {
				if (this.checkpath == 2) {
					return this.$store.getters.allMembers.filter(
						(item) => item.company_id == this.companyid3
					);
				}
				if (this.checkpath == 2) {
					return this.$store.getters.allEmployer.filter(
						(item) => item.company_id == this.companyid3
					);
				} else {
					return this.$store.getters.allMembers.filter(
						(item) => item.company_id == this.companyid3
					);
				}
			},

			employer1: function() {
				return this.$store.getters.allEmployer.filter(
					(item) => item.company_id == this.companyid3
				);
			},
		},

		// 	monthdepositsy: function() {

		// 		return axios.get("/members/api/v1/MonthDeposits/").then((res)=>{this.x = res.data.results.filter(
		// 				(monthdeposit) => monthdeposit.company_id == this.companyid
		// 			)
		// 		},
		// 		(err)=>{
		// 			console.log(err)
		// 		})

		// 			},
		// },

		methods: {
			...mapActions([
				"fetchDeposits",
				"fetchDocuments",
				"fetchMembers",
				"fetchOrg",
				"fetchUserinfo",
				"fetchLoans",
				"fetchBanktransactions",
				"fetchPaymentsmade",
				"fetchPaymentsreceived",
				"fetchBanks",
				"fetchEmployerinfo",
				"fetchGl",
			]),

			loadstore() {
				this.fetchBanks();
				this.fetchGl();
			},

			changemain() {
				const optemployer = this.allEmployer.find(
					(o) => o.id === this.selectedemail
				);

				// const opt = this.allGls1.find((o) => o.maincode === this.optbank.gl_account);
				// console.log(opt)
				console.log(optemployer);
				// this.glchanged.account_type = opt.account_type;
				// this.glchanged.accountype_description = opt.accountype_description;
				// this.glchanged.maincode = opt.maincode;
				// this.glchanged.maincode_description = opt.maincode_description;
				// this.glchanged.parent_account = opt.parent_account;
				// this.glchanged.accountname = opt.accountname;

				// console.log(opt.account_type)
			},

			receivefullamount() {
				this.Payments.amount = this.PaymentAmount;
			},

			reconcileBanktransactions(item) {
				//create axios put for banktrasactions

				this.bankTransaction = item;

				axios
					.put(
						"/finance/api/v1/Bank_transactions/" +
							this.bankTransaction.id +
							"/",
						{
							User_id: this.bankTransaction.id,
							email: this.bankTransaction.email,
							Amount: this.bankTransaction.Amount,
							notes: this.bankTransaction.notes,
							Paid_to: this.bankTransaction.Paid_to,
							paid_to_email: this.bankTransaction.paid_to_email,
							paid_to_names: this.bankTransaction.paid_to_names,
							bank: this.bankTransaction.bank,
							Transaction_date: this.bankTransaction.Transaction_date,
							ReferenceNo: this.bankTransaction.ReferenceNo,
							last_updated: this.currentDate,
							created: this.bankTransaction.created,
							ChequeNo: this.bankTransaction.ChequeNo,
							Reconciled: true,
							gl_account: this.bankTransaction.gl_account,
							organizationprofile: this.bankTransaction.organizationprofile,

							company_id: this.bankTransaction.company_id,
						}
					)
					.then((response) => {
						response;

						// window.location.reload();
						this.$router.go(); // Refreshes page
						// confirm("We have received your application");
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			paramfilter() {
				const memberfilter = this.selectedemail;

				const optemployer = this.allEmployer.find(
					(o) => o.id === this.employerid
				);
				console.log(optemployer);

				this.employeremail = optemployer.employer_email;
				// this.selecteddepositscontrol = opt.deposits_control;
				// this.selectedaccmaster = opt.gl_account;
				// this.employerid = opt.id;

				if (this.checkpath == 1) {
					axios
						.get("/loans/api/v1/loans/", {
							params: { email: this.selectedemail },
						})
						.then((res) => {
							this.myloans = res.data.results;
							//   console.log("loans", this.loans)
							$("#walla").DataTable();
						});

					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { email: memberfilter },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				} else if (this.checkpath == 2) {
					axios
						.get("/loans/api/v1/loans/", {
							params: { EmployerProfile: this.employerid },
						})
						.then((res) => {
							this.myloans = res.data.results.filter((l) => l.Status);
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});

					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { employer: this.employerid },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				} else {
					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { employer: this.employerid },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				}
			},
			//
			paramfilter2() {
				const memberfilter = this.selectedemail;

				const optemployer = this.allEmployer.find(
					(o) => o.id == this.employerid
				);
				console.log(optemployer);

				this.employeremail = optemployer.employer_email;
				this.selectedemail = this.employeremail;
				// this.selecteddepositscontrol = opt.deposits_control;
				// this.selectedaccmaster = opt.gl_account;
				// this.employerid = opt.id;

				if (this.checkpath == 1) {
					axios
						.get("/loans/api/v1/loans/", {
							params: { email: this.selectedemail },
						})
						.then((res) => {
							this.myloans = res.data.results;
							//   console.log("loans", this.loans)
							$("#walla").DataTable();
						});

					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { email: memberfilter },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				} else if (this.checkpath == 2) {
					axios
						.get("/loans/api/v1/loans/", {
							params: { EmployerProfile: this.employerid },
						})
						.then((res) => {
							this.myloans = res.data.results.filter((l) => l.Status);
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});

					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { employer: this.employerid },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				} else {
					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { employer: this.employerid },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});
				}
			},

			// ÷

			selectcustomertype() {
				this.fetchEmployerinfo();

				const optbank = this.all_banks1.find((o) => o.id == this.selectedbank);
				this.bankgl = optbank.gl_account;

				const opt = this.allGls1.find((o) => o.maincode == this.bankgl);
				console.log("gl", opt);

				console.log(optbank);
				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;
			},
			bankglchange() {
				const opt = this.banks.find((o) => o.id === this.selectedbank);
				console.log(opt);
				this.bank.gl_account = opt.gl_account;
				this.bank.gl_accountname = opt.accountname;
				this.fetchBanktransactions();
				// console.log("bank transactions",this.allDocumentsbank)

				// this.Loans.Term = opt.maximum_loan_term;
			},

			loantypechange() {
				const opt = this.options.find((o) => o.saving_type === this.selected);
				console.log(opt);
				this.contribution.accountcode = opt.accountcode;
				// this.Loans.Term = opt.maximum_loan_term;
			},
			changeStyle() {
				if (this.mode === "dark") {
					this.mode = "light";
				} else {
					this.mode = "dark";
				}
			},

			updaterecords() {
				alert("coming soon");
			},

			changepymtrcvd(item) {
				this.fetchEmployerinfo();
				this.fetchLoans();
				this.paymentrcvd = item;

				const employernumber = this.$store.getters.allEmployer.filter(
					(item) =>
						item.company_id == this.companyid3 &&
						item.employer_email == this.paymentrcvd.customer
				)[0].id;

				this.employerID = employernumber;
				console.log("employerID", this.employerID);

				// alert(this.paymentrcvd.customertype);

				if (this.paymentrcvd.customertype == "1") {
					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { email: this.paymentrcvd.customer },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
							$("#walla").DataTable();
							// console.log(res.data.results);
						})
						.catch((error) => {
							console.error(error);
						});

					axios
						.get("/loans/api/v1/loans/", {
							params: { email: this.paymentrcvd.customer, Status: "4" },
						})
						.then((res) => {
							this.myloans = res.data.results.filter((l) => l.Status);
							//   console.log("loans", this.loans)
							$("#walla").DataTable();
						});
				}

				if (this.paymentrcvd.customertype == "2") {
					axios
						.get("/sys_config/api/v1/EmployerProfile/", {
							params: { employer_email: this.paymentrcvd.customer },
						})
						.then((res) => {
							this.employer = res.data.results;
							this.employerid = this.employer[0].id;
						})
						.catch((error) => {
							console.error(error);
						});

					axios
						.get("/members/api/v1/MonthDeposits/", {
							params: { employer: this.employerid },
						})
						.then((res) => {
							this.monthdeposits = res.data.results;
						})
						.catch((error) => {
							console.error(error);
						});

					this.myloans1 = this.myloansallocate;
				}
			},

			change(loan) {
				this.payment = loan;
				// this.fetchBanktransactions();
				// alert(loan.amount);
			},
			setLoan(info) {
				this.loan = info;

				console.log("info", this.loan);
			},
			addRow: function() {
				this.addvendors.push({
					id: "",
					companyname: "",
					companyemail: "",
					companyphone: "",
					primarContact: "",
				});
			},
			deleteRow(index) {
				this.addvendors.splice(index, 1);
			},
			showpopover() {
				var myPopover = this.active;
				myPopover.show();
			},
			addrecords() {
				axios
					.post(`/finance/api/v1/Vendor/`, {
						// names: '',
						// User_id: this.user_id,
						companyname: this.addvendors.companyname,
						companyemail: this.addvendors.companyemail,
						customerphone: this.addvendors.customerphone,
						primaryContact: this.addvendors.primaryContact,
						organizationprofile: this.orgprofileid,
					})
					.then((response) => {
						response;
						confirm("We have received your application");
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			//create a promise all axios function

			makepayments() {
				Promise.all([
					axios
						.post(`/finance/api/v1/PaymentsReceived/`, {
							// names: '',
							User_id: this.user_id,
							customer: this.selectedemail,
							customertype: this.checkpath,
							transactiondate: new Date().toISOString().slice(0, 10),
							paymentRef: this.Payments.paymentRef,
							Transaction_type: "pymt",
							amount: this.Payments.amount,
							document: "MemP",
							glaccounts: this.bankgl,
							paymentmode: this.Payments.paymentmode,
							// paymentNumber: this.Payments.paymentNumber,
							bankaccount: "undeposited funds",
							// paymentNumber: this.addpayment.paymentNumber,
							referenceNumber: this.Payments.paymentRef,
							paidthrough: this.selectedbank,
							notes: this.Payments.notes,
							loan: 0,
							interest: 0,
							deposits: 0,
							Amount: 1000,
							checkpath: this.checkpath,
							company_id: this.companyid,
						})
						.then((response) => {
							response;
							// window.location.reload();
							// alert("saved");
							this.fetchMembers(this.selected);

							this.fetchBanktransactions();

							this.fetchPaymentsreceived();

							//hide current modal
							this.message = "Record Added";
						})
						.catch((e) => {
							this.errors.push(e);
							this.message = JSON.stringify(e.response.data);
						}),

					axios
						.post(`/finance/api/v1/Bank_transactions/`, {
							// names: '',
							user_id: this.user_id,
							email: this.selectedemail,
							notes: "this is a receipt for Loans and Deposits ",
							Transaction_date: this.currentDate,
							bank: this.selectedbank,
							Paid_to: "loanrecpt",
							ChequeNo: this.Payments.paymentRef,
							Amount: this.Payments.amount,
							ReferenceNo: this.Payments.paymentRef,
							Reconciled: "False",
							organizationprofile: this.orgprofileid,
							company_id: this.companyid,
							bankaccount: "undeposited funds",
							gl_account: this.Payments.gl_account,
							paid_to_email: this.selectedemail,
							paid_to_names: "fill" + "names",
						})
						.then((response) => {
							response;
							// window.location.reload();
							// confirm("Loan Schedule updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							notes: "this is a receipt for Loans and Deposits ",
							Amount: this.Payments.amount,
							ReferenceNo: this.Payments.paymentRef,

							organizationprofile: this.orgprofileid,
							company_id: this.companyid,

							memberemail: this.selectedemail,
							DocumentID: "PYMTRCT" + this.Payments.paymentRef + "DR" + "r",
							Account: this.bankgl,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.bankgl,
							Accountcode_description: this.glchanged.accountname,
							Document: "bank",
							Credit: 0,
							Debit: this.Payments.amount,

							Transaction_type: "DR",
							Posting_Date: this.currentDate,
							Account_type: this.glchanged.account_type,
							accountype_description: this.glchanged.accountype_description,
							maincode: this.glchanged.maincode,
							maincode_description: this.glchanged.maincode_description,
						})
						.then((response) => {
							response;
							// window.location.reload();
							// confirm("Loan Schedule updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),
				]);
			},

			addpaymentsreceived() {
				Promise.all([
					axios
						.post(`/finance/api/v1/PaymentsReceived/`, {
							// names: '',
							User_id: this.user_id,
							customer: this.selectedemail,
							transactiondate: new Date().toISOString().slice(0, 10),
							paymentRef: this.Payments.paymentRef,
							Transaction_type: "pymt",
							amount: this.PaymentAmount,
							document: "MemP",
							glaccounts: this.selectedaccmaster,
							paymentmode: this.Payments.paymentmode,
							// paymentNumber: this.Payments.paymentNumber,
							bankaccount: "undeposited funds",
							// paymentNumber: this.addpayment.paymentNumber,
							referenceNumber: this.Payments.paymentRef,
							paidthrough: this.selectedbank,
							notes: this.Payments.notes,
							loan: 0,
							interest: 0,
							deposits: 0,
							Amount: 1000,
						})
						.then((response) => {
							response;

							alert("saved");
						})
						.catch((e) => {
							this.errors.push(e);
							this.message = JSON.stringify(e.response.data);
						}),

					axios
						.post(`/finance/api/v1/Bank_transactions/`, {
							// names: '',
							user_id: this.User_id,
							email: this.selectedemail,
							notes: this.Payments.notes,
							Transaction_date: this.currentDate,
							bank: this.selectedbank,
							Paid_to: "recpt",
							ChequeNo: this.Payments.paymentRef,
							Amount: this.PaymentAmount,
							ReferenceNo: this.Payments.paymentRef,
							Reconciled: "False",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							window.location.reload();
							confirm("Loan Schedule updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							memberemail: this.selectedemail,
							DocumentID: this.Payments.paymentRef + "CR" + "r",
							Account: this.selectedaccmaster,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.selectedaccmaster,
							Document: "receiptcontrol",
							Credit: this.PaymentAmount,
							Debit: 0,
							Amount: this.PaymentAmount,
							ReferenceNo: this.payment.paymentNumber,
							Transaction_type: "CR",
							Posting_Date: this.currentDate,
							Account_type: "Other Current Asset",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							// confirm("Loan Schedule updated");
							// alert("transactions updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							memberemail: this.selectedemail,
							DocumentID: this.Payments.paymentRef + "DR" + "d",
							Account: this.selectedaccmaster,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.selectedaccmaster,
							Document: "depositcontrol",
							Credit: 0,
							Debit: this.mymonthlydeposits,
							Amount: this.mymonthlydeposits * -1,
							ReferenceNo: this.Payments.paymentRef,
							Transaction_type: "DR",
							Posting_Date: this.currentDate,
							Account_type: "Other Current Asset",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							// confirm("Loan Schedule updated");
							// alert("transactions updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							memberemail: this.selectedemail,
							DocumentID: this.Payments.paymentRef + "DR" + "l",
							Account: this.selectedaccmaster,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.selectedaccmaster,
							Document: "loancontrol",
							Credit: 0,
							Debit: this.monthlyloan,
							Amount: this.monthlyloan * -1,
							ReferenceNo: this.payment.paymentNumber,
							Transaction_type: "DR",
							Posting_Date: this.currentDate,
							Account_type: "Other Current Asset",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							// confirm("Loan Schedule updated");
							// alert("transactions updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					// contra for control accounts
					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							memberemail: this.selectedemail,
							DocumentID: this.Payments.paymentRef + "CR" + "d",
							Account: this.selecteddepositscontrol,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.selecteddepositscontrol,
							Document: "depositcontrol",
							Credit: this.mymonthlydeposits,
							Debit: 0,
							Amount: this.mymonthlydeposits,
							ReferenceNo: this.Payments.paymentRef,
							Transaction_type: "CR",
							Posting_Date: this.currentDate,
							Account_type: "Other Current Asset",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							// confirm("Loan Schedule updated");
							// alert("transactions updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),

					axios
						.post(`/finance/api/v1/documents/`, {
							// names: '',
							user_Id: this.user_id,
							memberemail: this.selectedemail,
							DocumentID: this.Payments.paymentRef + "CR" + "l",
							Account: this.selecteloancontrol,
							Reporting: "Balance Sheet",
							Transaction_date: this.currentDate,
							Account_Code: this.selecteloancontrol,
							Document: "loancontrol",
							Credit: this.monthlyloan,
							Debit: 0,
							Amount: this.monthlyloan,
							ReferenceNo: this.Payments.paymentRef,
							Transaction_type: "CR",
							Posting_Date: this.currentDate,
							Account_type: "Other Current Asset",
							organizationprofile: this.orgprofileid,
						})
						.then((response) => {
							response;
							// confirm("Loan Schedule updated");
							// alert("transactions updated");
						})
						.catch((e) => {
							this.errors.push(e);
							alert(e);
						}),
				]);
			},

			updateledgers(loan) {
				this.loan = loan;
				this.loantopay = this.paymemtloan;

				const opt = this.allGls1.find(
					(o) => o.maincode == this.loantopay[0].gl_account
				);
				console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				axios
					.put("/loans/api/v1/loans/" + this.payment.source_id + "/", {
						User_id: this.loantopay[0].id,
						email: this.loantopay[0].email,
						Amount: this.loantopay[0].Amount,
						loan_Type: this.loantopay[0].loan_Type,
						interest: this.loantopay[0].interest,
						Interest_Monthly: this.loantopay[0].Interest_Monthly,
						Term: this.loantopay[0].Term,
						Status: this.loantopay[0].Status,
						TotalLoans: this.loantopay[0].TotalLoans,
						Disbursed: "True",
						Monthrepayment: this.newmonthlyRepayment,
						Principle_Monthly: this.loantopay[0].Principle_Monthly,
						Total_Loan: this.loantopay[0].Total_Loan,
						gl_account: this.loantopay[0].gl_account,
						organizationprofile: this.loantopay[0].organizationprofile,
						EmployerProfile: this.loantopay[0].EmployerProfile,
						company_id: this.loantopay[0].company_id,
						New_Term: 0,
						Topup_Amount: this.loantopay[0].Topup_Amount,
						NewMonthrepayment: this.newmonthlyRepayment,
						NewInterest_Monthly: this.newinterestmonthly,
						NewLoan: this.newloan,
						current_balance: this.loantopay[0].current_balance,
						noofmonthspaid: this.loantopay[0].noofmonthspaid,
						noofmonthspaidvar: this.loantopay[0].noofmonthspaidvar,
						income_account: this.loantopay[0].income_account,
						date_disbursed: this.currentDate,
					})
					.then((response) => {
						response;
						this.fetchDocuments();
						this.fetchDeposits();
						this.fetchMembers();
						this.fetchLoans();
						this.fetchBanktransactions();
						this.fetchPaymentsmade();
						this.fetchPaymentsreceived();
						// window.location.reload();
						// confirm("We have received your application");
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					}),
					Promise.all([
						axios
							.post(`/finance/api/v1/Bank_transactions/`, {
								// names: '',
								user_id: this.loan.user_Id,
								paid_to_email: this.payment.email,
								paid_to_names: "fill" + "names",
								notes: this.payment.notes,
								Transaction_date: this.currentDate,
								bank: this.selectedbank,
								Paid_to: this.payment.user_id,
								ChequeNo: this.payment.ChequeNo,
								Amount: this.payment.amount * -1,
								ReferenceNo: this.payment.paymentNumber + this.payment.ChequeNo,
								Reconciled: "False",
								organizationprofile: this.orgprofileid,
								gl_account: this.payment.gl_account,
								company_id: this.payment.company_id,
							})
							.then((response) => {
								response;

								// confirm("Loan Schedule updated");
							})
							.catch((e) => {
								this.errors.push(e);
								alert(e);
							}),

						// Credit the specific loan account
						axios
							.post(`/finance/api/v1/documents/`, {
								// names: '',
								user_Id: this.payment.user_id,
								memberemail: this.payment.email,
								DocumentID: this.payment.paymentNumber + "CR",
								SourcedocID: "LOAN" + this.payment.source_id,
								Account: this.bank.gl_account,
								Reporting: "Balance Sheet",
								Transaction_date: this.currentDate,
								Account_Code: this.payment.gl_account,
								Document: "loans",
								Credit: 0,
								Debit: this.payment.amount,
								Amount: this.payment.amount,
								ReferenceNo: this.payment.id + "DR" + "loans",
								Transaction_type: "DR",
								Posting_Date: this.currentDate,
								Account_type: this.glchanged.account_type,
								organizationprofile: this.orgprofileid,
								company_id: this.payment.company_id,
								notes: this.payment.notes,
								Accountcode_description: this.glchanged.accountname,
								accountype_description: this.glchanged.accountype_description,
								maincode: this.glchanged.maincode,
								maincode_description: this.glchanged.maincode_description,
							})
							.then((response) => {
								response;
								// confirm("Loan Schedule updated");
								// alert("transactions updated");

								// refresh current window
								// window.location.reload();
							})

							.catch((e) => {
								this.errors.push(e);
								alert(e);
							}),

						axios
							.post(`/finance/api/v1/documents/`, {
								// names: '',
								user_Id: this.payment.user_id,
								memberemail: this.payment.email,
								DocumentID: this.payment.paymentNumber + "CR" + "Bank",
								SourcedocID: "LOAN" + this.payment.source_id,
								Account: 1212000,
								Reporting: "Balance Sheet",
								Transaction_date: this.currentDate,
								Account_Code: this.bank.gl_account,
								Document: "bank",
								Credit: this.payment.amount,
								Debit: 0,
								Amount: this.payment.amount * -1,
								ReferenceNo: this.payment.id + "CR" + "bank",
								Transaction_type: "CR",
								Posting_Date: this.currentDate,
								Account_type: this.glchanged.account_type,
								organizationprofile: this.orgprofileid,
								company_id: this.payment.company_id,
								notes: this.payment.notes,
								Accountcode_description: this.glchanged.accountname,
								accountype_description: this.glchanged.accountype_description,
								maincode: this.glchanged.maincode,
								maincode_description: this.glchanged.maincode_description,
							})
							.then((response) => {
								response;
								// confirm("Loan Schedule updated");
								// alert("transactions updated");

								// refresh current window
								// window.location.reload();
							})

							.catch((e) => {
								this.errors.push(e);
								alert(e);
							}),

						axios
							.put(`/finance/api/v1/Payments/` + this.payment.id + "/", {
								// names: '',
								user_id: this.payment.user_id,
								source_id: this.payment.id,
								email: this.payment.email,
								paymentNumber: "PYMT" + Math.random(),
								transactiondate: this.payment.transactiondate,
								account: this.payment.gl_account,
								paymentRef: this.payment.paymentRef,
								amount: this.payment.amount,
								document: this.payment.document,
								paid: "True",
								notes: this.payment.notes,
								organizationprofile: this.payment.organizationprofile,
								gl_account: this.payment.gl_account,
								company_id: this.payment.company_id,
								posted: "true",
							})
							.then((response) => {
								response;
								// window.location.reload();
								// confirm("Loan Schedule updated");
							})
							.catch((e) => {
								this.errors.push(e);
								alert(e);
							}),
					]);

				this.fetchDocuments();

				this.fetchLoans();
				this.fetchBanktransactions();
				this.fetchPaymentsmade();
				this.fetchPaymentsreceived();

				this.$router.push({ name: "bank" });
			},

			postdepositsallocations(contribution) {
				this.loan = contribution;
				const opt = this.allGls1.find(
					(o) => o.maincode == this.loan.accountcode
				);

				const optbank = this.allBanks.find((o) => o.id == this.selectedbank);
				console.log(optbank);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.loan.email,
						DocumentID: "deal" + this.paymentrcvd.paymentNumber + this.loan.id,
						SourcedocID: "rcpt" + this.loan.id,
						Account: this.loan.accountcode,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: this.loan.accountcode,
						Document: "deposits",
						Amount: this.loan.Amount,
						Credit: this.loan.Amount,
						Debit: 0,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "CR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
						console.log("contribution", this.loan);
						alert("Deposits control updated");
						this.fetchDocuments();

						this.fetchLoans();

						this.fetchPaymentsreceived();
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			allocateinterest(loan) {
				this.loan = loan;

				const opt = this.allGls1.find(
					(o) => o.maincode == this.loan.income_account
				);
				console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.loan.user_id,
						memberemail: this.selectedemail,
						DocumentID: "Intal" + this.paymentrcvd.paymentNumber,
						Account: "Interest Income Control",
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: "",
						Document: "Allocation",
						Amount: this.totalinterest,
						Credit: this.totalinterest,
						Debit: 0,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "CR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
						alert("Deposits control updated");
						this.fetchDocuments();
						this.fetchDeposits();
						this.fetchMembers();
						this.fetchLoans();
						this.fetchBanktransactions();
						this.fetchPaymentsmade();
						this.fetchPaymentsreceived();
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			// Allocate Loans

			allocateloanspromise(savedloans) {
				// this.allocatedeposits = item;
				this.loan = savedloans;
				this.NewSourceID = "LOAN" + this.loan.id;
				this.end = this.loan.date_disbursed;
				// (this.date1 = this.currenDate),
				this.date2 = this.loan.date_disbursed;

				const opt = this.allGls1.find(
					(o) => o.maincode == this.loan.gl_account
				);
				// console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				const updateloandetails = axios
					.put("/loans/api/v1/loans/" + this.loan.id + "/", {
						User_id: this.loan.User_id,
						email: this.loan.email,
						Amount: this.loan.Amount,
						loan_Type: this.loan.loan_Type,
						interest: this.loan.interest,
						date_disbursed: this.loan.date_disbursed,
						Interest_Monthly: this.loan.Interest_Monthly,
						Term: this.loan.Term,
						Status: this.loan.Status,
						TotalLoans: this.loan.TotalLoans,
						Disbursed: "True",
						Monthrepayment: this.loan.Monthrepayment,
						Principle_Monthly: this.loan.Principle_Monthly,
						Total_Loan: this.loan.Total_Loan,
						gl_account: this.loan.gl_account,
						organizationprofile: this.loan.organizationprofile,
						EmployerProfile: this.loan.EmployerProfile,
						company_id: this.loan.company_id,
						New_Term: 0,
						Topup_Amount: this.loan.Topup_Amount,
						NewMonthrepayment: this.loan.NewMonthrepayment,
						NewInterest_Monthly: this.loan.NewInterest_Monthly,
						income_account: this.loan.income_account,
						NewLoan: this.loan.NewLoan,
						current_balance: this.memberLoancureentbalance,
						noofmonthspaid: this.getDifference,
						noofmonthspaidvar: this.loan.noofmonthspaidvar,
						last_payment_date: this.currentDate,
						last_payment_period: this.currentMonth,
						last_payment_year: this.currentyear,
						amount_expected: this.loan.Monthrepayment * this.getDifference,
						variation_amount:
							this.loan.Amount -
							this.memberLoancureentbalance -
							this.loan.Monthrepayment * this.getDifference,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// window.location.reload();
					})
					.catch((e) => {
						this.errors.push(e);
					});

				const deductloanrepayment = axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.loan.email,
						DocumentID: "loal" + this.paymentrcvd.paymentNumber + this.loan.id,
						SourcedocID: "LOAN" + this.loan.id,
						Account: this.loan.gl_account,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: this.loan.gl_account,
						Document: "loans",
						Amount: this.loan.Monthrepayment * -1,
						Credit: this.loan.Monthrepayment,
						Debit: 0,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "DR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
					})
					.catch((e) => {
						this.errors.push(e);
					});

				const incomeAdjustment = axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.loan.email,
						DocumentID:
							"IntInc" + this.paymentrcvd.paymentNumber + this.loan.id + "CR",
						SourcedocID: "LOAN" + this.loan.id,
						Account: this.loan.income_account,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: this.loan.income_account,
						Document: "income",
						Amount: this.loan.Interest_Monthly,
						Credit: this.loan.Interest_Monthly,
						Debit: 0,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "CR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
					})
					.catch((e) => {
						this.errors.push(e);
					});

				const incomefromasset = axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.loan.email,
						DocumentID: "intAdj" + this.paymentrcvd.paymentNumber + "DR",
						SourcedocID: "LOAN" + this.loan.id,
						Account: this.loan.gl_account,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: this.loan.gl_account,
						Document: "income",
						Amount: this.loan.Interest_Monthly * -1,
						Credit: 0,
						Debit: this.loan.Interest_Monthly,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "DR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});

				Promise.all([
					updateloandetails,
					deductloanrepayment,
					incomeAdjustment,
					incomefromasset,
				]);
			},

			AllocateDepositsControls() {
				this.fetchGl();
				const opt = this.allGls1.find((o) => o.maincode == 9000000);
				console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.paymentrcvd.customer,
						DocumentID: "emaldep" + this.paymentrcvd.paymentNumber,
						SourcedocID: "RCPT" + this.paymentrcvd.paymentNumber,
						Account: 9000000,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: 9000000,
						Document: "Control",
						Amount: this.totalEmployerDeposits,
						Credit: 0,
						Debit: this.totalEmployerDeposits,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "DR",
						Posting_Date: this.currentDate,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Account_type: this.glchanged.account_type,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						paymentnumber: this.paymentrcvd.paymentNumber,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
						this.message = "Deposits control updated";
						this.fetchDocuments();
						this.fetchDeposits();
						this.fetchMembers();
						this.fetchLoans();
						this.fetchBanktransactions();
						this.fetchPaymentsmade();
						this.fetchPaymentsreceived();
					})
					.catch((e) => {
						this.errors.push(e);

						alert(0);
					});
			},

			AllocateLoansControls() {
				const opt = this.allGls1.find((o) => o.maincode == 9000001);
				// console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;

				axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.paymentrcvd.customer,
						DocumentID: "emalloan" + this.paymentrcvd.paymentNumber,
						SourcedocID: "RCPT" + this.paymentrcvd.paymentNumber,
						Account: 9000001,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: 9000001,
						Document: "Control",
						Amount: this.totalEmployerLoans,
						Credit: this.totalEmployerLoans,
						Debit: 0,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "DR",
						Posting_Date: this.currentDate,

						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Account_type: this.glchanged.account_type,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						paymentnumber: this.paymentrcvd.paymentNumber,
						maincode_description: this.glchanged.maincode_description,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
						this.message = "Loans control updated";
						this.fetchDocuments();
						this.fetchDeposits();
						this.fetchMembers();
						this.fetchLoans();
						this.fetchBanktransactions();
						this.fetchPaymentsmade();
						this.fetchPaymentsreceived();
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			AllocateInterestControls() {
				const opt = this.allGls1.find((o) => o.maincode == 9000002);
				console.log(opt);

				this.glchanged.account_type = opt.account_type;
				this.glchanged.accountype_description = opt.accounttype_description;
				this.glchanged.maincode = opt.maincode;
				this.glchanged.maincode_description = opt.maincode_description;
				this.glchanged.parent_account = opt.parent_account;
				this.glchanged.accountname = opt.accountname;
				axios
					.post(`/finance/api/v1/documents/`, {
						// names: '',
						user_Id: this.user_id,
						memberemail: this.paymentrcvd.customer,
						DocumentID: "emalint" + this.paymentrcvd.paymentNumber,
						SourcedocID: "RCPT" + this.paymentrcvd.paymentNumber,
						Account: 9000002,
						Reporting: "Balance Sheet",
						Transaction_date: this.currentDate,
						Account_Code: 9000002,
						Document: "Control",
						Amount: this.totalEmployerInterest,
						Credit: 0,
						Debit: this.totalEmployerInterest,
						ReferenceNo: this.paymentrcvd.paymentNumber,
						Transaction_type: "DR",
						Posting_Date: this.currentDate,
						Account_type: this.glchanged.account_type,
						organizationprofile: this.orgprofileid,
						company_id: this.companyid,
						Accountcode_description: this.glchanged.accountname,
						accountype_description: this.glchanged.accountype_description,
						maincode: this.glchanged.maincode,
						maincode_description: this.glchanged.maincode_description,
						paymentnumber: this.paymentrcvd.paymentNumber,
					})
					.then((response) => {
						response;
						// confirm("Loan Schedule updated");
						this.message = "Interest control updated";
						this.fetchDocuments();
						this.fetchDeposits();
						this.fetchMembers();
						this.fetchLoans();
						this.fetchBanktransactions();
						this.fetchPaymentsmade();
						this.fetchPaymentsreceived();
					})
					.catch((e) => {
						this.errors.push(e);
						alert(e);
					});
			},

			allocatecontrols(item) {
				this.changepymtrcvd(item);

				this.AllocateInterestControls();
				this.AllocateLoansControls();
				this.AllocateDepositsControls();
			},

			getProducts(Exception) {
				axios
					.get("/members/api/v1/MemberDetails/")
					.then((res) => {
						this.tableData = res.data.results;
						this.initDatatable();
					})
					.catch((error) => Exception.handle(error));
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

<style lang="css"></style>
