import { useState } from "react";

const stats = [
    { value: '15+', label: 'Team Members' },
    { value: '7', label: 'Office Locations' },
    { value: '500+', label: 'Projects Delivered' },
]

const openings = [
    {
        title: 'Senior Chartered Accountant',
        description:
            'Lead audit engagements, manage teams, and ensure compliance with professional standards.',
        department: 'Audit & Assurance',
        location: 'New Delhi',
        type: 'Full-time',
        experience: '5-8 years',
    },
    {
        title: 'Tax Consultant',
        description:
            'Provide direct and indirect tax advisory, compliance, and representation services.',
        department: 'Taxation',
        location: 'New Delhi / Chandigarh',
        type: 'Full-time',
        experience: '3-5 years',
    },
    {
        title: 'Company Secretary',
        description:
            'Manage corporate compliance, filings, and board documentation for client entities.',
        department: 'Corporate Law',
        location: 'Gurugram',
        type: 'Full-time',
        experience: '4-6 years',
    },
]

const Careers = () => {
    const [fileName, setFileName] = useState("Choose PDF File");
    return (
        <section className="bg-white">
            <div className="bg-[color:var(--color-header)] py-16 text-white">
                <div className="mx-auto max-w-6xl px-4 text-center">
                    <div className="mx-auto mb-4 h-0.5 w-16 rounded-full bg-white/70" />
                    <h1 className="text-3xl font-semibold sm:text-4xl text-white/80">
                        Life at H S D G & Associates
                    </h1>
                    <p className="mx-auto mt-3 max-w-2xl text-sm text-white/80">
                        A workplace where talent meets opportunity, and professional excellence is celebrated.
                    </p>
                    <div className="mt-10 grid gap-6 sm:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-3xl font-semibold text-white/90">{stat.value}</p>
                                <p className="mt-2 text-xs uppercase tracking-wide text-white/70">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
                        Opportunities
                    </p>
                    <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)]">
                        Current Openings
                    </h2>
                    <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />
                </div>

                <div className="mt-10 space-y-6">
                    {openings.map((opening) => (
                        <article
                            key={opening.title}
                            className="rounded-2xl border border-[color:var(--color-divider)] bg-white shadow-sm"
                        >
                            <div className="grid gap-6 p-6 md:grid-cols-[1fr_auto] md:items-center">
                                <div>
                                    <h3 className="text-xl font-semibold text-[color:var(--color-header)]">
                                        {opening.title}
                                    </h3>
                                    <p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
                                        {opening.description}
                                    </p>
                                    <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-[color:var(--color-paragraph)]">
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <rect x="3" y="4" width="18" height="16" rx="2" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 12h6" />
                                            </svg>
                                            {opening.department}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-5.3-7-11a7 7 0 1 1 14 0c0 5.7-7 11-7 11z" />
                                                <circle cx="12" cy="10" r="2.5" />
                                            </svg>
                                            {opening.location}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <circle cx="12" cy="12" r="9" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 7v5l3 3" />
                                            </svg>
                                            {opening.type}
                                        </span>
                                        <span className="inline-flex items-center gap-2">
                                            <svg
                                                aria-hidden="true"
                                                className="h-4 w-4"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7v10a5 5 0 0 0 10 0V7" />
                                            </svg>
                                            {opening.experience}
                                        </span>
                                    </div>
                                </div>
                                <a
                                    href="#apply-now"
                                    className="inline-flex h-10 items-center justify-center rounded-full bg-[color:var(--color-header)] px-6 text-xs font-semibold text-white transition-opacity hover:opacity-90"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            <div id="apply-now" className="bg-[color:var(--color-divider)]/20 py-16">
                <div className="mx-auto max-w-4xl px-4">

                    {/* HEADER */}
                    <div className="text-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[color:var(--color-paragraph)]">
                            Apply Now
                        </p>

                        <h2 className="mt-3 text-3xl font-semibold text-[color:var(--color-header)]">
                            Submit Your Application
                        </h2>

                        <div className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-[color:var(--color-header)]/70" />

                        <p className="mx-auto mt-4 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
                            Join our team of professionals and take the next step in your career.
                        </p>
                    </div>

                    {/* FORM */}
                    <form className="mt-10 rounded-2xl border border-[color:var(--color-divider)] bg-white p-6 shadow-sm">

                        <div className="grid gap-6 md:grid-cols-2">

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Full Name *
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Email Address *
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Phone Number *
                                <input
                                    type="tel"
                                    placeholder="+91 98765 43210"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)]">
                                Position Applied For *
                                <select
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                    defaultValue=""
                                >
                                    <option value="" disabled>Select Position</option>
                                    {openings.map((opening) => (
                                        <option key={opening.title} value={opening.title}>
                                            {opening.title}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)] md:col-span-2">
                                Years of Experience *
                                <input
                                    type="text"
                                    placeholder="e.g. 5 years or Fresher"
                                    className="mt-2 w-full rounded-lg border border-[color:var(--color-divider)] px-3 py-2.5 text-sm text-[color:var(--color-header)] outline-none focus:border-[color:var(--color-header)]"
                                    required
                                />
                            </label>

                            <label className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-header)] md:col-span-2">
                                Upload Resume (PDF) *

                                <div className="mt-2 flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-[color:var(--color-divider)] py-10 text-center">

                                    <input
                                        type="file"
                                        accept="application/pdf"
                                        required
                                        id="resumeUpload"
                                        className="hidden"
                                        onChange={(e) => {
                                            if (e.target.files.length > 0) {
                                                setFileName(e.target.files[0].name);
                                            }
                                        }}
                                    />

                                    <label
                                        htmlFor="resumeUpload"
                                        className="cursor-pointer rounded-full border border-[color:var(--color-divider)] px-6 py-2 text-xs font-semibold text-[color:var(--color-header)] hover:bg-[color:var(--color-divider)]/30 transition"
                                    >
                                        {fileName}
                                    </label>

                                    <p className="mt-4 text-[11px] text-[color:var(--color-paragraph)]">
                                        PDF format, max 5MB
                                    </p>

                                </div>
                            </label>
                        </div>

                        {/* SUBMIT */}
                        <button
                            type="submit"
                            className="mt-6 w-full rounded-full bg-[color:var(--color-header)] px-6 py-3 text-xs font-semibold uppercase tracking-wide text-white transition-opacity hover:opacity-90"
                        >
                            Submit Application
                        </button>

                        <p className="mt-3 text-center text-[11px] text-[color:var(--color-paragraph)]">
                            By submitting this form, you agree to our privacy policy and terms of service.
                        </p>

                    </form>

                </div>
            </div>


        </section>
    )
}

export default Careers
