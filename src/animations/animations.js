document.addEventListener('DOMContentLoaded', () => {
    // Add scroll effect to header
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (header) {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        } else {
            console.error("Elemento #header não encontrado.");
        }
    });

    // Add animation to profile items
    const profileItems = document.querySelectorAll('.profile-item');
    if (profileItems.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        profileItems.forEach(item => {
            item.style.opacity = 0;
            item.style.transform = 'translateY(20px)';
            item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(item);
        });
    } else {
        console.error("Nenhum elemento .profile-item encontrado.");
    }

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', () => {
            // Alterna a classe 'dark-mode' no body
            document.body.classList.toggle('dark-mode');

            // Seleciona o ícone dentro do botão
            const icon = darkModeToggle.querySelector('i');

            // Alterna os ícones entre lua e sol
            if (icon) {
                if (document.body.classList.contains('dark-mode')) {
                    icon.classList.remove('fa-moon');
                    icon.classList.add('fa-sun');
                } else {
                    icon.classList.remove('fa-sun');
                    icon.classList.add('fa-moon');
                }
            } else {
                console.error("Ícone não encontrado dentro do #dark-mode-toggle.");
            }
        });
    } else {
        console.error("Elemento #dark-mode-toggle não encontrado.");
    }
});
