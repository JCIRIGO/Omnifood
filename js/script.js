// TESTING
// console.log("holo");
// const var1 = "Carlangas";
// console.log(var1);
// const var2 = document.querySelector(".heading-1");
// console.log(var2);

// TESTING
// var2.addEventListener("click", function() {
//     var2.textContent = var1;
//     var2.style.backgroundColor = "red";
// });

// SETTING YEAR
const yearHtml = document.querySelector(".year");
const yearCurrent = new Date().getFullYear();
yearHtml.textContent = yearCurrent;

//MAKING MOBILE NAV DINAMYC
const btnNavHtml = document.querySelector(".btn-mobile-nav");
const headerHtml = document.querySelector(".section-header");
btnNavHtml.addEventListener("click", function(){
    headerHtml.classList.toggle(("nav-open"));
});


//SCROLL  TO SECTIONS
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function(link){
    link.addEventListener("click", function(e){
        e.preventDefault();
        const href = link.getAttribute("href");
        //SCROLL TO TOP
        if (href == '#')
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        //SCROLL TO SECTIONS
        if (href !== "#" && href.startsWith("#")) {
            const sectionHtml = document.querySelector(href);
            sectionHtml.scrollIntoView({behavior: "smooth"})
        };
        //CLOSE MOBILE NAVIGATION
        if (link.classList.contains("nav-link"))
            headerHtml.classList.toggle(("nav-open"));
    });
});

//STICKY NAVIGATIONS
const sectionHeroHtml = document.querySelector(".section-hero");
const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);

        if (ent.isIntersecting == false) {
            document.body.classList.add("sticky");
        }
        if (ent.isIntersecting == true) {
            document.body.classList.remove("sticky");
        }
    },
    {
        // In the viewport
        root: null,
        threshold: 0,
        rootMargin: "-70px",
    }
);
obs.observe(sectionHeroHtml);

// Fixing flexbox gap property missing in some Safari versions
// function checkFlexGap() {
//     var flex = document.createElement("div");
//     flex.style.display = "flex";
//     flex.style.flexDirection = "column";
//     flex.style.rowGap = "1px";
  
//     flex.appendChild(document.createElement("div"));
//     flex.appendChild(document.createElement("div"));
  
//     document.body.appendChild(flex);
//     var isSupported = flex.scrollHeight === 1;
//     flex.parentNode.removeChild(flex);
//     console.log(isSupported);
  
//     if (!isSupported) document.body.classList.add("no-flexbox-gap");
//   }
// checkFlexGap();