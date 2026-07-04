/* ==========================================================
   TechSolutions
   script.js
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================================
       PRELOADER
    ====================================================== */

    const preloader = document.getElementById("preloader");

    if (preloader) {
        window.addEventListener("load", () => {
            preloader.style.opacity = "0";

            setTimeout(() => {
                preloader.style.display = "none";
            }, 500);
        });
    }

    /* ======================================================
       DARK MODE
    ====================================================== */

    const darkBtn = document.getElementById("darkModeBtn");

    if (localStorage.getItem("tema") === "dark") {
        document.body.classList.add("dark");

        if (darkBtn) {
            darkBtn.innerHTML =
                '<i class="bi bi-sun-fill"></i>';
        }
    }

    if (darkBtn) {

        darkBtn.addEventListener("click", () => {

            document.body.classList.toggle("dark");

            if (document.body.classList.contains("dark")) {

                localStorage.setItem("tema", "dark");

                darkBtn.innerHTML =
                    '<i class="bi bi-sun-fill"></i>';

            } else {

                localStorage.setItem("tema", "light");

                darkBtn.innerHTML =
                    '<i class="bi bi-moon-stars"></i>';

            }

        });

    }

    /* ======================================================
       NAVBAR
    ====================================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

    /* ======================================================
       BOTÃO TOPO
    ====================================================== */

    const topo = document.getElementById("topo");

    window.addEventListener("scroll", () => {

        if (!topo) return;

        if (window.scrollY > 350) {

            topo.style.display = "block";

        } else {

            topo.style.display = "none";

        }

    });

    if (topo) {

        topo.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

    /* ======================================================
       ANIMAÇÕES
    ====================================================== */

    const elementos = document.querySelectorAll(".fade-up");

    const aparecer = () => {

        elementos.forEach((item) => {

            const posicao = item.getBoundingClientRect().top;

            if (posicao < window.innerHeight - 100) {

                item.classList.add("ativo");

            }

        });

    };

    aparecer();

    window.addEventListener("scroll", aparecer);

    /* ======================================================
       CONTADORES
    ====================================================== */

    function contador(id, final, tempo) {

        const elemento = document.getElementById(id);

        if (!elemento) return;

        let atual = 0;

        const incremento = Math.ceil(final / tempo);

        const timer = setInterval(() => {

            atual += incremento;

            if (atual >= final) {

                atual = final;

                clearInterval(timer);

            }

            elemento.innerHTML = atual;

        }, 20);

    }

    contador("clientes", 250, 80);

    contador("sites", 180, 80);

    contador("anos", 8, 40);

    contador("cafes", 999, 100);

    /* ======================================================
       GALERIA
    ====================================================== */

    const projetos = document.querySelectorAll(".projeto");

    projetos.forEach((img) => {

        img.addEventListener("click", () => {

            img.classList.toggle("zoom");

        });

    });

    /* ======================================================
       FORMULÁRIO
    ====================================================== */

    const formulario = document.getElementById("formContato");

    if (formulario) {

        formulario.addEventListener("submit", (e) => {

            e.preventDefault();

            const nome = document.getElementById("nome");
            const email = document.getElementById("email");
            const assunto = document.getElementById("assunto");
            const mensagem = document.getElementById("mensagem");

            if (
                nome.value.trim() === "" ||
                email.value.trim() === "" ||
                assunto.value.trim() === "" ||
                mensagem.value.trim() === ""
            ) {

                alert("Preencha todos os campos.");

                return;

            }

            const regex =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!regex.test(email.value)) {

                alert("Digite um e-mail válido.");

                email.focus();

                return;

            }

            alert("Mensagem enviada com sucesso!");

            formulario.reset();

        });

    }

});