import { IReferral } from "@/types/referral.types";

export const modelReferralDataToChart = (referrals: IReferral[]) => {
  const chartData = [
    {
      name: "January",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "February",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "March",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "April",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    { name: "May", totalReferrals: 0, matchedReferrals: 0, conversionRate: 0 },
    { name: "June", totalReferrals: 0, matchedReferrals: 0, conversionRate: 0 },
    { name: "July", totalReferrals: 0, matchedReferrals: 0, conversionRate: 0 },
    {
      name: "August",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "September",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "October",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "November",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
    {
      name: "December",
      totalReferrals: 0,
      matchedReferrals: 0,
      conversionRate: 0,
    },
  ];

  referrals.forEach((user) => {
    if (!user?.createdAt) {
      return;
    }
    const monthIndex = new Date(user?.createdAt).getMonth(); // Get the month index

    // Update total referrals for the month
    chartData[monthIndex].totalReferrals += 1;

    // Update matched referrals for the month if applicable
    if (user.isMatched) {
      chartData[monthIndex].matchedReferrals += 1;
    }

    // Calculate conversion rate for the month
    chartData[monthIndex].conversionRate =
      (chartData[monthIndex].matchedReferrals /
        chartData[monthIndex].totalReferrals) *
      100;
  });

  return chartData;
};
