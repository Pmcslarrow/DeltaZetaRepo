import './index.css'

/* Returns the navigation bar */
function NavBar() {
    return (
        <div className="nav-bar fade-in">
        <img src="/images/SigmaChi-ExpectMore-1024x342.png" alt="Sigma Chi Logo" id="sigmaChiLogoImage" />
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/calendar">Calendar</a>
          <a href="/dashboard">Dashboard</a>
        </div>
      </div>
    );
}

function FriendshipJusticeLearning()
{
    return (
        <div className='container'>
            <div id='section1'>
                <u><a href="https://sigmachi.org/home/what-is-sigma-chi/timeless-principles/" target="_blank">Friendship</a></u>
            </div>
            <div id='section2'>
                <u><a href="https://sigmachi.org/home/what-is-sigma-chi/timeless-principles/" target="_blank">Justice</a></u>
            </div>
            <div id='section3'>
                <u><a href="https://sigmachi.org/home/what-is-sigma-chi/timeless-principles/" target="_blank">Learning</a></u>
            </div>
        </div>
    )
}


function ValueSection () {

    // Shows the text message for each value when it is hovered over!
    function handleOver(event)
    {
        let id = event.target.id;
        let paragraph = document.getElementById("valueParagraph")
        
        switch(id)
        {
            case 'courage':
                paragraph.innerHTML = `
                A commitment to living a values-based life requires courage…one of our seven core values. These seven values are the non-negotiable principles that define our organization. <br><br>
                Defining Courage: Being willing to stand up for what you believe in, accepting the consequences of difficult choices and decisions.” <br><br>
                We attribute courage with Founder Benjamin Piatt Runkle, MIAMI (OHIO) 1857. At the 1895 Grand Chapter, Brother Runkle said, “By courage I do not mean the savage animal instinct that makes a man insensible to danger — a bulldog has that — but I mean that strong conviction, which keeps ever before the mind the true aim of life, and unswerving loyalty to that conviction.”
                He goes on further by saying, “…A man is not strong because of what he knows, or thinks, or says, or does, but because of what he is…`
                break;
            case 'wisdom':
                paragraph.innerHTML =  `
                Defining Wisdom: “Seeking knowledge, understanding what is learned, and then applying these lessons to life’s situations and circumstances.”
                <br><br>
                Knowledge is the accumulation of facts and information. Wisdom is the synthesis of knowledge and experiences into insights that deepen one’s understanding of relationships and the meaning of life. In other words, knowledge is a tool, and wisdom is the craft in which the tool is used.
                <br><br>
                We attribute wisdom with Founder Thomas Cowan Bell, MIAMI (OHIO) 1857. Brother Charles Townsend, in charge of erecting the monument for Founder Bell, stated “Thomas Cowan Bell early displayed an ardent love for the acquisition of knowledge and demonstrated those scholarly tastes which, coupled with a genial disposition, distinguished his later life.”
                `
                break;
            case 'integrity':
                paragraph.innerHTML = 
                `
                The single most important value you could ever develop is integrity. By making a commitment to a life of integrity, you will be doing more to ensure your success and happiness than any other choice you will ever make. As you act with integrity, every part of your life will improve. You will attract the best people and situations into your life. Your career will flourish.
                <br><br>
                Defining Integrity: “Being truthful, just and having a high sense of honor in all areas of life, regardless of the presence or absence of others.”
                <br><br>
                We attribute integrity with Founder William Lewis Lockwood, MIAMI (OHIO) 1858.
                `
                break;
            case 'highAmbition':
                paragraph.innerHTML = 
                `
                Few leaders become successful by accepting the status quo. Ambition directs leaders to aspire for something better, to reach beyond their grasp.
                <br><br>
                Defining High Ambition: “Exhibiting energy and motivation in every task, every day. Aspiring for something better, and reaching beyond your grasp.”
                <br><br>
                We attribute high ambition with Founder Isaac M. Jordan, MIAMI (OHIO) 1857. "...He did everything with the same tremendous energy that he displayed when, during the siege of Cincinnati, I took him out of the trenches and put him on my staff. He showed that he would have made a splendid soldier, for he had all the qualities of a splendid man.”
                `
                break;
            case 'selfControl':
                paragraph.innerHTML = 
                `
                Self-control means more than simply “temperance.” Rather, self-control suggests disciplining one’s mental, physical and emotional state.
                <br><br>
                Defining Self-Control: ‘Being pure and noble in thoughts and actions, and being able to approach life’s circumstances and temptations with restraint.”
                <br><br>
                Founder Daniel William Cooper, MIAMI (OHIO) 1857, was a man you could trust. His life is a testament to the virtue of self-control. In creating our badge with Founder Benjamin Piatt Runkle, MIAMI (OHIO) 1857, he said, “By our Ritual we must avoid the danger that may come by believing that one could conquer by just wearing an emblem to parade virtues that are not within the heart.”
                `
                break;
            case 'courtesy':
                paragraph.innerHTML =
                `
                Defining Courtesy: “Showing politeness and manners in one’s attitude and behavior toward others — being respectful in nature and loyal in friendship.”
                <br><br>
                Courtesy directs a leader to remember that he leads people, not objects. As such, a good leader seeks to understand the needs and motivations of those he leads and treats them with courtesy and respect.
                <br><br>
                We attribute courtesy with Founder Franklin Howard Scobey, MIAMI (OHIO) 1858. Founder Benjamin Piatt Runkle, MIAMI (OHIO) 1857, spoke highly of Franklin Howard Scobey and wrote: “Frank Scobey, boy and man, was one of those whom everybody wanted everywhere at the same time. Of all those that I have ever been closely associated with, he was the brightest, the most cheerful, the sunniest. Do not understand that he was lacking in the strong qualities of manhood because he was loving and cheery.
                `
                break;
            case 'fidelity':
                paragraph.innerHTML = 
                `
                Fidelity, allegiance, fealty, loyalty, devotion are all words used to mean faithfulness to something to which one is bound by pledge or duty. In Sigma Chi, we define the value of Fidelity in the following way.
                <br><br>
                Defining Fidelity: “Remaining true to principle, loyal and faithful to a higher power, whether it be a chapter, state, nation or supreme being.”
                <br><br>
                We attribute fidelity with Founder James Parks Caldwell, MIAMI (OHIO) 1857. During the dedication of Founder Caldwell’s monument, Bolan Turner, Executive Secretary of the Founders’ Monument Commission said: “Thus, it was that my thoughts turned to James Parks Caldwell, the life he lived, the example or pattern he left for us all. A man of ideals, who in his life displayed that fidelity to principle to the extent of offering to sacrifice his all for it. A man who illustrated early in his life that the ideals which form the foundation of Sigma Chi are even stronger than the jealousies and bitterness which were sufficient to cast our United States into one of the bloodiest civil wars in the history of the world.
                `
                break;
            default:
                paragraph.innerHTML = ""
        }
    }
    return (
    <div className='valueContainer'>      
        <div id="valueSection" className='valueSectionClass'>
        
            <ul>
                <li id='courage'       onMouseOver={(event) => handleOver(event)}>Courage</li>
                <li id='wisdom'        onMouseOver={(event) => handleOver(event)}>Wisdom</li>
                <li id='integrity'     onMouseOver={(event) => handleOver(event)}>Integrity</li>
                <li id='highAmbition'  onMouseOver={(event) => handleOver(event)}>High Ambition</li>
                <li id='selfControl'   onMouseOver={(event) => handleOver(event)}>Self Control</li>
                <li id='courtesy'      onMouseOver={(event) => handleOver(event)}>Courtesy</li>
                <li id='fidelity'      onMouseOver={(event) => handleOver(event)}>Fidelity</li>
            </ul>

            <p id='valueParagraph'></p>

        </div>
    </div>
    )
}


function FooterSection()
{
    return (
        <footer className="footer">
            <div className="footerContainer">
            <div className="row">
                <div className="footer-col">
                <h4>Contact</h4>
                <ul>
                    <li><a href="#">Form</a></li>
                </ul>
                </div>

                <div className="footer-col">
                <h4>Pages</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/calendar">Calendar</a></li>
                    <li><a href="/dashboard">Dashboard</a></li>
                </ul>
                </div>

                <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                    <a href="#"><i>Insta</i></a>
                    <a href="#"><i>Twitter</i></a>
                    <a href="#"><i>MySpace</i></a>
                    <a href="#"><i>Etc..</i></a>
                </div>
                </div>
            </div>
            </div>
        </footer>
    );

}

function Homepage()
{

    // Will update the events that occur based on where the user is on the screen
    window.addEventListener("scroll", (event) => {
        let y = window.pageYOffset;
        if (y >= 150)
        {
            var elements = document.querySelectorAll('.container div');
            elements.forEach(el => {
                if (el.id === 'section1')
                {
                    el.className="left slide-left"
                }
                if (el.id === 'section2')
                {
                    el.className="middle slide-middle"
                }
                if(el.id ==='section3')
                {
                    el.className="right slide-right"
                }
                el.style.cssText = " visibility: visible;"
            })
        }

        if (y >= 1500)
        {
            var elements = document.querySelectorAll('.valueSectionClass ul li');
            elements.forEach(el => el.style.cssText = "animation-name: animateIn; animation-duration: 350ms; animation-delay: calc(var(--animation-order) * 100ms); animation-fill-mode: both; animation-timing-function: ease-in-out; visibility: visible;")
        }
    })

    
    /* Returns the layout of the homepage */
    return (
        <>
            <NavBar/>
                <div className='parallax_1'></div>
            <FriendshipJusticeLearning/>
                <div className='parallax_2'></div>   
            <ValueSection/>
                <div className='parallax_3'></div>
            <FooterSection/>
        </>
    )
}

export default Homepage