import Button from './Button'

const Header = ({ title }) => {
	return (
		<header className='header'>
			<h1>{title}</h1>
			<Button color='coral' text='Add' />
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

/* CSS in JS
const headingStyle = {
	color: 'coral', 
	backgroundColor: 'blue'
} */

export default Header