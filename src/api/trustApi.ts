import { testTrustApiClient } from "./apiClient";
import { trustApiEndpoints } from "./endpoints";

export enum PaymentKind {
	INIT_STRATEGY = 'init_strategy'
}

interface CreatePaymentPayload {
	address: string;
	amount: string;
	token: string;
	kind: PaymentKind;
}

interface CreateStrategyPayload {
	collateral?: string;
	description?: string;
	products?: string[];
	trader_funds?: string;
}

export const TRUST_API = {
	createPayment: async (payload: CreatePaymentPayload) => {
		try {
			const response = await testTrustApiClient.post(
				trustApiEndpoints.createPayment,
				payload
			);
			return response.data;
		} catch (error) {
			console.error("Error creating payment:", error);
			throw error;
		}
	},

	getPaymentStatus: async (id: string) => {
		try {
			const response = await testTrustApiClient.post(
				trustApiEndpoints.getPaymentStatus,
				{ id }
			);
			return response.data;
		} catch (error) {
			console.error("Error getting payment status:", error);
			throw error;
		}
	},

	createStrategy: async (payload: CreateStrategyPayload) => {
		try {
			const response = await testTrustApiClient.post(
				trustApiEndpoints.createStrategy,
				payload
			);
			return response.data;
		} catch (error) {
			console.error("Error creating strategy:", error);
			throw error;
		}
	},

	getStrategy: async (id: string) => {
		try {
			const response = await testTrustApiClient.post(
				trustApiEndpoints.getStrategy,
				{ id }
			);
			return response.data;
		} catch (error) {
			console.error("Error getting strategy:", error);
			throw error;
		}
	},

	getStrategyList: async () => {
		try {
			const response = await testTrustApiClient.post(
				trustApiEndpoints.getStrategyList,
				{ count: 0, offset: 0 }
			);
			return response.data;
		} catch (error) {
			console.error("Error getting strategy list:", error);
			throw error;
		}
	},
};
