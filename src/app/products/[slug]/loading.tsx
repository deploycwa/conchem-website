import Footer from "../../../components/layout/Footer";
import Navbar from "../../../components/layout/Navbar";
import Container from "../../../components/ui/Container";

export default function ProductDetailLoading() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main className="flex flex-1 flex-col gap-8 outline-none">
        <section className="py-8 sm:py-10 lg:py-14">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="animate-pulse space-y-6">
                <div className="h-4 w-40 rounded-full bg-[#E2E8F0]" />
                <div className="h-12 w-3/4 rounded-2xl bg-[#CBD5E1]" />
                <div className="h-6 w-full rounded-xl bg-[#E2E8F0]" />
                <div className="h-6 w-5/6 rounded-xl bg-[#E2E8F0]" />
                <div className="h-12 w-44 rounded-full bg-[#CBD5E1]" />
              </div>

              <div className="animate-pulse">
                <div className="h-[420px] w-full rounded-[2rem] bg-[#F1F5F9]" />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
