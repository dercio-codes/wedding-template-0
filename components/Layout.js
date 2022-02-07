// import custom components
import BottomNav from "../components/BottomNav";

export default function Layout({ children }) {
  return (
    <>
      {/* <BottomNav> */}
        <section style={{ width: "1024px" }}>{children}</section>
      {/* </BottomNav> */}
    </>
  );
}
