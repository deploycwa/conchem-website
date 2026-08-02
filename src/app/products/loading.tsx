import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/ui/Container";

export default function ProductsLoading() {
  return (
    <div className="flex min-h-screen flex-col gap-4 px-4 py-4">
      <Navbar />
      <main className="flex flex-1 flex-col gap-8 outline-none">
        <section className="py-8 sm:py-10 lg:py-14">
          <Container>
            <div className="animate-pulse space-y-6">
              <div className="h-4 w-28 rounded-full bg-[#E2E8F0]" />
              <div className="h-12 w-2/3 max-w-xl rounded-2xl bg-[#CBD5E1]" />
              <div className="h-6 w-full max-w-2xl rounded-xl bg-[#E2E8F0]" />
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((idx) => (
                <div
                  key={idx}
                  className="animate-pulse space-y-4 rounded-[1.5rem] border border-[#E5E7EB] bg-white p-5"
                >
                  <div className="h-48 w-full rounded-[1.25rem] bg-[#F1F5F9]" />
                  <div className="h-6 w-3/4 rounded-lg bg-[#CBD5E1]" />
                  <div className="h-4 w-full rounded-md bg-[#E2E8F0]" />
                  <div className="h-4 w-2/3 rounded-md bg-[#E2E8F0]" />
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </div>
  );
}
