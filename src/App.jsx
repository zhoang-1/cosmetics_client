import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./screens/home/HomeScreen";
import Header from "./screens/header/Header";
import Footer from "./screens/footer/Footer";
import NotFound from "./pages/notFound/NotFound";
import Login from "./pages/auth/LoginPage";
import Sign from "./pages/auth/Register";
import TermsOfService from "./pages/Terms&Policy/TermsOfService";
import PrivacyPolicy from "./pages/Terms&Policy/PrivacyPolicy";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router-dom";
import "./App.css";
import ProductList from "./component/ProductList";
import ProductDetail from "./component/ProductDetail";
import Cart from "./component/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Checkout from "./component/Checkout";
import AddAddress from "./component/address/AddAddress";
function App() {
  const MainLayout = ({ children }) => {
    //url path của trang web
    const location = useLocation();

    //khai báo url path không xài header footer
    const excludeRoutes = ["/login", "/sign", "/forgot-password"];

    // kiểm tra bằng vòng lặp
    const isExist = excludeRoutes.some((routes) => {
      // trả về liệu có tồn tại location nào khớp với phần tử url nào trong excludeRoutes hay không
      return matchPath({ path: routes, exact: true }, location.pathname);
    });

    // nếu có thì trả về children không xài header và footer
    if (isExist) {
      return <>{children}</>;
    }

    //nếu không thì trả về children xài cùng header và footer
    return (
      <>
        <Header />
        {children}
        <Footer />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="light" // hoặc "colored", "dark"
          toastClassName="!rounded-xl !shadow-lg !text-sm !px-4 !py-3"
          bodyClassName="!text-gray-700"
        />
      </>
    );
  };

  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/*" element={<NotFound />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/add-address" element={<AddAddress />} />
          {/* Add more routes as needed */}
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
