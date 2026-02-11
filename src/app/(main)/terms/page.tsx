import { fetchTermsData } from "@/lib/api";

export default async function TermsPage() {
  const { terms } = await fetchTermsData();
  const year = new Date().getFullYear();

  return (
    <>
      {/* Page Header */}
      <section className="bg-burgundy-light py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-dark mb-4 sm:mb-6">
            Terms of Service
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {terms ? (
            <div
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: terms }}
            />
          ) : (
            <p className="text-gray-600 text-lg">
              Terms and Conditions are currently unavailable. Please try again
              later or contact us at{" "}
              <a
                href="mailto:support@plusapp.online"
                className="text-burgundy hover:text-burgundy-dark transition-colors underline"
              >
                support@plusapp.online
              </a>
              .
            </p>
          )}
        </div>
      </section>
    </>
  );
}
