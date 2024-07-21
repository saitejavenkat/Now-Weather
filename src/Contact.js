import linkedin_image from "./linkedin_image.png";
function Contact({year})
{
  return(
    <footer>
    <p>All rights are reserved || &copy;{year} || <i> Saiteja</i>
    </p>
    
    <a href="https://www.linkedin.com/in/sai-teja-venkata-vinay-adapa/" target="_blank">
            <sub><img src={linkedin_image}/></sub></a>
           
        
</footer>
  )
}

export default Contact;