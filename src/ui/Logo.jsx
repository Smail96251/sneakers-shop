function Logo() {
	return (
		<div className='logo'>
			<a className='logo__link' href='#'>
				<img
					className='logo__images'
					src='./images/logo.svg'
					alt='logo'
					width={40}
					height={40}
				/>
				<span className='logo__wrapper--text'>
					<h1 className='logo__title'>Sneakers shop</h1>
					<p className='logo__subtitle'>Магазин лучших кроссовок</p>
				</span>
			</a>
		</div>
	);
}

export default Logo;