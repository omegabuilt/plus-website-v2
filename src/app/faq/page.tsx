'use client';

import { useState } from 'react';

interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  // Getting Started
  {
    id: 'getting-started-1',
    category: 'Getting Started',
    question: 'What is Plus?',
    answer:
      'Plus is a mobile investment app built by 10th Capital Investments Limited. It gives you access to mutual funds, treasury bills, and US stocks — all from one account on your phone.',
  },
  {
    id: 'getting-started-2',
    category: 'Getting Started',
    question: 'How do I create an account?',
    answer:
      'Download Plus from Google Play or the App Store. Sign up with your phone number, complete verification, and you\'re ready to invest. No paperwork needed.',
  },
  {
    id: 'getting-started-3',
    category: 'Getting Started',
    question: 'Is Plus safe to use?',
    answer:
      'Plus is operated by 10th Capital Investments Limited, which is licensed and regulated by the Ghana Securities & Exchange Commission (SEC). Plus has biometric and encryption features to help keep your account secure.',
  },
  // Investing
  {
    id: 'investing-1',
    category: 'Investing',
    question: 'What can I invest in?',
    answer:
      'You can invest in Mutual Funds (Stanbic Cash Trust, IC Liquidity Fund, Databank MFund II), Government Treasury Bills, and US Stocks (4,000+ companies).',
  },
  {
    id: 'investing-2',
    category: 'Investing',
    question: 'How much do I need to start?',
    answer:
      'You can start investing with as little as GHS 10 for mutual funds. US stocks allow you to start with as little as $10.',
  },
  {
    id: 'investing-3',
    category: 'Investing',
    question: 'How do I fund my account?',
    answer:
      'You can fund your account via Momo, bank transfer, or bank card.',
  },
  // Transactions
  {
    id: 'transactions-1',
    category: 'Transactions',
    question: 'How long do deposits take?',
    answer:
      'Deposit processing times vary by product. Some deposits are processed instantly, while others typically take up to 48 hours.',
  },
  {
    id: 'transactions-2',
    category: 'Transactions',
    question: 'How do I withdraw my money?',
    answer:
      'You can request a withdrawal directly from the app. Processing times vary by product and are typically completed within a few business days.',
  },
  {
    id: 'transactions-3',
    category: 'Transactions',
    question: 'What are the fees?',
    answer:
      'Fees are charged per transaction, are competitive, and are always shown before you confirm any transaction. There are no hidden fees.',
  },
  // Support
  {
    id: 'support-1',
    category: 'Support',
    question: 'How do I contact support?',
    answer:
      'Email us at support@plusapp.online or call us on 020 167 3720.',
  },
];

const categories = ['Getting Started', 'Investing', 'Transactions', 'Support'];

export default function FAQPage() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gradient-to-b from-[#FFF9F9] to-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-bold text-[#52080D] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about investing with Plus
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {categories.map((category) => {
            const categoryItems = faqItems.filter(
              (item) => item.category === category
            );

            return (
              <div key={category} className="mb-12">
                {/* Category Heading */}
                <h2 className="mb-6 text-2xl font-bold text-[#961414]">
                  {category}
                </h2>

                {/* Accordion Items */}
                <div className="space-y-4">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
                    >
                      <button
                        onClick={() => toggleAccordion(item.id)}
                        className="flex w-full items-center justify-between px-6 py-5 text-left hover:bg-gray-50"
                      >
                        <h3 className="text-base font-semibold text-gray-900 md:text-lg">
                          {item.question}
                        </h3>
                        <div className="ml-4 flex-shrink-0">
                          <svg
                            width={24}
                            height={24}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            className={`transition-all duration-300 ${
                              expandedId === item.id
                                ? 'rotate-180 text-[#961414]'
                                : 'text-gray-400'
                            }`}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </div>
                      </button>

                      {/* Answer Section */}
                      {expandedId === item.id && (
                        <div className="border-t border-gray-200 bg-gray-50 px-6 py-5 animation-fade-in">
                          <p className="text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-gray-200 bg-[#FFF9F9] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#52080D]">
            Still have questions?
          </h2>
          <p className="mb-6 text-gray-600">
            Get in touch with our support team at{' '}
            <a
              href="mailto:support@plusapp.online"
              className="font-semibold text-[#961414] hover:text-[#52080D]"
            >
              support@plusapp.online
            </a>
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://instagram.com/investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#961414] px-6 py-2 text-white font-medium hover:bg-[#52080D] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://youtube.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#961414] px-6 py-2 text-white font-medium hover:bg-[#52080D] transition-colors"
            >
              YouTube
            </a>
            <a
              href="https://tiktok.com/@investwithplus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-lg bg-[#961414] px-6 py-2 text-white font-medium hover:bg-[#52080D] transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animation-fade-in {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
