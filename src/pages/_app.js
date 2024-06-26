import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Component {...pageProps} />
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/swiper.js"></script>
      <script src="assets/js/countto.js"></script>
      <script src="assets/js/count-down.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/main.js"></script>
    </>
  );
}
