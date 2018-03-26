'use strict'

import React from 'react'

const url = 'http://localhost:3000/dist/sprite.svg'

const Icon = (props) => (
	import props.icon from `/.icons/${props.icon}`
	<svg viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
		<use xlinkHref={`${url}#icon-${props.icon}`} />
	</svg>
)

export default Icon
