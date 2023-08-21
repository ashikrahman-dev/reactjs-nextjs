/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Layout(props) {
  return (
    <>
        <Header />

            {props.children}
            
        <Footer />
    </>
  )
}
