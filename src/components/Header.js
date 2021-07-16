import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "./styles/HeaderStyle.module.css";
import logo from "../assets/images/Logo.png";
import logoSmall from "../assets/images/logo-small-words.png";
import { FaBars, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";
import RouteLink from "./RouteLink";
import { useLocation } from "react-router-dom";
import "../fonts/Nexa/Nexa-Bold.otf";

export default function Header() {
	const isThisMobile = useMediaQuery({ maxWidth: 768 });
	const [dropVisible, setDropVisible] = useState(false);
	const [isMobile, setIsMobile] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);
	const location = useLocation();

	useEffect(() => {
		setIsMobile(isThisMobile);
	}, [isThisMobile]);

	function handleMenuOpen() {
		setDropVisible(true);
	}

	function handleMenuClose() {
		setDropVisible(false);
	}

	const Chron = () =>
		dropVisible ? (
			<FaChevronUp size={ 10 } style={ { marginLeft: 5 } }/>
		) : (
			<FaChevronDown size={ 10 } style={ { marginLeft: 5 } }/>
		);

	const MobileHeader = () => (
		<div className={ styles.mobileHeader }>
			<div className={ styles.mobileLogo }>
				<img className={ styles.mobileLogoImg } src={ logoSmall }
				     alt={ "CarChilli.com logo" }/>
			</div>
			<div className={ styles.hamburger }
			     onClick={ () => setMenuOpen(!menuOpen) }>
				{ menuOpen ? (
					<FaTimes size={ 25 } color={ "black" }/>
				) : (
					<FaBars size={ 25 } color={ "black" }/>
				) }
			</div>
			<div className={ menuOpen ?
				styles.dropDownMobile :
				styles.dropDownMobileHidden }
			     onClick={ () => setMenuOpen(false) }>
				<RouteLink to={ "/" }>
					<div
						className={
							location.pathname === "/"
								? styles.selectedDropItemMobile
								: styles.dropItemMobile
						}
					>
						Home
					</div>
				</RouteLink>
				<RouteLink to={ "/becomeGuest" }>
					<div
						className={
							location.pathname === "/becomeGuest"
								? styles.selectedDropItemMobile
								: styles.dropItemMobile
						}
					>
						Become A Guest
					</div>
				</RouteLink>
				<RouteLink to={ "/becomeHost" }>
					<div
						className={
							location.pathname === "/becomeHost"
								? styles.selectedDropItemMobile
								: styles.dropItemMobile
						}
					>
						Become A Host
					</div>
				</RouteLink>
			</div>

		</div>
	);

	const RegularHeader = () => (
		<div className={ styles.header }>
			<div className={ styles.logo }>
				<img src={ logo } alt={ "CarChilli Logo" }/>
			</div>
			<div className={ styles.menu }>
				<RouteLink to={ "/" }>
					<div
						className={
							location.pathname === "/"
								? styles.selectedMenuTextFirstItem
								: styles.menuTextFirstItem
						}
					>
						Home
					</div>
				</RouteLink>
				<RouteLink to={ "/becomeGuest" }>
					<div
						className={
							location.pathname === "/becomeGuest"
								? styles.selectedMenuText
								: styles.menuText
						}
					>
						Become A Guest
					</div>
				</RouteLink>
				<RouteLink to={ "/becomeHost" }>
					<div
						className={
							location.pathname === "/becomeHost"
								? styles.selectedMenuText
								: styles.menuText
						}
					>
						Become A Host
					</div>
				</RouteLink>
				<div onMouseEnter={ handleMenuOpen }
				     onMouseLeave={ handleMenuClose }>
					<div
						className={
							location.pathname === "/guestWelcome"
								? styles.selectedMenuText
								: styles.menuText
						}
					>
						Hi Guest! <Chron/>
					</div>
					<div className={ dropVisible ?
						styles.dropDown :
						styles.dropDownHidden }>
						<RouteLink to={ "/wallet" }>
							<div className={ styles.dropItem }>Wallet</div>
						</RouteLink>
						<RouteLink to={ "/orderForm" }>
							<div className={ styles.dropItem }>Order Form</div>
						</RouteLink>
						<RouteLink to={ "/account" }>
							<div className={ styles.dropItem }>Account</div>
						</RouteLink>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<header className={ styles.container }>
			<div className={ styles.loginBar }>
				<RouteLink to={ "/register" }>
					<div className={ styles.loginText }>Register</div>
				</RouteLink>
				<RouteLink to={ "/login" }>
					<div className={ styles.loginText }>Login</div>
				</RouteLink>
			</div>
			{ isMobile ? <MobileHeader/> : <RegularHeader/> }
		</header>
	);
}
