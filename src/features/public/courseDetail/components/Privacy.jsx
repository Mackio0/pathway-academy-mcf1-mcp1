import React from 'react'

const privacySections = [
  {
    title: "1. Information We Collect",
    content: "We collect personal information (name, email, phone, billing details, account info) and non-personal data (browser type, IP address, device info, usage data). We do not intentionally collect sensitive data like health or political beliefs."
  },
  {
    title: "2. How We Collect Your Information",
    content: [
      "Directly from You: When you register, complete a profile, enroll in courses, or contact us.",
      "Automatically: Through cookies, analytics, and tracking technologies as you interact with our website.",
      "From Third Parties: Such as payment processors, social media platforms, or affiliate partners."
    ]
  },
  {
    title: "3. How We Use Your Information",
    content: [
      "Account Management: To register you, manage your profile, and provide course access.",
      "Service Delivery: To deliver content, track progress, and issue certificates.",
      "Payments: To securely process transactions and handle refunds.",
      "Communication: To send course updates, newsletters, and promotional offers.",
      "Platform Improvement: To analyze usage and improve our services.",
      "Legal Compliance: To comply with legal requirements, resolve disputes, and enforce terms."
    ]
  },
  {
    title: "4. Sharing Your Information",
    content: [
      "We do not sell your personal data. However, we may share it with:",
      "Service Providers: For payment processing, communication, and analytics.",
      "Legal Compliance: To comply with laws or legal processes.",
      "Business Transfers: If Pathway Academy merges or transfers its business, your data may be shared with the new owner."
    ]
  },
  {
    title: "5. Cookies and Tracking Technologies",
    content: [
      "We use cookies to enhance your experience, including:",
      "Essential Cookies: Necessary for functionality.",
      "Performance Cookies: For tracking website usage.",
      "Advertising Cookies: To display relevant ads.",
      "You can manage cookies through your browser settings, though disabling them may affect website performance."
    ]
  },
  {
    title: "6. Data Retention",
    content: [
      "We keep your personal data only as long as necessary for:",
      "Account maintenance",
      "Legal compliance",
      "Resolving disputes"
    ]
  },
  {
    title: "7. Security Measures",
    content: "We use reasonable security measures, including encryption for payments and regular security audits, to protect your data. However, no electronic transmission is completely secure, and we cannot guarantee absolute security."
  },
  {
    title: "8. Your Rights",
    content: [
      "Depending on your location, you may have the following rights:",
      "Access: Request a copy of your data.",
      "Correction: Update inaccurate or incomplete data.",
      "Deletion: Request deletion of your data.",
      "Objection: Object to data processing for specific purposes.",
      "Portability: Request data in a readable format.",
      "Withdraw Consent: Opt out of marketing communications or data uses."
    ]
  },
  {
    title: "9. Children's Privacy",
    content: "Pathway Academy is for users aged 13 and older. We do not knowingly collect information from children under 13. If we discover we have unintentionally collected such data, we will delete it immediately."
  },
  {
    title: "10. Third-Party Links",
    content: "Our website may contain links to third-party sites. We are not responsible for their privacy practices and encourage you to review their policies."
  },
  {
    title: "11. Changes to This Privacy Policy",
    content: "We may update this Privacy Policy periodically. Changes will be posted on this page, and we encourage you to review it regularly to stay informed."
  },
  {
    title: "12. Contact Us",
    content: [
      "If you have any questions or concerns about this Privacy Policy, please contact us:",
      "Email: [support@pathway67@gmail.com]",
      "Phone: +1 (555) 123-4567",
      "Mailing Address: 123 Pathway Lane, Springfield, IL 62701, USA"
    ]
  }
]

function Privacy() {
  return (
    <div className="min-h-screen text-gray-500 py-8 px-4 md:px-6">
      <div className="max-w-4xl mx-auto border-zinc-800">
        <div className="p-6 space-y-8">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Effective Date: [November 1, 2024]</p>
            <p className="text-gray-500">
              Welcome to Pathway Academy! Your privacy is critically important to us. This Privacy Policy explains how we collect, use, share, and safeguard your personal information when you visit our website or use our services. By accessing or using our platform, you agree to the practices outlined in this policy.
            </p>
          </div>

          <section className="space-y-[14px]">
            {privacySections.map((section, index) => (
              <div key={index} className='flex flex-col gap-[8px]' >
                <h2 className="text-[20px] font-semibold text-black">{section.title}</h2>
                {Array.isArray(section.content) ? (
                  <ul className="list-disc pl-6 ">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            ))}
          </section>

          <p className="text-sm text-gray-600 mt-8">
            This Privacy Policy provides an overview of how Pathway Academy collects, uses, and protects your data, and how you can exercise your rights regarding it.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy

