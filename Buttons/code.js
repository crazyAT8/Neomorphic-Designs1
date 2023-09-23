const btns = document.querySelectorAll('.btn');

for (const btn of btns) {
	btn.addEventListener('click', () => {
        btns.forEach(otherBtn => otherBtn.classList.remove('active'));
		btn.classList.toggle('active');
	});
}