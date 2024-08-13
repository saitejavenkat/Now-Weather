import linkedin_image from "./linkedin_image.png";
function Contact({year})
{
  return(
    <footer>
    <p>All rights are reserved || &copy;2024 || <i> Saiteja</i>
    </p>
    
    <a href="https://www.linkedin.com/in/sai-teja-venkata-vinay-adapa/" target="_blank" rel="noreferrer">
            <sub><img src={linkedin_image} alt="Linkedin Logo"/></sub></a>
           
        
</footer>
  )
}

export default Contact;