// -----------------------------------------------------about me section----------------------------

var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");

        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }

            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }

            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab")
        }

// ----------------------------------------contact me section---------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbwTWQmzFbZSYJKfoNe1HoGjRsbqrQlmUzMpgcoNqaHMoMKEs1RkCEl84WvUQQ-hQjpE/exec'
    const form = document.forms['submit-to-google-sheet']
    const msg = document.getElementById("msg")

    form.addEventListener('submit', e => {
      e.preventDefault()
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {msg.innerHTML = "Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML = ""
        },3000)
        form.reset()
        })
        .catch(error => console.error('Error!', error.message))
    })

// -----------------------------------sidemenu for small device--------------------------

var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0"
        }
        function closemenu(){
            sidemenu.style.right = "-200px"
        }

// --------------------------------------------parallax effect on header-------------------------

const parallax = document.getElementById("header");

    window.addEventListener("scroll", function()
    {
        let offset = window.pageYOffset;
        parallax.style.backgroundPositionY = offset 
        * 0.7 + "px";
    })
