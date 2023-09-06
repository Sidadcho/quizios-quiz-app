const homePageFunc = document.querySelector('.home')
const aboutPageFunc = document.querySelector('.about')
const contactPageFunc = document.querySelector('.contact')



const homePage = document.querySelector('.homePage');
const aboutPage = document.querySelector('.aboutPage');
const contactPage = document.querySelector('.contactPage');

homePage.classList.add('active');
aboutPageFunc.classList.add('hidden');
contactPageFunc.classList.add('hidden');

function showHome() {
    homePage.classList.add('active');
    aboutPage.classList.remove('active');
    contactPage.classList.remove('active');

    homePageFunc.classList.remove('hidden');
    aboutPageFunc.classList.remove('show');
    contactPageFunc.classList.remove('show');


    homePageFunc.classList.add('show');
    aboutPageFunc.classList.add('hidden');
    contactPageFunc.classList.add('hidden');


}
function showAbout() {
    aboutPage.classList.add('active');
    homePage.classList.remove('active');
    contactPage.classList.remove('active');


    homePageFunc.classList.remove('show');
    aboutPageFunc.classList.remove('hidden');
    contactPageFunc.classList.remove('show');


    aboutPageFunc.classList.add('show');
    homePageFunc.classList.add('hidden');
    contactPageFunc.classList.add('hidden');

}

function showContact() {
    contactPage.classList.add('active');
    aboutPage.classList.remove('active');
    homePage.classList.remove('active');

    homePageFunc.classList.remove('show');
    aboutPageFunc.classList.remove('show');
    contactPageFunc.classList.remove('hidden');

    contactPageFunc.classList.add('show');
    aboutPageFunc.classList.add('hidden');
    homePageFunc.classList.add('hidden');
}




// const route = (event) => {
//     event = event || window.event;
//     window.history.pushState({}, '', event.target.href);
//     event.preventDefault();


// };


// window.route = route;