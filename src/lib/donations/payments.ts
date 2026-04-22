type DonationInput = {
  amount: number;
  currency: "GHS" | "USD";
  cadence: "one-time" | "monthly";
};

export async function createDonationSession(input: DonationInput) {
  return {
    provider: "paystack-placeholder",
    status: "pending",
    ...input,
  };
}
