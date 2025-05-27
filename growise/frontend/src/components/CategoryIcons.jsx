import React from "react"

// Simple SVG icons for each category
const defaultIcons = {
  Food: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#F9C74F"/><path d="M8 14c0-2.21 1.79-4 4-4s4 1.79 4 4" stroke="#333" strokeWidth="2"/><ellipse cx="12" cy="9" rx="3" ry="2" fill="#90BE6D"/></svg>
  ),
  Rent: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="10" width="16" height="10" fill="#577590"/><polygon points="12,4 2,12 22,12" fill="#F9C74F"/></svg>
  ),
  Transportation: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="12" width="16" height="6" fill="#F94144"/><circle cx="7" cy="19" r="2" fill="#577590"/><circle cx="17" cy="19" r="2" fill="#577590"/></svg>
  ),
  Entertainment: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#43AA8B"/><rect x="8" y="8" width="8" height="8" fill="#F3722C"/></svg>
  ),
  Utilities: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="6" width="12" height="12" fill="#90BE6D"/><path d="M12 6v12" stroke="#333" strokeWidth="2"/></svg>
  ),
  Healthcare: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#F94144"/><rect x="10" y="7" width="4" height="10" fill="#FFF"/><rect x="7" y="10" width="10" height="4" fill="#FFF"/></svg>
  ),
  Education: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="4" y="16" width="16" height="4" fill="#577590"/><polygon points="12,4 2,10 22,10" fill="#F9C74F"/></svg>
  ),
  Shopping: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><rect x="6" y="10" width="12" height="8" fill="#F3722C"/><rect x="9" y="6" width="6" height="4" fill="#43AA8B"/></svg>
  ),
  Other: (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#adb5bd"/><text x="12" y="16" textAnchor="middle" fontSize="10" fill="#333">?</text></svg>
  ),
}

const CategoryIcon = ({ category, size = 32 }) => {
  const icon = defaultIcons[category] || defaultIcons["Other"]
  return (
    <span style={{ display: "inline-block", width: size, height: size, verticalAlign: "middle" }}>
      {React.cloneElement(icon, { width: size, height: size })}
    </span>
  )
}

export default CategoryIcon
