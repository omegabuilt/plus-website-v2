interface TermsResult {
  type_of_terms: string;
  content: string;
}

interface TermsResponse {
  results: TermsResult[];
}

export async function fetchTermsData(): Promise<{
  terms: string | null;
  privacy: string | null;
}> {
  const baseUrl = process.env.API_BASE_URL;

  if (!baseUrl) {
    console.error("API_BASE_URL environment variable is not set");
    return { terms: null, privacy: null };
  }

  try {
    const res = await fetch(`${baseUrl}/terms/`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      console.error(`Error fetching terms: ${res.status} ${res.statusText}`);
      return { terms: null, privacy: null };
    }

    const data: TermsResponse = await res.json();

    const termsObject = data.results.find(
      (item) => item.type_of_terms === "Terms and Conditions"
    );
    const privacyObject = data.results.find(
      (item) => item.type_of_terms === "Privacy Policy"
    );

    return {
      terms: termsObject?.content ?? null,
      privacy: privacyObject?.content ?? null,
    };
  } catch (error) {
    console.error("Error fetching terms:", error);
    return { terms: null, privacy: null };
  }
}
