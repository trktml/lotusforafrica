## 2025-05-14 - [Accessibility Improvements]
**Learning:** Standard interactive elements like image-based modal triggers should use semantic buttons instead of divs to ensure they are focusable and usable by keyboard users and screen readers.
**Action:** Always prefer <button> over <div> or <a> for elements whose primary function is to trigger an action (like opening a modal) on the same page.

## 2025-05-15 - [Responsive Pagination]
**Learning:** Pagination lists that can grow indefinitely with content must be truncated to prevent UI overflow and maintain a clean, navigable interface on all devices.
**Action:** Implement truncated pagination logic (showing first, last, current, and adjacent pages) and use `flex-wrap` for responsiveness in components that handle paginated data.
