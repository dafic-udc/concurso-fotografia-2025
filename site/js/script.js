// Update deadlines
const updateDeadlines = () => {
    const deadlines = [
        { id: 'prazo-1', date: '08/09/2025 - 19/09/2025' },
        { id: 'prazo-2', date: '22/09/2025 - 25/09/2025' },
        { id: 'prazo-3', date: '26/09/2025 - 26/09/2025' }
    ];

    const today = new Date(); // Get date
    today.setHours(2, 0, 0, 0); // Set time to GMT+2
    deadlines.forEach(deadline => {
        const [start, end] = deadline.date.split(' - ').map(
            date => new Date(date.split('/').reverse().join('-'))
        );
        if (today >= start && today <= end) {
            document.getElementById(deadline.id).classList.add('prazo-activo');
        }
    });
}
updateDeadlines();


// Protect email
const emailUsername = 'contacto';
const emailDomain = 'dafic.org';
const openEmail = () => {
    document.getElementById('email').href = `mailto:${emailUsername}@${emailDomain}`;
}
document.getElementById('email').setAttribute('onclick', 'openEmail();');
