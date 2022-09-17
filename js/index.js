
let meg = document.querySelector("#meg");
let template = document.createElement('template');
template.innerHTML = `<div class="sender"><header class="head">
<div class="first_head">
   <div class="first_span">
      <span><img src="images/Mask Group 22.png" alt="">Mr. Parvindar(परविन्दर)</span>
   </div>
   <div class="second_span">
   <a style="text-decoration:none;" target="_blank" href="https://api.whatsapp.com/send/?phone=+919015608586&amp;text= hi"><span><img src="images/Mask Group 5.png" alt="">+91 9015608586</span></a> 
     <a style="text-decoration:none;"  href="tel:+919818411586"><span><img src="images/Mask Group 5.png" alt="">+91 9818411586</span></a>
   </div>
</div>
</header>
<nav class="navbar second">
    <div class="first_nav">
       <img src="images/icon.png" alt="nothing">
    </div>
    <div class="second_nav">
      <button style=" padding: 5px 20px; background-color: hotpink; border: none; outline: none; border-radius: 5px; color: #FFFFFF;" class="burger">Menu</button>
      <!-- <p style="color: hotpink; font-weight:bold; text-transform: capitalize; padding: 0; margin: 0;" id="men">menu</p> -->
       <ul class="fing v-class-resp">
          <li ><a  href="index.html">Home</a></li>
          <li ><a  href="about.html">About Us</a></li>
          <li ><a  href="weddingPlaner.html">Wedding Planner</a></li>
          <li ><a  href="services.html">Services</a></li>
          <li ><a  href="Gallary.html">Gallery</a></li>
          <li ><a href="contact.html">Contact Us</a></li>
       </ul>
    </div>
 </nav>
</div>
`;
 meg.appendChild(template.content);

 


