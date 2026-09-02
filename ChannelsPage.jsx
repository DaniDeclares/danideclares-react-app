const channels = [
  ['01', 'Resident Concierge', 'Individuals and apartment residents seeking direct-to-consumer lifestyle and household support.'],
  ['02', 'Property Management & Apartments', 'Property managers, communities, ownership and operations teams needing dependable field and resident-experience support.'],
  ['03', 'Real Estate Offices & Brokerages', 'Realtors, teams, brokerages and offices needing administrative, listing, event and field support.'],
  ['04', 'Businesses', 'Businesses needing operational support, workplace services, products, systems, creative execution and recurring programs.'],
  ['05', 'Government & Institutional Procurement', 'Government agencies and institutions seeking procurement-ready administrative, facilities, janitorial and operational support.'],
];

export default function ChannelsPage() {
  return <main className="page"><section className="page-hero"><div className="eyebrow">WHO WE SERVE</div><h1>Five commercial channels. One operating system.</h1><p>Every offer is matched to the customer relationship, buyer, use case, service, location, pricing model and fulfillment requirements. We do not treat every customer like a residential concierge customer.</p></section><section className="channel-list">{channels.map(([num,title,text]) => <article className="channel" key={num}><span className="channel-number">CH {num}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section></main>;
}
