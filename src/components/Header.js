const Header = ({ title }) => {
	return (
		<header>
			<h1 style ={{color: 'coral', backgroundColor: 'blue'}}>{title}</h1>
		</header>
	)
}

Header.defaultProps = {
	title: 'Task Tracker',
}

export default Header