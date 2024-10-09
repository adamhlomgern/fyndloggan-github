document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.faq-question').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault(); // Förhindra standardknappens beteende
            const answer = item.nextElementSibling;

            // Stänger alla andra öppna frågor
            document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
                if (otherAnswer !== answer) {
                    otherAnswer.style.display = 'none';
                    otherAnswer.previousElementSibling.classList.remove('active');
                }
            });

            // Visa eller dölj svaret beroende på dess nuvarande tillstånd
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                item.classList.remove('active');
            } else {
                answer.style.display = 'block';
                item.classList.add('active');
            }
        });
    });
});
