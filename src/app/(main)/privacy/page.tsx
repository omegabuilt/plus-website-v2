import { fetchTermsData } from "@/lib/api";

export default async function PrivacyPage() {
  const { privacy } = await fetchTermsData();
  const year = new Date().getFullYear();

  return (
    <>
      {/* Page Header */}
      <section className="bg-burgundy-light py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-burgundy-dark mb-4 sm:mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg sm:text-xl text-burgundy-dark/80 max-w-2xl">
            Last updated: {year}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 sm:py-20 lg:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {privacy ? (
            <div
              className="legal-content"
              dangerouslySetInnerHTML={{ __html: privacy }}
            />
          ) : (
            <p className="text-gray-600 text-lg">
              Privacy Policy is currently unavailable. Please try again later or
              contact us at{" "}
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
