"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const planGroups = {
  "Stellar 1-Step": [
    { size: "$6k", fee: "$66", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
    { size: "$15k", fee: "$120", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
    { size: "$25k", fee: "$210", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
  { size: "$50k", fee: "$350", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" }, 
  { size: "$100k", fee: "$550", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
   { size: "$200k", fee: "$1100", phase1: "10%", maxLoss: "7%", dailyLoss: "3% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
  ],
  "Stellar 2-Step": [
    { size: "$6k", fee: "$59", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
    { size: "$15k", fee: "$110", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
    { size: "$25k", fee: "$190", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
  { size: "$50k", fee: "$290", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
   { size: "$100k", fee: "$550", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
   { size: "$200k", fee: "$1100", phase1: "8%", phase2: "5%", maxLoss: "10%", dailyLoss: "4% ", news: false, split: "80%", minDays: "5 Days", withdrawal: "21 Days" },
  ],
  "Stellar Instant": [
    { size: "$5k", fee: "$180", phase1: "—", phase2: "—", maxLoss: "4%", dailyLoss: "2% ", news: true, split: "80%", minDays: "0 Days", withdrawal: "Instant" },
    { size: "$10k", fee: "$350", phase1: "—", phase2: "—", maxLoss: "4%", dailyLoss: "2% ", news: true, split: "80%", minDays: "0 Days", withdrawal: "Instant" },
    { size: "$20k" , fee: "$690", phase1: "—", phase2: "—", maxLoss: "4%", dailyLoss: "2% ", news: true, split: "80%", minDays: "0 Days", withdrawal: "Instant" },
  ],
};

const rows = [
  { label: "Phase 1 Profit Target", key: "phase1" },
  { label: "Phase 2 Profit Target", key: "phase2" },
  { label: "Maximum Loss Limit", key: "maxLoss" },
  { label: "Daily Loss Limit", key: "dailyLoss" },
  { label: "News Trading", key: "news" },
  { label: "Performance Reward", key: "split" },
  { label: "Minimum Trading Days", key: "minDays" },
  { label: "First Withdrawal", key: "withdrawal" },
];

export default function AccountSizeTable() {
  const [activeStellar, setActiveStellar] = useState("Stellar 1-Step");

  // Mobile size menu
  const sizes = [...new Set(planGroups[activeStellar].map(plan => plan.size))];
  const [activeSize, setActiveSize] = useState(sizes[0]);

  // Plans to show on mobile (filtered)
  const mobilePlans = planGroups[activeStellar].filter(plan => plan.size === activeSize);

  // Check if Phase 2 exists in any plan (for conditional rendering)
  const showPhase2 = planGroups[activeStellar].some(plan => plan.phase2);

  // Filter rows if Phase 2 does not exist
  const filteredRows = rows.filter(row => row.key !== "phase2" || showPhase2);

  return (
    <>
      <Navbar />

      {/* Stellar menu */}
      <div className="flex justify-center gap-2 py-4 flex-wrap">
        {Object.keys(planGroups).map(menu => (
          <button
            key={menu}
            onClick={() => {
              setActiveStellar(menu);
              const newSizes = [...new Set(planGroups[menu].map(p => p.size))];
              setActiveSize(newSizes[0]);
            }}
            className={`px-4 py-2 rounded-full text-sm transition ${
              activeStellar === menu
                ? "bg-indigo-600 text-white"
                : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
            }`}
          >
            {menu}
          </button>
        ))}
      </div>

      {/* DESKTOP: show all sizes as cards */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
        {planGroups[activeStellar].map((plan, idx) => (
          <div key={idx} className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white rounded-xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{plan.size}</h3>
              <span className="text-sm text-indigo-200">Fee: {plan.fee}</span>
            </div>
            <div className="space-y-2 text-sm">
              {filteredRows.map(row => (
                <div key={row.key} className="flex justify-between">
                  <span className="text-indigo-300">{row.label}</span>
                  <span>{typeof plan[row.key] === "boolean" ? "—" : plan[row.key]}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-sm hover:bg-indigo-700">
              Get Plan
            </button>
          </div>
        ))}
      </div>

      {/* MOBILE: show size menu + filtered plan */}
      <div className="md:hidden px-4 space-y-6">
        {/* Size menu */}
        <div className="flex justify-center gap-2 py-2 flex-wrap mb-4">
          {sizes.map(size => (
            <button
              key={size}
              onClick={() => setActiveSize(size)}
              className={`px-4 py-1 rounded-full text-sm transition ${
                activeSize === size
                  ? "bg-indigo-500 text-white"
                  : "bg-indigo-100 text-indigo-700 hover:bg-indigo-200"
              }`}
            >
              {size}
            </button>
          ))}
        </div>

        {/* Filtered mobile plan cards */}
        {mobilePlans.map((plan, idx) => (
          <div key={idx} className="bg-gradient-to-br from-indigo-900 to-indigo-800 text-white rounded-xl p-5 shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">{activeStellar}</h3>
              <span className="text-sm text-indigo-200">Fee: {plan.fee}</span>
            </div>
            <div className="space-y-2 text-sm">
              {filteredRows.map(row => (
                <div key={row.key} className="flex justify-between">
                  <span className="text-indigo-300">{row.label}</span>
                  <span>{typeof plan[row.key] === "boolean" ? "✓" : plan[row.key]}</span>
                </div>
              ))}
            </div>
            <button className="mt-5 w-full rounded-lg bg-indigo-600 py-2 text-sm hover:bg-indigo-700">
              Get Plan
            </button>
          </div>
        ))}
      </div>

      <Footer />
    </>
  );
}
