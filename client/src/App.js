import "./App.css";
import DashBoard from "./pages/Dashboard/Dashboard";
import Hospital from "./pages/Hospital/HospitalBasePage";
import HospitalBooking from "./pages/HospitalBooking/HospitalBooking";
import { Route, Switch } from "react-router-dom";
import DashBoardHeader from "./organisms/DashBoardHeader/DashBoardHeader";
import Footer from "./molecules/DashboardFooter/Footer";
import SignupPage from "./pages/Signup/Signup";
import LoginPage from "./pages/Login/Login";
import DoctorConsult from "./pages/DoctorConsult/DoctorConsult";
import Pharmacypage from "./pages/pharmacypage/pharmacypage";
import CartPage from "./pages/CartPage/CartPage";
import Paymentpage from "./pages/PaymentPage/PaymentPage";

function App() {
  return (
    <div className="App">
      <DashBoardHeader />
      <Switch className="App__content">
        <Route path="/Signup" exact>
          <SignupPage />
        </Route>
        <Route path="/pharmacy" exact>
          <Pharmacypage />
        </Route>
        <Route path="/Login" exact>
          <LoginPage />
        </Route>
        <Route path="/hospital" exact>
          <Hospital />
        </Route>
        <Route path="/hospital/booking" exact>
          <HospitalBooking />
        </Route>
        <Route path="/cart" exact>
          <CartPage />
        </Route>
        <Route path="/payment" exact>
          <Paymentpage />
        </Route>
        <Route path="/consult" exact>
          <DoctorConsult />
        </Route>
        <Route path="*" >
          <DashBoard />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
