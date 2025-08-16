'use client';

import Image from 'next/image';

export default function ExpertsSection() {
	const experts = [
		{
			name: 'Nir Goldstein',
			title: 'Operating Partner',
			company: 'Greenfield Partners, Ex-VP Sales at monday.com',
		},
		{
			name: 'Ofri Cohen',
			title: 'Global VP Sales',
			company: 'Lusha',
		},
		{
			name: 'Einat Kadosh',
			title: 'AI-Driven GTM & Revenue Enablement',
			company: 'ex-monday.com, ex-Linkedin',
		},
		{
			name: 'Idan Arealy',
			title: 'RVP Sales',
			company: 'Cynet',
		},
		{
			name: 'Amitai Weiser',
			title: 'Director of Sales',
			company: 'monday.com',
		},
		{
			name: 'Noa Zeldin',
			title: 'Co-founder and CSO',
			company: 'With, Ex-VP Sales at Zencity',
		},
		{
			name: 'Elad Sebban',
			title: 'Israel Country Manager',
			company: 'Workato',
		},
		{
			name: 'Eli Barenboim',
			title: 'Regional Sales Manager',
			company: 'Deel',
		},
		{
			name: 'Gilad Komorov',
			title: 'Ex-CRO',
			company: 'Granulate, Lightico & Feedvisor',
		},
		{
			name: 'Ruby Katz',
			title: 'Regional Sales Manager',
			company: 'monday.com',
		},
		{
			name: 'Joseph Fuerst',
			title: 'Ex-VP Sales Development',
			company: 'Sisense, WalkMe & Similarweb',
		},
		{
			name: 'Gad Amar',
			title: 'VP Sales',
			company: 'Atera',
		},
		// {
		// 	name: 'Einat Etzioni',
		// 	title: 'CMO',
		// 	company: 'TSG, Ex-CMO at Panorays',
		// },
		{
			name: 'Ran Friedman',
			title: 'Head of Business Development',
			company: 'AI21 Labs',
		},
		{
			name: 'Yaniv Levy',
			title: 'Global Director of Business Development',
			company: 'Buildots',
		},
		{
			name: 'Leore Spira',
			title: 'Director of Revenue Operations',
			company: 'BlinkOps',
		},
		{
			name: 'Veronika Bukhman',
			title: 'AVP Sales & Account Management',
			company: 'Similarweb',
		},
		// {
		// 	name: 'Koby Freudenberger',
		// 	title: 'Ex-VP Customer Success',
		// 	company: 'monday.com & Checkmarx',
		// },
		{
			name: 'Dana Averbouch',
			title: 'VP Revenue Marketing',
			company: 'Similarweb, Ex-CMO at Panaya',
		},
    {
      name: 'Liron Kaplan',
      title: 'Revenue Growth Consultant',
      company: 'BSELLER',
    }
	];

	return (
		<section
			id='experts'
			className='py-10 md:py-16'
			style={{ background: 'linear-gradient(135deg, rgba(138, 127, 255, 0.08) 0%, rgba(108, 99, 255, 0.05) 100%)' }}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				{/* Header */}
				<div className='text-center mb-8 md:mb-12'>
					<h2 className='text-4xl md:text-4xl lg:text-5xl font-extrabold mb-4' style={{ color: '#1F1B3A' }}>
						Meet Our GTM Experts
					</h2>
					<p className='text-xl md:text-lg max-w-3xl mx-auto font-semibold' style={{ color: '#5A4FCF' }}>
						Learn from seasoned professionals who have built and scaled GTM functions at leading companies across various industries.
					</p>
				</div>

				{/* Expert Grid */}
				{/* Mobile: Vertical Scroll */}
				<div className='md:hidden'>
					<div className='overflow-y-auto' style={{ height: '400px' }}>
						<div className='grid grid-cols-2 gap-4'>
							{experts.map((expert) => (
								<div key={expert.name} className='bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow duration-300'>
									{/* Avatar Image */}
									<div className='w-14 h-14 mx-auto mb-3 rounded-full overflow-hidden'>
										<Image
											src={`/images/team/${expert.name.replace(' ', '_')}.jpeg`}
											alt={expert.name}
											width={56}
											height={56}
											className='w-full h-full object-cover'
										/>
									</div>

									{/* Name */}
									<h3 className='font-semibold text-sm mb-1 leading-tight' style={{ color: '#1F1B3A' }}>
										{expert.name}
									</h3>

									{/* Title */}
									<p className='text-xs mb-1 leading-tight' style={{ color: '#5A4FCF' }}>
										{expert.title}
									</p>

									{/* Company */}
									<p className='text-xs font-medium leading-tight' style={{ color: '#4C6FFF' }}>
										{expert.company}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Desktop: Grid Layout */}
				<div className='hidden md:grid grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6'>
					{experts.map((expert) => (
						<div key={expert.name} className='bg-white rounded-xl p-5 text-center hover:shadow-lg transition-shadow duration-300'>
							{/* Avatar Image */}
							<div className='w-18 h-18 mx-auto mb-3 rounded-full overflow-hidden'>
								<Image
									src={`/images/team/${expert.name.replace(' ', '_')}.jpeg`}
									alt={expert.name}
									width={72}
									height={72}
									className='w-full h-full object-cover'
								/>
							</div>

							{/* Name */}
							<h3 className='font-semibold text-sm mb-1' style={{ color: '#1F1B3A' }}>
								{expert.name}
							</h3>

							{/* Title */}
							<p className='text-sm mb-2' style={{ color: '#5A4FCF' }}>
								{expert.title}
							</p>

							{/* Company */}
							<p className='text-sm font-medium' style={{ color: '#4C6FFF' }}>
								{expert.company}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
