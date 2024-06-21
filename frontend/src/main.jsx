import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import View from "./pages/View";
import HomePage from "./pages/HomePage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgetPass/ForgotPassword";
import EmailSend from "./pages/ForgetPass/EmailSend";
import VerifyEmail from "./pages/ForgetPass/VerifyEmail";
import CreateNewPassword from "./pages/ForgetPass/CreateNewPassword";
import ResetSuccessful from "./pages/ForgetPass/ResetSuccessful";
import UserHome from "./pages/UserHome";
import FashionPage from "./pages/FashionPage";
import Fashion from "./pages/Fashion";
import Detail_Fashion from "./pages/Detail_Fashion";
import Checkout_info from "./pages/Checkout/Checkout_info";
import Checkout_payment from "./pages/Checkout/Checkout_payment";
import Checkout_confirmation from "./pages/Checkout/Checkout_confirmation";
import Checkout2_confirmation from "./pages/Checkout/Checkout2_confirmation";
import ArticlePage from "./pages/Article/ArticlePage";
import Article_Formal from "./pages/Article/Article_Formal";
import Article_Casual from "./pages/Article/Article_Casual";
import Article_Sporty from "./pages/Article/Article_Sporty";
import Detail_Article from "./pages/Article/Detail_Article";
import AboutUs from "./pages/AboutUs";
import PlacePage from "./pages/PlacePage";
import Detail_Place from "./pages/Detail_Place";
import Wardrobe from "./pages/Wardrobe";
import MixMatch from "./pages/MixMatch";
import User_profile from "./pages/User_profile";
import Purchasing_history from "./pages/Purchasing_history";
import AdminPage from "./pages/Admin/AdminPage";
import ViewFashion from "./pages/Admin/ViewFashion";
import ViewArticle from "./pages/Admin/ViewArticle";
import ViewPlace from "./pages/Admin/ViewPlace";
import AddProduct from "./pages/Admin/AddProduct";
import AddArticle from "./pages/Admin/AddArticle";
import AddPlace from "./pages/Admin/AddPlace";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/view" element={<View />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/email-send" element={<EmailSend />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/create-new-password" element={<CreateNewPassword />} />
        <Route path="/reset-successful" element={<ResetSuccessful />} />
        <Route path="/user-home" element={<UserHome />} />
        <Route path="/fashion-page" element={<FashionPage />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/detail-fashion/:id" element={<Detail_Fashion />} />
        <Route path="/checkout-info" element={<Checkout_info />} />
        <Route path="/checkout-payment" element={<Checkout_payment />} />
        <Route
          path="/checkout-confirmation"
          element={<Checkout_confirmation />}
        />
        <Route
          path="/checkout2-confirmation"
          element={<Checkout2_confirmation />}
        />
        <Route path="/article-page" element={<ArticlePage />} />
        <Route path="/article-formal" element={<Article_Formal />} />
        <Route path="/article-casual" element={<Article_Casual />} />
        <Route path="/article-sporty" element={<Article_Sporty />} />
        <Route path="/detail-article/:id" element={<Detail_Article />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/place-page" element={<PlacePage />} />
        <Route path="/detail-place/:id" element={<Detail_Place />} />
        <Route path="/wardrobe" element={<Wardrobe />} />
        <Route path="/mix-match" element={<MixMatch />} />
        <Route path="/user-profile" element={<User_profile />} />
        <Route path="/purchasing-history" element={<Purchasing_history />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/view-fashion" element={<ViewFashion />} />
        <Route path="/view-article" element={<ViewArticle />} />
        <Route path="/view-place" element={<ViewPlace />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/add-article" element={<AddArticle />} />
        <Route path="/add-place" element={<AddPlace />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
