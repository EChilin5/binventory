import React from "react";
import "./Dashboard.scss";
import { Package, TriangleAlert, TrendingDown } from "lucide-react";
import DashboardCard from "../components/DashboardCard";
import RecentTransactionsCard from "../components/RecentTransactionsCard";
import RecentUpdates from "../components/RecentUpdates";

const Dashboard = () => {
  const today = new Date();
  const formatted = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div>
          <h1 className="dashboard-header-title">Dashboard</h1>
        </div>
        <div className="dashboard-header-sub-title">
          Overview of your inventory as of {formatted}
        </div>
      </div>
      <div className="dashboard-top-block">
        <div className="dashboard-top-block-item">
          {" "}
          <DashboardCard icon={Package} title="Total Products" value="15" />
        </div>
        <div className="dashboard-top-block-item">
          {" "}
          <DashboardCard icon={Package} title="Total Products" value="15" />
        </div>{" "}
      </div>

      <div className="dashboard-bottom">
        <div className="dashboard-bottom-left">
          <div>Recent transactions</div>
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
          <RecentTransactionsCard
            title="Coffee Beans 1kg"
            productsoldtype="Product Sold"
            name="Alex Morgan"
            date="Jul 23, 2026, 09:30 AM"
            productusetype="Customer order #4950"
          />
        </div>
        <div className="dashboard-bottom-right">
          <div className="dashboard-bottom-right-sold">
            <div>Top Sold & Used</div>
            <div>
              <ol>
                <li>
                  A4 Copy Paper (500 sheets) <span>25 units</span>
                </li>
                <li>
                  USB-C Cable 2m <span>25 units</span>
                </li>
                <li>
                  Energy Drink 250ml <span>25 units</span> (24-pack)
                </li>
              </ol>
            </div>
          </div>
          <div className="dashboard-bottom-right-updated">
            <div className="">Recently Updated</div>
            <div className="">
              <RecentUpdates
                name="Wireless Mouse"
                type="Electronics"
                amount="12 units"
                status="out of stock"
              />
            </div>
            <div className="">
              <RecentUpdates
                name="Wireless Mouse"
                type="Electronics"
                amount="12 units"
                status="out of stock"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
