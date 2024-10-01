import { createBrowserRouter, RouterProvider } from "react-router-dom";
import OverviewPage from "./components/pages/OverviewPage";
import TransactionsPage from "./components/pages/TransactionsPage";
import BudgetsPage from "./components/pages/Budgets";
import PotsPage from "./components/pages/PotsPage";
import RecurringBillsPage from "./components/pages/RecurringBillsPage";
import RootPage from "./components/pages/RootPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: "/transactions", element: <TransactionsPage /> },
      { path: "/budgets", element: <BudgetsPage /> },
      { path: "/pots", element: <PotsPage /> },
      { path: "/recurring-bills", element: <RecurringBillsPage /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router} />;
}
