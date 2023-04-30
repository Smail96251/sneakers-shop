import Logo from './ui/Logo.jsx';

function App() {
	return (
		<>
			<div className='wrapper'>
				<div className='container'>
					<header className='header'>
						<Logo />
						<nav className='menu'>
							<ul className='menu__list'>
								<li className='menu__item'>
									<a href='#' className='menu__item--link'></a>
								</li>
								<li className='menu__item'>
									<a href='#' className='menu__item--link'></a>
								</li>
							</ul>
						</nav>
					</header>
				</div>
			</div>
		</>
	);
}

export default App;
