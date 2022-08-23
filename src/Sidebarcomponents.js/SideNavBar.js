import React, { useState } from "react";
import "./SideNavBar.css";

const SideNavBar = () => {
	const [isExpanded, setExpendState] = useState(false);
	const menuItems = [
		{
			text: "Roburna",
			icon: "icons/grid.svg",
		},
		{
			text: "Admin Roburna",
			icon: "icons/user.svg",
		},
		{
			text: "Roburna",
			icon: "icons/message.svg",
		},
		{
			text: "Roburna",
			icon: "icons/pie-chart.svg",
		},
		{
			text: "Roburna ",
			icon: "icons/folder.svg",
		},
		{
			text: "Roburna",
			icon: "icons/shopping-cart.svg",
		},
		{
			text: "Roburna",
			icon: "icons/heart.svg",
		},
		{
			text: "Roburna",
			icon: "icons/settings.svg",
		},
	];
	return (
		<div
			className={
				isExpanded
					? "side-nav-container"
					: "side-nav-container side-nav-container-NX"
			}
		>
			<div className="nav-upper">
				<div className="nav-heading">
					{isExpanded && (
						<div className="nav-brand">
							<img src="icons/Logo.svg" alt="" srcset="" />
							<h2>Roburna</h2>
						</div>
					)}
					<button
						className={
							isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
						}
						onClick={() => setExpendState(!isExpanded)}
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
				<div className="nav-menu">
					{menuItems.map(({ text, icon }) => (
						<a
							className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
							href="#"
						>
							<img className="menu-item-icon" src={icon} alt="" srcset="" />
							{isExpanded && <p>{text}</p>}
						</a>
					))}
				</div>
			</div>
			<div className="nav-footer">
				{isExpanded && (
					<div className="nav-details">
						<img
							className="nav-footer-avatar"
							src="icons/admin-avatar.svg"
							alt=""
							srcset=""
						/>
						<div className="nav-footer-info">
							<p className="nav-footer-user-name">Roburna</p>
							<p className="nav-footer-user-position">Roburna admin</p>
						</div>
					</div>
				)}
				<img className="logout-icon" src="icons/logout.svg" alt="" srcset="" />
			</div>
		</div>
	);
};

export default SideNavBar;
