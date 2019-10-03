import logo from './logo.svg'
import React from 'react'

let links = [
	{
		href: 'https://travisk.info',
		text: 'travisk.info',
	},
	{
		href: 'https://hire.travisk.info',
		text: 'hire.travisk.info',
	}
]

function Link(link) {
	return (
		<a
		className="App-link"
		href={link.href}
		target="_blank"
		rel="noopener noreferrer"
		>
			{link.text}
		</a>
	)
}

links = links.map(link => Link(link))

export default {
	bg_color: '#1a1a1a',
	logo,
	copy: 'Place copy here.',
	link_components: links,
}