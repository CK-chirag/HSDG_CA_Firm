const AboutUs = () => {
	return (
		<section className="bg-white">
			<div className="mx-auto max-w-6xl px-4 py-16">
				<div className="text-center">
					<h1 className="text-3xl font-semibold text-[color:var(--color-header)] sm:text-4xl">
						About H S D G & Associates
					</h1>
					<p className="mx-auto mt-4 max-w-3xl text-sm text-[color:var(--color-paragraph)]">
						Established in 2021, H S D G & Associates is a multidisciplinary professional firm
						structured to deliver integrated audit, regulatory, and advisory services through
						a partner-led engagement model.
					</p>
				</div>

				<div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
					<div className="space-y-4 text-sm text-[color:var(--color-paragraph)]">
						<h2 className="text-xl font-semibold text-[color:var(--color-header)]">Who We Are</h2>
						<p>
							The firm brings together Chartered Accountants, Company Secretaries, Cost
							Accountants and Advocates under a single partnership framework, enabling
							seamless collaboration across financial, regulatory, corporate, and legal domains.
							This multidisciplinary structure allows the firm to address complex assignments
							with a comprehensive and coordinated approach, particularly in regulated and
							institution-driven environments.
						</p>
						<p>
							With presence across five cities and a professional team of 25+ members, H S D G &
							Associates is equipped to handle assignments requiring scale, consistency, and
							strict adherence to statutory and regulatory frameworks. The firm is oriented
							towards serving institutions, banks, government bodies, corporates, not-for-profit
							organisations, and overseas clients, with a strong emphasis on compliance,
							governance, and risk management.
						</p>
						<p>
							Engagements are driven by senior partners, supported by specialised teams, and
							executed through structured processes and internal review mechanisms. The firm
							places significant emphasis on professional ethics, independence, confidentiality,
							and quality control, aligned with applicable statutory requirements and
							professional standards.
						</p>
					</div>
					<div className="rounded-3xl border border-[color:var(--color-divider)] bg-[color:var(--color-divider)]/20 p-6">
						<h3 className="text-lg font-semibold text-[color:var(--color-header)]">
							At a Glance
						</h3>
						<div className="mt-4 grid gap-4 sm:grid-cols-2">
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">2021</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">Established</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">25+</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">Professionals</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">5</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">City Presence</p>
							</div>
							<div className="rounded-2xl bg-white p-4 shadow-sm">
								<p className="text-2xl font-semibold text-[color:var(--color-header)]">7+</p>
								<p className="text-xs text-[color:var(--color-paragraph)]">
									CA Partners
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Our Operating Model
					</h2>
					<p className="mt-4 max-w-4xl text-sm text-[color:var(--color-paragraph)]">
						H S D G & Associates follows a partner-led engagement model, under which senior
						partners retain direct responsibility for engagement planning, execution oversight,
						and final deliverables. Each assignment is structured through a multidisciplinary
						team framework, drawing upon expertise from Chartered Accountants, the Company
						Secretary, and legal professionals, as relevant to the scope and complexity of the
						engagement.
					</p>
					<div className="mt-6 grid gap-4 md:grid-cols-3">
						{[
							'Scope definition & risk assessment',
							'Structured planning, execution, documentation & reporting',
							'Multi-layer review and partner-level quality control',
						].map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-4 text-sm text-[color:var(--color-paragraph)]"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-4 py-16">
				<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
					Governance & Risk Framework
				</h2>
				<p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
					The firm maintains a governance and risk framework designed to ensure effective
					overview, ethical conduct, and responsible decision-making at the firm level. The
					partner-based governance structure ensures decisions on professional conduct,
					risk acceptance, independence, and quality oversight are subject to senior-level
					judgment and accountability.
				</p>
				<div className="mt-6 grid gap-4 md:grid-cols-2">
					{[
						'Engagement acceptance guided by independence, conflict evaluation, regulatory sensitivity, and reputational risk assessment.',
						'Firm-wide risk oversight to monitor professional, regulatory, and reputational risks with partner-level attention for heightened matters.',
						'Strong emphasis on ethical standards, confidentiality, and data protection to preserve objectivity and client trust.',
						'Controls aligned with statutory and regulatory requirements to uphold professional discipline in institutional engagements.',
					].map((item) => (
						<div
							key={item}
							className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-4 text-sm text-[color:var(--color-paragraph)]"
						>
							{item}
						</div>
					))}
				</div>
			</div>

			<div className="bg-white py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Practice Verticals
					</h2>
					<p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
						We deliver services through defined practice verticals, each structured to address
						the requirements of regulated entities, institutions, corporates, and government
						bodies.
					</p>
					<div className="mt-8 grid gap-6 md:grid-cols-2">
						{[
							{
								title: 'Audit & Assurance',
								text:
									'Focused on statutory, internal and concurrent audits, bank branch audits, and assurance assignments with emphasis on audit quality and compliance.',
							},
							{
								title: 'Banking, Institutional & Government Assignments',
								text:
									'Assignments for banks, PSUs, autonomous bodies, societies, and government-funded entities with structured reporting and guideline compliance.',
							},
							{
								title: 'Taxation & Regulatory Advisory',
								text:
									'Direct and indirect tax compliance, advisory support, representation, and regulatory interpretation in compliance-driven environments.',
							},
							{
								title: 'Corporate Law, Secretarial & Legal Support',
								text:
									'Corporate structuring, secretarial compliance, regulatory filings, due diligence, and documentation with integrated legal input.',
							},
							{
								title: 'Forensic, Special Audit & Investigation Support',
								text:
									'Forensic reviews, special audits, fact-finding, and investigation engagements with analytical depth and regulatory alignment.',
							},
							{
								title: 'International & Cross-Border Advisory',
								text:
									'India entry support, compliance outsourcing, regulatory advisory, and coordination for overseas entities and cross-border engagements.',
							},
						].map((item) => (
							<div
								key={item.title}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-5 shadow-sm"
							>
								<h3 className="text-base font-semibold text-[color:var(--color-header)]">
									{item.title}
								</h3>
								<p className="mt-2 text-sm text-[color:var(--color-paragraph)]">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Leadership & Professional Composition
					</h2>
					<p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
						The firm is led by seven Chartered Accountant partners, supported by a Company
						Secretary and a legal professional, forming an integrated leadership structure.
						Our professional team includes qualified professionals, semi-qualified staff, and
						trainees, operating under defined supervision and review structures to maintain
						consistency and control across engagements.
					</p>
					<div className="mt-6 grid gap-4 sm:grid-cols-3">
						{[
							'Partner-led engagements with senior accountability',
							'Specialised teams across audit, tax, corporate and legal domains',
							'Layered review structure for scalability and discipline',
						].map((item) => (
							<div
								key={item}
								className="rounded-2xl border border-[color:var(--color-divider)] bg-white p-4 text-sm text-[color:var(--color-paragraph)]"
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="mx-auto max-w-6xl px-4 py-16">
				<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
					Quality Standards & Professional Discipline
				</h2>
				<p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
					We follow established professional standards across auditing, assurance, taxation,
					and corporate compliance frameworks. Quality is supported through partner-level
					supervision and review, ensuring significant professional judgments are subject to
					appropriate oversight. The firm promotes continuous learning, knowledge sharing,
					and ethical conduct with strong focus on independence, confidentiality, and
					professional responsibility.
				</p>
				<div className="mt-6 rounded-3xl border border-[color:var(--color-divider)] bg-white p-6 text-sm text-[color:var(--color-paragraph)]">
					Through this disciplined approach, we deliver reliable, well-reasoned, and
					defensible professional outputs in environments requiring high levels of
					compliance, governance, and accountability.
				</div>
			</div>

			<div className="bg-[color:var(--color-divider)]/20 py-14">
				<div className="mx-auto max-w-6xl px-4">
					<h2 className="text-2xl font-semibold text-[color:var(--color-header)]">
						Future Outlook & Growth Orientation
					</h2>
					<p className="mt-4 text-sm text-[color:var(--color-paragraph)]">
						H S D G & Associates is focused on building a sustainable and scalable
						professional practice, guided by quality, delivery consistency, and
						multidisciplinary capability. Our growth orientation is centred on deepening core
						practices, strengthening execution capabilities, and enhancing client outcomes
						across audit, regulatory, and advisory engagements.
					</p>
					<p className="mt-3 text-sm text-[color:var(--color-paragraph)]">
						We aim to refine processes, adopt technology, and invest in continuous
						professional development while maintaining partner involvement and technical
						rigour. The firm also recognises the growing relevance of cross-border
						considerations and integrated advisory requirements, and seeks to develop
						capabilities through structured collaboration and disciplined execution.
					</p>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
