import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <h1>Nice to See you here...</h1>
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
