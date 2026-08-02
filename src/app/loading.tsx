import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import Container from "../components/ui/Container";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main className="flex flex-1 flex-col gap-8 outline-none">
        <section className="py-8 sm:py-10 lg:py-14">
          <Container>
            <div className="animate-pulse space-y-6">
              <div className="h-4 w-32 rounded-full bg-[#E2E8F0]" />
              <div className="h-10 w-3/4 max-w-xl rounded-2xl bg-[#CBD5E1]" />
              <div className="h-6 w-full max-w-2xl rounded-xl bg-[#E2E8F0]" />
              <div className="mt-8 h-64 w-full rounded-[2rem] bg-[#F1F5F9]" />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
