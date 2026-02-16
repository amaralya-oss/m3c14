
document.addEventListener('DOMContentLoaded', () => {

    // Comportamiento botón hero

    const btnActivities = document.getElementById('btnActivities');
    const activitiesSection = document.getElementById('activities');

    if (btnActivities && activitiesSection) {
        btnActivities.addEventListener('click', () => {
            activitiesSection.scrollIntoView({ behavior: 'smooth' });
        });
    }


    // Comportamiento botón: reservar inscripción dentro de ventana "actividad"

    const btnsReserve = document.querySelectorAll('.btn-reserve');
    const form = document.getElementById('reservationForm');

    btnsReserve.forEach(btn => {
        btn.addEventListener('click', () => {
            form.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Comportamiento formulario de inscripción (footer)

    const modal = document.getElementById("successModal");
    const closeBtn = modal ? modal.querySelector(".modal__close") : null;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        form.querySelectorAll(".footer__form-group").forEach(group => {
            group.classList.remove("is-error");
            group.querySelector(".footer__error").textContent = "";
        });

        const nameInput = document.getElementById("name");
        if (!nameInput.value.trim()) {
            isValid = false;
            const group = nameInput.closest(".footer__form-group");
            group.classList.add("is-error");
            group.querySelector(".footer__error").textContent = "Ingresa tu nombre completo";
        }

        const emailInput = document.getElementById("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            isValid = false;
            const group = emailInput.closest(".footer__form-group");
            group.classList.add("is-error");
            group.querySelector(".footer__error").textContent = "Ingresa un email válido";
        }

        const activityInput = document.getElementById("activity");
        if (!activityInput.value) {
            isValid = false;
            const group = activityInput.closest(".footer__form-group");
            group.classList.add("is-error");
            group.querySelector(".footer__error").textContent = "Selecciona una experiencia";
        }

        const dateInput = document.getElementById("date");
        if (!dateInput.value) {
            isValid = false;
            const group = dateInput.closest(".footer__form-group");
            group.classList.add("is-error");
            group.querySelector(".footer__error").textContent = "Selecciona una fecha";
        }

        const peopleInput = document.getElementById("people");
        if (!peopleInput.value || peopleInput.value < 1) {
            isValid = false;
            const group = peopleInput.closest(".footer__form-group");
            group.classList.add("is-error");
            group.querySelector(".footer__error").textContent = "Ingresa al menos 1 persona";
        }

        // Si todo está bien, mostrar modal
        if (isValid) {
            modal.style.display = "flex"; // mostrar modal
            form.reset(); // limpiar formulario
        }
    });

    // cerrar modal
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    // cerrar modal si clickeas fuera del contenido
    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });



    // Filtrado de actividades por dificultad
    const filterButtons = document.querySelectorAll('.activities__tabs button');
    const activityCards = document.querySelectorAll('.activities__grid article');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Activar/desactivar tabs
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            activityCards.forEach(card => {
                const level = card.getAttribute('data-level');

                if (filter === 'all' || filter === level) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });



});