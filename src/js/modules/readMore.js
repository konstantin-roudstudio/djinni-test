export default function () {
  window.onclick = e => {
    if (e.target.classList.contains('show-more')) {
      e.preventDefault();
      const text = e.target.previousElementSibling;
      text.classList.add('expanded');
      text.classList.remove('truncated');
    }
  }
}