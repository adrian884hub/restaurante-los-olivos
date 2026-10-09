// Número de WhatsApp del restaurante (formato internacional, sin "+")
const WHATSAPP = "5492610000000";

/* ---------- Navegación: fondo al hacer scroll y menú en celular ---------- */
const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

function actualizarNav() {
  nav.classList.toggle("is-scrolled", window.scrollY > 40);
}
window.addEventListener("scroll", actualizarNav);
actualizarNav();

navToggle.addEventListener("click", () => {
  const abierto = nav.classList.toggle("is-open");
  navToggle.setAttribute("aria-expanded", abierto);
});

document.querySelectorAll(".nav__links a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", false);
  });
});

/* ---------- Carrusel de fotos de Mendoza en la portada ---------- */
const slides = document.querySelectorAll(".hero__slide");
const dotsBox = document.getElementById("heroDots");
let actual = 0;
let intervalo;

slides.forEach((_, i) => {
  const dot = document.createElement("button");
  dot.setAttribute("aria-label", "Ver foto " + (i + 1));
  dot.addEventListener("click", () => { mostrarSlide(i); reiniciar(); });
  dotsBox.appendChild(dot);
});
const dots = dotsBox.querySelectorAll("button");

function mostrarSlide(i) {
  slides[actual].classList.remove("is-active");
  dots[actual].classList.remove("is-active");
  actual = i;
  slides[actual].classList.add("is-active");
  dots[actual].classList.add("is-active");
}

function reiniciar() {
  clearInterval(intervalo);
  intervalo = setInterval(() => mostrarSlide((actual + 1) % slides.length), 6000);
}

dots[0].classList.add("is-active");
reiniciar();

/* ---------- Pestañas del menú ---------- */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("is-active"));
    document.querySelectorAll(".menu").forEach(m => m.classList.remove("is-active"));
    tab.classList.add("is-active");
    document.getElementById(tab.dataset.tab).classList.add("is-active");
  });
});

/* ---------- Formulario de reserva: valida y abre WhatsApp ---------- */
const form = document.getElementById("reserveForm");
const errorBox = document.getElementById("formError");
const fecha = form.elements.fecha;

// No permitir fechas pasadas
fecha.min = new Date().toISOString().split("T")[0];

form.addEventListener("submit", e => {
  e.preventDefault();
  errorBox.textContent = "";

  let valido = true;
  [...form.elements].forEach(campo => {
    if (!campo.name) return;
    const ok = campo.checkValidity() && campo.value.trim() !== "";
    campo.classList.toggle("is-invalid", !ok);
    if (!ok) valido = false;
  });

  if (!valido) {
    errorBox.textContent = "Completá todos los campos para enviar la reserva.";
    return;
  }

  const d = form.elements;
  const [anio, mes, dia] = d.fecha.value.split("-");
  const mensaje =
    "Hola, quiero reservar una mesa en Los Olivos.\n" +
    "Nombre: " + d.nombre.value.trim() + "\n" +
    "Teléfono: " + d.telefono.value.trim() + "\n" +
    "Fecha: " + dia + "/" + mes + "/" + anio + "\n" +
    "Horario: " + d.horario.value + "\n" +
    "Personas: " + d.personas.value;

  window.open("https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(mensaje), "_blank");
});

form.addEventListener("input", e => e.target.classList.remove("is-invalid"));

/* ---------- Aparición suave de secciones al hacer scroll ---------- */
const revelar = document.querySelectorAll(".feature, .about__img, .about__text, .review, .form, .contact > *");
revelar.forEach(el => el.classList.add("reveal"));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revelar.forEach(el => observer.observe(el));
