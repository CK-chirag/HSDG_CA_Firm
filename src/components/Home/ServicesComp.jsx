const services = [
	{
		title: 'Tax Planning & Filing',
		description:
			'Comprehensive tax planning strategies and accurate filing for individuals and businesses.',
		points: ['Income Tax Returns', 'Tax Optimization', 'TDS Compliance', 'Advance Tax Planning'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<rect x="6" y="2" width="12" height="20" rx="2" />
				<path d="M9 7h6M9 11h6M9 15h3" />
			</svg>
		),
	},
	{
		title: 'Audit & Assurance',
		description:
			'Professional audit services ensuring compliance and financial accuracy.',
		points: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Concurrent Audit'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
				<path d="M14 3v5h5" />
			</svg>
		),
	},
	{
		title: 'Business Advisory',
		description:
			'Strategic business consulting to help your company grow and succeed.',
		points: ['Financial Planning', 'Cash Flow Management', 'Investment Advisory', 'Business Valuation'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M3 17l6-6 4 4 7-7" />
				<path d="M14 5h6v6" />
			</svg>
		),
	},
	{
		title: 'GST Services',
		description:
			'Complete GST compliance and advisory services for seamless operations.',
		points: ['GST Registration', 'Return Filing', 'GST Audit', 'Refund Processing'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M12 2l7 4v6c0 5-3.5 8.5-7 10-3.5-1.5-7-5-7-10V6l7-4z" />
			</svg>
		),
	},
	{
		title: 'Company Formation',
		description: 'End-to-end company incorporation and compliance services.',
		points: ['Private Limited Company', 'LLP Formation', 'Partnership Deed', 'ROC Compliance'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M3 21h18" />
				<path d="M5 21V7l7-4 7 4v14" />
				<path d="M9 21v-6h6v6" />
			</svg>
		),
	},
	{
		title: 'Payroll Management',
		description: 'Complete payroll processing and statutory compliance services.',
		points: ['Salary Processing', 'PF & ESI Compliance', 'TDS on Salary', 'Form 16 Generation'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M16 7a4 4 0 11-8 0 4 4 0 018 0z" />
				<path d="M12 14c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" />
			</svg>
		),
	},
	{
		title: 'Financial Reporting',
		description: 'Professional financial statement preparation and analysis.',
		points: ['Financial Statements', 'Management Reporting', 'Ratio Analysis', 'Budgeting'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M12 6v6l4 2" />
				<circle cx="12" cy="12" r="9" />
			</svg>
		),
	},
	{
		title: 'Accounting Services',
		description: 'Complete bookkeeping and accounting solutions for your business.',
		points: ['Books of Accounts', 'Bank Reconciliation', 'Inventory Management', 'MIS Reports'],
		icon: (
			<svg
				aria-hidden="true"
				className="h-6 w-6"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			>
				<path d="M4 19.5A2.5 2.5 0 006.5 22H20" />
				<path d="M4 4.5A2.5 2.5 0 016.5 2H20v20H6.5A2.5 2.5 0 014 19.5z" />
				<path d="M8 6h7M8 10h7M8 14h5" />
			</svg>
		),
	},
]

const ServicesComp = () => {
	return (
		<section className="bg-white py-12">
			<div className="mx-auto max-w-6xl px-4">
				<div className="text-center">
					<h2 className="mt-2 text-2xl font-semibold text-[color:var(--color-header)] sm:text-3xl">
						Our Professional Services
					</h2>
					<p className="mx-auto mt-3 max-w-2xl text-sm text-[color:var(--color-paragraph)]">
						We offer a comprehensive range of chartered accountancy services tailored to meet the
						unique needs of businesses and individuals across various industries.
					</p>
				</div>

				<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
					{services.map((service) => (
						<article
							key={service.title}
							className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
						>
							<div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[color:var(--color-divider)] text-[color:var(--color-header)]">
								{service.icon}
							</div>
							<h3 className="mt-4 text-base font-semibold text-[color:var(--color-header)]">
								{service.title}
							</h3>
							<p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
								{service.description}
							</p>
							<ul className="mt-3 space-y-1 text-xs text-[color:var(--color-paragraph)]">
								{service.points.map((point) => (
									<li key={point} className="flex items-start gap-2">
										<span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-header)]" />
										<span>{point}</span>
									</li>
								))}
							</ul>
						</article>
					))}
				</div>
			</div>
		</section>
	)
}

export default ServicesComp
